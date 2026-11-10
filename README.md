# GitHub 中文使用手册 · 产品经理 × AI 协作版

响应式 H5 学习网站，保留 2026-10-30 原版 23 章及第 24 章「AI 协同研发实战」，并在 2026-11 新增第 25 章「Actions 额度耗尽过渡方案」、第 26 章「GitHub Desktop 界面识读与本地验收」。适合零编程基础产品经理与 AI 编程协作。

## 在线网址
https://lovejiaowu-hue.github.io/five_free/

## 2026-11 新增：GitHub Desktop 零代码产品经理操作课

网站入口：**[第 26 章｜GitHub Desktop 界面识读 · main 同步 · Agent 协作](https://lovejiaowu-hue.github.io/five_free/#/26)**。

- 中英对照解释 Current repository / Current branch / Fetch origin / Pull origin / Changes / History / Other branches / Draft PR。
- 明确日常只同步 main；其他分支与 PR、CI、Release、部署运维交给 Agent。
- 提供四步 Fetch → Pull → History / Explorer → 本地验收操作 SOP，以及误判与风险提醒。
- 直接接入站点 PC/H5 的首页知识卡、侧边目录、右侧导航、搜索与阅读进度。
- 保留已有 210 张抽卡、全部旧章节与本地学习记录键；此次不修改 GitHub Actions 配置。

## 2026-11 新增：GitHub Actions 免费额度用完的过渡方案

网站入口：**[第 25 章｜Actions 免费额度耗尽：Agent 自测 → PR → 本地验收](https://lovejiaowu-hue.github.io/five_free/#/25)**。

- 在不购买额外 Actions 额度的情况下，保留 ChatGPT/Codex 开发、GitHub PR/合并、GitHub Desktop 同步 main 和本地人工验收。
- Agent 提交 PR 前完成真实测试，逐项给出 PASS / FAIL / NOT_RUN、执行命令、环境、HEAD SHA、风险和启动指南；关键测试未完成则保持 Draft / Blocked。
- 检查账单/预算、停用非必要 Actions、核对 Required checks 及 Pages 独立部署风险；不要将「PR 合并」或「Agent 自测」写成「CI/线上发布成功」。
- 免费额度恢复时再逐步重启必要 CI。本轮仅增加教材内容，不自动改动 Actions 计费、仓库工作流和分支保护设置。
- **本站本身由 Actions 发布 Pages**：若本仓库部署工作流因额度受限，main 的代码更新不会自动等于线上站点更新，须另行核实站点实际版本。

## 2026-11 增补：零编程产品经理 × AI Agent × GitHub 工程实践

打开 **[第 24 章｜AI 协作编程实战](https://lovejiaowu-hue.github.io/five_free/#/24)**：基于不对应任何具体项目的合成业务场景讲解 GitHub 高阶术语、工作流和常见错误，不含真实用户资料、业务原件、生产数据库、私有仓库地址或凭据。

覆盖从 Issue/PR/Commit SHA、main 与并行分支、CI/Actions、Test/Assertion、Job/Step/Logs、Required checks 到 CD/部署 SHA/数据库迁移、备份恢复、人工验收与 AI 交接。针对「CI 绿不等于上线」「PR 关闭不等于合并」「Completed 不等于 Success」「Runner 不等于生产服务器」等常见误解提供核验方法。

**第 24 章是新增内容；原版前 23 章的知识结构保留，但真实项目示例统一改为匿名示例。** 同步将 81 个新术语添加到抽卡中，原词卡 ID 和浏览器学习记录键保持不变。

## CI 免费额度降耗经验包

- [GitHub Actions 免费额度耗尽：CI 降耗与安全回退经验包](docs/ai-collaboration/GITHUB_ACTIONS_FREE_QUOTA_CI_PLAYBOOK.md)：面向产品经理与 AI 协同研发的通用排障、去重、受控发布和无独立测试设备时的安全实践。此经验包不含私有项目运行资料，工程实施状态应由各项目自行核验。

## 公开内容脱敏规则

本网站是公开的 GitHub 学习资料，不应出现任何真实私有项目名称、仓库路径、专用启动脚本、私有域名、客户信息、真实业务数据或可反向识别项目的案例细节。教学用仓库名、网站 URL 和文件名必须为明显的占位符，真实案例改写为通用虚构场景。

网站的源 Markdown 和 `assets/js/manual.js` 必须完全一致。添加案例前先检查所有公开文档和词卡的敏感信息；`scripts/check-site.mjs` 已增加外部链接和示例脚本的脱敏门禁。

**边界：** 改写当前 `main` 的文件不等于清除 Git 的历史提交、旧 PR 讨论或已发布的历史版本。涉及历史记录清理时需另行评估，不得擅自 force push 改写仓库历史。

## 阅读与抽卡体验 V3（2026-11）

**坚持内容、视觉和 UI 体系不变**：沿用原深绿/青色配色、Lucide SVG、PC/H5 布局，源 Markdown、网站手册镜像、210 张词卡及其 ID 均不修改。

- 正文字号默认 18px，可按 A− / A＋ 在 16–22px 调整，阅读偏好单独保存在本机 `five-guide-reading-v3`，不影响原学习记录。
- 手册里自动识别中英术语表，支持原表格与逐条卡片模式切换、复制英文术语；阅读进度随章节滚动显示。
- 英语卡片保持现有分类、操作方式和学习记录：实际 3D 翻面不重绘整个页面；同一个原例句以英文及中文两行呈现，场景更易理解。
- 已掌握、待复习、收藏、原始 210 张词卡 ID 与 `five-github-words-v1` 存储保持兼容。
- 所有视觉增强仅在 `assets/css/experience-v3.css` 作为最后加载的局部覆盖层实现；交互增强为 `assets/js/reading-v3.js` 和原抽卡模块的少量修改。
- 自动回归：`node scripts/test-experience-v3.mjs`；验收清单见 `docs/READING_FLASHCARDS_EXPERIENCE_V3.md`。

## GitHub 英语抽卡

体验入口：https://lovejiaowu-hue.github.io/five_free/#/words

- 210 张英汉对照卡片（原有 129 + 新增 81），按 7 类 GitHub 常见工作场景归类
- 点击翻卡查看答案，支持英→中／中→英两种学习方向
- 随机抽卡、上一张／下一张、浏览器英文朗读
- 逐词标记待复习、已掌握、收藏；筛选后进行针对性抽卡
- 可搜索全部术语（英文／中文／解释／使用场景），并跳转原手册章节
- 学习记录只储存在当前设备浏览器 localStorage，换设备不自动同步
- 空格翻面、左右方向键切换、数字键 1 待复习／2 已掌握

## PC / H5 自适应 V2.0（2026-11）
- 统一站点、统一手册与词库：保留现有 26 章、210 张词卡、Hash 路由、本机学习记录和 GitHub Pages 发布地址。
- 新增 `assets/css/responsive-v2.css`，由桌面宽度实现独立布局，不复制 HTML 页面和 JS 数据。
- PC 首页：双栏学习 Dashboard，加入阅读进度、继续阅读、抽卡训练、AI 协作学习入口。
- PC 阅读：宽内容区、更舒适的排版、自动适应中等屏宽的目录与表格。
- PC 抽卡：主题、学习统计和进度整合进左侧学习侧栏；卡片、筛选及操作放右侧。
- H5：单列布局、折叠菜单和触摸翻卡保留，学习记录键不变。
- 视口策略：手机 ≤760px、平板 761–1199px、PC 1200–1499px、大屏 ≥1500px、超宽 ≥1800px。
- 快速质量门禁：`node scripts/check-site.mjs && node scripts/test-flashcards.mjs && node scripts/test-responsive-v2.mjs`。
- 详细验收清单：`docs/PC_H5_RESPONSIVE_V2_ACCEPTANCE.md`。

## 目录
- index.html：静态 HTML 入口
- assets/css/site.css：组件化响应式样式
- assets/js/site.js：章节导航、搜索、主题、学习进度、原生 Markdown 渲染、图解
- assets/js/manual.js：26 章完整手册数据，由 Markdown 源文件同步生成
- assets/js/vocabulary.js：210 张 GitHub 术语卡的英汉释义与实践场景例子
- assets/js/flashcards.js：抽卡、翻面、朗读、标记与进度模块
- assets/css/flashcards.css：抽卡学习页的组件样式
- assets/css/responsive-v2.css：PC/平板/H5 专属布局与阅读增强
- scripts/test-responsive-v2.mjs：断点、PC 首页 DOM 和兼容性自动检查
- scripts/test-flashcards.mjs：抽卡功能无依赖运行测试
- assets/icons/lucide：官方 Lucide SVG 图标和 ISC License
- docs/GitHub_中文使用手册_2026-10.md：原始 23 章完整保留 + 2026-11 新增第 24、25、26 章
- docs/ai-collaboration/AGENT_SVG_ICON_GUIDE.md：图标规范
- scripts/check-site.mjs：目录、源 Markdown/网页镜像一致性、全部 210 词卡与图标资产检查
- .github/workflows/validate-manual.yml：PR 自动检查（不发布；额度受限时可能无法运行）
- .github/workflows/deploy-pages.yml：main 自动验证后发布 Pages

## 使用
直接打开 index.html，无需 Node/npm/Vite，不依赖外部字体或图标 CDN。Ctrl+K 或 / 打开搜索，进度储存在浏览器 localStorage。

## GitHub Pages 首次配置（首次使用时）
1. 访问 https://github.com/lovejiaowu-hue/five_free/settings/pages
2. 在 Build and deployment → Source 中选择 GitHub Actions。
3. 打开 Actions → Deploy GitHub Manual Site，检查状态，必要时手动 Run workflow。
4. 部署 Success 后实际访问 https://lovejiaowu-hue.github.io/five_free/ 。

仅提交工作流不能保证首次启用 Pages；通常需要仓库管理员配置。GITHUB_TOKEN 不具备自动开启 Pages 站点所需的额外管理权限。

## 图标许可
常规 UI 图标全部使用 Lucide 官方 SVG 文件；ISC License 位于 assets/icons/lucide/LICENSE。规范见 docs/ai-collaboration/AGENT_SVG_ICON_GUIDE.md。

## 内容来源
2026-10-30 原版中文教程，非 GitHub 官方文档。部分界面和账户功能会随版本、权限与订阅方案变化。

更新 Markdown 时，必须同步生成 assets/js/manual.js，以保持网站手册与源文档一致。PR 自动检查会拒绝源文档和网页镜像不一致的改动。

## 对产品负责人的重要提醒

GitHub 自动测试通过并不自动意味着生产站点已经更新、业务数据库已迁移、真实资料已导入或人工体验已经验收。修改生产环境和敏感数据前，应分别取得实际运行版本、权限、备份恢复和产品签收证据。
