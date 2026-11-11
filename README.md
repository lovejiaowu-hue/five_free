# five_free · GitHub 中文学习与人机协作实践

**网站为主，兼顾已授权、已脱敏的通用经验发布。** 本 Public 仓库不是私有项目草稿区，不存储内部源码、在职资产、医疗数据、密钥或真实项目识别资料。

**网站：** https://lovejiaowu-hue.github.io/five_free/  
**英语抽卡：** https://lovejiaowu-hue.github.io/five_free/#/words  
**当前内容：** 27 章中文手册、210 张中英术语卡（7 类）；原有 PC/H5、SVG、CSS/JS 和学习记录不变。

## 仓库导航

| 入口 | 内容 |
|---|---|
| [docs/](docs/) | 现有手册与操作文档 |
| [experience/](experience/) | 仅有权公开且已脱敏的成功/失败经验 |
| [governance/PUBLICATION.md](governance/PUBLICATION.md) | 公开准入、网站二次授权和隐私要求 |
| [governance/CASE_TEMPLATE.md](governance/CASE_TEMPLATE.md) | 匿名经验记录模板 |
| [governance/site-publications.json](governance/site-publications.json) | 经单独授权的 Pages 案例白名单（默认空） |
| [docs/archive/README_SITE_BEFORE_V1_2.md](docs/archive/README_SITE_BEFORE_V1_2.md) | 现有网站说明、版本记录归档 |

## 基础原则

1. `index.html` 与 `assets/` 原位保留；网站 UI、视觉资产、Hash 路由、27 章手册、210 张词卡及 localStorage 不因治理迁移或修改。
2. **经验必须在公开仓库之外完成权属判断、授权、脱敏和人工审核后，才允许提交这里的任何分支或 PR**。未审核资料继续放在合规私有仓库或本地环境。
3. 公开仓库收录经验，**不等于**授权其在 Pages 展示。只有在独立人工审查通过后，案例标记及 `site-publications.json` 双重放行，才可能生成网站案例页。
4. 自动化检测仅辅助发现敏感线索，不能证明法律授权、医疗合规或彻底匿名。授权证据留在受控私有位置。
5. GitHub Pages 只上传 `dist/` 中的允许文件，不再将整个仓库根目录打包；原网站 URL 保持不变。

## 开发与验收

```bash
node scripts/check-site.mjs
node scripts/check-public-experience.mjs
node scripts/test-flashcards.mjs
node scripts/test-responsive-v2.mjs
node scripts/test-experience-v3.mjs
node scripts/build-pages.mjs
node scripts/check-pages-bundle.mjs
node scripts/test-site-governance-v1.mjs
```

PC/H5 浏览器回归：`SITE_ROOT=dist node scripts/test-browser-layout-v3.mjs`（需要 Chrome）。构建产物 `dist/` 被 Git 忽略。仅文档经验变更可跳过耗时浏览器测试，网站代码/发布流程变化时强制执行。

源手册 `docs/GitHub_中文使用手册_2026-10.md` 与网页镜像 `assets/js/manual.js` 必须一致。Actions/PR 通过不等于网站已部署或人工验收。图标均使用本地 Lucide SVG 与许可证。本仓库非 GitHub 官方产品。
