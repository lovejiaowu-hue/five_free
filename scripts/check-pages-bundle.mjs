import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";

const collect=dir=>fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>{
 const file=path.join(dir,e.name);
 return e.isDirectory()?collect(file):[file.replace(/\\/g,"/")];
});
assert.ok(fs.existsSync("dist/index.html"),"Pages bundle missing: run build-pages first");
const m=JSON.parse(fs.readFileSync("governance/site-publications.json","utf8"));
const expected=["index.html",...collect("assets"),
 ...m.published_case_ids.map(id=>"experience/"+id+".html")].sort();
const actual=collect("dist").map(file=>file.slice("dist/".length)).sort();
assert.deepEqual(actual,expected,"Pages artifact file list differs from explicit allowlist");
for(const name of expected){
 if(name.startsWith("experience/"))continue;
 assert.deepEqual(fs.readFileSync("dist/"+name),fs.readFileSync(name),
  "Website original file changed during packaging: "+name);
}
for(const name of ["README.md","governance/PUBLICATION.md",
 "docs/GitHub_中文使用手册_2026-10.md","experience/README.md","scripts/build-pages.mjs"])
 assert.ok(!actual.includes(name),"Non-site content was published: "+name);
console.log("PASS: "+actual.length+" approved Pages files, byte-identical original HTML/CSS/JS/SVG");
