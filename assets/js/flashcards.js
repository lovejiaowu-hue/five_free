/* GitHub 中文手册 · 术语抽卡学习模块。仅依赖本地词库，无网络请求。 */
(function () {
  "use strict";

  const source = window.GITHUB_VOCABULARY || { groups: [], items: [] };
  const cards = source.items || [];
  const topics = source.groups || [];
  const indexById = new Map(cards.map((card) => [card.id, card]));
  const SAVE_KEY = "five-github-words-v1";
  const iconBase = "./assets/icons/lucide/";
  const state = {
    topic: "all",
    filter: "practice",
    mode: "en",
    tab: "cards",
    flipped: false,
    order: shuffle(cards.map((x) => x.id)),
    index: 0,
    search: "",
    marks: {},
    favorites: {},
    daily: { date: today(), seen: [] },
    lastMessage: ""
  };
  let root = null;
  let toastTimeout = null;
  let touchStart = null;

  function readSaved() {
    try {
      const s = JSON.parse(localStorage.getItem(SAVE_KEY) || "{}");
      if (s && typeof s === "object") {
        if (s.marks && typeof s.marks === "object") state.marks = s.marks;
        if (s.favorites && typeof s.favorites === "object") state.favorites = s.favorites;
        if (s.daily && Array.isArray(s.daily.seen)) state.daily = s.daily;
        if (s.mode === "en" || s.mode === "zh") state.mode = s.mode;
      }
    } catch (_err) {}
    if (state.daily.date !== today()) state.daily = { date: today(), seen: [] };
  }

  function today() {
    const d = new Date();
    return [d.getFullYear(), String(d.getMonth() + 1).padStart(2, "0"), String(d.getDate()).padStart(2, "0")].join("-");
  }
  function save() {
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify({
        marks: state.marks, favorites: state.favorites, daily: state.daily, mode: state.mode
      }));
    } catch (_err) {
      notice("本浏览器无法保存学习进度，请检查隐私模式或存储设置。");
    }
  }
  function shuffle(items) {
    const a = items.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function icon(name, extraClass) {
    return '<img aria-hidden="true" alt="" class="wc-icon' + (extraClass ? " " + extraClass : "") + '" src="' + iconBase + name + '.svg">';
  }
  function topicName(topic) {
    return (topics.find((t) => t.id === topic) || {}).name || "全部主题";
  }
  function status(card) { return state.marks[card.id] || "new"; }
  function countMarks(mark) {
    return cards.filter((c) => status(c) === mark).length;
  }
  function stats() {
    return { total: cards.length, mastered: countMarks("mastered"), review: countMarks("review"),
      saved: cards.filter((c) => state.favorites[c.id]).length,
      daily: state.daily.date === today() ? state.daily.seen.length : 0 };
  }
  function pool(filter) {
    let ids = state.order.filter((id) => {
      const c = indexById.get(id);
      if (!c || (state.topic !== "all" && c.category !== state.topic)) return false;
      const s = status(c);
      const type = filter || state.filter;
      return type === "all" || (type === "practice" && s !== "mastered") ||
        (type === "review" && s === "review") ||
        (type === "mastered" && s === "mastered") ||
        (type === "saved" && !!state.favorites[id]);
    });
    return ids;
  }
  function active() {
    const p = pool();
    if (!p.length) return null;
    state.index = (state.index % p.length + p.length) % p.length;
    return indexById.get(p[state.index]);
  }
  function markViewed(card) {
    if (!card) return;
    if (state.daily.date !== today()) state.daily = { date: today(), seen: [] };
    if (!state.daily.seen.includes(card.id)) {
      state.daily.seen.push(card.id);
      save();
    }
  }
  function notice(message) {
    if (!root) return;
    const area = root.querySelector("#wcToast");
    if (!area) return;
    area.textContent = message;
    area.classList.add("visible");
    window.clearTimeout(toastTimeout);
    toastTimeout = window.setTimeout(() => area.classList.remove("visible"), 2500);
  }

  function header() {
    const s = stats();
    const percent = s.total ? Math.round(100 * s.mastered / s.total) : 0;
    return '<div class="wc-breadcrumb"><button data-go="home">学习首页</button>' + icon("chevron-right") +
      '<span>英语抽卡</span></div>' +
      '<section class="wc-hero"><div class="wc-hero-body">' +
      '<div class="wc-eyebrow"><span class="wc-eyebrow-dot"></span> GITHUB ENGLISH LAB · BILINGUAL FLASHCARDS</div>' +
      '<h1>每天抽几张，<span>看懂 GitHub 英文。</span></h1>' +
      '<p>专为产品经理准备的 GitHub 操作英语。翻卡学意思、听英文发音、结合实际场景记忆；不会的留下复习，掌握的随手标记。</p>' +
      '<div class="wc-hero-tags"><span>' + icon("layers") + cards.length + ' 张术语卡</span><span>' + icon("compass") + topics.length + ' 个学习主题</span><span>' + icon("shield-check") + '进度保存在当前设备</span></div></div>' +
      '<div class="wc-hero-graphic" aria-hidden="true"><div class="wc-hero-card wc-hero-card-back">PULL REQUEST</div><div class="wc-hero-card wc-hero-card-middle">COMMIT</div><div class="wc-hero-card wc-hero-card-front"><span>ENGLISH → 中文</span><strong>Repository</strong><small>/rɪˈpɒzɪtɔːri/</small><div>仓库 · 项目代码资产</div></div></div></section>' +
      '<div class="wc-stats">' +
      tile("已掌握", s.mastered, "circle-check", "wc-stat-complete") +
      tile("待复习", s.review, "refresh-cw", "") +
      tile("已收藏", s.saved, "bookmark", "") +
      tile("今日接触", s.daily, "book-open", "") +
      '</div>' +
      '<div class="wc-progress"><div class="wc-progress-title"><span>总掌握进度</span><strong>' + percent +
      '% <small>（' + s.mastered + '/' + s.total + '）</small></strong></div><div class="wc-progress-bar"><span style="width:' + percent + '%"></span></div></div>';
  }
  function tile(label, count, name, klass) {
    return '<div class="wc-stat ' + klass + '"><span class="wc-stat-symbol">' + icon(name) +
      '</span><div class="wc-stat-info"><strong>' + count + '</strong><small>' + label + '</small></div></div>';
  }
  function topicButtons() {
    let output = '<div class="wc-section-label"><div><span class="wc-kicker">01 / TOPIC</span><h2>选择学习主题</h2></div><span>按实际 GitHub 使用场景分类</span></div>' +
      '<div class="wc-topics"><button class="wc-topic' + (state.topic === "all" ? " selected" : "") +
      '" data-wc-topic="all"><span class="wc-topic-pict">' + icon("layers") +
      '</span><span class="wc-topic-copy"><b>全部词汇</b><small>' + cards.length + ' 张</small></span></button>';
    for (const t of topics) {
      const n = cards.filter((c) => c.category === t.id).length;
      output += '<button class="wc-topic' + (state.topic === t.id ? " selected" : "") + '" data-wc-topic="' +
        esc(t.id) + '"><span class="wc-topic-pict">' + icon(t.icon) +
        '</span><span class="wc-topic-copy"><b>' + esc(t.name) + '</b><small>' + n + ' 张</small></span></button>';
    }
    return output + "</div>";
  }
  function toolbar() {
    const choices = [
      ["practice", "未掌握"], ["all", "全部"], ["review", "待复习"], ["mastered", "已掌握"], ["saved", "已收藏"]
    ];
    return '<div class="wc-section-label wc-learning-head"><div><span class="wc-kicker">02 / PRACTICE</span><h2>抽卡学习</h2></div>' +
      '<div class="wc-tabs" role="group" aria-label="学习视图">' +
      '<button data-wc-tab="cards" class="' + (state.tab === "cards" ? "active" : "") + '">' + icon("layers") + '卡片学习</button>' +
      '<button data-wc-tab="list" class="' + (state.tab === "list" ? "active" : "") + '">' + icon("list-checks") + '词汇总表</button>' +
      "</div></div>" +
      '<div class="wc-controls"><div class="wc-filters" role="group" aria-label="学习状态筛选">' +
      choices.map(([id, text]) => '<button data-wc-filter="' + id + '" class="' +
        (state.filter === id ? "active" : "") + '">' + text + '</button>').join("") +
      '</div><div class="wc-direction"><span>学习方向</span><button data-wc-mode="en" class="' +
      (state.mode === "en" ? "active" : "") + '">英 → 中</button><button data-wc-mode="zh" class="' +
      (state.mode === "zh" ? "active" : "") + '">中 → 英</button></div></div>';
  }
  function stateLabel(card) {
    const st = status(card);
    if (st === "mastered") return '<span class="wc-status wc-status-mastered">已掌握</span>';
    if (st === "review") return '<span class="wc-status wc-status-review">待复习</span>';
    return '<span class="wc-status">未学习</span>';
  }
  function cardBody() {
    const items = pool();
    if (!items.length) {
      return '<div class="wc-empty">' + icon("circle-check") +
        '<h3>这个筛选里暂时没有卡片</h3><p>可能已经全部掌握，也可能还没有添加复习或收藏标记。</p>' +
        '<button data-wc-filter="all">查看全部单词</button><button data-wc-topic="all">切换全部主题</button></div>';
    }
    const current = active(), front = state.mode === "en" ? current.en : current.zh;
    const back = state.mode === "en" ? current.zh : current.en;
    const favorite = !!state.favorites[current.id];
    return '<div class="wc-deck"><div class="wc-deck-top"><div><span class="wc-mini-label">CURRENT CARD</span>' +
      '<strong>' + esc(topicName(current.category)) + '</strong></div><div class="wc-card-number"><b>' + (state.index + 1) +
      '</b> / ' + items.length + '</div></div>' +
      '<div class="wc-card-stage"><div class="wc-stack-depth depth-two"></div><div class="wc-stack-depth depth-one"></div>' +
      '<button class="wc-flipcard' + (state.flipped ? " flipped" : "") + '" data-wc-action="flip" aria-label="翻转当前单词卡，显示另一面" aria-pressed="' +
      state.flipped + '"><span class="wc-card-side wc-front"><span class="wc-face-top">GITHUB VOCABULARY · ' +
      esc(current.en.toUpperCase()) + '</span><span class="wc-card-word">' + esc(front) + '</span>' +
      '<span class="wc-tap-tip">' + icon("refresh-cw") + ' 点击卡片查看' + (state.mode === "en" ? "中文" : "英文") +
      '</span><span class="wc-card-corner">0' + current.level + ' / LEVEL</span></span>' +
      '<span class="wc-card-side wc-back"><span class="wc-face-top">ANSWER / 答案</span>' +
      '<span class="wc-answer-word">' + esc(back) + '</span><span class="wc-answer-label">含义与场景</span>' +
      '<span class="wc-answer-explain">' + esc(current.note) + '</span><span class="wc-answer-example">' +
      esc(current.example) + '</span><span class="wc-tap-tip">' + icon("refresh-cw") + ' 点击返回卡片正面</span></span></button></div>' +
      '<div class="wc-card-aux"><div class="wc-card-aux-left">' + stateLabel(current) +
      '<span class="wc-chapter-link">出处：<button data-go="' + current.chapter + '">手册第 ' + current.chapter + ' 章 ↗</button></span></div>' +
      '<div class="wc-aux-actions"><button data-wc-action="speak" title="英文朗读">' + icon("volume-2") +
      ' <span>听英文</span></button><button data-wc-action="favorite" class="' + (favorite ? "saved" : "") +
      '" title="收藏或取消收藏">' + icon("bookmark") + '<span>' + (favorite ? "已收藏" : "收藏") +
      '</span></button></div></div>' +
      '<div class="wc-mark-actions"><button class="wc-mark-review' + (status(current) === "review" ? " is-current" : "") +
      '" data-wc-action="review">' + icon("refresh-cw") + '<span>还不熟，待复习</span></button>' +
      '<button class="wc-mark-mastered' + (status(current) === "mastered" ? " is-current" : "") +
      '" data-wc-action="mastered">' + icon("circle-check") + '<span>我已掌握</span></button></div>' +
      '<div class="wc-draw-controls"><button data-wc-action="prev" aria-label="上一张">' + icon("chevron-left") +
      '上一张</button><button class="wc-shuffle" data-wc-action="random">' + icon("shuffle") +
      '随机抽一张</button><button data-wc-action="next">下一张' + icon("chevron-right") +
      '</button></div>' +
      '<p class="wc-keytip">快捷键：空格翻面 · ← → 切卡 · 1 待复习 · 2 已掌握</p></div>';
  }
  function listBody() {
    return '<div class="wc-glossary"><div class="wc-glossary-toolbar"><label class="wc-search-label">' +
      icon("search") + '<input id="wcWordSearch" type="search" placeholder="搜索英文、中文含义和使用场景…" value="' +
      esc(state.search) + '" autocomplete="off"></label><span id="wcListCount"></span></div>' +
      '<div class="wc-list" id="wcList"></div></div>';
  }
  function listResults() {
    if (!root) return;
    const box = root.querySelector("#wcList");
    if (!box) return;
    const q = state.search.trim().toLowerCase();
    const data = pool().map((id) => indexById.get(id)).filter((c) =>
      !q || [c.en, c.zh, c.note, c.example].join(" ").toLowerCase().includes(q));
    const counter = root.querySelector("#wcListCount");
    if (counter) counter.textContent = "显示 " + data.length + " / " + cards.length + " 条";
    if (!data.length) {
      box.innerHTML = '<div class="wc-list-empty">未找到符合条件的词汇。请修改关键词或筛选条件。</div>';
      return;
    }
    box.innerHTML = data.map((c) =>
      '<article class="wc-word-row" data-word-id="' + esc(c.id) + '"><div class="wc-word-main">' +
      '<div class="wc-word-title"><strong>' + esc(c.en) + '</strong>' + stateLabel(c) + '</div><div class="wc-word-chinese">' +
      esc(c.zh) + '</div><p>' + esc(c.note) + '</p><small>' + esc(c.example) + '</small></div>' +
      '<div class="wc-word-controls"><button data-wc-word="' + esc(c.id) + '" data-wc-action="speak" aria-label="播放 ' +
      esc(c.en) + ' 的发音" title="播放发音">' + icon("volume-2") + '</button>' +
      '<button data-wc-word="' + esc(c.id) + '" data-wc-action="favorite" class="' +
      (state.favorites[c.id] ? "saved" : "") + '" aria-label="收藏 ' + esc(c.en) + '" title="收藏">' + icon("bookmark") +
      '</button><button data-wc-word="' + esc(c.id) + '" data-wc-action="review" aria-label="把 ' +
      esc(c.en) + ' 标记为待复习" title="待复习">' + icon("refresh-cw") + '</button>' +
      '<button data-wc-word="' + esc(c.id) + '" data-wc-action="mastered" aria-label="将 ' +
      esc(c.en) + ' 标记为已掌握" title="已掌握">' + icon("circle-check") + '</button>' +
      '</div></article>').join("");
  }
  function draw() {
    if (!root) return;
    root.innerHTML = '<div class="wc-page">' + header() + topicButtons() + toolbar() +
      (state.tab === "cards" ? cardBody() : listBody()) +
      '<div class="wc-source-note">' + icon("book-open") +
      '<p><strong>内容来源：</strong>本站《GitHub 中文使用手册》23 章核心术语，包含常见菜单、操作、状态与组合短语。每张卡对应原手册章节。发音使用设备浏览器自带语音合成能力，是否支持取决于设备。</p></div>' +
      '<div class="wc-footer-actions"><button data-wc-action="reset">' + icon("refresh-cw") +
      '清空学习标记</button><span>数据仅保存在此设备浏览器 · 无需注册登录</span></div>' +
      '<div class="wc-toast" id="wcToast" role="status" aria-live="polite"></div></div>';
    if (state.tab === "list") listResults();
  }
  function step(direction) {
    const items = pool();
    if (!items.length) return;
    state.index = (state.index + direction + items.length) % items.length;
    state.flipped = false;
    draw();
  }
  function randomDraw() {
    const items = pool();
    if (items.length < 2) { notice("当前只有一张可抽卡片。"); return; }
    let next = state.index;
    while (next === state.index) next = Math.floor(Math.random() * items.length);
    state.index = next;
    state.flipped = false;
    draw();
  }
  function setMark(c, newStatus, fromList) {
    if (!c) return;
    const old = pool(), index = state.index;
    const nextId = old.length > 1 ? old[(index + 1) % old.length] : null;
    if (status(c) === newStatus) delete state.marks[c.id];
    else state.marks[c.id] = newStatus;
    save();
    if (fromList) {
      draw();
      notice(status(c) === newStatus ? "已标记为" + (newStatus === "review" ? "待复习" : "已掌握") : "已取消该状态");
      return;
    }
    const updated = pool();
    const newIndex = updated.indexOf(nextId);
    state.index = newIndex >= 0 ? newIndex : Math.min(index, Math.max(0, updated.length - 1));
    state.flipped = false;
    draw();
    notice(status(c) === newStatus ? "已标记为" + (newStatus === "review" ? "待复习" : "已掌握") : "已取消该状态");
  }
  function speak(card) {
    if (!card) return;
    if (!window.speechSynthesis || !window.SpeechSynthesisUtterance) {
      notice("当前浏览器暂不支持语音朗读。");
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(card.en);
    utterance.lang = "en-US";
    utterance.rate = 0.85;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  }
  function dispatch(action, wordId) {
    const c = wordId ? indexById.get(wordId) : active();
    switch (action) {
      case "flip":
        if (!c) return;
        state.flipped = !state.flipped;
        markViewed(c);
        draw();
        break;
      case "next": step(1); break;
      case "prev": step(-1); break;
      case "random": randomDraw(); break;
      case "speak": speak(c); break;
      case "review": setMark(c, "review", !!wordId); break;
      case "mastered": setMark(c, "mastered", !!wordId); break;
      case "favorite":
        if (!c) return;
        if (state.favorites[c.id]) delete state.favorites[c.id];
        else state.favorites[c.id] = true;
        save();
        draw();
        notice(state.favorites[c.id] ? "已加入收藏" : "已取消收藏");
        break;
      case "reset":
        if (window.confirm("确定清空已掌握、待复习、收藏和每日学习记录吗？该操作不可撤销。")) {
          state.marks = {};
          state.favorites = {};
          state.daily = { date: today(), seen: [] };
          state.index = 0;
          state.flipped = false;
          save();
          draw();
          notice("学习标记已经重置。");
        }
        break;
    }
  }
  function onClick(event) {
    const topic = event.target.closest("[data-wc-topic]");
    if (topic) {
      state.topic = topic.dataset.wcTopic;
      state.index = 0;
      state.flipped = false;
      draw();
      return;
    }
    const filter = event.target.closest("[data-wc-filter]");
    if (filter) {
      state.filter = filter.dataset.wcFilter;
      state.index = 0;
      state.flipped = false;
      draw();
      return;
    }
    const mode = event.target.closest("[data-wc-mode]");
    if (mode) {
      state.mode = mode.dataset.wcMode;
      state.flipped = false;
      save();
      draw();
      return;
    }
    const tab = event.target.closest("[data-wc-tab]");
    if (tab) {
      state.tab = tab.dataset.wcTab;
      state.flipped = false;
      draw();
      return;
    }
    const action = event.target.closest("[data-wc-action]");
    if (action) dispatch(action.dataset.wcAction, action.dataset.wcWord);
  }
  function keyboard(event) {
    if (!location.hash.startsWith("#/words") ||
      !document.getElementById("searchBackdrop").classList.contains("hidden") ||
      /INPUT|TEXTAREA|SELECT|BUTTON/.test(document.activeElement.tagName) ||
      event.ctrlKey || event.altKey || event.metaKey || state.tab !== "cards") return;
    const keys = { "ArrowLeft": "prev", "ArrowRight": "next",
      " ": "flip", "1": "review", "2": "mastered", "3": "favorite" };
    if (keys[event.key]) {
      event.preventDefault();
      dispatch(keys[event.key]);
    }
  }
  function mount(target) {
    root = target;
    if (!root.dataset.wordEvents) {
      root.addEventListener("click", onClick);
      root.addEventListener("input", (event) => {
        if (event.target.id === "wcWordSearch") {
          state.search = event.target.value;
          listResults();
        }
      });
      root.addEventListener("touchstart", (event) => {
        const card = event.target.closest(".wc-flipcard");
        if (!card || !event.touches[0]) return;
        touchStart = { x: event.touches[0].clientX, y: event.touches[0].clientY };
      }, { passive: true });
      root.addEventListener("touchend", (event) => {
        const card = event.target.closest(".wc-flipcard");
        if (!card || !touchStart || !event.changedTouches[0]) return;
        const dx = event.changedTouches[0].clientX - touchStart.x;
        const dy = event.changedTouches[0].clientY - touchStart.y;
        touchStart = null;
        if (Math.abs(dx) > 65 && Math.abs(dx) > Math.abs(dy) * 1.5) {
          event.preventDefault();
          step(dx < 0 ? 1 : -1);
        }
      }, { passive: false });
      root.dataset.wordEvents = "1";
    }
    draw();
  }
  readSaved();
  document.addEventListener("keydown", keyboard);
  window.GithubFlashcards = { mount: mount, count: () => cards.length, stats: stats, resetSession: () => {
    state.tab = "cards"; state.topic = "all"; state.filter = "practice"; state.flipped = false;
    state.index = 0; state.search = "";
  }};
})();
