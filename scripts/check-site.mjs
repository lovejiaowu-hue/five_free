import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const read = p => fs.readFileSync(p, "utf8");
const html = read("index.html");
const site = read("assets/js/site.js");
const flash = read("assets/js/flashcards.js");
const vocab = read("assets/js/vocabulary.js");
const source = read("docs/GitHub_中文使用手册_2026-10.md");
const chapterCount = (source.match(/^## \d{2}\./gm) || []).length;
if (chapterCount !== 27) throw Error("Expected 27 handbook chapters: " + chapterCount);
const manualSandbox = { window: {} };
vm.runInNewContext(read("assets/js/manual.js"), manualSandbox);
if (manualSandbox.window.GITHUB_MANUAL_MARKDOWN !== source) {
  throw Error("Markdown source and embedded site handbook differ; regenerate manual.js");
}
for (const p of [
  "assets/css/site.css", "assets/css/flashcards.css", "assets/js/site.js",
  "assets/js/manual.js", "assets/js/vocabulary.js", "assets/js/flashcards.js",
  "assets/icons/lucide/LICENSE"
]) if (!fs.existsSync(p)) throw Error("Missing " + p);
for (const required of ["assets/css/flashcards.css", "assets/js/vocabulary.js", "assets/js/flashcards.js", 'id="wordNavButton"']) {
  if (!html.includes(required)) throw Error("index.html missing " + required);
}
if (!site.includes('h==="words"') || !site.includes("GithubFlashcards.mount"))
  throw Error("H5 navigation not integrated with flashcards");

const sandbox = { window: {} };
vm.runInNewContext(vocab, sandbox);
const data = sandbox.window.GITHUB_VOCABULARY;
if (!data || data.groups.length !== 7 || data.items.length !== 210)
  throw Error("Expected 7 categories and 210 flashcards");
const unique = new Set();
for (const c of data.items) {
  if (!c.id || unique.has(c.id)) throw Error("Duplicate/missing word ID: " + c.id);
  unique.add(c.id);
  if (!c.en || !c.zh || !c.note || !c.example || !Number.isInteger(c.chapter) ||
      c.chapter < 1 || c.chapter > 26 || !data.groups.some(g => g.id === c.category))
    throw Error("Incomplete bilingual word card " + c.id);
}
const names = new Set([
  ...[...html.matchAll(/icons\/lucide\/([\w-]+)\.svg/g)].map(x => x[1]),
  ...[...site.matchAll(/\bic\("([\w-]+)"/g)].map(x => x[1]),
  ...[...flash.matchAll(/\bicon\("([\w-]+)"/g)].map(x => x[1]),
  ...data.groups.map(g => g.icon),
  "compass", "folder-git-2", "git-pull-request", "settings", "rocket",
  "list-checks", "file-plus", "git-branch", "git-commit-horizontal", "git-merge",
  "tag", "route", "code", "circle-check", "triangle-alert", "book-open", "search",
  "moon", "menu", "languages", "layers", "refresh-cw", "bookmark", "volume-2",
  "chevron-left", "chevron-right", "shuffle"
]);
for (const n of names) {
  const p = path.join("assets", "icons", "lucide", n + ".svg");
  if (!fs.existsSync(p)) throw Error("Missing icon: " + p);
  if (!read(p).includes("<svg")) throw Error("Invalid SVG: " + p);
}
if (data.items.filter(c => c.chapter === 24).length !== 81 ||
    !data.items.some(c => c.id === "ci" && c.chapter !== 24) ||
    !data.items.some(c => c.id === "ssot" && c.chapter === 24)) {
  throw Error("Original 129 words must remain and 81 practice cards map to chapter 24");
}
if (!site.includes('["实战与治理",18,27]')) throw Error("Chapter 27 not in navigation");
if (!source.includes("## 25. GitHub Actions 免费额度耗尽") || !source.includes("PASS / FAIL / NOT_RUN") || !site.includes('data-go="25"')) throw Error("Actions fallback chapter or home entry is missing");
if (!source.includes("## 26. GitHub Desktop") || !site.includes('data-go="26"')) throw Error("GitHub Desktop chapter or home entry missing");
if (!source.includes("## 27. GitHub Desktop 一直出现 Changes 2") || !site.includes('data-go="27"')) throw Error("CRLF lesson 27 must be visible on homepage and navigation");
if (!read("docs/ai-collaboration/GITHUB_DESKTOP_CRLF_CHANGES_PLAYBOOK.md").includes("*.bat -text diff")) throw Error("Anonymized CRLF playbook missing");

// Public site privacy gate: allow official GitHub references, this documentation
// site's own links, and an explicitly non-live placeholder Pages URL only.
// New external example domains must be reviewed before becoming public.
const publicDocs = [
  ["README.md", read("README.md")],
  ["handbook", source],
  ["CI playbook", read("docs/ai-collaboration/GITHUB_ACTIONS_FREE_QUOTA_CI_PLAYBOOK.md")],
  ["CRLF playbook", read("docs/ai-collaboration/GITHUB_DESKTOP_CRLF_CHANGES_PLAYBOOK.md")]
];
const permittedUrls = [
  /^https:\/\/docs\.github\.com\//i,
  /^https:\/\/github\.com\/settings\/billing\b/i,
  /^https:\/\/github\.com\/lovejiaowu-hue\/five_free(?:\/|$)/i,
  /^https:\/\/lovejiaowu-hue\.github\.io\/five_free(?:\/|$)/i,
  /^https:\/\/USERNAME\.github\.io\/REPOSITORY\/?$/i
];
for (const [label, body] of publicDocs) {
  const urls = [...body.matchAll(/https?:\/\/[^\s<>)"'\]\u0060\uFF0C\u3002\uFF1B]+/g)].map(m => m[0].replace(/[.,;：]+$/, ""));
  for (const url of urls) {
    if (!permittedUrls.some(pattern => pattern.test(url))) {
      throw Error(label + ": URL needs a privacy review before public publication");
    }
  }
  const scripts = body.match(/\bSTART_[A-Z0-9_]+\.cmd\b/g) || [];
  if (scripts.some(name => name !== "START_APP.cmd")) {
    throw Error(label + ": example startup commands must use generic placeholders");
  }
}
if (!source.includes("合成") && !source.includes("虚构")) {
  throw Error("Handbook needs an explicit synthetic case-study disclaimer");
}

console.log("PASS: 27 chapters, 210 flashcards, 7 categories, source sync and " + names.size + " verified icons / public-example policy");
