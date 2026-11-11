# GitHub Desktop “Changes 2” 反复出现：BAT 行尾属性冲突

> v1.0 · 2026-11 · 面向零代码产品经理、Agent 与 GitHub Desktop 协作。  
> **脱敏通用经验**：只使用 `launch.bat` / `package.bat` 等虚构示例；不含真实业务仓库名、私有项目 URL、数据库、账号、原始脚本内容或提交记录。**本方法只适用于经排查确认的行尾问题**。

## 现象

用户从未编辑任何文件，刚克隆仓库便显示 Changes 2；两份 `.bat` 显示整份红色差异；Discard、重新 Clone 后再次出现，Pull 因本地修改而被阻止。

这并不自动意味着文件已空，也不能认定用户误操作；Git diff 的展示和磁盘文件真实字节是两个不同证据。

## 根因（具体条件）

`.gitattributes` 中有 `*.bat text eol=crlf`，默认语义是 Git 对 BAT 文本进行 LF 规范化、在 Windows 工作区还原 CRLF。但 Git blob 可能通过特殊方式直接存入**原始 CRLF 字节**。当 clean 规则处理工作区文件后，其内容与原始 blob 不一致，Git 就会把刚检出的文件视为已变更。

新 Clone 仍脏是重要线索；还要检查编辑器格式化器、杀软、生成器、自定义 filter、`core.autocrlf`，不能先验归因。

## 角色分工

| 产品经理（GUI） | Agent（受控测试环境） |
|---|---|
| 保存 Changes、分支、报错截图 | 复现新 checkout 即脏，并保存证据 |
| 不提交所谓“假修改” | 读取 blob 原始字节、.gitattributes 与行尾 |
| 确认本地 data/上传文件需要保留 | 在独立分支提出最小修复并编写回归检查 |
| 切到修复后 PR，验 Changes 0 | 验证多种 Windows Git 设置、脚本实际运行 |
| 负责产品体验和合并审批 | 交付 PR、测试结果与风险，不擅自合 main |

## Agent 检查命令（不要让无开发经验的产品经理执行）

```bash
git status --porcelain
git diff --numstat
git ls-files --eol
git check-attr -a -- launch.bat package.bat
git show HEAD:launch.bat
```

应额外读取 Git 对象和磁盘的真实字节，统计 CRLF 和裸 LF，并核对 `core.autocrlf` / 自定义 filters。

## 按实际历史选择修复方案

1. **正常 LF blob**：继续用 `*.bat text eol=crlf`，这符合常规 Git 文本行尾处理。
2. **原始 CRLF blob 且必须保留字节**：可采用 `*.bat -text diff`，避免自动换行转换，保留文本 diff 体验。
3. **希望长期统一 Git 对象**：独立评估批量规范化迁移；需要对代码、脚本、跨平台运行与差异范围做完整验收，不能盲目 `git add --renormalize .`。

要实际测试全新 clone/checkout、`git status` 无修改、BAT 执行和打包正确、远端 Pull 不受阻。**切勿把 `-text` 当作适用所有仓库的规则。**

## 复盘要点

- 错误：重复让产品经理删除目录，或者把全红 diff 判定为源文件已清空。
- 正确：同类异常反复出现时，及时升级到 Git 工程侧调查，再通过 PR 一次性修复源头。
- 数据安全：任何清除/重克隆前都必须确认是否有未提交文件、客户资料、SQLite 数据库、环境密钥或本地记录需要备份。
- 本经验解释 Git 行尾异常，**不代表其它业务上传、报表、网络错误由 CRLF 引起**。

网站阅读：[GitHub 中文手册第 27 章](https://lovejiaowu-hue.github.io/five_free/#/27)。
