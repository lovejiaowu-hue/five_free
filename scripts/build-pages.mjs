import fs from "node:fs";
import path from "node:path";

const dist="dist";
const fail=m=>{throw Error("Pages publication denied: "+m);};
const manifest=JSON.parse(fs.readFileSync("governance/site-publications.json","utf8"));
if(manifest.schema_version!==1 || !Array.isArray(manifest.published_case_ids))
 fail("Invalid site allowlist");
const ids=manifest.published_case_ids;
if(new Set(ids).size!==ids.length || ids.some(x=>!/^CASE-\d{4}$/.test(x)))
 fail("Invalid or duplicate case id");
function copy(src) {
 if(fs.lstatSync(src).isSymbolicLink() || !fs.statSync(src).isFile())fail("Non-file asset: "+src);
 fs.mkdirSync(path.dirname(path.join(dist,src)),{recursive:true});
 fs.copyFileSync(src,path.join(dist,src));
}
function walk(dir) {
 for(const entry of fs.readdirSync(dir,{withFileTypes:true})){
  const file=dir+"/"+entry.name;
  if(entry.isSymbolicLink())fail("Asset symlink forbidden: "+file);
  if(entry.isDirectory()){
   if(!["assets/css","assets/js","assets/icons","assets/icons/lucide"].includes(file))
    fail("Unknown asset directory: "+file);
   walk(file);
  } else if(entry.isFile()){
   const ok=/^assets\/css\/[\w-]+\.css$/.test(file) ||
    /^assets\/js\/[\w-]+\.js$/.test(file) ||
    /^assets\/icons\/lucide\/[\w-]+\.svg$/.test(file) ||
    file==="assets/icons/lucide/LICENSE";
   if(!ok)fail("Unapproved asset: "+file);
   copy(file);
  } else fail("Unsupported asset: "+file);
 }
}
function reviewed(source,id) {
 const m=source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
 if(!m)fail("Review metadata missing: "+id);
 const fields={};
 for(const line of m[1].split(/\r?\n/)){
  const kv=line.match(/^([a-z_]+):\s*(.*?)\s*$/);
  if(!kv || Object.hasOwn(fields,kv[1]))fail("Malformed metadata: "+id);
  fields[kv[1]]=kv[2];
 }
 if(fields.case_id!==id || fields.repository_review!=="approved" ||
    fields.redaction_review!=="approved" || fields.website_review!=="approved" ||
    !/^\d{4}-\d{2}-\d{2}$/.test(fields.reviewed_on||""))
  fail("Site approval not confirmed: "+id);
 return m[2];
}
const escape=s=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;")
 .replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");
function paragraphs(body) {
 return body.replace(/\r/g,"").split("\n").map(line=>{
  const h=line.match(/^(#{1,3})\s+(.+)$/);
  if(h)return "<h"+h[1].length+">"+escape(h[2])+"</h"+h[1].length+">";
  if(!line.trim())return "";
  const li=line.match(/^[-*]\s+(.+)$/);
  if(li)return "<p>• "+escape(li[1])+"</p>";
  return "<p>"+escape(line)+"</p>";
 }).join("\n");
}
function html(id,body) {
 const heading=body.match(/^#\s+(.+)$/m);
 if(!heading)fail("Case has no title: "+id);
 return '<!doctype html><html lang="zh-CN"><head><meta charset="utf-8">' +
 '<meta name="viewport" content="width=device-width,initial-scale=1">' +
 '<title>'+escape(heading[1])+' · GitHub 中文学习</title>' +
 '<link rel="stylesheet" href="../assets/css/site.css">' +
 '<link rel="stylesheet" href="../assets/css/experience-v3.css">' +
 '<style>.public-case{max-width:830px;margin:0 auto;padding:26px 20px 70px}' +
 '.public-case header{border-bottom:1px solid var(--line);margin-bottom:20px;padding-bottom:14px}' +
 '.public-case article{font-size:18px;line-height:1.9;overflow-wrap:anywhere}' +
 '.public-case h1{font-size:29px}.public-case h2{font-size:23px;margin:30px 0 12px}' +
 '.public-case h3{font-size:20px}.public-case article p{margin:12px 0 18px}' +
 '</style></head><body><main class="public-case"><header><a href="../index.html">' +
 'GitHub 中文学习中心</a><p>授权脱敏的匿名经验 · '+id+'</p></header><article>' +
 paragraphs(body)+'</article></main></body></html>\n';
}
fs.rmSync(dist,{recursive:true,force:true});
fs.mkdirSync(dist,{recursive:true});
copy("index.html");
walk("assets");
for(const id of ids){
 const file="experience/cases/"+id+".md";
 if(!fs.existsSync(file))fail("Listed case file is missing: "+id);
 const body=reviewed(fs.readFileSync(file,"utf8"),id);
 const output=path.join(dist,"experience",id+".html");
 fs.mkdirSync(path.dirname(output),{recursive:true});
 fs.writeFileSync(output,html(id,body),"utf8");
}
console.log("PASS: isolated Pages site bundle; "+ids.length+" approved experience page(s)");
