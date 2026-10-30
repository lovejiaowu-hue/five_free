/* GitHub 高频术语词库 · 基于本仓库中文手册整理，适用于抽卡与词表。 */
window.GITHUB_VOCABULARY = {
  "version": "2026-10-30",
  "basis": "docs/GitHub_中文使用手册_2026-10.md",
  "groups": [
    {
      "id": "navigation",
      "name": "导航与仓库",
      "en": "NAVIGATION & REPOSITORIES",
      "description": "找入口、认识仓库、理解项目组织",
      "icon": "compass"
    },
    {
      "id": "version",
      "name": "代码与版本",
      "en": "CODE & VERSION CONTROL",
      "description": "识别分支、提交、同步及回退操作",
      "icon": "git-branch"
    },
    {
      "id": "collab",
      "name": "需求与协作",
      "en": "ISSUES & COLLABORATION",
      "description": "从需求工单到合并审批的协作英文",
      "icon": "git-pull-request"
    },
    {
      "id": "automation",
      "name": "自动化与发布",
      "en": "ACTIONS & DEPLOYMENT",
      "description": "读懂 CI、构建、发布和网站上线",
      "icon": "workflow"
    },
    {
      "id": "security",
      "name": "权限与安全",
      "en": "SETTINGS & SECURITY",
      "description": "掌握权限、敏感信息及高风险操作",
      "icon": "shield-check"
    },
    {
      "id": "states",
      "name": "状态与常见提示",
      "en": "STATUS & MESSAGES",
      "description": "读懂 GitHub 的检查结果和操作提示",
      "icon": "circle-check"
    }
  ],
  "items": [
    {
      "id": "repository",
      "en": "Repository",
      "zh": "仓库",
      "note": "存放一个项目的源码、文档及协作记录",
      "example": "Open a repository：打开某个项目仓库",
      "chapter": 1,
      "level": 1,
      "category": "navigation"
    },
    {
      "id": "repo",
      "en": "Repo",
      "zh": "仓库（简称）",
      "note": "Repository 的常见缩写，在页面和开发对话中频繁出现",
      "example": "Repo settings：仓库设置",
      "chapter": 1,
      "level": 1,
      "category": "navigation"
    },
    {
      "id": "home",
      "en": "Home",
      "zh": "首页",
      "note": "回到 GitHub 账号的首页工作台",
      "example": "Home：查看账号动态与快捷入口",
      "chapter": 2,
      "level": 1,
      "category": "navigation"
    },
    {
      "id": "feed",
      "en": "Feed",
      "zh": "动态信息流",
      "note": "展示关注的项目及开发者动态",
      "example": "Check your feed：查看关注动态",
      "chapter": 2,
      "level": 2,
      "category": "navigation"
    },
    {
      "id": "all-repositories",
      "en": "All repositories",
      "zh": "全部仓库",
      "note": "进入个人可访问仓库的列表",
      "example": "All repositories：查看你的项目总目录",
      "chapter": 2,
      "level": 1,
      "category": "navigation"
    },
    {
      "id": "new-repository",
      "en": "New repository",
      "zh": "新建仓库",
      "note": "创建一个全新 GitHub 项目",
      "example": "New repository：开始创建新项目",
      "chapter": 2,
      "level": 1,
      "category": "navigation"
    },
    {
      "id": "owner",
      "en": "Owner",
      "zh": "所有者",
      "note": "仓库或组织的拥有者",
      "example": "Repository owner：仓库所有者",
      "chapter": 3,
      "level": 2,
      "category": "navigation"
    },
    {
      "id": "public",
      "en": "Public",
      "zh": "公开",
      "note": "任何人都可以查看该仓库的公开内容",
      "example": "Public repository：公开仓库",
      "chapter": 2,
      "level": 1,
      "category": "navigation"
    },
    {
      "id": "private",
      "en": "Private",
      "zh": "私有",
      "note": "只有获得授权的账号才能查看仓库内容",
      "example": "Private repository：私有仓库",
      "chapter": 2,
      "level": 1,
      "category": "navigation"
    },
    {
      "id": "description",
      "en": "Description",
      "zh": "项目简介",
      "note": "仓库用来介绍项目目的的说明字段",
      "example": "Add a description：添加项目简介",
      "chapter": 3,
      "level": 1,
      "category": "navigation"
    },
    {
      "id": "readme",
      "en": "README",
      "zh": "项目说明文件",
      "note": "通常是仓库首页向访客展示的项目介绍",
      "example": "Read the README：阅读项目说明",
      "chapter": 4,
      "level": 1,
      "category": "navigation"
    },
    {
      "id": "code",
      "en": "Code",
      "zh": "代码",
      "note": "仓库主页面，用来查看源码与目录",
      "example": "Code tab：代码选项卡",
      "chapter": 3,
      "level": 1,
      "category": "navigation"
    },
    {
      "id": "go-to-file",
      "en": "Go to file",
      "zh": "查找文件",
      "note": "在当前仓库快速定位指定文件",
      "example": "Go to file：快速打开某文件",
      "chapter": 4,
      "level": 2,
      "category": "navigation"
    },
    {
      "id": "add-file",
      "en": "Add file",
      "zh": "添加文件",
      "note": "在线新建或上传文件到仓库",
      "example": "Add file：创建或上传文件",
      "chapter": 4,
      "level": 1,
      "category": "navigation"
    },
    {
      "id": "download-zip",
      "en": "Download ZIP",
      "zh": "下载压缩包",
      "note": "下载所选版本的源码快照，不包含后续同步能力",
      "example": "Download ZIP：下载当前代码包",
      "chapter": 4,
      "level": 1,
      "category": "navigation"
    },
    {
      "id": "clone",
      "en": "Clone",
      "zh": "克隆",
      "note": "在电脑上取得带 Git 历史的项目副本",
      "example": "Clone repository：克隆项目到本地",
      "chapter": 4,
      "level": 2,
      "category": "navigation"
    },
    {
      "id": "watch",
      "en": "Watch",
      "zh": "关注通知",
      "note": "订阅某仓库的活动通知",
      "example": "Watch repository：关注更新",
      "chapter": 3,
      "level": 2,
      "category": "navigation"
    },
    {
      "id": "star",
      "en": "Star",
      "zh": "收藏",
      "note": "收藏感兴趣的项目，方便之后找回",
      "example": "Star a repository：收藏仓库",
      "chapter": 3,
      "level": 1,
      "category": "navigation"
    },
    {
      "id": "fork",
      "en": "Fork",
      "zh": "派生仓库",
      "note": "在自己的账号下创建项目副本用于独立开发",
      "example": "Fork this repo：派生一个副本",
      "chapter": 4,
      "level": 2,
      "category": "navigation"
    },
    {
      "id": "topics",
      "en": "Topics",
      "zh": "项目标签",
      "note": "用关键词标记仓库主题，方便搜索发现",
      "example": "Add topics：添加项目关键词",
      "chapter": 3,
      "level": 2,
      "category": "navigation"
    },
    {
      "id": "explore",
      "en": "Explore",
      "zh": "发现",
      "note": "查找开源工具、框架和热门项目",
      "example": "Explore GitHub：发现开源项目",
      "chapter": 2,
      "level": 2,
      "category": "navigation"
    },
    {
      "id": "marketplace",
      "en": "Marketplace",
      "zh": "应用市场",
      "note": "发现 GitHub 相关应用和自动化扩展",
      "example": "Browse Marketplace：浏览应用市场",
      "chapter": 2,
      "level": 2,
      "category": "navigation"
    },
    {
      "id": "branch",
      "en": "Branch",
      "zh": "分支",
      "note": "独立的代码开发线，可与主版本隔离",
      "example": "Create a branch：创建功能分支",
      "chapter": 1,
      "level": 1,
      "category": "version"
    },
    {
      "id": "main",
      "en": "main",
      "zh": "主分支（常见名称）",
      "note": "许多仓库默认的主开发线，实际名称以仓库设置为准",
      "example": "Merge into main：合入主分支",
      "chapter": 4,
      "level": 1,
      "category": "version"
    },
    {
      "id": "master",
      "en": "master",
      "zh": "主分支（传统名称）",
      "note": "部分老仓库仍使用的默认分支名称",
      "example": "Default branch: master：默认分支为 master",
      "chapter": 4,
      "level": 2,
      "category": "version"
    },
    {
      "id": "default-branch",
      "en": "Default branch",
      "zh": "默认分支",
      "note": "新建分支和合并请求默认参照的基准分支",
      "example": "Change default branch：修改默认分支",
      "chapter": 13,
      "level": 2,
      "category": "version"
    },
    {
      "id": "commit",
      "en": "Commit",
      "zh": "提交",
      "note": "为一组修改建立一个可追溯的历史记录",
      "example": "Create a commit：记录本次修改",
      "chapter": 1,
      "level": 1,
      "category": "version"
    },
    {
      "id": "commit-message",
      "en": "Commit message",
      "zh": "提交说明",
      "note": "描述这一次修改做了什么",
      "example": "Write a commit message：填写提交说明",
      "chapter": 4,
      "level": 1,
      "category": "version"
    },
    {
      "id": "commit-history",
      "en": "Commit history",
      "zh": "提交历史",
      "note": "查看以往代码修改、作者及时间的记录",
      "example": "View commit history：查看提交履历",
      "chapter": 4,
      "level": 1,
      "category": "version"
    },
    {
      "id": "push",
      "en": "Push",
      "zh": "推送",
      "note": "把本地已提交的修改传到远端仓库",
      "example": "Push to origin：推送到远端",
      "chapter": 1,
      "level": 1,
      "category": "version"
    },
    {
      "id": "pull",
      "en": "Pull",
      "zh": "拉取",
      "note": "把远端更新获取并整合到本地分支",
      "example": "Pull latest changes：拉取最新代码",
      "chapter": 1,
      "level": 1,
      "category": "version"
    },
    {
      "id": "fetch",
      "en": "Fetch",
      "zh": "获取",
      "note": "从远端获取历史与分支信息，通常不直接合并工作文件",
      "example": "Fetch origin：获取远端更新",
      "chapter": 21,
      "level": 2,
      "category": "version"
    },
    {
      "id": "diff",
      "en": "Diff",
      "zh": "差异对比",
      "note": "展示两个版本之间具体改动了哪些行",
      "example": "View diff：查看代码差异",
      "chapter": 4,
      "level": 2,
      "category": "version"
    },
    {
      "id": "compare",
      "en": "Compare",
      "zh": "比较",
      "note": "对比两个分支或提交之间的变化",
      "example": "Compare branches：比较开发分支",
      "chapter": 6,
      "level": 2,
      "category": "version"
    },
    {
      "id": "merge",
      "en": "Merge",
      "zh": "合并",
      "note": "将一个分支的修改纳入另一个分支",
      "example": "Merge pull request：合并审核成果",
      "chapter": 1,
      "level": 1,
      "category": "version"
    },
    {
      "id": "merge-conflict",
      "en": "Merge conflict",
      "zh": "合并冲突",
      "note": "多个修改影响同一位置，需要人工判断如何保留",
      "example": "Resolve merge conflict：解决冲突",
      "chapter": 6,
      "level": 3,
      "category": "version"
    },
    {
      "id": "tag",
      "en": "Tag",
      "zh": "版本标签",
      "note": "给某个明确的提交状态命名，如 v1.0.0",
      "example": "Create a tag：创建版本标签",
      "chapter": 16,
      "level": 1,
      "category": "version"
    },
    {
      "id": "release",
      "en": "Release",
      "zh": "发行版本",
      "note": "在标签基础上发布正式版本说明和附件",
      "example": "Publish release：发布正式版本",
      "chapter": 16,
      "level": 1,
      "category": "version"
    },
    {
      "id": "draft",
      "en": "Draft",
      "zh": "草稿",
      "note": "内容尚未正式发布的状态",
      "example": "Save as draft：先保存草稿",
      "chapter": 16,
      "level": 2,
      "category": "version"
    },
    {
      "id": "revert",
      "en": "Revert",
      "zh": "撤销提交",
      "note": "用新的提交反向撤销已有代码修改",
      "example": "Revert commit：撤销某次修改",
      "chapter": 21,
      "level": 3,
      "category": "version"
    },
    {
      "id": "reset",
      "en": "Reset",
      "zh": "重置",
      "note": "将分支或工作状态移动到指定历史点，需谨慎",
      "example": "Git reset：重置历史状态",
      "chapter": 21,
      "level": 3,
      "category": "version"
    },
    {
      "id": "force-push",
      "en": "Force push",
      "zh": "强制推送",
      "note": "强行覆盖远端分支历史，有误覆盖风险",
      "example": "Force push：强制覆盖远端历史",
      "chapter": 19,
      "level": 3,
      "category": "version"
    },
    {
      "id": "rebase",
      "en": "Rebase",
      "zh": "变基",
      "note": "将分支提交重新应用到新的基准提交上",
      "example": "Rebase branch：重整分支基线",
      "chapter": 6,
      "level": 3,
      "category": "version"
    },
    {
      "id": "squash",
      "en": "Squash",
      "zh": "压缩提交",
      "note": "把多次提交整理合成一次提交",
      "example": "Squash and merge：压缩后合并",
      "chapter": 6,
      "level": 3,
      "category": "version"
    },
    {
      "id": "working-tree",
      "en": "Working tree",
      "zh": "工作区",
      "note": "本地正在修改但未必提交的文件状态",
      "example": "Clean working tree：工作区无未提交变更",
      "chapter": 21,
      "level": 3,
      "category": "version"
    },
    {
      "id": "origin",
      "en": "Origin",
      "zh": "远端名称",
      "note": "Git 中常见的默认远端仓库别名",
      "example": "Push origin main：推送主线到远端",
      "chapter": 21,
      "level": 2,
      "category": "version"
    },
    {
      "id": "issue",
      "en": "Issue",
      "zh": "问题／任务单",
      "note": "记录功能需求、Bug、待办与讨论的工单",
      "example": "Create an issue：创建一项需求",
      "chapter": 5,
      "level": 1,
      "category": "collab"
    },
    {
      "id": "bug",
      "en": "Bug",
      "zh": "缺陷",
      "note": "程序运行异常或功能不符合预期的问题",
      "example": "Bug report：报告程序缺陷",
      "chapter": 5,
      "level": 1,
      "category": "collab"
    },
    {
      "id": "feature-request",
      "en": "Feature request",
      "zh": "功能建议",
      "note": "提出希望开发的新功能或改进",
      "example": "Feature request：提交功能需求",
      "chapter": 5,
      "level": 2,
      "category": "collab"
    },
    {
      "id": "assignee",
      "en": "Assignee",
      "zh": "负责人",
      "note": "被指派处理某个 Issue 或 PR 的账号",
      "example": "Assign an issue：指派任务负责人",
      "chapter": 5,
      "level": 1,
      "category": "collab"
    },
    {
      "id": "labels",
      "en": "Labels",
      "zh": "标签",
      "note": "按 Bug、增强、优先级等为任务分类",
      "example": "Add labels：为问题添加分类标签",
      "chapter": 5,
      "level": 2,
      "category": "collab"
    },
    {
      "id": "milestone",
      "en": "Milestone",
      "zh": "里程碑",
      "note": "把多个任务归集到一个计划阶段或版本",
      "example": "Set a milestone：指定项目里程碑",
      "chapter": 5,
      "level": 2,
      "category": "collab"
    },
    {
      "id": "open",
      "en": "Open",
      "zh": "未关闭／进行中",
      "note": "问题或 PR 仍处于开放状态",
      "example": "Open issues：尚未关闭的问题",
      "chapter": 5,
      "level": 1,
      "category": "collab"
    },
    {
      "id": "closed",
      "en": "Closed",
      "zh": "已关闭",
      "note": "问题或 PR 已关闭，不一定代表代码已合并",
      "example": "Closed issue：已关闭任务",
      "chapter": 5,
      "level": 1,
      "category": "collab"
    },
    {
      "id": "pull-request",
      "en": "Pull request",
      "zh": "合并请求",
      "note": "请求审查一组代码改动并合入目标分支",
      "example": "Open a pull request：发起代码审批",
      "chapter": 6,
      "level": 1,
      "category": "collab"
    },
    {
      "id": "pr",
      "en": "PR",
      "zh": "合并请求（简称）",
      "note": "Pull request 的常用缩写",
      "example": "Review PR #12：审核第12个合并请求",
      "chapter": 6,
      "level": 1,
      "category": "collab"
    },
    {
      "id": "review",
      "en": "Review",
      "zh": "审核",
      "note": "审阅代码修改、测试结果与实现质量",
      "example": "Request a review：请求同事审核",
      "chapter": 6,
      "level": 1,
      "category": "collab"
    },
    {
      "id": "reviewer",
      "en": "Reviewer",
      "zh": "审核人",
      "note": "参与代码审查的开发或项目成员",
      "example": "Add reviewer：添加审核人",
      "chapter": 6,
      "level": 2,
      "category": "collab"
    },
    {
      "id": "approve",
      "en": "Approve",
      "zh": "批准",
      "note": "审核人认可所提交的改动",
      "example": "Approve changes：批准本次改动",
      "chapter": 6,
      "level": 1,
      "category": "collab"
    },
    {
      "id": "changes-requested",
      "en": "Changes requested",
      "zh": "要求修改",
      "note": "审核人认为还需修正后才能通过",
      "example": "Changes requested：需要重新修改",
      "chapter": 6,
      "level": 2,
      "category": "collab"
    },
    {
      "id": "comment",
      "en": "Comment",
      "zh": "评论",
      "note": "针对工单或代码提出问题和建议",
      "example": "Leave a comment：写一条评审意见",
      "chapter": 6,
      "level": 1,
      "category": "collab"
    },
    {
      "id": "conversation",
      "en": "Conversation",
      "zh": "讨论",
      "note": "PR 或 Issue 中围绕任务的交流记录",
      "example": "Conversation tab：查看讨论内容",
      "chapter": 6,
      "level": 1,
      "category": "collab"
    },
    {
      "id": "files-changed",
      "en": "Files changed",
      "zh": "变更文件",
      "note": "查看此次 PR 修改了哪些文件与代码行",
      "example": "Files changed：检查代码改动",
      "chapter": 6,
      "level": 2,
      "category": "collab"
    },
    {
      "id": "checks",
      "en": "Checks",
      "zh": "自动检查",
      "note": "展示代码测试、构建等自动验证结果",
      "example": "All checks passed：检查全部通过",
      "chapter": 6,
      "level": 1,
      "category": "collab"
    },
    {
      "id": "projects",
      "en": "Projects",
      "zh": "项目看板",
      "note": "跨仓库管理研发任务、负责人和状态",
      "example": "Add to project：纳入项目管理看板",
      "chapter": 9,
      "level": 1,
      "category": "collab"
    },
    {
      "id": "discussions",
      "en": "Discussions",
      "zh": "讨论区",
      "note": "用于问答、意见交换和公告等论坛式交流",
      "example": "Start a discussion：发起讨论",
      "chapter": 10,
      "level": 2,
      "category": "collab"
    },
    {
      "id": "collaborators",
      "en": "Collaborators",
      "zh": "协作者",
      "note": "获得仓库访问或修改权限的其他账号",
      "example": "Invite collaborator：邀请协作者",
      "chapter": 14,
      "level": 1,
      "category": "collab"
    },
    {
      "id": "mention",
      "en": "Mention",
      "zh": "提及某人",
      "note": "使用 @账号 通知协作参与者",
      "example": "Mention a teammate：在评论中提及同事",
      "chapter": 5,
      "level": 2,
      "category": "collab"
    },
    {
      "id": "linked-issue",
      "en": "Linked issue",
      "zh": "关联问题",
      "note": "将 PR 和 Issue 关联方便追踪交付",
      "example": "Link an issue：关联开发需求",
      "chapter": 6,
      "level": 2,
      "category": "collab"
    },
    {
      "id": "actions",
      "en": "Actions",
      "zh": "自动化操作",
      "note": "GitHub 的自动化运行平台，用于检查、打包与部署",
      "example": "Open Actions：查看自动化任务",
      "chapter": 8,
      "level": 1,
      "category": "automation"
    },
    {
      "id": "workflow",
      "en": "Workflow",
      "zh": "工作流",
      "note": "按照配置执行的一系列自动化步骤",
      "example": "Deploy workflow：网站发布流水线",
      "chapter": 8,
      "level": 1,
      "category": "automation"
    },
    {
      "id": "workflow-run",
      "en": "Workflow run",
      "zh": "工作流运行记录",
      "note": "某次触发的整套自动化执行过程",
      "example": "View workflow run：查看执行记录",
      "chapter": 8,
      "level": 2,
      "category": "automation"
    },
    {
      "id": "job",
      "en": "Job",
      "zh": "作业",
      "note": "一个工作流中的单独任务单元",
      "example": "Build job：构建作业",
      "chapter": 8,
      "level": 2,
      "category": "automation"
    },
    {
      "id": "step",
      "en": "Step",
      "zh": "步骤",
      "note": "作业内部的具体操作步骤",
      "example": "Failed step：失败的某一步",
      "chapter": 8,
      "level": 2,
      "category": "automation"
    },
    {
      "id": "runner",
      "en": "Runner",
      "zh": "执行器",
      "note": "运行自动化任务的机器环境",
      "example": "GitHub-hosted runner：GitHub 托管执行器",
      "chapter": 8,
      "level": 3,
      "category": "automation"
    },
    {
      "id": "ci",
      "en": "CI",
      "zh": "持续集成",
      "note": "每次提交后持续进行测试与检查的机制",
      "example": "CI checks：持续集成检查",
      "chapter": 8,
      "level": 2,
      "category": "automation"
    },
    {
      "id": "build",
      "en": "Build",
      "zh": "构建",
      "note": "把源码整理、编译或打包成可运行产物",
      "example": "Build succeeded：构建成功",
      "chapter": 8,
      "level": 1,
      "category": "automation"
    },
    {
      "id": "test",
      "en": "Test",
      "zh": "测试",
      "note": "验证项目代码与功能是否满足要求",
      "example": "Run tests：执行自动测试",
      "chapter": 8,
      "level": 1,
      "category": "automation"
    },
    {
      "id": "artifact",
      "en": "Artifact",
      "zh": "构建产物",
      "note": "自动化任务生成、供下载或发布的输出文件",
      "example": "Download artifact：下载构建文件",
      "chapter": 8,
      "level": 2,
      "category": "automation"
    },
    {
      "id": "deploy",
      "en": "Deploy",
      "zh": "部署",
      "note": "把已准备好的应用文件正式发布到运行环境",
      "example": "Deploy site：部署网站",
      "chapter": 8,
      "level": 1,
      "category": "automation"
    },
    {
      "id": "deployment",
      "en": "Deployment",
      "zh": "部署记录",
      "note": "一次具体发布活动及其状态",
      "example": "Deployment succeeded：部署成功",
      "chapter": 15,
      "level": 2,
      "category": "automation"
    },
    {
      "id": "github-pages",
      "en": "GitHub Pages",
      "zh": "GitHub 静态网站托管",
      "note": "将静态 HTML、CSS、JS 发布到公开可访问的网址",
      "example": "Enable GitHub Pages：启用网站托管",
      "chapter": 15,
      "level": 1,
      "category": "automation"
    },
    {
      "id": "build-and-deployment",
      "en": "Build and deployment",
      "zh": "构建与部署",
      "note": "Pages 设置中选择发布来源的区域",
      "example": "Build and deployment：构建与发布配置",
      "chapter": 15,
      "level": 2,
      "category": "automation"
    },
    {
      "id": "source",
      "en": "Source",
      "zh": "来源",
      "note": "设置 Pages 从分支还是 GitHub Actions 发布",
      "example": "Choose source：选择发布来源",
      "chapter": 15,
      "level": 2,
      "category": "automation"
    },
    {
      "id": "github-actions",
      "en": "GitHub Actions",
      "zh": "GitHub 自动化",
      "note": "使用 Actions 流水线执行 Pages 发布的选项",
      "example": "Source: GitHub Actions：通过 Actions 发布",
      "chapter": 15,
      "level": 1,
      "category": "automation"
    },
    {
      "id": "custom-domain",
      "en": "Custom domain",
      "zh": "自定义域名",
      "note": "为网站绑定自己的域名",
      "example": "Set custom domain：配置自有网址",
      "chapter": 15,
      "level": 2,
      "category": "automation"
    },
    {
      "id": "environment",
      "en": "Environment",
      "zh": "环境",
      "note": "定义网站部署目标或审批环境，如 production",
      "example": "Environment: github-pages：部署目标",
      "chapter": 14,
      "level": 2,
      "category": "automation"
    },
    {
      "id": "re-run-jobs",
      "en": "Re-run jobs",
      "zh": "重新执行作业",
      "note": "再次运行工作流中的作业",
      "example": "Re-run failed jobs：重试失败任务",
      "chapter": 8,
      "level": 2,
      "category": "automation"
    },
    {
      "id": "packages",
      "en": "Packages",
      "zh": "软件包",
      "note": "发布及管理可供程序引用的制品或包",
      "example": "Publish package：发布软件包",
      "chapter": 16,
      "level": 3,
      "category": "automation"
    },
    {
      "id": "settings",
      "en": "Settings",
      "zh": "设置",
      "note": "仓库或个人账号的配置管理页面",
      "example": "Repository settings：仓库设置",
      "chapter": 13,
      "level": 1,
      "category": "security"
    },
    {
      "id": "general",
      "en": "General",
      "zh": "常规设置",
      "note": "仓库名称、功能开关和默认行为等配置页",
      "example": "Settings → General：打开常规设置",
      "chapter": 13,
      "level": 1,
      "category": "security"
    },
    {
      "id": "access",
      "en": "Access",
      "zh": "访问权限",
      "note": "定义谁能够访问或管理项目",
      "example": "Access settings：访问控制",
      "chapter": 14,
      "level": 2,
      "category": "security"
    },
    {
      "id": "read",
      "en": "Read",
      "zh": "读取权限",
      "note": "允许查看和拉取仓库内容的权限范围",
      "example": "Read access：只读访问权限",
      "chapter": 14,
      "level": 1,
      "category": "security"
    },
    {
      "id": "write",
      "en": "Write",
      "zh": "写入权限",
      "note": "允许提交或修改仓库内容的权限范围",
      "example": "Write access：可写权限",
      "chapter": 14,
      "level": 1,
      "category": "security"
    },
    {
      "id": "admin",
      "en": "Admin",
      "zh": "管理员",
      "note": "拥有高权限仓库管理能力的角色",
      "example": "Admin permission：管理员权限",
      "chapter": 14,
      "level": 2,
      "category": "security"
    },
    {
      "id": "manage-access",
      "en": "Manage access",
      "zh": "管理访问",
      "note": "邀请协作者或调整仓库可访问范围",
      "example": "Manage access：管理成员访问",
      "chapter": 14,
      "level": 2,
      "category": "security"
    },
    {
      "id": "rulesets",
      "en": "Rulesets",
      "zh": "规则集",
      "note": "对分支或标签施加审核与检查要求",
      "example": "Configure rulesets：配置保护规则",
      "chapter": 14,
      "level": 2,
      "category": "security"
    },
    {
      "id": "branch-protection",
      "en": "Branch protection",
      "zh": "分支保护",
      "note": "限制直接推送并要求审核的保护机制",
      "example": "Protect main：保护主分支",
      "chapter": 14,
      "level": 2,
      "category": "security"
    },
    {
      "id": "required-checks",
      "en": "Required checks",
      "zh": "必需检查",
      "note": "合入前必须通过的自动化质量检查",
      "example": "Required status checks：必须通过的检查",
      "chapter": 14,
      "level": 2,
      "category": "security"
    },
    {
      "id": "secrets",
      "en": "Secrets",
      "zh": "密钥",
      "note": "存放自动化工作所需的敏感令牌与凭证",
      "example": "Repository secrets：仓库密钥",
      "chapter": 14,
      "level": 1,
      "category": "security"
    },
    {
      "id": "variables",
      "en": "Variables",
      "zh": "变量",
      "note": "存放自动化中不敏感的配置参数",
      "example": "Repository variables：仓库变量",
      "chapter": 14,
      "level": 2,
      "category": "security"
    },
    {
      "id": "token",
      "en": "Token",
      "zh": "访问令牌",
      "note": "用于程序访问 GitHub 或外部接口的凭证",
      "example": "Personal access token：个人访问令牌",
      "chapter": 17,
      "level": 2,
      "category": "security"
    },
    {
      "id": "deploy-keys",
      "en": "Deploy keys",
      "zh": "部署密钥",
      "note": "允许部署系统通过 SSH 访问指定仓库的密钥",
      "example": "Deploy keys：部署专用密钥",
      "chapter": 14,
      "level": 3,
      "category": "security"
    },
    {
      "id": "two-factor-authentication",
      "en": "Two-factor authentication",
      "zh": "双重身份验证",
      "note": "密码之外增加一道账号验证保护",
      "example": "Enable 2FA：开启双因素认证",
      "chapter": 17,
      "level": 1,
      "category": "security"
    },
    {
      "id": "permissions",
      "en": "Permissions",
      "zh": "权限",
      "note": "账号或工作流能够读取和执行的操作范围",
      "example": "Check permissions：核查授权范围",
      "chapter": 14,
      "level": 1,
      "category": "security"
    },
    {
      "id": "security",
      "en": "Security",
      "zh": "安全",
      "note": "漏洞扫描、安全建议与风险管理的相关区域",
      "example": "Security and quality：安全与质量",
      "chapter": 11,
      "level": 1,
      "category": "security"
    },
    {
      "id": "dependabot",
      "en": "Dependabot",
      "zh": "依赖检查工具",
      "note": "提示依赖包的安全漏洞及更新建议",
      "example": "Dependabot alerts：依赖安全提示",
      "chapter": 11,
      "level": 3,
      "category": "security"
    },
    {
      "id": "danger-zone",
      "en": "Danger Zone",
      "zh": "危险操作区",
      "note": "仓库删除、转移或更改可见性等高风险设置区",
      "example": "Danger Zone：谨慎操作",
      "chapter": 13,
      "level": 2,
      "category": "security"
    },
    {
      "id": "delete-repository",
      "en": "Delete repository",
      "zh": "删除仓库",
      "note": "移除整个项目仓库，风险极高",
      "example": "Delete this repository：删除整个项目",
      "chapter": 19,
      "level": 2,
      "category": "security"
    },
    {
      "id": "success",
      "en": "Success",
      "zh": "成功",
      "note": "某项运行或操作已经成功完成",
      "example": "Workflow status: Success：自动化成功",
      "chapter": 20,
      "level": 1,
      "category": "states"
    },
    {
      "id": "failure",
      "en": "Failure",
      "zh": "失败",
      "note": "某项流程执行失败，需要查看日志原因",
      "example": "Workflow status: Failure：执行失败",
      "chapter": 20,
      "level": 1,
      "category": "states"
    },
    {
      "id": "pending",
      "en": "Pending",
      "zh": "等待中",
      "note": "操作在等待执行或等待审核等后续处理",
      "example": "Pending checks：等待检查",
      "chapter": 20,
      "level": 1,
      "category": "states"
    },
    {
      "id": "queued",
      "en": "Queued",
      "zh": "排队中",
      "note": "工作流已进入队列但尚未开始运行",
      "example": "Run queued：作业排队等待",
      "chapter": 20,
      "level": 2,
      "category": "states"
    },
    {
      "id": "in-progress",
      "en": "In progress",
      "zh": "进行中",
      "note": "工作流或任务当前仍在执行",
      "example": "Deployment in progress：部署进行中",
      "chapter": 20,
      "level": 1,
      "category": "states"
    },
    {
      "id": "completed",
      "en": "Completed",
      "zh": "已完成",
      "note": "执行已经结束，但仍需看成功还是失败",
      "example": "Status: Completed：流程执行完毕",
      "chapter": 20,
      "level": 1,
      "category": "states"
    },
    {
      "id": "passed",
      "en": "Passed",
      "zh": "通过",
      "note": "特定质量检查、测试或规则已经满足",
      "example": "All checks passed：全部检查通过",
      "chapter": 20,
      "level": 1,
      "category": "states"
    },
    {
      "id": "failed",
      "en": "Failed",
      "zh": "未通过",
      "note": "某项测试、作业或检查失败",
      "example": "Build failed：构建失败",
      "chapter": 20,
      "level": 1,
      "category": "states"
    },
    {
      "id": "cancelled",
      "en": "Cancelled",
      "zh": "已取消",
      "note": "执行过程被人为或系统终止",
      "example": "Workflow cancelled：工作流取消",
      "chapter": 20,
      "level": 2,
      "category": "states"
    },
    {
      "id": "skipped",
      "en": "Skipped",
      "zh": "已跳过",
      "note": "某个步骤或作业未被执行",
      "example": "Deploy step skipped：部署步骤跳过",
      "chapter": 20,
      "level": 2,
      "category": "states"
    },
    {
      "id": "draft-pull-request",
      "en": "Draft pull request",
      "zh": "草稿合并请求",
      "note": "PR 尚在准备阶段，通常不应作为已完成成果合入",
      "example": "Mark as draft：标记草稿 PR",
      "chapter": 6,
      "level": 2,
      "category": "states"
    },
    {
      "id": "ready-for-review",
      "en": "Ready for review",
      "zh": "准备审核",
      "note": "开发者认为当前 PR 可以开始正式审查",
      "example": "Ready for review：提交正式审核",
      "chapter": 6,
      "level": 2,
      "category": "states"
    },
    {
      "id": "mergeable",
      "en": "Mergeable",
      "zh": "可以合并",
      "note": "GitHub 判断本次修改可进入合并流程，仍需业务验收",
      "example": "Mergeable: yes：当前可合并",
      "chapter": 6,
      "level": 2,
      "category": "states"
    },
    {
      "id": "out-of-date",
      "en": "Out of date",
      "zh": "已过期／落后",
      "note": "分支相比目标分支缺少较新的更新",
      "example": "Branch out of date：开发分支落后",
      "chapter": 20,
      "level": 2,
      "category": "states"
    },
    {
      "id": "up-to-date",
      "en": "Up to date",
      "zh": "已是最新",
      "note": "与指定分支或远端状态保持同步",
      "example": "Branch is up to date：分支已更新",
      "chapter": 20,
      "level": 2,
      "category": "states"
    },
    {
      "id": "no-changes",
      "en": "No changes",
      "zh": "没有变化",
      "note": "当前操作未发现需要提交的差异",
      "example": "No changes detected：没有文件变更",
      "chapter": 20,
      "level": 1,
      "category": "states"
    },
    {
      "id": "not-found",
      "en": "Not found",
      "zh": "未找到",
      "note": "页面、路径或资源不存在，或缺乏访问权限",
      "example": "404 Not Found：网页或资源不可访问",
      "chapter": 20,
      "level": 2,
      "category": "states"
    },
    {
      "id": "permission-denied",
      "en": "Permission denied",
      "zh": "权限被拒绝",
      "note": "账号或令牌缺少执行指定操作的权限",
      "example": "Permission denied：当前没有权限",
      "chapter": 20,
      "level": 2,
      "category": "states"
    },
    {
      "id": "repository-is-empty",
      "en": "Repository is empty",
      "zh": "仓库为空",
      "note": "新建仓库还没有文件或提交历史",
      "example": "This repository is empty：当前为空仓库",
      "chapter": 20,
      "level": 1,
      "category": "states"
    },
    {
      "id": "this-branch-is-protected",
      "en": "This branch is protected",
      "zh": "分支受保护",
      "note": "分支受到保护规则限制，不能随意直接修改",
      "example": "This branch is protected：主分支受保护",
      "chapter": 20,
      "level": 2,
      "category": "states"
    }
  ]
};
