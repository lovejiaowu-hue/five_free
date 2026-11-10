/* Reading Experience V3: progressive enhancement only.
   Does not modify Markdown source, article prose, vocabulary or saved flashcards. */
(function () {
  "use strict";
  var KEY = "five-guide-reading-v3";
  var root = null;
  var article = null;
  var settings = { size: 18, terms: true };
  var scrollAttached = false;
  var resizeAttached = false;
  function safeRead() {
    try {
      var prior = JSON.parse(localStorage.getItem(KEY) || "{}");
      if (prior && Number.isFinite(prior.size)) settings.size = Math.min(22, Math.max(16, Math.round(prior.size)));
      if (typeof prior.terms === "boolean") settings.terms = prior.terms;
    } catch (_) {}
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(settings)); } catch (_) {}
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function sizeText() { return String(settings.size) + "px"; }
  function setSize(size) {
    settings.size = Math.max(16, Math.min(22, size));
    if (article) article.style.setProperty("--reading-font", sizeText());
    if (root) {
      var val = root.querySelector("#readerFontValue");
      if (val) val.textContent = sizeText();
      var smaller = root.querySelector('[data-reader-action="smaller"]');
      var larger = root.querySelector('[data-reader-action="larger"]');
      if (smaller) smaller.disabled = settings.size <= 16;
      if (larger) larger.disabled = settings.size >= 22;
    }
    save();
  }
  function setTerms(enabled) {
    settings.terms = enabled;
    if (root) {
      root.classList.toggle("reader-terms-emphasis", enabled);
      var toggle = root.querySelector('[data-reader-action="terms"]');
      if (toggle) {
        toggle.setAttribute("aria-pressed", String(enabled));
        toggle.classList.toggle("is-active", enabled);
      }
    }
    save();
  }
  function progress() {
    if (!article || !root || !article.isConnected) return;
    var rect = article.getBoundingClientRect();
    var height = Math.max(1, article.offsetHeight - window.innerHeight * .55);
    var passed = -rect.top + window.innerHeight * .30;
    var pct = Math.round(Math.max(0, Math.min(100, passed / height * 100)));
    var bar = root.querySelector("#readerProgressBar");
    if (bar) bar.style.width = pct + "%";
    var rail = root.querySelector("#readerProgress");
    if (rail) rail.setAttribute("aria-valuenow", String(pct));
  }
  function bilingualHeader(columns, tbody) {
    if (columns.length < 2 || !tbody) return false;
    var h0 = columns[0].textContent.trim();
    var h1 = columns[1].textContent.trim();
    if ((/^(英文|English|英文菜单|英文术语)/i.test(h0) && /中文|翻译|说明|解释|用途|作用|含义/.test(h1))) return true;
    var rows = Array.from(tbody.rows).slice(0, 6);
    if (rows.length < 2) return false;
    var latin = 0, chinese = 0;
    rows.forEach(function (row) {
      if (!row.cells[0] || !row.cells[1]) return;
      if (/[a-zA-Z]{3,}/.test(row.cells[0].textContent)) latin++;
      if (/[\u4e00-\u9fa5]/.test(row.cells[1].textContent)) chinese++;
    });
    return latin >= Math.max(2, rows.length * .66) && chinese >= Math.max(2, rows.length * .66);
  }
  function enhanceTables() {
    if (!article) return;
    Array.from(article.querySelectorAll(".table-scroll")).forEach(function (wrap, tableNumber) {
      var table = wrap.querySelector("table");
      if (!table || !table.tHead || !table.tBodies.length) return;
      var columns = Array.from(table.tHead.querySelectorAll("th"));
      if (!bilingualHeader(columns, table.tBodies[0])) return;
      wrap.classList.add("reading-bilingual-wrap");
      table.classList.add("reading-bilingual-table");
      var labels = columns.map(function (col) { return col.textContent.trim(); });
      Array.from(table.tBodies[0].rows).forEach(function (row) {
        Array.from(row.cells).forEach(function (cell, i) {
          cell.dataset.label = labels[i] || "说明";
          if (i === 0) cell.classList.add("reading-term-en");
          if (i === 1) cell.classList.add("reading-term-zh");
        });
        if (!row.cells[0] || !/[a-zA-Z]{2,}/.test(row.cells[0].textContent)) return;
        var phrase = row.cells[0].textContent.trim();
        var copy = document.createElement("button");
        copy.type = "button";
        copy.className = "reading-copy-term";
        copy.dataset.copyTerm = phrase;
        copy.setAttribute("aria-label", "复制英文术语：" + phrase);
        copy.textContent = "复制";
        row.cells[0].appendChild(copy);
      });
      var controls = document.createElement("div");
      controls.className = "reading-table-tools";
      controls.innerHTML = '<span class="reading-table-label"><strong>中英对照</strong><small>术语 / 含义 / 场景</small></span>' +
        '<div class="reading-table-view" role="group" aria-label="切换本表的阅读形式">' +
        '<button type="button" data-table-mode="table" aria-pressed="true">表格</button>' +
        '<button type="button" data-table-mode="cards" aria-pressed="false">卡片</button></div>';
      wrap.insertBefore(controls, table);
      wrap.dataset.tableIndex = String(tableNumber);
    });
  }
  function tableMode(button) {
    var wrap = button.closest(".reading-bilingual-wrap");
    if (!wrap) return;
    var card = button.dataset.tableMode === "cards";
    wrap.classList.toggle("reading-card-view", card);
    Array.from(wrap.querySelectorAll("[data-table-mode]")).forEach(function (el) {
      el.setAttribute("aria-pressed", String(el === button));
    });
  }
  function toast(message) {
    if (!root) return;
    var el = root.querySelector("#readerNotice");
    if (!el) return;
    el.textContent = message;
    el.classList.add("visible");
    window.setTimeout(function () {
      if (el.isConnected) el.classList.remove("visible");
    }, 1700);
  }
  async function copyTerm(value) {
    try {
      if (!navigator.clipboard || !window.isSecureContext) throw Error("clipboard unavailable");
      await navigator.clipboard.writeText(value);
      toast("已复制英文术语");
    } catch (_) {
      // No sensitive data: the displayed English glossary phrase is shown for manual copy.
      if (typeof window.prompt === "function") window.prompt("复制英文术语", value);
    }
  }
  function onClick(e) {
    var copy = e.target.closest("[data-copy-term]");
    if (copy) { copyTerm(copy.dataset.copyTerm); return; }
    var btn = e.target.closest("[data-table-mode]");
    if (btn) { tableMode(btn); return; }
    var action = e.target.closest("[data-reader-action]");
    if (!action) return;
    switch (action.dataset.readerAction) {
      case "smaller": setSize(settings.size - 1); break;
      case "larger": setSize(settings.size + 1); break;
      case "terms": setTerms(!settings.terms); break;
      case "top": window.scrollTo({ top: 0, behavior: "smooth" }); break;
    }
  }
  function mount(target) {
    root = target;
    article = target.querySelector ? target.querySelector(".article") : null;
    if (!article) return;
    if (!root.dataset.readingEvents) {
      root.addEventListener("click", onClick);
      root.dataset.readingEvents = "1";
    }
    var bar = document.createElement("section");
    bar.className = "reading-toolbar";
    bar.setAttribute("aria-label", "正文阅读辅助操作");
    bar.innerHTML =
      '<div class="reading-toolbar-main"><div class="reading-toolbar-title"><strong>阅读辅助</strong><span>中英对照 · 操作手册</span></div>' +
      '<div class="reading-toolbar-actions"><div class="reading-font-controls" role="group" aria-label="调节正文字号">' +
      '<button type="button" data-reader-action="smaller" aria-label="缩小正文">A−</button>' +
      '<span id="readerFontValue" aria-live="polite">' + esc(sizeText()) + '</span>' +
      '<button type="button" data-reader-action="larger" aria-label="放大正文">A＋</button></div>' +
      '<button type="button" class="reading-term-toggle" data-reader-action="terms" aria-pressed="' + String(settings.terms) + '">术语突出</button>' +
      '<button type="button" class="reading-back-top" data-reader-action="top">回顶部 ↑</button>' +
      '<button type="button" class="reading-go-cards" data-go="words">抽卡复习 →</button></div></div>' +
      '<div class="reading-progress" id="readerProgress" role="progressbar" aria-label="本章阅读进度" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">' +
      '<span id="readerProgressBar"></span></div>';
    article.parentNode.insertBefore(bar, article);
    var notice = document.createElement("div");
    notice.id = "readerNotice";
    notice.className = "reading-toast";
    notice.setAttribute("role", "status");
    notice.setAttribute("aria-live", "polite");
    target.appendChild(notice);
    setSize(settings.size);
    setTerms(settings.terms);
    enhanceTables();
    if (!scrollAttached) {
      window.addEventListener("scroll", progress, { passive: true });
      scrollAttached = true;
    }
    if (!resizeAttached) {
      window.addEventListener("resize", progress, { passive: true });
      resizeAttached = true;
    }
    progress();
  }
  safeRead();
  window.GithubReadingExperience = { mount: mount, getSettings: function () { return {size: settings.size, terms: settings.terms}; } };
})();
