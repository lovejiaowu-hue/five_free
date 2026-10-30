# GitHub 中文使用手册 · 产品经理 × AI 协作版

响应式 H5 学习网站，保留 2026-10-30 原版完整中英对照 Markdown（23 章），适合零编程基础产品经理、Discuz 站长与 AI 编程协作。

## 在线网址（Pages 激活部署后）
https://lovejiaowu-hue.github.io/five_free/

## 目录
- index.html：静态 HTML 入口
- assets/css/site.css：组件化响应式样式
- assets/js/site.js：章节导航、搜索、主题、学习进度、原生 Markdown 渲染、图解
- assets/js/manual.js：23 章完整手册数据
- assets/icons/lucide：官方 Lucide SVG 图标和 ISC License
- docs/GitHub_中文使用手册_2026-10.md：原始手册
- docs/ai-collaboration/AGENT_SVG_ICON_GUIDE.md：图标规范
- scripts/check-site.mjs：语法及资产检查
- .github/workflows/deploy-pages.yml：Pages 自动部署

## 使用
直接打开 index.html，无需 Node/npm/Vite，不依赖外部字体或图标 CDN。Ctrl+K 或 / 打开搜索，进度储存在浏览器 localStorage。

## GitHub Pages 首次配置
1. 访问 https://github.com/lovejiaowu-hue/five_free/settings/pages
2. 在 Build and deployment → Source 中选择 GitHub Actions。
3. 打开 Actions → Deploy GitHub Manual Site，检查状态，必要时手动 Run workflow。
4. 部署 Success 后实际访问 https://lovejiaowu-hue.github.io/five_free/ 。

仅提交工作流不能保证首次启用 Pages；通常需要仓库管理员配置。GITHUB_TOKEN 不具备自动开启 Pages 站点所需的额外管理权限。

## 图标许可
常规 UI 图标全部使用 Lucide 官方 SVG 文件；ISC License 位于 assets/icons/lucide/LICENSE。规范见 docs/ai-collaboration/AGENT_SVG_ICON_GUIDE.md。

## 内容来源
2026-10-30 原版中文教程，非 GitHub 官方文档。部分界面和账户功能会随版本、权限与订阅方案变化。

更新原版 Markdown 时，必须同步生成 assets/js/manual.js，以保持网站手册与源文档一致。
