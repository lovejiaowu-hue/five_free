import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
const read=p=>fs.readFileSync(p,"utf8");
const html=read("index.html"),site=read("assets/js/site.js"),cardSrc=read("assets/js/flashcards.js");
const readerSrc=read("assets/js/reading-v3.js"),css=read("assets/css/experience-v3.css");
const oldCSS=read("assets/css/responsive-v2.css"),md=read("docs/GitHub_中文使用手册_2026-10.md");
const order=["site.css","flashcards.css","responsive-v2.css","experience-v3.css"].map(p=>html.indexOf("./assets/css/"+p));
assert.ok(order.every((x,i)=>x>0&&(i===0||x>order[i-1])),"CSS cascade order wrong");
const scriptOrder=["manual.js","vocabulary.js","flashcards.js","reading-v3.js","site.js"].map(p=>html.indexOf("./assets/js/"+p));
assert.ok(scriptOrder.every((x,i)=>x>0&&(i===0||x>scriptOrder[i-1])),"Script order wrong");
assert.ok(site.includes("GithubReadingExperience.mount(view)"),"Chapter route not enhanced");
assert.ok(css.includes(".reading-card-view")&&css.includes(".reading-bilingual-table"));
assert.ok(css.includes("@media(max-width:760px)")&&css.includes("--reading-font"));
assert.ok(oldCSS.includes(".shell > .mobile-scrim{display:none!important}"),"Old PC grid regression fix missing");
assert.ok(!css.includes(".shell{")&&!css.includes(".sidebar{"),"New CSS should not change shell grid");

const store=new Map(),localStorage={getItem:k=>store.get(k)||null,setItem:(k,v)=>store.set(k,v)};
let font="",onReaderClick;
const document={
 createElement(tag){return{tagName:tag,innerHTML:"",className:"",dataset:{},setAttribute(){},appendChild(){}}}
};
const article={isConnected:true,offsetHeight:1800,
 style:{setProperty(k,v){if(k==="--reading-font")font=v}},
 getBoundingClientRect(){return{top:-120}},querySelectorAll(){return[]},
 parentNode:{insertBefore(node){assert.equal(node.className,"reading-toolbar")}}
};
const root={dataset:{},appendChild(){},classList:{toggle(){}},
 querySelector(sel){return sel===".article"?article:null},
 addEventListener(event,fn){if(event==="click")onReaderClick=fn}
};
const window={innerHeight:900,addEventListener(){},setTimeout(){}};
const ctx={window,document,localStorage,navigator:{},console,Date,Number,Math,JSON,Array,String};
vm.runInNewContext(readerSrc,ctx,{filename:"reading-v3.js"});
window.GithubReadingExperience.mount(root);
assert.equal(font,"18px");
const inc={dataset:{readerAction:"larger"},closest(sel){return sel==="[data-reader-action]"?this:null}};
onReaderClick({target:inc});
assert.equal(font,"19px");assert.equal(JSON.parse(store.get("five-guide-reading-v3")).size,19);

const cardEvents={},classes=new Set();let renders=0;
const card={classList:{toggle(k,v){if(v)classes.add(k);else classes.delete(k)}},setAttribute(k,v){this[k]=v}};
const wordRoot={dataset:{},set innerHTML(v){renders++;this.html=v},get innerHTML(){return this.html||""},
 addEventListener(k,fn){cardEvents[k]=fn},
 querySelector(sel){return sel===".wc-flipcard"?card:null}
};
const wordDoc={addEventListener(){},getElementById(){return{classList:{contains(){return true}}}},
 activeElement:{tagName:"BODY"}};
const wordWindow={setTimeout(){},clearTimeout(){},confirm(){return true}};
const wc={window:wordWindow,document:wordDoc,localStorage,navigator:{},console,Date,Map,Math,JSON};
vm.runInNewContext(read("assets/js/vocabulary.js"),wc);
vm.runInNewContext(cardSrc,wc);
assert.equal(wordWindow.GithubFlashcards.count(),210);
wordWindow.GithubFlashcards.mount(wordRoot);
assert.equal(renders,1);assert.ok(wordRoot.innerHTML.includes("wc-example-lines"));
const flip={dataset:{wcAction:"flip"},closest(sel){return sel==="[data-wc-action]"?this:null}};
cardEvents.click({target:flip});
assert.equal(renders,1,"Flip must not repaint the entire DOM");assert.ok(classes.has("flipped"));
assert.equal(card["aria-pressed"],"true");
assert.ok(store.get("five-github-words-v1"),"Existing word store key should remain");
cardEvents.click({target:flip});
assert.equal(renders,1);assert.ok(!classes.has("flipped"));
cardEvents.click({target:flip});
assert.ok(classes.has("flipped"),"Card must show answer after click");
wordWindow.GithubFlashcards.mount(wordRoot);
assert.ok(!wordRoot.innerHTML.includes('wc-flipcard flipped'),
  "Returning to study page should reset only the card face, not stored learning marks");
const markdownMirror={window:{}};
vm.runInNewContext(read("assets/js/manual.js"),markdownMirror);
assert.equal(markdownMirror.window.GITHUB_MANUAL_MARKDOWN,md);
assert.equal((md.match(/^## \d{2}\./gm)||[]).length,26);
console.log("PASS: 26 chapters, 210 cards, V3 CSS isolation, reading-size persistence, real flip animation, existing word storage");
