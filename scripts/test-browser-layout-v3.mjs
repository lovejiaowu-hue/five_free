import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { pathToFileURL } from "node:url";

function findChrome() {
  if (process.env.CHROME_BIN && fs.existsSync(process.env.CHROME_BIN)) return process.env.CHROME_BIN;
  for (const name of ["google-chrome", "google-chrome-stable", "chromium", "chromium-browser"]) {
    const r = spawnSync("sh", ["-lc", "command -v " + name], { encoding: "utf8" });
    if (r.status === 0 && r.stdout.trim()) return r.stdout.trim();
  }
  throw Error("No headless Chrome/Chromium found; browser layout verification is NOT_RUN");
}
const browser = findChrome();
const html = fs.readFileSync("index.html", "utf8");
const file = path.join(process.cwd(), ".v3-browser-check.html");
fs.writeFileSync(file, html.replace("</body>",
  '<script src="./scripts/layout-probe-v3.js"></script></body>'));
function run(width, height, route) {
  const url = pathToFileURL(file).href + "#/" + route;
  const out = spawnSync(browser, ["--headless=new", "--disable-gpu",
    "--disable-dev-shm-usage", "--no-sandbox", "--allow-file-access-from-files",
    "--no-first-run", "--no-default-browser-check", "--hide-scrollbars",
    "--force-device-scale-factor=1", "--virtual-time-budget=2800",
    "--window-size=" + width + "," + height, "--dump-dom", url
  ], {encoding:"utf8",timeout:30000,maxBuffer:12*1024*1024});
  if (out.error) throw out.error;
  if (out.status !== 0) throw Error("Browser exited "+out.status+": "+out.stderr.slice(-600));
  const m = out.stdout.match(/<pre id="layout-metrics">([^<]+)<\/pre>/);
  if (!m) throw Error("No layout metrics for "+route+" @"+width+": "+out.stderr.slice(-450));
  const data = JSON.parse(m[1].replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">"));
  const vw = data.viewport;
  assert.ok(vw >= 320, "Unexpected viewport " + vw);
  assert.ok(data.main && data.main.width > 200, "Main view collapsed");
  assert.ok(data.fullWidth - vw <= 3, "Horizontal page overflow: " + JSON.stringify(data));
  if (vw >= 761) {
    assert.equal(data.overlay.display, "none", "H5 overlay participated in desktop Grid");
    assert.ok(data.sidebar.right <= data.main.x + 2, "Sidebar overlaps main");
    if (data.rail && data.rail.display !== "none")
      assert.ok(data.main.right <= data.rail.x + 2, "Main overlaps table of contents");
  }
  if (route === "26") {
    assert.ok(data.article && data.article.width > 200, "Chapter article missing");
    assert.ok(data.reader && data.reader.width > 200, "Reading toolbar missing");
    if (vw <= 760) assert.ok(data.reader.width <= vw, "Mobile toolbar overflow");
  }
  if (route === "words") {
    assert.ok(data.card && data.card.width > 200, "Flashcard missing");
    assert.ok(data.card.right <= vw + 2, "Flashcard clipped at right edge");
    assert.ok(data.studio && data.studio.width > 200, "Study workspace missing");
  }
  console.log("PASS browser",width+"x"+height,route,"viewport",vw,
    "main width",Math.round(data.main.width),"overflow",data.fullWidth-vw);
}
try {
  for(const [w,h,route] of [
    [1366,768,"26"],[1440,900,"words"],[1920,1080,"home"],
    [390,844,"26"],[375,812,"words"]])run(w,h,route);
} finally {
  fs.rmSync(file,{force:true});
}
