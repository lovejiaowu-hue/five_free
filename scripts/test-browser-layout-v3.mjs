import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawn, spawnSync } from "node:child_process";
import { pathToFileURL } from "node:url";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
function browserBinary() {
  if (process.env.CHROME_BIN && fs.existsSync(process.env.CHROME_BIN)) return process.env.CHROME_BIN;
  for (const name of ["google-chrome", "google-chrome-stable", "chromium", "chromium-browser"]) {
    const r = spawnSync("sh", ["-lc", "command -v " + name], {encoding:"utf8"});
    if (r.status === 0 && r.stdout.trim()) return r.stdout.trim();
  }
  throw Error("Chrome/Chromium unavailable: mobile and PC browser checks NOT_RUN");
}
const profile = fs.mkdtempSync(path.join(os.tmpdir(), "five-guide-cdp-"));
const chrome = spawn(browserBinary(), [
  "--headless=new", "--disable-gpu", "--disable-dev-shm-usage", "--no-sandbox",
  "--no-first-run", "--remote-debugging-port=0", "--remote-allow-origins=*",
  "--user-data-dir=" + profile, "--allow-file-access-from-files", "about:blank"
], {stdio:"ignore"});
let ws = null, seq = 0;
const pending = new Map();
function send(method, params = {}) {
  return new Promise((resolve, reject) => {
    const id = ++seq;
    pending.set(id, {resolve, reject});
    ws.send(JSON.stringify({id, method, params}));
    setTimeout(() => {
      if (pending.has(id)) {
        pending.delete(id);
        reject(Error("CDP timeout: " + method));
      }
    }, 12000);
  });
}
const measure = [
  "(()=>{",
  "function rect(sel){const e=document.querySelector(sel);if(!e)return null;",
  "const r=e.getBoundingClientRect(),s=getComputedStyle(e);",
  "return {x:r.x,right:r.right,width:r.width,height:r.height,display:s.display,font:s.fontSize};}",
  "const a=document.querySelector('.article');",
  "return JSON.stringify({viewport:innerWidth,fullWidth:document.documentElement.scrollWidth,",
  "overlay:rect('.mobile-scrim'),sidebar:rect('.sidebar'),main:rect('#main'),",
  "rail:rect('.right-rail'),article:rect('.article'),",
  "reader:rect('.reading-toolbar'),card:rect('.wc-flipcard'),",
  "studio:rect('.wc-studio-layout'),font:a?getComputedStyle(a).fontSize:null});",
  "})()"
].join("");
try {
  let activePort = "";
  for(let i=0;i<100;i++){
    try {activePort=fs.readFileSync(path.join(profile,"DevToolsActivePort"),"utf8");break;}
    catch(_) {await sleep(100);}
  }
  assert.ok(activePort,"Chrome DevTools port not available");
  const port=Number(activePort.trim().split("\n")[0]);
  const tabs=await fetch("http://127.0.0.1:"+port+"/json/list").then(r=>r.json());
  const tab=tabs.find(x=>x.type==="page");
  assert.ok(tab,"No Chrome page target");
  ws=new WebSocket(tab.webSocketDebuggerUrl);
  ws.addEventListener("message",event=>{
    const data=JSON.parse(event.data);
    if(data.id&&pending.has(data.id)){
      const item=pending.get(data.id);
      pending.delete(data.id);
      if(data.error)item.reject(Error(JSON.stringify(data.error)));else item.resolve(data.result);
    }
  });
  await new Promise((resolve,reject)=>{
    ws.addEventListener("open",resolve,{once:true});
    ws.addEventListener("error",reject,{once:true});
  });
  await send("Page.enable");
  for(const [width,height,route] of [
    [1366,768,"26"],[1440,900,"1"],[1440,900,"words"],[1920,1080,"home"],
    [390,844,"26"],[375,812,"words"]
  ]) {
    await send("Emulation.setDeviceMetricsOverride", {
      width,height,deviceScaleFactor:1,mobile:width<=760,screenWidth:width,screenHeight:height
    });
    await send("Page.navigate", {url:pathToFileURL(path.resolve("index.html")).href+"#/"+route});
    await sleep(900);
    const response=await send("Runtime.evaluate",{expression:measure,returnByValue:true});
    const raw=response?.result?.value;
    if(!raw)throw Error("Browser returned no measurements: "+width+"/"+route);
    const data=JSON.parse(raw);
    assert.equal(data.viewport,width,"Mobile/PC viewport emulation must match requested width");
    assert.ok(data.main&&data.main.width>200,"Main region not rendered");
    assert.ok(data.fullWidth-width<=3,"Horizontal overflow: "+JSON.stringify(data));
    if(width>=761){
      assert.equal(data.overlay.display,"none","Mobile overlay occupies desktop grid");
      assert.ok(data.sidebar.right<=data.main.x+2,"Sidebar overlaps main region");
      if(data.rail&&data.rail.display!=="none")
        assert.ok(data.main.right<=data.rail.x+2,"Main overlaps reading TOC");
    }
    if(route==="26" || route==="1"){
      assert.ok(data.article&&data.article.width>200,"Article missing");
      assert.ok(data.reader&&data.reader.width>200,"Reader toolbar missing");
      assert.ok(parseFloat(data.font)>=17,"Body font too small: "+data.font);
      assert.ok(data.reader.right<=width+2,"Reading toolbar clipped");
    }
    if(route==="words"){
      assert.ok(data.card&&data.card.width>200,"Flashcard missing");
      assert.ok(data.card.right<=width+2,"Flashcard clipped");
      assert.ok(data.studio&&data.studio.width>200,"Study workspace missing");
    }

    if(route==="1"){
      const result=await send("Runtime.evaluate",{returnByValue:true,
        expression:'(()=>{const w=document.querySelector(".reading-bilingual-wrap");const b=w&&w.querySelector("[data-table-mode=cards]");if(!b)return JSON.stringify({found:false});b.click();return JSON.stringify({found:true,card:w.classList.contains("reading-card-view"),copy:!!w.querySelector(".reading-copy-term")});})()'});
      const value=JSON.parse(result.result.value);
      assert.ok(value.found&&value.card&&value.copy,"Bilingual table/card mode or term copy button failed");
    }
    if(route==="26"){
      const result=await send("Runtime.evaluate",{returnByValue:true,
        expression:'(()=>{const a=document.querySelector(".article"),b=document.querySelector("[data-reader-action=larger]");const before=parseFloat(getComputedStyle(a).fontSize);b.click();return JSON.stringify({before,after:parseFloat(getComputedStyle(a).fontSize)});})()'});
      const value=JSON.parse(result.result.value);
      assert.ok(value.after>value.before,"Reading size controls did not affect actual text");
    }
    if(route==="words"){
      const result=await send("Runtime.evaluate",{returnByValue:true,
        expression:'(()=>{const c=document.querySelector(".wc-flipcard");c.click();return JSON.stringify({same:c===document.querySelector(".wc-flipcard"),flipped:c.classList.contains("flipped"),example:!!c.querySelector(".wc-example-lines")});})()'});
      const value=JSON.parse(result.result.value);
      assert.ok(value.same&&value.flipped&&value.example,"Real browser flashcard flip or bilingual example failed at "+width+": "+JSON.stringify(value));
    }
    console.log("PASS browser",width+"x"+height,route,"exact viewport",data.viewport,
      "main",Math.round(data.main.width),"body overflow",data.fullWidth-width);
  }
} finally {
  try {if(ws)ws.close();} catch(_){}
  try {chrome.kill("SIGTERM");} catch(_){}
  // Chrome may still be releasing profile locks. Ignore temporary cleanup failures.
  await sleep(450);
  try {fs.rmSync(profile,{recursive:true,force:true,maxRetries:3,retryDelay:100});} catch(_){}
}
