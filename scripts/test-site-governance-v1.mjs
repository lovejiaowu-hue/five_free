import fs from "node:fs";
import assert from "node:assert/strict";
import {spawnSync} from "node:child_process";

const path="governance/site-publications.json";
const saved=fs.readFileSync(path,"utf8");
const config=JSON.parse(saved);
const id="CASE-9999",file="experience/cases/"+id+".md";
assert.ok(!fs.existsSync(file),"Synthetic test ID is occupied; stop");
function cmd(name){
 const r=spawnSync(process.execPath,["scripts/"+name],{encoding:"utf8"});
 return {ok:r.status===0,detail:r.stderr||r.stdout};
}
function pass(name){const r=cmd(name);assert.ok(r.ok,name+": "+r.detail);}
try{
 pass("check-public-experience.mjs");
 pass("build-pages.mjs");
 pass("check-pages-bundle.mjs");
 if(config.published_case_ids.length===0)
  assert.ok(!fs.existsSync("dist/experience"),"No cases should publish by default");
 const sample="---\ncase_id: CASE-9999\nrepository_review: approved\nredaction_review: approved\n"+
 "website_review: not_requested\nreviewed_on: 2026-11-11\n---\n"+
 "# 虚构经验：网站双重审批测试\n\n"+
 "这是自动测试临时生成的纯合成示例，只为检查网站发布白名单、审核状态及内容转义。" +
 "其中没有任何真实项目、个人身份、机构数据或生产配置，也不会作为真实经验提交到 Git 历史。\n";
 fs.writeFileSync(file,sample);
 fs.writeFileSync(path,JSON.stringify({schema_version:1,published_case_ids:
  [...config.published_case_ids,id]}));
 assert.ok(!cmd("check-public-experience.mjs").ok,
  "Listing a case without independent website review must fail validation");
 assert.ok(!cmd("build-pages.mjs").ok,
  "Packager must refuse a case without separate website approval");
 fs.writeFileSync(file,sample.replace("website_review: not_requested","website_review: approved"));
 pass("check-public-experience.mjs");
 pass("build-pages.mjs");
 pass("check-pages-bundle.mjs");
 assert.ok(fs.existsSync("dist/experience/"+id+".html"),"Approved synthetic case page missing");
} finally {
 fs.writeFileSync(path,saved);
 fs.rmSync(file,{force:true});
 pass("check-public-experience.mjs");
 pass("build-pages.mjs");
 pass("check-pages-bundle.mjs");
}
console.log("PASS: site-only authorization denied unless both controls match; original bundle restored");
