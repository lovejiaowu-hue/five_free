# GitHub 中文使用手册 · 产品经理 × AI 协作版

响应式 H5 学习网站，完整保留 2026-10-30 原版 23 章，并在 2026-11 新增第 24 章「AI 协同研发实战」，适合零编程基础产品经理、Discuz 站长与 AI 编程协作。

## 在线网址
https://lovejiaowu-hue.github.io/five_free/

## 2026-11 增补：零编程产品经理 × AI Agent × GitHub 工程实践

打开 **[第 24 章｜AI 协作编程实战](https://lovejiaowu-hue.github.io/five_free/#/24)**：从去标识化家庭健康 App 研发实践抽取 GitHub 高阶术语、工作流和错误经验，不含患者身份、原件、生产数据库、私有仓库地址或凭据。

覆盖从 Issue/PR/Commit SHA、main 与并行分支、CI/Actions、Test/Assertion、Job/Step/Logs、Required checks 到 CD/部署 SHA/数据库迁移、备份恢复、人工验收与 AI 交接。针对「CI 绿不等于上线」「PR 关闭不等于合并」「Completed 不等于 Success」「Runner 不等于生产服务器」等常见误解提供核验方法。

**第 24 章是新增内容，原版前 23 章未删改。** 同步将 81 个新术语添加到抽卡中，原词卡 ID 和浏览器学习记录键保持不变。

## GitHub 英语抽卡

体验入口：https://lovejiaowu-hue.github.io/five_free/#/words

- 210 张英汉对照卡片（原有 129 + 新增 81），按 7 类 GitHub 常见工作场景归类
- 点击翻卡查看答案，支持英→中／中→英两种学习方向
- 随机抽卡、上一张／下一张、浏览器英文朗读
- 逐词标记待复习、已掌握、收藏；筛选后进行针对性抽卡
- 可搜索全部术语（英文／中文／解释／使用场景），并跳转原手册章节
- 学习记录只储存在当前设备浏览器 localStorage，换设备不自动同步
- 空格翻面、左右方向键切换、数字键 1 待复习／2 已掌握

## 目录
- index.html：静态 HTML 入口
- assets/css/site.css：组件化响应式样式
- assets/js/site.js：章节导航、搜索、主题、学习进度、原生 Markdown 渲染、图解
- assets/js/manual.js：24 章完整手册数据，由 Markdown 源文件同步生成
- assets/js/vocabulary.js：210 张 GitHub 术语卡的英汉释义与实践场景例子
- assets/js/flashcards.js：抽卡、翻面、朗读、标记与进度模块
- assets/css/flashcards.css：抽卡学习页的组件样式
- scripts/test-flashcards.mjs：抽卡功能无依赖运行测试
- assets/icons/lucide：官方 Lucide SVG 图标和 ISC License
- docs/GitHub_中文使用手册_2026-10.md：原始 23 章完整保留 + 2026-11 新增第 24 章
- docs/ai-collaboration/AGENT_SVG_ICON_GUIDE.md：图标规范
- scripts/check-site.mjs：目录、源 Markdown/网页镜像一致性、全部 210 词卡与图标资产检查
- .github/workflows/validate-manual.yml：PR 自动检查（不发布）
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
