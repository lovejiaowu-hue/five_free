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
if (chapterCount !== 23) throw Error("Expected 23 handbook chapters: " + chapterCount);
if (!read("assets/js/manual.js").includes("GITHUB_MANUAL_MARKDOWN")) throw Error("Handbook missing");
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
if (!data || data.groups.length !== 6 || data.items.length !== 129)
  throw Error("Expected 6 categories and 129 flashcards");
const unique = new Set();
for (const c of data.items) {
  if (!c.id || unique.has(c.id)) throw Error("Duplicate/missing word ID: " + c.id);
  unique.add(c.id);
  if (!c.en || !c.zh || !c.note || !c.example || !Number.isInteger(c.chapter) ||
      c.chapter < 1 || c.chapter > 23 || !data.groups.some(g => g.id === c.category))
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
console.log("PASS: 23 chapters, 129 flashcards, 6 categories, " + names.size + " verified icon files");
