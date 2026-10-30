import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const assets = {};
const listeners = {};
const storage = new Map();
const document = {
  addEventListener(name, cb) { listeners["document:" + name] = cb; },
  getElementById() { return { classList: { contains() { return true; } } }; },
  activeElement: { tagName: "BODY" }
};
const localStorage = {
  getItem(key) { return storage.get(key) || null; },
  setItem(key, val) { storage.set(key, val); }
};
const window = {
  setTimeout(callback) { return 1; },
  clearTimeout() {},
  confirm() { return true; }
};
const sandbox = { window, document, localStorage, console, Date, Map, Math, JSON,
  navigator: {}, SpeechSynthesisUtterance: undefined };
vm.runInNewContext(fs.readFileSync("assets/js/vocabulary.js", "utf8"), sandbox);
assert.equal(window.GITHUB_VOCABULARY.items.length, 129, "Must retain all 129 cards");
assert.equal(window.GITHUB_VOCABULARY.groups.length, 6);
vm.runInNewContext(fs.readFileSync("assets/js/flashcards.js", "utf8"), sandbox);

const root = { dataset: {}, innerHTML: "", addEventListener(name, cb) { listeners[name] = cb; },
  querySelector() { return null; }
};
window.GithubFlashcards.mount(root);
assert.ok(root.innerHTML.includes("抽卡学习"), "Cards should render");
assert.ok(root.innerHTML.includes("data-wc-action=\"flip\""), "Flip control required");
assert.ok(root.innerHTML.includes("未掌握"), "Default practice filter required");
assert.equal(window.GithubFlashcards.count(), 129);

const first = window.GITHUB_VOCABULARY.items[0];
assert.ok(first.en && first.zh && first.note && first.example);
function click(action, wordId) {
  const found = { dataset: { wcAction: action, wcWord: wordId },
    closest(selector) { return selector === "[data-wc-action]" ? this : null; } };
  listeners.click({ target: found });
}
// Test word status and bookmark through list-initiated action.
click("mastered", first.id);
assert.equal(window.GithubFlashcards.stats().mastered, 1);
click("review", first.id);
assert.equal(window.GithubFlashcards.stats().mastered, 0);
assert.equal(window.GithubFlashcards.stats().review, 1);
click("favorite", first.id);
assert.equal(window.GithubFlashcards.stats().saved, 1);
click("favorite", first.id);
assert.equal(window.GithubFlashcards.stats().saved, 0);
assert.ok(storage.get("five-github-words-v1"), "Progress must persist");
console.log("PASS: flashcard boot, 129 terms, flip control, marking, favorites and persistence");
