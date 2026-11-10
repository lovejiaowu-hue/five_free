# GitHub Actions 免费额度耗尽：CI 降耗与安全回退经验包

> v0.1 · 2026-11-10 · 适用于产品负责人 × AI 协作研发、小型私有仓库。  
> **通用经验，不是任何项目“已通过 CI / 已上线”的证据。** 本文不包含私有项目标识、真实账单、服务器配置、客户和患者信息。

## 1. 首先识别：账户限制，还是测试失败？

当 Actions Workflow 在几秒内显示红叉，不要立即修复 PHP / Python 业务代码。按顺序核对：

1. **Actions → Workflow → Summary → Annotations**：若出现 \`The job was not started because recent account payments have failed or your spending limit needs to be increased.\`，说明作业未启动，可能是付款异常或支出限制；两种原因仍需账单页面区分。
2. **Settings → Billing and licensing → Overview / Usage / Budgets and alerts**：查看当前包含的计算额度、已使用量、预算上限及额外计费。免费计算额度耗尽不自动等于账户欠款。
3. **Job → Steps**：如果没有分配 Runner 且 \`steps=[]\`，标记为“调度失败，测试 \`not_run\`”，而不是代码断言 \`failed\`。
4. **逐个核对 SHA**：一个旧 commit 的绿色 CI 不能代表新 commit 已通过。

| 独立状态 | 真实证据 | 不得推断 |
|---|---|---|
| 代码已提交 | PR、commit SHA | 代码可发布 |
| CI 实际执行 | Runner、Steps、测试日志 | Workflow 红叉表示断言失败 |
| CI 通过 | 对应 SHA 的 \`success\` | 以前绿色结果对新 SHA 有效 |
| PR 合并 | merged 标记、main SHA | closed 即 merged |
| 已部署 | 服务端实际 SHA、HTTP 检查 | CI 成功即上线 |
| 数据与人工验收 | 独立对账、备份恢复、权限核验与签收 | 首页打开即全部通过 |

## 2. 最常见的 Actions 浪费来源

- 两份 Workflow 对同一个 PR 重复安装依赖、数据库迁移、跑完整 PHPUnit。
- 同一个分支 \`push\` 与 \`pull_request\` 同时触发重复作业。
- PR 新提交到来后，旧提交的测试仍占用 Runner。
- 只改 README 或研发账本，也启动完整应用测试。
- \`main\` 上自动部署开关关闭，但 smoke/package 在 deploy 之前仍然运行。
- 没看账户额度就反复点击 \`Re-run jobs\`。

## 3. 可复用的降耗策略

### A. 只保留一套权威自动 PR 回归

选择一套完整 CI 作为门禁：锁定依赖、PHP 语法、SQLite 迁移、合成业务测试、权限/越权/CSRF/会话与私有资源负向测试。旧的 skeleton 检查和重复打包可保留手动 \`workflow_dispatch\`，用于故障诊断。

不能为了节省额度删除必要的安全测试。

### B. 精确触发，忽略无关文档

\`\`\`yaml
on:
  pull_request:
    paths:
      - 'app/**'
      - '!app/iterations/**'
      - '!app/**/*.md'
      - '.github/workflows/app-ci.yml'
  workflow_dispatch:
\`\`\`

路径只是示意，需要按仓库目录调整。**必须先核对 Branch protection / Required checks**：如果某项必需状态检查因路径过滤永远不触发，PR 可能永久 Pending。必要时保留一个轻量、始终运行的状态检查，不盲目修改规则。

### C. 取消同一 PR 的过时作业

\`\`\`yaml
concurrency:
  group: ${{ github.workflow }}-${{ github.event.pull_request.number || github.run_id }}
  cancel-in-progress: ${{ github.event_name == 'pull_request' }}
\`\`\`

只取消同一 PR 的旧检查，不取消正式发布或独立人工诊断。不同 Workflow 不要错误共用相同 concurrency group。

### D. 发布门禁必须放到耗时任务最前面

如果只给最后的 \`deploy\` 加 \`if\`，前面的 \`smoke/package\` 仍会消耗额度。示意：

\`\`\`yaml
jobs:
  smoke:
    if: >-
      github.ref == 'refs/heads/main' &&
      (
        github.event_name == 'workflow_dispatch' ||
        (github.event_name == 'push' && vars.APP_AUTO_DEPLOY == 'true')
      )
    runs-on: ubuntu-latest
    steps:
      - run: echo 'Replace with synthetic tests'

  package:
    needs: smoke
    runs-on: ubuntu-latest
    steps:
      - run: echo 'Replace with reviewed build and checksums'

  deploy:
    needs: package
    if: >-
      github.ref == 'refs/heads/main' &&
      (github.event_name == 'workflow_dispatch' ||
      (github.event_name == 'push' && vars.APP_AUTO_DEPLOY == 'true'))
    runs-on: ubuntu-latest
    steps:
      - run: echo 'Placeholder; use approved deployment gate'
\`\`\`

正式发布仍要保留：主分支 SHA 锁定、受限发布账号、环境审批、包哈希校验、HTTPS 检查、健康失败时受控回滚。上述代码不包含完整安全发布实现。

## 4. 没有额外 CI 设备时怎么办？

**优先采用 GitHub 代码审核 + PR 降耗 + 等待额度恢复**；继续编写代码和离线静态检查，保留待执行测试清单。未实际运行的 CI 只能写 \`not_run\`，不可声称通过，也不应跳过安全门禁发布。

| 选择 | 优势 | 边界 |
|---|---|---|
| 自动 PR 去重、任务合并、按需发布 | 无新增设备、减少额度浪费 | 不会创造额外免费分钟 |
| 等待额度重置 | 不产生额外托管计算支出 | 当前无法完成被阻断的 CI |
| 经批准设置小额付费预算 | 可应急恢复托管测试 | 必须设定费用上限 |
| 独立自托管 Runner | 减少对托管计算额度的依赖 | 需要隔离设备、运维与权限控制 |
| Webhook + 独立 CI | 降低对 Actions 调度的依赖 | 仍需可信的独立计算节点 |

**不要把共享生产主机直接当成运行不可信 PR 的自托管 Runner。** 依赖安装和 PR 代码可能接触生产网络、文件系统和凭据；“没有多买一台机器”不是跳过隔离的理由。

## 5. 实施流程与验收

1. 保存**脱敏** Annotation、Job/Step、commit SHA 和账单问题类别；真实账单与密钥不进 GitHub。
2. 绘制现有 Workflow 的触发矩阵，找出重复 \`push/PR\`、测试、打包和无发布许可的执行。
3. 单独建 Draft PR，集中修改触发、concurrency、手动模式和最前面的发布条件；**不同时重构业务代码、生产脚本**。
4. 在本地做结构检查，记录为 \`static_checked\`，**不是**真实 GitHub CI 通过。
5. 额度恢复后运行合成 CI，核实 Required checks、同 PR 过时作业取消、文档-only 不触发昂贵任务、开关关闭不空跑发布。
6. 审查新 SHA 实际 CI、审核 PR 并合并。发布、数据库迁移、真实数据导入、备份恢复和人工验收必须分别留证据。

**发布前核对：**

- [ ] 自动 PHP/SQLite PR 回归只有一套权威入口
- [ ] Required checks 不因路径过滤永久 Pending
- [ ] 正式发布入口、main 限制、checksum、健康检查与回滚未删
- [ ] PR 的真实 CI 在目标 SHA 执行且通过
- [ ] 未验证版本没有被视为已发布
- [ ] 生产主机不运行未授权 PR，不含真实客户/患者资料

## 6. 知识治理与维护

**公开知识库存通用方法；私有项目存 Issue、PR、CI Run、账单依据、部署和安全实证。** 公共经验不得链接私有仓库或复制真实客户/患者资料、账号密码、生产域名、IP、授权码、服务日志。

GitHub 的 Actions 计费政策可能变化，不能把个人账户某月免费额度或自托管费用规则当成永久保证。实际操作前核对 [GitHub Actions 计费文档](https://docs.github.com/en/billing/managing-billing-for-your-products/managing-billing-for-github-actions/about-billing-for-github-actions) 与 [工作流语法](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax)。

> **关键结论**：账户额度导致作业没启动，不是业务代码已失败；降低 CI 成本，不等于放宽测试、安全与上线验收。
