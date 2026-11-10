/* GitHub 产品经理英语抽卡：2026-10 原 129 术语完整保留，2026-11 新增匿名化 AI 工程实践。 */
window.GITHUB_VOCABULARY = {
  "version": "2026-11-10",
  "basis": "docs/GitHub_中文使用手册_2026-10.md（原 23 章 + 第 24 章 AI 协作研发实战）",
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
    },
    {
      "id": "agent",
      "name": "AI 协作与研发治理",
      "en": "AI AGENT & ENGINEERING GOVERNANCE",
      "description": "产品经理如何让 AI、GitHub 和部署证据闭环",
      "icon": "layers"
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
    },
    {
      "id": "ssot",
      "en": "Single source of truth (SSOT)",
      "zh": "唯一事实来源",
      "note": "工程治理原则：以版本化仓库记录为准，不能把聊天记忆当当前事实",
      "example": "Read the source of truth：先读取最新主线与轮次事实",
      "chapter": 24,
      "level": 1,
      "category": "agent"
    },
    {
      "id": "head",
      "en": "HEAD",
      "zh": "当前分支指针",
      "note": "表示分支当前指向哪个提交；应在编程前核对最新 main",
      "example": "Check main HEAD：先确认主线最新提交",
      "chapter": 24,
      "level": 2,
      "category": "version"
    },
    {
      "id": "commit-sha",
      "en": "Commit SHA",
      "zh": "提交唯一标识",
      "note": "用于精准定位代码版本；不是项目名称或日期",
      "example": "Verify commit SHA：核对实际运行的源码版本",
      "chapter": 24,
      "level": 1,
      "category": "version"
    },
    {
      "id": "blob-sha",
      "en": "Blob SHA / File SHA",
      "zh": "文件内容标识",
      "note": "更新共享文件前先读取其当前 SHA，减少覆盖并行改动的风险",
      "example": "Read file SHA before editing：修改前获取文件版本",
      "chapter": 24,
      "level": 2,
      "category": "version"
    },
    {
      "id": "git-ref",
      "en": "Git ref",
      "zh": "分支或标签引用",
      "note": "分支名会随提交前移，固定 SHA 指向特定提交",
      "example": "main ref moved：主线出现了新提交",
      "chapter": 24,
      "level": 2,
      "category": "version"
    },
    {
      "id": "base-branch",
      "en": "Base branch",
      "zh": "PR 目标分支",
      "note": "本次变更准备合到哪里，常见是 main",
      "example": "Base: main：本次 PR 合入主线",
      "chapter": 24,
      "level": 1,
      "category": "collab"
    },
    {
      "id": "head-branch",
      "en": "Head branch",
      "zh": "PR 来源分支",
      "note": "本次候选代码实际所在的开发分支",
      "example": "Head: feature/care：新功能独立分支",
      "chapter": 24,
      "level": 1,
      "category": "collab"
    },
    {
      "id": "ahead-behind",
      "en": "Ahead / Behind",
      "zh": "分支领先/落后提交数",
      "note": "合并前判断开发分支是否与主线产生距离",
      "example": "Branch is behind main：需核对并同步主线",
      "chapter": 24,
      "level": 2,
      "category": "version"
    },
    {
      "id": "closed-without-merge",
      "en": "Closed without merge",
      "zh": "关闭但未合并",
      "note": "关闭 PR 不等于代码进入正式主线，需检查替代 PR",
      "example": "PR closed unmerged：此代码尚未入主线",
      "chapter": 24,
      "level": 1,
      "category": "collab"
    },
    {
      "id": "squash-and-merge",
      "en": "Squash and merge",
      "zh": "压缩提交后合并",
      "note": "PR 内多次提交整合成 main 上一个新提交，SHA 通常变化",
      "example": "Squash merge created new SHA：记录新的主线提交",
      "chapter": 24,
      "level": 2,
      "category": "version"
    },
    {
      "id": "merge-commit",
      "en": "Merge commit",
      "zh": "合并提交",
      "note": "追踪 PR 合入主线的真正提交，区别开发分支末次提交",
      "example": "Merged commit SHA：查最终合入版本",
      "chapter": 24,
      "level": 2,
      "category": "version"
    },
    {
      "id": "stale-branch",
      "en": "Stale branch",
      "zh": "落后的开发分支",
      "note": "另一条对话已更新 main，旧分支需先协调合并或重建",
      "example": "Update branch before merging：先读取最新 main",
      "chapter": 24,
      "level": 2,
      "category": "version"
    },
    {
      "id": "cherry-pick",
      "en": "Cherry-pick",
      "zh": "选择性摘取提交",
      "note": "将指定提交的修改放入另一分支，需确认兼容和冲突",
      "example": "Cherry-pick fix commit：只移植所需修复",
      "chapter": 24,
      "level": 3,
      "category": "version"
    },
    {
      "id": "force-with-lease",
      "en": "Force with lease",
      "zh": "带预期版本校验的强制推送",
      "note": "比裸 force push 更安全，但仍会改写分支历史；新手慎用",
      "example": "Force-with-lease rejected：有人更新了远端分支",
      "chapter": 24,
      "level": 3,
      "category": "version"
    },
    {
      "id": "ci-cd",
      "en": "CI/CD",
      "zh": "持续集成与交付/部署",
      "note": "CI 负责自动验证；CD 负责准备或实施发布，二者可分开",
      "example": "CI passed, deploy pending：代码通过但尚未上线",
      "chapter": 24,
      "level": 1,
      "category": "automation"
    },
    {
      "id": "continuous-delivery",
      "en": "Continuous Delivery",
      "zh": "持续交付",
      "note": "自动准备可发布版本，生产发布可能仍需要人工批准",
      "example": "Ready for release：可以发布但还未发布",
      "chapter": 24,
      "level": 2,
      "category": "automation"
    },
    {
      "id": "continuous-deployment",
      "en": "Continuous Deployment",
      "zh": "持续部署",
      "note": "通过既定门禁后自动发布到指定环境，是否启用取决于配置",
      "example": "Auto deploy enabled：满足条件就自动部署",
      "chapter": 24,
      "level": 2,
      "category": "automation"
    },
    {
      "id": "workflow-trigger",
      "en": "Workflow trigger",
      "zh": "工作流触发条件",
      "note": "设置什么事件会让 GitHub Actions 启动；存在文件不代表会运行",
      "example": "Check workflow triggers：核实监听 push 还是 PR",
      "chapter": 24,
      "level": 1,
      "category": "automation"
    },
    {
      "id": "push-event",
      "en": "push event",
      "zh": "推送事件",
      "note": "代码推送到匹配的分支时触发工作流",
      "example": "on: push main：主分支更新后运行",
      "chapter": 24,
      "level": 2,
      "category": "automation"
    },
    {
      "id": "pull-request-event",
      "en": "pull_request event",
      "zh": "PR 事件",
      "note": "PR 创建、同步代码等符合条件时触发自动检查",
      "example": "on: pull_request：合并前自动测试",
      "chapter": 24,
      "level": 1,
      "category": "automation"
    },
    {
      "id": "workflow-dispatch",
      "en": "workflow_dispatch",
      "zh": "手动运行工作流",
      "note": "需要仓库工作流显式配置并具备权限，才能在 Actions 手动发起",
      "example": "Run workflow：人工启动部署或检查",
      "chapter": 24,
      "level": 2,
      "category": "automation"
    },
    {
      "id": "check-run",
      "en": "Check run",
      "zh": "提交检查实例",
      "note": "某个 CI 作业对应一个提交的检查结果；需核对 SHA",
      "example": "Check run for latest commit：检查本次提交",
      "chapter": 24,
      "level": 2,
      "category": "automation"
    },
    {
      "id": "status-vs-conclusion",
      "en": "Status vs Conclusion",
      "zh": "运行阶段与最终结论",
      "note": "Completed 只说明运行结束，必须继续看 Success 或 Failure",
      "example": "Completed with failure：结束了但未通过",
      "chapter": 24,
      "level": 1,
      "category": "states"
    },
    {
      "id": "required-status-checks",
      "en": "Required status checks",
      "zh": "必需通过的状态检查",
      "note": "主线保护规则可要求相关 CI 通过才允许合并；需核实是否真正启用",
      "example": "Required check failed：规则阻止合并",
      "chapter": 24,
      "level": 2,
      "category": "security"
    },
    {
      "id": "test-case",
      "en": "Test case",
      "zh": "测试用例",
      "note": "模拟一个可判断的使用情景：成功、失败、无权限等",
      "example": "Run representative test cases：执行可复现的检查场景",
      "chapter": 24,
      "level": 1,
      "category": "automation"
    },
    {
      "id": "assertion",
      "en": "Assertion",
      "zh": "断言",
      "note": "测试中明确核对一个条件；数量多不代表需求全部覆盖",
      "example": "455 assertions：逐项验证 455 个条件",
      "chapter": 24,
      "level": 1,
      "category": "automation"
    },
    {
      "id": "regression-test",
      "en": "Regression test",
      "zh": "回归测试",
      "note": "添加新功能后检查原登录、权限、记录等功能是否受损",
      "example": "Run regression tests：避免改坏已有能力",
      "chapter": 24,
      "level": 1,
      "category": "automation"
    },
    {
      "id": "smoke-test",
      "en": "Smoke test",
      "zh": "冒烟测试",
      "note": "验证服务能启动、基础路由有响应；不等于完整业务测试",
      "example": "Smoke test passed：最基础功能能运行",
      "chapter": 24,
      "level": 1,
      "category": "automation"
    },
    {
      "id": "integration-test",
      "en": "Integration test",
      "zh": "集成测试",
      "note": "检查多个组件和数据库、接口协作能否运行",
      "example": "API plus SQLite test：接口与数据库一起测试",
      "chapter": 24,
      "level": 2,
      "category": "automation"
    },
    {
      "id": "negative-test",
      "en": "Negative test",
      "zh": "反向/异常测试",
      "note": "验证越权、非法输入、过期会话等必须失败的情况",
      "example": "Unauthorized request rejected：无权访问被拒绝",
      "chapter": 24,
      "level": 2,
      "category": "automation"
    },
    {
      "id": "synthetic-data",
      "en": "Synthetic data",
      "zh": "合成测试数据",
      "note": "人工编造的无真实身份数据，用于 CI 和截图验收",
      "example": "Use SYN-* fixtures：不要上传真实个人资料",
      "chapter": 24,
      "level": 1,
      "category": "security"
    },
    {
      "id": "test-fixture",
      "en": "Test fixture",
      "zh": "固定测试样本",
      "note": "让每次 CI 都有可重现的输入和期望结果",
      "example": "Fixture data is fictional：测试样本完全虚构",
      "chapter": 24,
      "level": 2,
      "category": "automation"
    },
    {
      "id": "test-evidence",
      "en": "Test evidence",
      "zh": "测试证据",
      "note": "工程治理文件：记录测试 URL、SHA、通过/失败/未运行",
      "example": "Record test evidence：留下可核对的 CI 记录",
      "chapter": 24,
      "level": 1,
      "category": "agent"
    },
    {
      "id": "traceability",
      "en": "Traceability",
      "zh": "可追溯性",
      "note": "需求、Issue、PR、提交、测试、部署形成证据链",
      "example": "Trace Issue to CI：从需求查到测试结果",
      "chapter": 24,
      "level": 1,
      "category": "agent"
    },
    {
      "id": "run-id",
      "en": "Workflow run ID",
      "zh": "工作流运行编号",
      "note": "对应某一次 GitHub Actions 执行，用于定位结果",
      "example": "Open the run ID：查看本次自动化记录",
      "chapter": 24,
      "level": 2,
      "category": "automation"
    },
    {
      "id": "job-id",
      "en": "Job ID",
      "zh": "作业编号",
      "note": "工作流内某个作业的标识，可与失败步骤一起定位",
      "example": "Inspect failed job：打开失败作业",
      "chapter": 24,
      "level": 2,
      "category": "automation"
    },
    {
      "id": "failed-step",
      "en": "Failed step",
      "zh": "失败步骤",
      "note": "先定位哪一步真正失败，不要根据整个红标猜代码原因",
      "example": "Find first failed step：优先找根因",
      "chapter": 24,
      "level": 1,
      "category": "automation"
    },
    {
      "id": "step-logs",
      "en": "Step logs",
      "zh": "步骤日志",
      "note": "显示命令、测试错误和异常；日志不一定永久可用",
      "example": "Open job logs：查看实际失败信息",
      "chapter": 24,
      "level": 1,
      "category": "automation"
    },
    {
      "id": "logs-unavailable",
      "en": "Logs unavailable",
      "zh": "日志暂时不可读取",
      "note": "无法取得失败证据时应保留 failed 或 not_verified，不编造原因",
      "example": "Logs unavailable; keep blocked：不可假称检查通过",
      "chapter": 24,
      "level": 2,
      "category": "states"
    },
    {
      "id": "rerun-failed-jobs",
      "en": "Re-run failed jobs",
      "zh": "只重跑失败作业",
      "note": "用于验证偶发环境问题；稳定失败时应修改代码或测试再运行",
      "example": "Re-run failed jobs after fix：修复后验证",
      "chapter": 24,
      "level": 2,
      "category": "automation"
    },
    {
      "id": "timeout",
      "en": "Timeout",
      "zh": "运行超时",
      "note": "作业超过约定期限被终止，不能算测试成功",
      "example": "Job timed out：需检查耗时或卡住原因",
      "chapter": 24,
      "level": 2,
      "category": "states"
    },
    {
      "id": "matrix-strategy",
      "en": "Matrix strategy",
      "zh": "矩阵测试",
      "note": "自动使用不同语言/版本或参数运行多组检查",
      "example": "Matrix: PHP versions：按多版本回归",
      "chapter": 24,
      "level": 2,
      "category": "automation"
    },
    {
      "id": "deployed-sha",
      "en": "Deployed SHA",
      "zh": "实际部署的代码版本",
      "note": "生产服务器运行的 SHA，要与发布目标对照",
      "example": "Deployed SHA matches release：网站才是预期版本",
      "chapter": 24,
      "level": 1,
      "category": "automation"
    },
    {
      "id": "health-check",
      "en": "Health check",
      "zh": "服务健康检查",
      "note": "检查有限的服务健康端点；不证明业务逻辑、数据库或真实数据均正确",
      "example": "Health 200 is not acceptance：健康检查非验收",
      "chapter": 24,
      "level": 1,
      "category": "automation"
    },
    {
      "id": "build-artifact",
      "en": "Build artifact",
      "zh": "构建产物",
      "note": "部署使用的构建包、静态资源或可发布文件集合",
      "example": "Deploy tested artifact：发布已验证的构建包",
      "chapter": 24,
      "level": 2,
      "category": "automation"
    },
    {
      "id": "production-environment",
      "en": "Production environment",
      "zh": "生产环境",
      "note": "真实用户访问的服务器与数据环境，必须独立验收",
      "example": "Production requires approval：正式环境须守门禁",
      "chapter": 24,
      "level": 1,
      "category": "automation"
    },
    {
      "id": "staging-environment",
      "en": "Staging environment",
      "zh": "预发布/测试环境",
      "note": "用受控测试资料验证流程，不等于真实生产",
      "example": "Staging smoke passed：只证明预发环境检查",
      "chapter": 24,
      "level": 2,
      "category": "automation"
    },
    {
      "id": "database-migration",
      "en": "Database migration",
      "zh": "数据库结构迁移",
      "note": "运行脚本改变表/索引；仓库有迁移文件不等于服务器已执行",
      "example": "Migration file merged, not applied：尚未实际迁移",
      "chapter": 24,
      "level": 1,
      "category": "automation"
    },
    {
      "id": "schema-version",
      "en": "Schema version",
      "zh": "数据库结构版本",
      "note": "用于核对生产数据库是否真正升级到目标结构",
      "example": "Check schema version：核对服务器迁移历史",
      "chapter": 24,
      "level": 2,
      "category": "automation"
    },
    {
      "id": "database-backup",
      "en": "Database backup",
      "zh": "数据库备份",
      "note": "与 GitHub 源码版本分开保存，不能把备份推入公开仓库",
      "example": "Backup before migration：迁移前确认备份",
      "chapter": 24,
      "level": 1,
      "category": "security"
    },
    {
      "id": "restore-drill",
      "en": "Restore drill",
      "zh": "恢复演练",
      "note": "真正确认能从备份恢复数据，比「已有备份文件」更可靠",
      "example": "Restore drill passed：实测恢复可用",
      "chapter": 24,
      "level": 2,
      "category": "security"
    },
    {
      "id": "rollback-plan",
      "en": "Rollback plan",
      "zh": "回滚方案",
      "note": "提前约定失败时如何恢复代码、数据库和网站访问",
      "example": "Rollback differs from database restore：代码和数据分开处理",
      "chapter": 24,
      "level": 2,
      "category": "agent"
    },
    {
      "id": "github-app",
      "en": "GitHub App",
      "zh": "GitHub 授权应用",
      "note": "允许第三方工具在指定权限和安装范围访问仓库",
      "example": "Grant only repository access needed：限制授权范围",
      "chapter": 24,
      "level": 1,
      "category": "security"
    },
    {
      "id": "github-connector",
      "en": "GitHub connector",
      "zh": "GitHub 连接器",
      "note": "将聊天工具与仓库连接以读取、提交和创建 PR；权限有限制",
      "example": "Connector cannot bypass permissions：不能绕过仓库授权",
      "chapter": 24,
      "level": 1,
      "category": "agent"
    },
    {
      "id": "mcp",
      "en": "MCP (Model Context Protocol)",
      "zh": "模型上下文协议",
      "note": "AI 工具与外部系统对接的协议；本身不是代码验收机制",
      "example": "MCP tool reads repo：工具按授权读取仓库",
      "chapter": 24,
      "level": 2,
      "category": "agent"
    },
    {
      "id": "coding-agent",
      "en": "Coding Agent",
      "zh": "编程智能体",
      "note": "按约定读代码、写改动、跑测试并提交 PR 的 AI 工作方式",
      "example": "Agent opens a PR：AI 交付可审查代码",
      "chapter": 24,
      "level": 1,
      "category": "agent"
    },
    {
      "id": "agents-md",
      "en": "AGENTS.md",
      "zh": "Agent 项目指引",
      "note": "团队放在仓库中的研发协作说明文件，不是 GitHub 内置审批开关",
      "example": "Read AGENTS.md first：按项目规则执行",
      "chapter": 24,
      "level": 1,
      "category": "agent"
    },
    {
      "id": "prd",
      "en": "PRD (Product Requirements Document)",
      "zh": "产品需求文档",
      "note": "团队管理的需求权威，定义业务目标、功能边界和交互验收",
      "example": "PRD approved before coding：先确认产品范围",
      "chapter": 24,
      "level": 1,
      "category": "agent"
    },
    {
      "id": "adr",
      "en": "ADR (Architecture Decision Record)",
      "zh": "架构决策记录",
      "note": "记录技术选择、依据和变更条件；不是 GitHub 预置页面",
      "example": "ADR prevents unapproved rewrite：避免随意换技术栈",
      "chapter": 24,
      "level": 2,
      "category": "agent"
    },
    {
      "id": "acceptance-criteria",
      "en": "Acceptance criteria",
      "zh": "验收条件",
      "note": "在开发前规定成功与失败的可测试标准",
      "example": "Acceptance requires real UI checks：验收不止 CI",
      "chapter": 24,
      "level": 1,
      "category": "agent"
    },
    {
      "id": "definition-of-done",
      "en": "Definition of Done (DoD)",
      "zh": "完成定义",
      "note": "说明整版何时算完成，包括代码、CI、部署、数据和人工确认",
      "example": "DoD not met：还有未通过门禁",
      "chapter": 24,
      "level": 1,
      "category": "agent"
    },
    {
      "id": "decision-register",
      "en": "Decision register",
      "zh": "决策登记册",
      "note": "保留最新批准决定与历史适用范围，防止聊天中的旧意见推翻新方案",
      "example": "Check latest approved decision：先核对版本化决策",
      "chapter": 24,
      "level": 2,
      "category": "agent"
    },
    {
      "id": "iteration-ledger",
      "en": "Iteration ledger",
      "zh": "迭代轮次账本",
      "note": "团队自建的需求、测试、发布、交接文件组合，不是 GitHub 自带功能",
      "example": "Read ROUND.json before coding：恢复真实轮次状态",
      "chapter": 24,
      "level": 1,
      "category": "agent"
    },
    {
      "id": "handoff",
      "en": "Handoff",
      "zh": "研发交接",
      "note": "在 GitHub 留下已做、未做、阻断与下一行动，方便新聊天继续",
      "example": "Handoff after a failed CI：交接阻断证据",
      "chapter": 24,
      "level": 1,
      "category": "agent"
    },
    {
      "id": "scope-baseline",
      "en": "Scope baseline",
      "zh": "范围/设计验收基线",
      "note": "已确认的 PRD 或封版原型；Agent 不应凭空改动",
      "example": "Keep approved baseline：按已确认的设计基线对比",
      "chapter": 24,
      "level": 1,
      "category": "agent"
    },
    {
      "id": "work-package",
      "en": "Work package",
      "zh": "开发工作包",
      "note": "单轮次可审查的小开发部分；多个 PR 不必等于多个轮次",
      "example": "Seven packages, one iteration：工作包非独立产品版本",
      "chapter": 24,
      "level": 1,
      "category": "agent"
    },
    {
      "id": "human-signoff",
      "en": "Human sign-off",
      "zh": "人工正式签收",
      "note": "产品负责人确认真实功能/视觉/安全，不由 AI 自己盖章",
      "example": "Owner sign-off pending：不能宣称整体完成",
      "chapter": 24,
      "level": 1,
      "category": "agent"
    },
    {
      "id": "release-facts",
      "en": "Release facts",
      "zh": "实际发布事实",
      "note": "工程账本记录真实服务器 SHA、迁移与备份证据",
      "example": "Record actual release facts：只写真实执行结果",
      "chapter": 24,
      "level": 2,
      "category": "agent"
    },
    {
      "id": "review-gate",
      "en": "Review gate",
      "zh": "合并/发布审查门禁",
      "note": "要求安全、测试、审批达到条件才继续，不是口头绿灯",
      "example": "Review gate blocks release：不满足条件不发布",
      "chapter": 24,
      "level": 2,
      "category": "agent"
    },
    {
      "id": "least-privilege",
      "en": "Least privilege",
      "zh": "最小权限原则",
      "note": "只给 AI/Actions/成员完成任务所需权限，降低泄密与误操作",
      "example": "Limit workflow token permissions：缩小令牌权限",
      "chapter": 24,
      "level": 1,
      "category": "security"
    },
    {
      "id": "github-token",
      "en": "GITHUB_TOKEN",
      "zh": "Actions 默认令牌",
      "note": "作业中的临时授权令牌，具体读写范围受权限配置控制",
      "example": "Set permissions: contents read：只读源码",
      "chapter": 24,
      "level": 2,
      "category": "security"
    },
    {
      "id": "secret-scanning",
      "en": "Secret scanning",
      "zh": "密钥泄露扫描",
      "note": "帮助发现提交中的某些凭据，但不能代替避免提交真实秘密",
      "example": "Never commit secrets：不要依赖扫描兜底",
      "chapter": 24,
      "level": 2,
      "category": "security"
    },
    {
      "id": "protected-personal-data",
      "en": "Sensitive personal data",
      "zh": "敏感个人资料",
      "note": "身份信息、业务记录原件及生产数据库不应进入公开代码仓库或 CI",
      "example": "Use synthetic examples only：只使用合成测试样本",
      "chapter": 24,
      "level": 1,
      "category": "security"
    },
    {
      "id": "idempotency",
      "en": "Idempotency",
      "zh": "幂等性",
      "note": "同一请求重复执行时不会生成重复业务记录或产生意外部署影响",
      "example": "Retry safely：重复调用不产生重复记录",
      "chapter": 24,
      "level": 2,
      "category": "automation"
    },
    {
      "id": "audit-trail",
      "en": "Audit trail",
      "zh": "操作审计链",
      "note": "保存谁在何时做了什么动作及结果，不记录明文口令",
      "example": "Audit trail proves revocation：可追溯授权操作",
      "chapter": 24,
      "level": 2,
      "category": "agent"
    },
    {
      "id": "concurrency-control",
      "en": "Concurrency control",
      "zh": "并发控制",
      "note": "避免两个发布任务或聊天同时覆盖同一资源，仍需读取最新 SHA",
      "example": "Only one production deploy at a time：防发布互撞",
      "chapter": 24,
      "level": 2,
      "category": "automation"
    },
    {
      "id": "not-run",
      "en": "Not run",
      "zh": "未执行",
      "note": "测试或发布尚未执行，不能用失败/通过代替",
      "example": "Visual test: not_run：尚未做视觉人工验收",
      "chapter": 24,
      "level": 1,
      "category": "states"
    },
    {
      "id": "not-verified",
      "en": "Not verified",
      "zh": "未核实",
      "note": "有说法或部分迹象，但缺少独立证据，不能当通过",
      "example": "Database migration: not_verified：尚未核验真实库",
      "chapter": 24,
      "level": 1,
      "category": "states"
    },
    {
      "id": "exit-code",
      "en": "Exit code",
      "zh": "命令退出码",
      "note": "自动化命令用返回码表示成功或失败；0 通常是正常结束",
      "example": "Exit code 1：该步骤执行失败",
      "chapter": 24,
      "level": 2,
      "category": "automation"
    },
    {
      "id": "release-evidence",
      "en": "Release evidence",
      "zh": "发布证据",
      "note": "部署 Run、服务器 SHA、健康/权限/恢复记录的组合",
      "example": "Provide release evidence：提供可审计的上线依据",
      "chapter": 24,
      "level": 2,
      "category": "agent"
    },
    {
      "id": "source-provenance",
      "en": "Data provenance",
      "zh": "数据来源链",
      "note": "区分真实资料、转录内容和用户描述，不把未经核验的来源写成已验证事实",
      "example": "Preserve source provenance：数据来源必须可追溯",
      "chapter": 24,
      "level": 2,
      "category": "agent"
    }
  ]
};
