/* ==========================================================
   Polish Study Reference — RENDERING ENGINE
   ==========================================================
   You should NOT need to edit this file to add lessons, tabs,
   or vocabulary. Everything content-related lives in data.js.
   This file just reads CONTENT and draws the page.
   ========================================================== */

(function(){
  'use strict';

  if (typeof CONTENT === 'undefined') {
    document.body.innerHTML = '<p style="padding:40px;font-family:sans-serif;color:#a00;">' +
      'data.js did not load (or CONTENT is missing). Check that data.js is next to index.html ' +
      'and that index.html loads it with &lt;script src="data.js"&gt;.</p>';
    return;
  }

  const state = {
    currentTab: CONTENT.tabs[0] ? CONTENT.tabs[0].id : null,
    currentLesson: 'all',
    currentSearch: ''
  };

  /* ---------- helpers ---------- */

  function esc(s){
    return String(s == null ? '' : s)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  function lessonHasTab(lesson, tabId){
    const sec = lesson.sections && lesson.sections[tabId];
    return Array.isArray(sec) && sec.length > 0;
  }

  /* ---------- renderers, dispatched by tab.kind ---------- */

  // kind: "panels" — a grid of freeform HTML "panel" cards (grammar-style).
  // Each item in sections[tabId] is either a raw HTML string (a full
  // `<div class="panel">...</div>` block) or, for convenience, an object
  // like {title, body, note, full} that gets turned into that markup.
  function panelToHtml(p){
    if (typeof p === 'string') return p;
    const cls = 'panel' + (p.full ? ' full' : '');
    const note = p.note ? `<p class="note">${p.note}</p>` : '';
    const body = p.body || '';
    return `<div class="${cls}"><h3>${esc(p.title || '')}</h3>${body}${note}</div>`;
  }

  function renderPanelsTab(tab, root){
    const lessons = CONTENT.lessons.filter(l => lessonHasTab(l, tab.id));
    root.innerHTML = lessons.map(l => {
      const panels = l.sections[tab.id].map(panelToHtml).join('');
      return `
        <section class="lesson" data-lesson="${l.number}">
          <div class="lesson-head">
            <div class="lesson-num">${l.number}</div>
            <div class="lesson-title">${esc(l.title)}${l.subtitle ? ` — ${esc(l.subtitle)}` : ''}</div>
          </div>
          <div class="grid" data-columns="${tab.columns || 2}">${panels}</div>
        </section>`;
    }).join('') || `<p class="empty-note">No content yet for this tab.</p>`;
  }

  // kind: "vocab" — word list grouped by lesson, then by category.
  // sections[tabId] = [{category, items:[{pl, en, g?}]}]
  function renderVocabTab(tab, root){
    const lessons = CONTENT.lessons.filter(l => lessonHasTab(l, tab.id));
    root.innerHTML = lessons.map(l => {
      const cats = l.sections[tab.id].map(cat => `
        <div class="vcat" data-cat="1">
          <h3>${esc(cat.category)}</h3>
          <div class="tblwrap"><table class="vtable"><tbody>
            ${cat.items.map(v => `
              <tr class="vrow" data-pl="${esc((v.pl||'').toLowerCase())}" data-en="${esc((v.en||'').toLowerCase())}">
                <td class="pl">${esc(v.pl)}</td><td class="en">${esc(v.en)}</td><td class="g">${esc(v.g || '')}</td>
              </tr>`).join('')}
          </tbody></table></div>
        </div>
      `).join('');
      return `
        <section class="lesson" data-lesson="${l.number}">
          <div class="lesson-head">
            <div class="lesson-num">${l.number}</div>
            <div class="lesson-title">${esc(l.title)}${l.subtitle ? ` — ${esc(l.subtitle)}` : ''}</div>
          </div>
          ${cats}
        </section>`;
    }).join('') || `<p class="empty-note">No content yet for this tab.</p>`;
  }

  const RENDERERS = {
    panels: renderPanelsTab,
    vocab: renderVocabTab
  };

  function tabPaneId(tab){ return 'tab-' + tab.id; }
  function tabBtnId(tab){ return 'tab-' + tab.id + '-btn'; }

  /* ---------- scaffold: tabs, panes, pills ---------- */

  function buildScaffold(){
    const tabsRoot = document.getElementById('tabs');
    const mainsRoot = document.getElementById('main-panes');

    tabsRoot.innerHTML = CONTENT.tabs.map((tab, i) => `
      <button class="tab-btn" id="${tabBtnId(tab)}" role="tab" aria-selected="${i === 0}">${esc(tab.label)}</button>
    `).join('');

    mainsRoot.innerHTML = CONTENT.tabs.map((tab, i) => `
      <main id="${tabPaneId(tab)}" ${i === 0 ? '' : 'hidden'}></main>
    `).join('');

    CONTENT.tabs.forEach(tab => {
      document.getElementById(tabBtnId(tab)).addEventListener('click', () => setTab(tab.id));
    });
  }

  function renderAllTabs(){
    CONTENT.tabs.forEach(tab => {
      const root = document.getElementById(tabPaneId(tab));
      const renderer = RENDERERS[tab.kind];
      if (renderer) {
        renderer(tab, root);
      } else {
        root.innerHTML = `<p class="empty-note">Unknown tab kind "${esc(tab.kind)}" — add a renderer in app.js, or use "panels" / "vocab".</p>`;
      }
    });
  }

  function renderPills(){
    const root = document.getElementById('lesson-pills');
    const numbers = CONTENT.lessons.map(l => l.number);
    root.innerHTML = `<button class="pill" data-lesson="all" aria-pressed="true">All</button>` +
      numbers.map(n => `<button class="pill" data-lesson="${n}" aria-pressed="false">${n}</button>`).join('');
    root.addEventListener('click', e => {
      const btn = e.target.closest('.pill');
      if (!btn) return;
      root.querySelectorAll('.pill').forEach(p => p.setAttribute('aria-pressed', 'false'));
      btn.setAttribute('aria-pressed', 'true');
      applyLessonFilter(btn.dataset.lesson);
    });
  }

  /* ---------- filtering: lesson pills + search ---------- */

  function applyLessonFilter(lesson){
    state.currentLesson = lesson;
    document.querySelectorAll('section.lesson').forEach(sec => {
      const show = lesson === 'all' || sec.dataset.lesson === String(lesson);
      sec.dataset.lessonFilteredOut = show ? '0' : '1';
    });
    applySearch(state.currentSearch);
  }

  function applySearch(q){
    state.currentSearch = q = (q || '').trim().toLowerCase();

    CONTENT.tabs.forEach(tab => {
      const pane = document.getElementById(tabPaneId(tab));
      if (!pane) return;

      if (tab.kind === 'vocab') {
        pane.querySelectorAll('.vcat').forEach(cat => {
          let anyVisible = false;
          cat.querySelectorAll('.vrow').forEach(row => {
            const match = !q || row.dataset.pl.includes(q) || row.dataset.en.includes(q);
            row.classList.toggle('vrow-hidden', !match);
            if (match) anyVisible = true;
          });
          cat.classList.toggle('vcat-hidden', !anyVisible);
        });
        pane.querySelectorAll('section.lesson').forEach(sec => {
          if (sec.dataset.lessonFilteredOut === '1') { sec.style.display = 'none'; return; }
          const anyCatVisible = [...sec.querySelectorAll('.vcat')].some(c => !c.classList.contains('vcat-hidden'));
          sec.style.display = (q && !anyCatVisible) ? 'none' : '';
        });
      } else if (tab.searchable) {
        // generic text search over panel content, for any other searchable "panels"-style tab
        pane.querySelectorAll('.panel').forEach(panel => {
          const match = !q || panel.textContent.toLowerCase().includes(q);
          panel.style.display = match ? '' : 'none';
        });
        pane.querySelectorAll('section.lesson').forEach(sec => {
          if (sec.dataset.lessonFilteredOut === '1') { sec.style.display = 'none'; return; }
          const anyVisible = [...sec.querySelectorAll('.panel')].some(p => p.style.display !== 'none');
          sec.style.display = (q && !anyVisible) ? 'none' : '';
        });
      } else {
        // not searchable: only the lesson-pill filter applies
        pane.querySelectorAll('section.lesson').forEach(sec => {
          sec.style.display = sec.dataset.lessonFilteredOut === '1' ? 'none' : '';
        });
      }
    });

    updateCount();
  }

  function updateCount(){
    const countEl = document.getElementById('count');
    const tab = CONTENT.tabs.find(t => t.id === state.currentTab);
    if (!tab) { countEl.textContent = ''; return; }
    const pane = document.getElementById(tabPaneId(tab));
    if (tab.kind === 'vocab') {
      const rows = [...pane.querySelectorAll('.vrow')].filter(r => {
        const sec = r.closest('section.lesson');
        return sec.style.display !== 'none' && !r.classList.contains('vrow-hidden');
      });
      countEl.textContent = rows.length + ' word' + (rows.length === 1 ? '' : 's');
    } else {
      const secs = [...pane.querySelectorAll('section.lesson')].filter(s => s.style.display !== 'none');
      countEl.textContent = secs.length + ' lesson' + (secs.length === 1 ? '' : 's');
    }
  }

  function setTab(tabId){
    state.currentTab = tabId;
    const search = document.getElementById('search');
    let anySearchable = false;

    CONTENT.tabs.forEach(tab => {
      const btn = document.getElementById(tabBtnId(tab));
      const pane = document.getElementById(tabPaneId(tab));
      const active = tab.id === tabId;
      btn.setAttribute('aria-selected', String(active));
      pane.hidden = !active;
      if (active && tab.searchable) anySearchable = true;
    });

    search.style.display = anySearchable ? '' : 'none';
    updateCount();
  }

  /* ---------- boot ---------- */

  buildScaffold();
  renderAllTabs();
  renderPills();
  document.getElementById('search').addEventListener('input', e => applySearch(e.target.value));
  if (state.currentTab) setTab(state.currentTab);
})();
