import fs from "node:fs";
import path from "node:path";

const manifest=JSON.parse(fs.readFileSync("governance/site-publications.json","utf8"));
if(manifest.schema_version!==1 || !Array.isArray(manifest.published_case_ids))
 throw Error("Invalid site allowlist");
const ids=manifest.published_case_ids,listed=new Set(ids);
if(ids.some(id=>!/^CASE-\d{4}$/.test(id)) || listed.size!==ids.length)
 throw Error("Unexpected or duplicate site case ID");
const suspicious=[
 /-----BEGIN (?:RSA |OPENSSH |EC )?PRIVATE KEY-----/i,
 /\bgh[pousr]_[A-Za-z0-9]{20,}\b/,
 /\bsk-[A-Za-z0-9]{20,}\b/,
 /\b(?:api[_-]?key|access[_-]?token|password|secret)\s*[:=]\s*["']?[A-Za-z0-9_\-]{12,}/i,
 /\b\d{17}[\dXx]\b/,
 /https?:\/\/(?!docs\.github\.com(?:\/|\b)|github\.com\/lovejiaowu-hue\/five_free(?:\/|\b)|USERNAME\.github\.io\/REPOSITORY(?:\/|\b)|example\.com(?:\/|\b))[^\s)"'<>]+/i
];
let count=0;
for(const [subdir,prefix] of [["cases","CASE"],["methods","METHOD"]]){
 const dir=path.join("experience",subdir);
 for(const ent of fs.readdirSync(dir,{withFileTypes:true})){
  if(ent.name==="README.md")continue;
  if(ent.isSymbolicLink() || !ent.isFile() ||
     !new RegExp("^"+prefix+"-\\d{4}\\.md$").test(ent.name))
    throw Error("Unexpected file in public experience: "+subdir);
  const id=ent.name.slice(0,-3);
  const body=fs.readFileSync(path.join(dir,ent.name),"utf8");
  const m=body.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if(!m)throw Error("Missing public review metadata: "+id);
  const fields={};
  for(const line of m[1].split(/\r?\n/)){
   const kv=line.match(/^([a-z_]+):\s*(.*?)\s*$/);
   if(!kv || Object.hasOwn(fields,kv[1]))throw Error("Malformed public review metadata: "+id);
   fields[kv[1]]=kv[2];
  }
  if(fields.case_id!==id || fields.repository_review!=="approved" ||
     fields.redaction_review!=="approved" ||
     !["approved","not_requested"].includes(fields.website_review) ||
     !/^\d{4}-\d{2}-\d{2}$/.test(fields.reviewed_on||""))
    throw Error("Incomplete public review declarations: "+id);
  if(m[2].length<90 || !/^#\s+\S+/m.test(m[2]))
    throw Error("Case lacks a reviewable narrative: "+id);
  for(const rx of suspicious)if(rx.test(body))
    throw Error("Potential sensitive marker; manual review required: "+id);
  if((fields.website_review==="approved")!==listed.has(id))
    throw Error("Website-review flag differs from explicit site allowlist: "+id);
  if(prefix==="METHOD" && listed.has(id))
    throw Error("Method pages are not site-publication entries in V1.2");
  count++;
 }
}
for(const id of listed)
 if(!fs.existsSync("experience/cases/"+id+".md"))
  throw Error("Site-listed case missing from public folder: "+id);
console.log("PASS: "+count+" public-reviewed experience document(s), "+listed.size+
 " website-listed case(s); independent human authorization remains mandatory");
