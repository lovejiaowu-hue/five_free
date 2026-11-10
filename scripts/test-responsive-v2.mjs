import fs from "node:fs";
import assert from "node:assert/strict";
import vm from "node:vm";

const read = (name) => fs.readFileSync(name, "utf8");
const html = read("index.html");
const css = read("assets/css/responsive-v2.css");
const siteJS = read("assets/js/site.js");
const cardsJS = read("assets/js/flashcards.js");
const manualJS = read("assets/js/manual.js");
const vocabJS = read("assets/js/vocabulary.js");

const order = ["site.css", "flashcards.css", "responsive-v2.css"].map((name) => html.indexOf(name));
assert.ok(order.every((i) => i > 0) && order.every((i, j) => j === 0 || i > order[j - 1]),
  "New layout CSS must load last, without replacing existing CSS.");
for (const width of [761, 1200, 1500, 1800]) {
  assert.match(css, new RegExp("min-width:\\s*" + width + "px"), "Missing responsive breakpoint " + width);
}
assert.match(css, /max-width:760px/, "Preserve mobile breakpoint");

assert.match(css, /@media\s*\(min-width:\s*761px\)/, "Desktop-specific grid guard required");
assert.match(css, /\.shell\s*>\s*\.mobile-scrim\s*\{\s*display:none\s*!important\s*\}/,
  "Desktop mobile overlay must be hidden so it cannot consume grid column 1");
assert.match(css, /\.shell\s*>\s*\.sidebar\s*\{\s*grid-column:1\s*;\s*grid-row:1\s*;/,
  "Sidebar must occupy column 1, row 1");
assert.match(css, /\.shell\s*>\s*#main\s*\{\s*grid-column:2\s*;\s*grid-row:1\s*;/,
  "Content must occupy column 2, row 1");
assert.match(css, /\.shell\s*>\s*\.right-rail\s*\{\s*grid-column:3\s*;\s*grid-row:1\s*;/,
  "Reading table of contents must occupy column 3, row 1");
assert.match(html, /<div class="mobile-scrim"[^>]*><\/div>\s*<aside class="sidebar"/,
  "Regression guard: mobile overlay must not push desktop sidebar into main column");
assert.match(read("assets/css/site.css"), /body\.menu-open\s+\.mobile-scrim\s*\{\s*display:block\s*\}/,
  "Existing mobile overlay interaction must remain intact");

assert.match(css, /\.pc-home-hero\s*\{display:grid/, "Desktop homepage must be a real two-column layout");
assert.match(css, /\.wc-studio-layout\s*\{display:grid/, "Desktop flashcard studio must have two columns");
assert.match(css, /\.article\s*\{font-size:var\(--pc-reading-font\)/, "Desktop typography upgrade missing");
assert.match(cardsJS, /side\.insertBefore\(stats/, "Stats must be moved into studio rail");
assert.match(cardsJS, /side\.insertBefore\(progress/, "Learning progress must be moved into studio rail");
assert.match(cardsJS, /wc-studio-layout/, "Desktop studio view missing");
for (const unchanged of ["five-github-words-v1", "wc-filter", "wc-action", "wcWordSearch"]) {
  assert.ok(cardsJS.includes(unchanged), "Existing flashcard function missing: " + unchanged);
}
assert.match(css, /@media\(max-width:760px\)/, "Mobile layout must remain supported");
assert.match(read("assets/css/flashcards.css") + css, /prefers-reduced-motion|wc-flipcard/, "Flashcard base styles not present");
const openBraces = [...css].filter((x) => x === "{").length;
const closeBraces = [...css].filter((x) => x === "}").length;
assert.equal(openBraces, closeBraces, "CSS block braces unbalanced");

// Evaluate the actual site JS with a minimal DOM harness to catch runtime
// errors in home and handbook routes, without adding npm dependencies.
const elements = new Map();
function element(id) {
  if (!elements.has(id)) elements.set(id, {
    id, innerHTML: "", dataset: {}, style: {}, onclick: null,
    classList: { add() {}, remove() {}, toggle() {}, contains() { return false; } },
    addEventListener() {}, focus() {}, querySelector() { return null; }
  });
  return elements.get(id);
}
const location = { hash: "#/home", href: "https://example.test/five_free/#/home" };
const window = { addEventListener() {}, scrollTo() {} };
const document = {
  getElementById: element, querySelector: () => element("sidebarHome"),
  querySelectorAll: () => [], addEventListener() {}, activeElement: { tagName: "BODY" }
};
const localStorage = { getItem() { return null; }, setItem() {} };
const sandbox = { window, document, location, localStorage, navigator: {}, console };
vm.runInNewContext(manualJS, sandbox, { filename: "manual.js" });
vm.runInNewContext(siteJS, sandbox, { filename: "site.js" });
const home = element("view").innerHTML;
for (const expected of ["pc-home-hero", "pc-start-panel", "pc-start-progress", "data-go=\"words\"", "data-go=\"24\"", "data-go=\"25\""]) {
  assert.ok(home.includes(expected), "Missing homepage section: " + expected);
}
assert.match(home, /<section class="hero">[\s\S]*<\/section><aside class="pc-start-panel"/,
  "Hero and quick-learning panel must be siblings in the desktop grid");
const vocabSandbox = { window: {} };
vm.runInNewContext(vocabJS, vocabSandbox);
assert.equal(vocabSandbox.window.GITHUB_VOCABULARY.items.length, 210);
assert.equal(vocabSandbox.window.GITHUB_VOCABULARY.groups.length, 7);
assert.equal((read("docs/GitHub_中文使用手册_2026-10.md").match(/^## \d{2}\./gm) || []).length, 25);
console.log("PASS: responsive V2 CSS breakpoints, PC dashboard DOM, 25 chapters and 210 cards");
