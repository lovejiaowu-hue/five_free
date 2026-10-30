import fs from "node:fs";
import path from "node:path";
const read = p => fs.readFileSync(p, "utf8");
const html = read("index.html");
const site = read("assets/js/site.js");
const manual = read("assets/js/manual.js");
const source = read("docs/GitHub_中文使用手册_2026-10.md");
const count = (source.match(/^## \d{2}\./gm) || []).length;
if(count !== 23) throw Error("Expected 23 chapters, found "+count);
if(!manual.includes("GITHUB_MANUAL_MARKDOWN")) throw Error("Missing handbook data");
for(const p of ["assets/css/site.css","assets/js/site.js","assets/js/manual.js","assets/icons/lucide/LICENSE"]){
 if(!fs.existsSync(p)) throw Error("Missing: "+p);
}
const names = new Set([
 ...[...html.matchAll(/icons\/lucide\/([\w-]+)\.svg/g)].map(x=>x[1]),
 ...[...site.matchAll(/\bic\("([\w-]+)"/g)].map(x=>x[1]),
 "compass","folder-git-2","git-pull-request","settings","rocket","list-checks",
 "file-plus","git-branch","git-commit-horizontal","git-merge","tag","route","code",
 "circle-check","triangle-alert","book-open","search","moon","menu","languages"
]);
for(const n of names){
 const p=path.join("assets","icons","lucide",n+".svg");
 if(!fs.existsSync(p)) throw Error("Missing icon: "+p);
 if(!read(p).includes("<svg")) throw Error("Invalid SVG: "+p);
}
console.log("PASS: 23 chapters, all required files, "+names.size+" verified icons");
