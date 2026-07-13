/* =====================================================================
   app.js — renders the portfolio from data.js and wires up scrolling,
   the progress bar, hero typing + particles, a skills list, project
   detail pages (hash route), a live Spotify widget, a ⌘K palette, a
   live status strip, cursor spotlight, the system intro, and one egg.
   Mouse-driven; keyboard optional.
   ===================================================================== */
import {
  PROFILE, NAV, ABOUT, FACTS, APPROACH, NOW, TIMELINE, TECH, PROJECTS, UI, SPOTIFY, INTRO_BOOT,
} from './data.js';

/* ---------- helpers ---------- */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
// escape for both text and attribute contexts (quotes included)
const esc = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
const store = {
  get: (k, d) => { try { return localStorage.getItem(k) ?? d; } catch { return d; } },
  set: (k, v) => { try { localStorage.setItem(k, v); } catch { /* ignore */ } },
};

const state = { lang: 'en' };
const t = () => UI[state.lang];
const pick = (o) => (o && typeof o === 'object' && state.lang in o ? o[state.lang] : o);

/* =====================================================================
   RENDER
   ===================================================================== */
function renderHero() {
  const p = PROFILE;
  $('#home').innerHTML = `
    <canvas id="particles" aria-hidden="true"></canvas>
    <div class="wrap hero-inner">
      <p class="hero-kicker reveal">${esc(pick(p.role))}</p>
      <h1 class="hero-name reveal"><span class="grad">${esc(p.name)}</span></h1>
      <p class="hero-type reveal"><span class="dim">${t().heroKicker} </span><span id="typeText"></span><span class="type-caret">▌</span></p>
      <p class="hero-tagline reveal">${esc(pick(p.tagline))}</p>
      <div class="hero-actions reveal">
        <a class="btn btn-primary" href="#projects">${t().heroCta} <span>→</span></a>
        <a class="btn btn-ghost" href="#contact">${t().heroContact}</a>
      </div>
    </div>
    <a class="scroll-hint" href="#about" aria-label="${t().scrollHint}">
      <span>${t().scrollHint}</span><span class="arrow"></span>
    </a>`;
  typing.start(pick(p.roles));
  particles.start();
}

function sectionHead(num, title, lead) {
  return `<div class="section-head reveal">
      <span class="section-num">${num}</span>
      <h2 class="section-title">${esc(title)}</h2>
      ${lead ? `<p class="section-lead">${esc(lead)}</p>` : ''}
    </div>`;
}

function renderAbout() {
  const paras = ABOUT[state.lang].map((p) => `<p>${esc(p)}</p>`).join('');
  const facts = FACTS.map((f) =>
    `<div class="fact"><span class="fact-key">${esc(pick(f.label))}</span><span class="fact-val">${esc(pick(f.value))}</span></div>`).join('');
  const approach = APPROACH[state.lang].map((a, i) =>
    `<div class="ap-card"><span class="ap-num">0${i + 1}</span><h4>${esc(a.title)}</h4><p>${esc(a.body)}</p></div>`).join('');
  $('#about').innerHTML = `<div class="wrap">
      ${sectionHead('01', t().sectionAbout, t().aboutLead)}
      <div class="about-grid">
        <div class="about-text reveal">${paras}</div>
        <div class="about-facts reveal">${facts}</div>
      </div>
      <div class="approach">
        <h3 class="approach-label reveal">${esc(t().approachLabel)}</h3>
        <div class="ap-grid">${approach}</div>
      </div>
    </div>`;
  // stagger the reveal of the "how I work" cards
  $$('#about .ap-card').forEach((el, i) => { el.classList.add('reveal'); el.style.transitionDelay = `${i * 80}ms`; });
}

function renderStack() {
  const groups = TECH.map((g) => {
    const tiles = g.items.map((it) =>
      `<div class="tech-tile"><span class="tech-glyph">${esc(it.glyph)}</span><span class="tech-name">${esc(it.name)}</span></div>`).join('');
    return `<div class="tech-group reveal"><h3>${esc(pick(g.group))}</h3><div class="tech-tiles">${tiles}</div></div>`;
  }).join('');
  $('#stack').innerHTML = `<div class="wrap">
      ${sectionHead('02', t().sectionStack, t().stackLead)}
      ${groups}
    </div>`;
}

function renderTimeline() {
  const items = TIMELINE[state.lang].map((e) =>
    `<div class="tl-item reveal"><span class="tl-year">${esc(e.year)}</span><p class="tl-text">${esc(e.text)}</p></div>`).join('');
  $('#timeline').innerHTML = `<div class="wrap">
      ${sectionHead('03', t().sectionTimeline, t().timelineLead)}
      <div class="timeline">${items}</div>
      <div class="now-card reveal"><span class="now-label">${esc(t().nowLabel)}</span><p>${esc(pick(NOW))}</p></div>
    </div>`;
}

function renderProjects() {
  const cards = PROJECTS.map((p) =>
    `<button class="proj-card reveal" data-id="${esc(p.id)}" aria-label="${esc(p.name)}">
        <span class="proj-top">
          <span class="proj-icon">${esc(p.icon)}</span>
          <span class="proj-year">${esc(p.year || '')}</span>
        </span>
        <h3>${esc(p.name)}</h3>
        <div class="pmeta">${esc(pick(p.meta))}</div>
        <p class="pshort">${esc(pick(p.blurb))}</p>
        <div class="proj-tags">${p.tags.map((tag) => `<span class="tag">${esc(tag)}</span>`).join('')}</div>
        <span class="proj-more">${t().readMore} <span class="ar">→</span></span>
      </button>`).join('');
  $('#projects').innerHTML = `<div class="wrap">
      ${sectionHead('04', t().sectionProjects, t().projectsLead)}
      <div class="proj-grid${PROJECTS.length === 1 ? ' single' : ''}">${cards}</div>
    </div>`;
}

function renderContact() {
  const p = PROFILE;
  // icons are self-drawn marks (CSS), not emoji
  const card = (mark, label, value, href) =>
    `<a class="contact-card" href="${href}"${href.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}>
        <span class="cc-icon cc-${mark}"></span>
        <span class="cc-label">${label}</span>
        <span class="cc-value">${esc(value)}</span>
      </a>`;
  $('#contact').innerHTML = `<div class="wrap contact">
      ${sectionHead('05', t().sectionContact, t().contactLead)}
      <div class="contact-cards reveal">
        ${card('mail', 'Email', p.email, `mailto:${p.email}`)}
        ${card('gh', 'GitHub', `github.com/${p.github}`, p.githubUrl)}
        ${card('in', 'LinkedIn', p.linkedin, p.linkedinUrl)}
        ${card('fb', 'Facebook', 'khang.ang', p.facebookUrl)}
      </div>
    </div>`;
}

function renderNav() {
  $('#navLinks').innerHTML = NAV.map((n) =>
    `<li><a href="#${n.id}" data-link="${n.id}">${esc(pick(n.label))}</a></li>`).join('');
  $('#footerText').innerHTML = `© 2026 ${esc(PROFILE.name)} · ${esc(t().footer)}`;
  $('#statusBar').innerHTML =
    `<span class="st-dot"></span><span class="st-label">${esc(t().statusOnline)}</span>`
    + `<span class="st-sep">·</span><span id="stClock">--:--:--</span>`
    + `<span class="st-sep">·</span><span>${esc(t().statusSession)} <span id="stUptime">0s</span></span>`;
  clock.start();
}

function renderAll() {
  renderNav();
  renderHero();
  renderAbout();
  renderStack();
  renderTimeline();
  renderProjects();
  renderContact();
  observeReveals();
  bindProjectCards();
}

/* =====================================================================
   PROJECT DETAIL PAGE — hash route #/p/<id>
   ===================================================================== */
function flowDiagram(p) {
  if (!p.flow || !p.flow.length) return '';
  const steps = p.flow.map((node, i) =>
    `<span class="flow-step" style="--d:${i * 60}ms">
        <span class="flow-node">${esc(node)}</span>
        ${i < p.flow.length - 1 ? '<span class="flow-arrow" aria-hidden="true">→</span>' : ''}
      </span>`).join('');
  return `<div class="pp-flow">
      <span class="pp-block-label">${esc(t().flowLabel)}</span>
      <div class="flow">${steps}</div>
    </div>`;
}

function renderProjectPage(id) {
  const p = PROJECTS.find((x) => x.id === id);
  const page = $('#projectPage');
  if (!p) { page.classList.remove('open'); document.body.classList.remove('page-open'); return; }
  const blocks = pick(p.detail).map((b) =>
    `<section class="pp-block"><h2 class="pp-h">${esc(b.h)}</h2><p>${esc(b.p)}</p></section>`).join('');
  const glance = (pick(p.highlights) || []).map((h) => `<li>${esc(h)}</li>`).join('');
  const role = pick(p.role);
  page.innerHTML = `<div class="wrap pp-wrap">
      <button class="pp-back" id="ppBack"><span class="ar" aria-hidden="true">←</span> ${esc(t().backToProjects)}</button>
      <div class="pp-head">
        <span class="pp-icon">${esc(p.icon)}</span>
        <div class="pp-head-text">
          <h1 class="pp-name">${esc(p.name)}</h1>
          <p class="pp-meta">${esc(pick(p.meta))}${p.year ? ` · ${esc(p.year)}` : ''}${role ? ` · ${esc(role)}` : ''}</p>
        </div>
      </div>
      <div class="pp-tags">${p.tags.map((tag) => `<span class="tag">${esc(tag)}</span>`).join('')}</div>
      ${glance ? `<div class="pp-glance"><span class="pp-block-label">${esc(t().glanceLabel)}</span><ul>${glance}</ul></div>` : ''}
      ${flowDiagram(p)}
      <div class="pp-story">${blocks}</div>
      <div class="pp-foot">
        ${p.repo ? `<a class="pp-gh tlink" href="${esc(p.repo)}" target="_blank" rel="noopener">${esc(t().viewCode)} <span aria-hidden="true">→</span></a>` : ''}
        ${p.demo ? `<a class="pp-gh tlink" href="${esc(p.demo)}" target="_blank" rel="noopener">${esc(t().liveDemo)} <span aria-hidden="true">→</span></a>` : ''}
      </div>
    </div>`;
  $('#ppBack').addEventListener('click', () => { location.hash = '#projects'; });
  page.classList.add('open');
  document.body.classList.add('page-open');
  page.scrollTop = 0; window.scrollTo(0, 0);
  page.focus?.();
}

function handleRoute() {
  const m = location.hash.match(/^#\/p\/(.+)$/);
  if (m) renderProjectPage(decodeURIComponent(m[1]));
  else { $('#projectPage').classList.remove('open'); document.body.classList.remove('page-open'); }
}

/* =====================================================================
   SCROLL: progress bar, reveal-on-scroll, active nav link
   ===================================================================== */
function onScroll() {
  const h = document.documentElement;
  const max = h.scrollHeight - h.clientHeight;
  $('#progress').style.width = `${max > 0 ? (h.scrollTop / max) * 100 : 0}%`;
  $('#nav').classList.toggle('scrolled', h.scrollTop > 8);
  const mid = h.scrollTop + innerHeight * 0.35;
  let active = NAV[0].id;
  for (const n of NAV) { const sec = document.getElementById(n.id); if (sec && sec.offsetTop <= mid) active = n.id; }
  $$('#navLinks a').forEach((a) => a.classList.toggle('active', a.dataset.link === active));
}

let revealObserver;
function observeReveals() {
  revealObserver?.disconnect();
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); revealObserver.unobserve(e.target); } });
  }, { threshold: 0.12 });
  $$('.reveal').forEach((el) => revealObserver.observe(el));
}

/* =====================================================================
   PROJECT CARDS
   ===================================================================== */
function bindProjectCards() {
  const fine = matchMedia('(pointer: fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches;
  $$('.proj-card').forEach((card) => {
    card.addEventListener('click', () => { location.hash = `#/p/${card.dataset.id}`; });
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
      if (!fine) return;
      const px = (e.clientX - r.left) / r.width; const py = (e.clientY - r.top) / r.height;
      card.style.setProperty('--ry', `${(px - 0.5) * 6}deg`);
      card.style.setProperty('--rx', `${(0.5 - py) * 6}deg`);
      card.style.setProperty('--ty', '-6px');
    });
    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--rx', '0deg'); card.style.setProperty('--ry', '0deg');
      card.style.setProperty('--ty', '0px');
    });
  });
}

/* =====================================================================
   HERO — typing effect (rotates through PROFILE.roles)
   ===================================================================== */
const typing = (() => {
  let timer = null;
  function start(words) {
    clearTimeout(timer);
    const el = $('#typeText');
    if (!el) return;
    let w = 0; let i = 0; let deleting = false;
    const tick = () => {
      const word = words[w % words.length];
      el.textContent = word.slice(0, i);
      if (!deleting && i < word.length) { i += 1; timer = setTimeout(tick, 70); }
      else if (!deleting && i === word.length) { deleting = true; timer = setTimeout(tick, 1600); }
      else if (deleting && i > 0) { i -= 1; timer = setTimeout(tick, 35); }
      else { deleting = false; w += 1; timer = setTimeout(tick, 350); }
    };
    tick();
  }
  return { start };
})();

/* =====================================================================
   HERO — interactive particle network
   ===================================================================== */
const particles = (() => {
  let raf = null; let bound = false; let running = false; let visible = true;
  let pts = []; let cv = null; let ctx = null;
  const mouse = { x: -999, y: -999 };
  const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
  const accent = () => getComputedStyle(document.body).getPropertyValue('--green').trim() || '#7ee787';

  function resize() {
    if (!cv) return;
    const r = cv.parentElement.getBoundingClientRect();
    cv.width = r.width; cv.height = r.height;
    const count = Math.min(70, Math.floor(r.width / 18));
    pts = Array.from({ length: count }, (_, i) => ({
      x: ((i * 9301 + 49297) % 233280) / 233280 * cv.width,
      y: ((i * 49297 + 9301) % 233280) / 233280 * cv.height,
      vx: ((((i * 7) % 10) - 5)) / 14, vy: ((((i * 13) % 10) - 5)) / 14,
    }));
  }

  function draw() {
    if (!cv || !ctx) { running = false; return; }
    const color = accent(); const still = reduced();
    ctx.clearRect(0, 0, cv.width, cv.height);
    pts.forEach((p) => {
      if (!still) { p.x += p.vx; p.y += p.vy; }
      if (p.x < 0 || p.x > cv.width) p.vx *= -1;
      if (p.y < 0 || p.y > cv.height) p.vy *= -1;
      const dm = Math.hypot(p.x - mouse.x, p.y - mouse.y);
      if (dm < 120 && dm > 0.01) { p.x += (p.x - mouse.x) / dm * 0.8; p.y += (p.y - mouse.y) / dm * 0.8; }
      ctx.fillStyle = color; ctx.globalAlpha = 0.7;
      ctx.beginPath(); ctx.arc(p.x, p.y, 1.7, 0, 7); ctx.fill();
    });
    for (let i = 0; i < pts.length; i += 1) {
      for (let j = i + 1; j < pts.length; j += 1) {
        const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
        if (d < 110) {
          ctx.globalAlpha = (1 - d / 110) * 0.18; ctx.strokeStyle = color; ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 1;
    raf = requestAnimationFrame(draw);
  }
  function play() {
    if (running || !visible || document.hidden || !cv) return;
    running = true; cancelAnimationFrame(raf); draw();
  }
  function pause() { running = false; cancelAnimationFrame(raf); }

  function start() {
    cv = $('#particles'); // re-query every render so we never hold a detached canvas
    if (!cv) return;
    ctx = cv.getContext('2d');
    resize();
    if (!bound) {
      const home = $('#home');
      addEventListener('resize', resize, { passive: true });
      home.addEventListener('pointermove', (e) => {
        if (!cv) return;
        const r = cv.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
      });
      home.addEventListener('pointerleave', () => { mouse.x = -999; mouse.y = -999; });
      if ('IntersectionObserver' in window) {
        new IntersectionObserver((es) => {
          visible = es[0].isIntersecting;
          if (visible) play(); else pause();
        }, { threshold: 0 }).observe(home);
      }
      addEventListener('visibilitychange', () => { if (document.hidden) pause(); else play(); });
      bound = true;
    }
    play();
  }
  return { start };
})();

/* =====================================================================
   SPOTIFY — "now playing" as a popup (opened from nav / palette)
   ===================================================================== */
const spotify = (() => {
  let poll = null;
  let opened = false;
  function body(d, live) {
    if (live) {
      return `<a class="sp-body" href="${esc(d.songUrl || '#')}" target="_blank" rel="noopener">
          ${d.albumImageUrl ? `<img class="sp-art" src="${esc(d.albumImageUrl)}" alt="">` : '<span class="sp-art ph"></span>'}
          <span class="sp-meta"><span class="sp-title">${esc(d.title || '')}</span>
          <span class="sp-artist">${esc(d.artist || '')} · ${t().onSpotify}</span></span>
          <span class="sp-bars"><i></i><i></i><i></i><i></i></span>
        </a>`;
    }
    return '<div class="sp-idle">—</div>';
  }
  function render(d) {
    const slot = $('#spotifyBody');
    if (!slot) return;
    const live = !!(d && d.isPlaying);
    $('#spotifyStatus').textContent = live ? t().nowPlaying : t().notPlaying;
    $('#spotifyCard').classList.toggle('live', live);
    // equalizer bars only bounce while music is actually playing
    document.querySelectorAll('.np-logo').forEach((el) => el.classList.toggle('playing', live));
    slot.innerHTML = body(d, live);
  }
  async function tick() {
    if (!SPOTIFY.endpoint || !opened) return;
    try { render(await fetch(SPOTIFY.endpoint, { cache: 'no-store' }).then((r) => (r.ok ? r.json() : null))); }
    catch { render(null); }
  }
  function open() {
    opened = true;
    $('#spotifyPopup').classList.add('open');
    tick();
    clearInterval(poll);
    poll = setInterval(tick, 15000);
    setTimeout(() => $('#spotifyClose')?.focus(), 40);
  }
  function close() {
    opened = false;
    $('#spotifyPopup').classList.remove('open');
    clearInterval(poll);
    $('#spotifyBtn')?.focus();
  }
  function init() {
    $('#spotifyBtn')?.addEventListener('click', open);
    $('#spotifyClose')?.addEventListener('click', close);
    $('#spotifyPopup')?.addEventListener('click', (e) => { if (e.target.id === 'spotifyPopup') close(); });
    addEventListener('keydown', (e) => { if (e.key === 'Escape' && opened) close(); });
  }
  return { init, open, close };
})();

/* =====================================================================
   COMMAND PALETTE (⌘/Ctrl + K)
   ===================================================================== */
const palette = (() => {
  function commands() {
    const nav = NAV.map((n) => ({ icon: '>', label: pick(n.label), run: () => go(n.id) }));
    const proj = PROJECTS.map((p) => ({ icon: '#', label: p.name, run: () => { location.hash = `#/p/${p.id}`; } }));
    const acts = [
      { icon: '~', label: state.lang === 'en' ? 'Now playing' : 'Đang nghe', run: () => spotify.open() },
      { icon: '~', label: state.lang === 'en' ? 'Tiếng Việt' : 'English', run: () => setLang(state.lang === 'en' ? 'vi' : 'en') },
      { icon: '~', label: 'GitHub', run: () => window.open(PROFILE.githubUrl, '_blank') },
      { icon: '~', label: 'Email', run: () => { window.location.href = `mailto:${PROFILE.email}`; } },
    ];
    // Globe and Matrix are intentionally NOT listed here — they're easter eggs
    // (type "earth"/"matrix", the Konami code, or the glitching footer glyph).
    return [...nav, ...proj, ...acts];
  }
  function go(id) { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); }
  let items = []; let filtered = []; let sel = 0;
  function open() {
    items = commands(); filtered = items; sel = 0;
    $('#palette').classList.add('open');
    const input = $('#paletteInput');
    input.value = ''; input.placeholder = t().paletteHint;
    list(); setTimeout(() => input.focus(), 30);
  }
  function close() { $('#palette').classList.remove('open'); }
  function list() {
    $('#paletteList').innerHTML = filtered.map((c, i) =>
      `<li class="pl-item${i === sel ? ' sel' : ''}" data-i="${i}"><span class="pl-icon">${esc(c.icon)}</span>${esc(c.label)}</li>`).join('')
      || `<li class="pl-empty">—</li>`;
  }
  function filter(q) { const s = q.toLowerCase(); filtered = items.filter((c) => c.label.toLowerCase().includes(s)); sel = 0; list(); }
  function choose(i) { const c = filtered[i]; if (c) { close(); c.run(); } }
  function init() {
    addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); $('#palette').classList.contains('open') ? close() : open(); }
      if (!$('#palette').classList.contains('open')) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowDown') { e.preventDefault(); sel = Math.min(filtered.length - 1, sel + 1); list(); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); sel = Math.max(0, sel - 1); list(); }
      else if (e.key === 'Enter') { e.preventDefault(); choose(sel); }
    });
    $('#paletteInput').addEventListener('input', (e) => filter(e.target.value));
    $('#paletteList').addEventListener('click', (e) => { const li = e.target.closest('.pl-item'); if (li) choose(+li.dataset.i); });
    $('#palette').addEventListener('click', (e) => { if (e.target.id === 'palette') close(); });
    $('#paletteBtn')?.addEventListener('click', open);
  }
  return { init };
})();

/* =====================================================================
   LANGUAGE
   ===================================================================== */
function setLang(lang) {
  state.lang = lang;
  store.set('lang', lang);
  document.documentElement.lang = lang;
  $('#langEN').classList.toggle('on', lang === 'en');
  $('#langVI').classList.toggle('on', lang === 'vi');
  renderAll();
  handleRoute();
  onScroll();
}

/* =====================================================================
   EASTER EGG — Konami code → matrix rain
   ===================================================================== */
function toast(msg) {
  const el = $('#toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), 3000);
}
const matrixRain = (() => {
  let raf = null; let bound = false;
  function start() {
    const cv = $('#rain');
    const ctx = cv.getContext('2d');
    const resize = () => { cv.width = innerWidth; cv.height = innerHeight; };
    resize(); if (!bound) { addEventListener('resize', resize); bound = true; }
    const chars = '01アイウエオカキクケコ日月';
    const fs = 14; const drops = Array(Math.ceil(innerWidth / fs)).fill(1); let last = 0;
    const draw = (ts) => {
      if (ts - last > 55) {
        last = ts;
        ctx.fillStyle = 'rgba(10,14,20,0.09)'; ctx.fillRect(0, 0, cv.width, cv.height);
        ctx.fillStyle = '#7ee787'; ctx.font = `${fs}px monospace`;
        drops.forEach((y, i) => {
          ctx.fillText(chars[(i * 7 + y) % chars.length], i * fs, y * fs);
          if (y * fs > cv.height && i % 3 === 0) drops[i] = 0;
          drops[i] += 1;
        });
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
  }
  return {
    toggle() {
      if (document.body.classList.toggle('rain')) { start(); toast(state.lang === 'en' ? 'matrix mode' : 'chế độ matrix'); }
      else if (raf) { cancelAnimationFrame(raf); raf = null; }
    },
  };
})();
function initKonami() {
  const seq = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let idx = 0;
  addEventListener('keydown', (e) => {
    idx = (e.key === seq[idx] || e.key.toLowerCase() === seq[idx]) ? idx + 1 : 0;
    if (idx === seq.length) { idx = 0; matrixRain.toggle(); }
  });
}

/* Amber CRT: swap the green phosphor palette for an amber-CRT one, with a quick
   horror-.exe glitch flash on the way in. Toggles a body class; CSS does the rest. */
const crt = (() => ({
  toggle() {
    const on = document.body.classList.toggle('amber');
    if (on && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const o = $('#glitchOverlay');
      if (o) { o.classList.remove('fire'); void o.offsetWidth; o.classList.add('fire'); }
    }
    toast(on ? (state.lang === 'en' ? 'amber CRT' : 'chế độ hổ phách')
             : (state.lang === 'en' ? 'green phosphor' : 'lân quang xanh'));
  },
}))();

/* EGG DOCK — three small, fixed, STATIC dots (bottom-right). They don't move or
   blink, so they're easy to click; quiet enough to miss on a quick pass, but a
   careful visitor will spot them and hover reveals what each does. */
function initEggDock() {
  const dock = $('#eggDock');
  if (!dock) return;
  const run = { globe: () => globe.open(), matrix: () => matrixRain.toggle(), amber: () => crt.toggle() };
  dock.addEventListener('click', (e) => {
    const b = e.target.closest('.egg'); if (b && run[b.dataset.egg]) run[b.dataset.egg]();
  });
}

/* =====================================================================
   GLOBE — a real rotating 3D wireframe Earth (dotted landmasses),
   drawn from scratch on canvas. Opened as an overlay (easter-egg feel).
   ===================================================================== */
const globe = (() => {
  let raf = null;
  let open_ = false;
  let bound = false;
  let rot = 0;            // shared so drag handlers can steer the same value
  let dragging = false;
  let lastX = 0;
  // sparse lat/lng land dots (degrees) — rough continent outlines, enough to read as Earth
  const LAND = [];
  (function seed() {
    // dense fibonacci sphere; keep points that fall on a continent mask
    const N = 13000;
    for (let i = 0; i < N; i += 1) {
      const y = 1 - (i / (N - 1)) * 2;           // -1..1
      const r = Math.sqrt(1 - y * y);
      const phi = i * 2.399963;                   // golden angle
      const x = Math.cos(phi) * r;
      const z = Math.sin(phi) * r;
      const lat = Math.asin(y) * 57.2958;
      const lng = Math.atan2(z, x) * 57.2958;
      if (isLand(lat, lng)) LAND.push([x, y, z]);
    }
  })();
  function isLand(lat, lng) {
    // overlapping ellipses → recognizable continents (lat, lng, rLat, rLng)
    const blobs = [
      [54, 60, 30, 70], [50, 12, 18, 26],          // Eurasia (wide) + Europe
      [16, 18, 26, 20], [-8, 22, 22, 18],          // N.Africa + sub-Saharan
      [10, -78, 14, 12], [-18, -60, 24, 20],       // C.America + S.America
      [48, -100, 24, 34], [62, -98, 14, 30],       // USA + Canada
      [-25, 134, 16, 22],                          // Australia
      [72, -42, 12, 18],                           // Greenland
      [30, 78, 14, 16], [38, 105, 18, 26],         // India + China/SE-Asia
    ];
    for (const [la, ln, rla, rln] of blobs) {
      let dln = Math.abs(lng - ln); if (dln > 180) dln = 360 - dln;
      if (((lat - la) / rla) ** 2 + (dln / rln) ** 2 < 1) return true;
    }
    return false;
  }
  function start() {
    const cv = $('#globe');
    if (!cv) return;
    const ctx = cv.getContext('2d');
    let W, H, Rad;
    const dpr = Math.min(2, devicePixelRatio || 1);
    function size() {
      const s = Math.min(innerWidth, innerHeight) * 0.78;
      W = s; H = s; cv.width = s * dpr; cv.height = s * dpr;
      cv.style.width = `${s}px`; cv.style.height = `${s}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); Rad = s * 0.42;
    }
    size(); if (!bound) { addEventListener('resize', () => { if (open_) size(); }); bound = true; }
    const tilt = -0.41; // ~23.5°
    const accent = () => getComputedStyle(document.body).getPropertyValue('--green').trim() || '#7ee787';
    const cyan = () => getComputedStyle(document.body).getPropertyValue('--cyan').trim() || '#56d4dd';
    function draw() {
      const cx = W / 2; const cy = H / 2; const g = accent(); const c = cyan();
      ctx.clearRect(0, 0, W, H);
      // atmosphere glow — a soft outer ring that reads as a lit atmosphere
      const atmo = ctx.createRadialGradient(cx, cy, Rad * 0.92, cx, cy, Rad * 1.35);
      atmo.addColorStop(0, 'transparent');
      atmo.addColorStop(0.45, `${c}30`);
      atmo.addColorStop(1, 'transparent');
      ctx.fillStyle = atmo; ctx.beginPath(); ctx.arc(cx, cy, Rad * 1.35, 0, 7); ctx.fill();
      // inner halo
      const halo = ctx.createRadialGradient(cx, cy, Rad * 0.55, cx, cy, Rad * 1.15);
      halo.addColorStop(0, `${g}1c`); halo.addColorStop(1, 'transparent');
      ctx.fillStyle = halo; ctx.beginPath(); ctx.arc(cx, cy, Rad * 1.15, 0, 7); ctx.fill();
      // ocean sphere — subtle dark fill so the globe reads as solid, not a wireframe cage
      const ocean = ctx.createRadialGradient(cx - Rad * 0.3, cy - Rad * 0.3, Rad * 0.1, cx, cy, Rad);
      ocean.addColorStop(0, `${c}12`); ocean.addColorStop(1, 'rgba(5,8,13,0.55)');
      ctx.fillStyle = ocean; ctx.beginPath(); ctx.arc(cx, cy, Rad, 0, 7); ctx.fill();
      // rim
      ctx.strokeStyle = `${c}66`; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(cx, cy, Rad, 0, 7); ctx.stroke();
      const cosR = Math.cos(rot); const sinR = Math.sin(rot);
      const cosT = Math.cos(tilt); const sinT = Math.sin(tilt);
      // graticule (lat/long lines)
      ctx.strokeStyle = `${g}22`; ctx.lineWidth = 1;
      for (let la = -60; la <= 60; la += 30) drawParallel(la);
      for (let lo = 0; lo < 180; lo += 30) drawMeridian(lo);
      // land dots — colored by latitude (green near equator → cyan near poles),
      // with occasional brighter "city lights" that twinkle.
      const now = (typeof performance !== 'undefined' ? performance.now() : 0) / 1000;
      let idx = 0;
      for (const [x0, y0, z0] of LAND) {
        idx += 1;
        let x = x0 * cosR + z0 * sinR;
        const z1 = -x0 * sinR + z0 * cosR;
        let y = y0 * cosT - z1 * sinT;
        const z = y0 * sinT + z1 * cosT;
        if (z < 0) continue;                       // back of the sphere
        const px = cx + x * Rad; const py = cy - y * Rad;
        const depth = 0.4 + z * 0.6;
        const isCity = idx % 23 === 0;             // ~1 in 23 dots is a "city"
        if (isCity) {
          const tw = 0.55 + 0.45 * Math.sin(now * 3 + idx);
          ctx.fillStyle = c; ctx.globalAlpha = depth * tw;
          ctx.beginPath(); ctx.arc(px, py, 2.6 * depth, 0, 7); ctx.fill();
        } else {
          // blend green→cyan by absolute latitude (|y0| = 0 equator, 1 pole)
          ctx.fillStyle = Math.abs(y0) > 0.55 ? c : g;
          ctx.globalAlpha = depth;
          ctx.beginPath(); ctx.arc(px, py, 1.9 * depth, 0, 7); ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
      function project(la, lo) {
        const a = la / 57.2958; const b = lo / 57.2958 + rot;
        const x0 = Math.cos(a) * Math.cos(b); const z0 = Math.cos(a) * Math.sin(b); const y0 = Math.sin(a);
        const y = y0 * cosT - z0 * sinT; const z = y0 * sinT + z0 * cosT;
        return { x: cx + x0 * Rad, y: cy - y * Rad, z };
      }
      function drawParallel(la) {
        ctx.beginPath(); let started = false;
        for (let lo = 0; lo <= 360; lo += 6) {
          const p = project(la, lo);
          if (p.z < 0) { started = false; continue; }
          if (started) ctx.lineTo(p.x, p.y); else { ctx.moveTo(p.x, p.y); started = true; }
        }
        ctx.stroke();
      }
      function drawMeridian(lo) {
        ctx.beginPath(); let started = false;
        for (let la = -90; la <= 90; la += 6) {
          const p = project(la, lo);
          if (p.z < 0) { started = false; continue; }
          if (started) ctx.lineTo(p.x, p.y); else { ctx.moveTo(p.x, p.y); started = true; }
        }
        ctx.stroke();
      }
      if (!dragging) rot += matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 0.0045;
      raf = requestAnimationFrame(draw);
    }
    cancelAnimationFrame(raf); draw();
  }
  function open() {
    open_ = true;
    const hint = $('#globeHint');
    if (hint) hint.textContent = state.lang === 'en' ? 'drag to spin · Esc to close' : 'kéo để xoay · Esc để đóng';
    $('#globeOverlay').classList.add('open');
    document.body.classList.add('page-open');
    start();
    setTimeout(() => $('#globeClose')?.focus(), 40);
  }
  function close() {
    open_ = false;
    $('#globeOverlay').classList.remove('open');
    document.body.classList.remove('page-open');
    cancelAnimationFrame(raf);
  }
  function init() {
    const cv = $('#globe');
    $('#globeClose')?.addEventListener('click', close);
    $('#globeOverlay')?.addEventListener('click', (e) => { if (e.target.id === 'globeOverlay') close(); });
    addEventListener('keydown', (e) => { if (e.key === 'Escape' && open_) close(); });
    // drag to spin (pointer works for mouse + touch); auto-spin resumes on release
    const onDown = (e) => { if (!open_) return; dragging = true; lastX = e.clientX; if (cv) cv.style.cursor = 'grabbing'; };
    const onMove = (e) => { if (!dragging) return; rot += (e.clientX - lastX) * 0.008; lastX = e.clientX; };
    const onUp = () => { if (!dragging) return; dragging = false; if (cv) cv.style.cursor = 'grab'; };
    cv?.addEventListener('pointerdown', onDown);
    addEventListener('pointermove', onMove, { passive: true });
    addEventListener('pointerup', onUp);
    addEventListener('pointercancel', onUp);
  }
  return { init, open, close };
})();

/* =====================================================================
   MOBILE NAV
   ===================================================================== */
function initMobileNav() {
  const links = $('#navLinks');
  $('#navBurger').addEventListener('click', () => links.classList.toggle('open'));
  links.addEventListener('click', (e) => { if (e.target.closest('a')) links.classList.remove('open'); });
}

/* =====================================================================
   LIVE STATUS — wall clock + session uptime
   ===================================================================== */
const clock = (() => {
  let timer = null;
  const t0 = Date.now();
  const pad = (n) => String(n).padStart(2, '0');
  function tick() {
    const c = $('#stClock'); const u = $('#stUptime');
    if (!c || !u) return;
    const d = new Date();
    c.textContent = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
    const s = Math.floor((Date.now() - t0) / 1000);
    u.textContent = s < 60 ? `${s}s` : `${Math.floor(s / 60)}m ${s % 60}s`;
  }
  function start() { tick(); clearInterval(timer); timer = setInterval(tick, 1000); }
  return { start };
})();

/* =====================================================================
   CURSOR SPOTLIGHT (desktop only)
   ===================================================================== */
function initSpotlight() {
  if (matchMedia('(pointer: coarse)').matches) return;
  const el = $('#spotlight');
  if (!el) return;
  let tx = 0; let ty = 0; let x = 0; let y = 0; let raf = null;
  addEventListener('pointermove', (e) => { tx = e.clientX; ty = e.clientY; if (!raf) raf = requestAnimationFrame(loop); });
  function loop() {
    x += (tx - x) * 0.15; y += (ty - y) * 0.15;
    el.style.transform = `translate(${x}px, ${y}px)`;
    if (Math.abs(tx - x) > 0.5 || Math.abs(ty - y) > 0.5) raf = requestAnimationFrame(loop); else raf = null;
  }
}

/* =====================================================================
   SYSTEM BOOT INTRO — detailed canvas HUD; charges 0→100% then dissolves
   ===================================================================== */
const intro = (() => {
  let raf = null;
  let done = false;
  function finish() {
    const el = $('#intro');
    if (!el || done) return;
    done = true;
    el.classList.add('done');
    cancelAnimationFrame(raf);
    document.body.classList.remove('intro-lock');
    setTimeout(() => el.remove(), 500);
  }
  function run() {
    const el = $('#intro');
    if (!el) return;
    // skip via ?intro=0, or if already shown once this browser session
    let skip = false;
    try {
      skip = new URLSearchParams(location.search).get('intro') === '0'
        || sessionStorage.getItem('introSeen') === '1';
      sessionStorage.setItem('introSeen', '1');
    } catch { /* sessionStorage may be blocked; just show it */ }
    if (skip) { el.remove(); document.body.classList.remove('intro-lock'); return; }
    done = false;
    document.body.classList.add('intro-lock');
    $('#introSkip').addEventListener('click', finish);
    addEventListener('keydown', function esc2(e) { if (e.key === 'Escape') { finish(); removeEventListener('keydown', esc2); } });

    const cv = $('#hud');
    const ctx = cv.getContext('2d');
    let W, H, cx, cy;
    function size() {
      const dpr = Math.min(2, devicePixelRatio || 1);
      W = innerWidth; H = innerHeight;
      cv.width = W * dpr; cv.height = H * dpr; cv.style.width = `${W}px`; cv.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); cx = W / 2; cy = H / 2;
    }
    size(); addEventListener('resize', size);
    const accent = () => getComputedStyle(document.body).getPropertyValue('--green').trim() || '#7ee787';
    const cyan = () => getComputedStyle(document.body).getPropertyValue('--cyan').trim() || '#56d4dd';
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    // phones render this HUD slower, so keep the intro short there; full length on desktop
    const isPhone = matchMedia('(pointer: coarse)').matches || innerWidth < 700;
    const R = () => Math.min(W, H) * 0.26;
    const lines = INTRO_BOOT[state.lang];
    const logEl = $('#introLog');
    let shown = 0;
    const DUR = reduced ? 350 : (isPhone ? 1400 : 2800);
    const start = performance.now();

    function ring(r, lw, col, alpha, dash) {
      ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.lineWidth = lw; ctx.strokeStyle = col; ctx.globalAlpha = alpha;
      if (dash) ctx.setLineDash(dash); else ctx.setLineDash([]);
      ctx.stroke(); ctx.globalAlpha = 1; ctx.setLineDash([]);
    }
    function arcSeg(r, lw, col, a0, a1) {
      ctx.beginPath(); ctx.arc(cx, cy, r, a0, a1);
      ctx.lineWidth = lw; ctx.strokeStyle = col; ctx.lineCap = 'round'; ctx.stroke(); ctx.lineCap = 'butt';
    }
    function hexNum(name, val, x, y, align) {
      ctx.fillStyle = name; ctx.globalAlpha = 0.55; ctx.textAlign = align;
      ctx.font = '11px JetBrains Mono, monospace'; ctx.fillText(val, x, y); ctx.globalAlpha = 1;
    }

    function frame(now) {
      const k = Math.min(1, (now - start) / DUR);
      const tt = (now - start) / 1000;
      const g = accent(); const c = cyan(); const base = R();
      ctx.clearRect(0, 0, W, H);

      // grid
      ctx.strokeStyle = 'rgba(126,231,135,0.05)'; ctx.lineWidth = 1;
      for (let x = (cx % 46); x < W; x += 46) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
      for (let y = (cy % 46); y < H; y += 46) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

      // corner telemetry (system feel) — left top, right kept clear of SKIP
      hexNum(g, `0x${Math.floor(k * 65535).toString(16).padStart(4, '0').toUpperCase()}`, 24, 28, 'left');
      hexNum(g, `t+${tt.toFixed(2)}s`, 24, 44, 'left');
      hexNum(c, `CPU ${Math.round(20 + k * 70)}%`, W - 24, 72, 'right');
      hexNum(c, `MEM ${Math.round(30 + k * 50)}%`, W - 24, 88, 'right');

      // outer dotted ring
      ctx.save(); ctx.translate(cx, cy); ctx.rotate(tt * 0.25); ctx.translate(-cx, -cy);
      ring(base * 1.42, 1, g, 0.22, [2, 12]); ctx.restore();

      // tick ring
      ctx.save(); ctx.translate(cx, cy); ctx.rotate(-tt * 0.5);
      for (let i = 0; i < 60; i += 1) {
        const a = (i / 60) * Math.PI * 2; const long = i % 5 === 0;
        const r0 = base * 1.16; const r1 = base * (long ? 1.26 : 1.21);
        ctx.beginPath(); ctx.moveTo(Math.cos(a) * r0, Math.sin(a) * r0); ctx.lineTo(Math.cos(a) * r1, Math.sin(a) * r1);
        ctx.strokeStyle = g; ctx.globalAlpha = long ? 0.6 : 0.28; ctx.lineWidth = long ? 2 : 1; ctx.stroke();
      }
      ctx.globalAlpha = 1; ctx.restore();

      // reticle arcs
      ctx.save(); ctx.translate(cx, cy); ctx.rotate(tt * 0.9); ctx.translate(-cx, -cy);
      arcSeg(base * 1.05, 2, c, 0.2 * Math.PI, 0.7 * Math.PI); arcSeg(base * 1.05, 2, c, 1.2 * Math.PI, 1.7 * Math.PI); ctx.restore();
      ctx.save(); ctx.translate(cx, cy); ctx.rotate(-tt * 1.3); ctx.translate(-cx, -cy);
      arcSeg(base * 0.92, 2, g, -0.15 * Math.PI, 0.35 * Math.PI); arcSeg(base * 0.92, 2, g, 0.85 * Math.PI, 1.35 * Math.PI); ctx.restore();

      // charge ring
      ctx.globalAlpha = 0.12; ring(base * 0.78, 6, g, 0.12); ctx.globalAlpha = 1;
      arcSeg(base * 0.78, 6, g, -Math.PI / 2, -Math.PI / 2 + k * Math.PI * 2);

      // crosshair
      ctx.strokeStyle = g; ctx.globalAlpha = 0.4; ctx.lineWidth = 1;
      [[-1, 0], [1, 0], [0, -1], [0, 1]].forEach(([dx, dy]) => {
        ctx.beginPath(); ctx.moveTo(cx + dx * base * 0.5, cy + dy * base * 0.5); ctx.lineTo(cx + dx * base * 0.68, cy + dy * base * 0.68); ctx.stroke();
      });
      ctx.globalAlpha = 1;

      // core glow
      const cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, base * 0.5);
      const pulse = 0.5 + 0.5 * Math.sin(tt * 4);
      cg.addColorStop(0, g); cg.addColorStop(0.25, `${g}cc`); cg.addColorStop(1, 'transparent');
      ctx.globalAlpha = 0.5 + 0.4 * pulse; ctx.fillStyle = cg;
      ctx.beginPath(); ctx.arc(cx, cy, base * 0.5, 0, Math.PI * 2); ctx.fill(); ctx.globalAlpha = 1;

      // readout
      ctx.fillStyle = g; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.font = `700 ${Math.round(base * 0.22)}px 'JetBrains Mono', monospace`;
      ctx.fillText(`${Math.round(k * 100)}`, cx, cy - base * 0.02);
      ctx.font = `${Math.round(base * 0.08)}px 'JetBrains Mono', monospace`;
      ctx.globalAlpha = 0.7; ctx.fillText('SYSTEM ONLINE', cx, cy + base * 0.2); ctx.globalAlpha = 1;

      // radar sweep
      ctx.save(); ctx.translate(cx, cy); ctx.rotate(tt * 2.2);
      const wedge = ctx.createLinearGradient(0, 0, base * 1.3, 0);
      wedge.addColorStop(0, `${g}00`); wedge.addColorStop(1, `${g}33`);
      ctx.fillStyle = wedge; ctx.beginPath(); ctx.moveTo(0, 0); ctx.arc(0, 0, base * 1.3, -0.18, 0); ctx.closePath(); ctx.fill();
      ctx.restore();

      // boot log
      const want = Math.floor(k * lines.length);
      while (shown < want && shown < lines.length) {
        const li = document.createElement('div');
        li.className = 'log-line'; li.innerHTML = `<span class="log-ok">▸</span> ${esc(lines[shown])}`;
        logEl.appendChild(li); requestAnimationFrame(() => li.classList.add('in')); shown += 1;
      }

      if (k < 1) { raf = requestAnimationFrame(frame); }
      else {
        while (shown < lines.length) {
          const li = document.createElement('div');
          li.className = 'log-line in'; li.innerHTML = `<span class="log-ok">▸</span> ${esc(lines[shown])}`;
          logEl.appendChild(li); shown += 1;
        }
        raf = requestAnimationFrame(frame);
        setTimeout(finish, reduced ? 150 : 600);
      }
    }
    raf = requestAnimationFrame(frame);
  }
  return { run };
})();

/* =====================================================================
   BOOTSTRAP
   ===================================================================== */
window.setLang = setLang;

state.lang = store.get('lang', 'en') === 'vi' ? 'vi' : 'en';
document.documentElement.lang = state.lang;

renderAll();
$('#langEN').classList.toggle('on', state.lang === 'en');
$('#langVI').classList.toggle('on', state.lang === 'vi');
palette.init();
spotify.init();
globe.init();
handleRoute();
onScroll();

let scrollScheduled = false;
addEventListener('scroll', () => {
  if (scrollScheduled) return;
  scrollScheduled = true;
  requestAnimationFrame(() => { scrollScheduled = false; onScroll(); });
}, { passive: true });
addEventListener('hashchange', handleRoute);
initMobileNav();
initKonami();
initEggDock();
initSpotlight();
intro.run();
