import './style.css';
import { TERMS } from './data.js';
import { STRINGS } from './i18n.js';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

// ---------- Language ----------
function initialLang() {
  try {
    const saved = localStorage.getItem('lang');
    if (saved === 'en' || saved === 'fr') return saved;
  } catch {}
  return (navigator.language || '').toLowerCase().startsWith('fr') ? 'fr' : 'en';
}
let lang = initialLang();
const t = (k) => STRINGS[lang][k] ?? STRINGS.en[k] ?? k;

function applyLang() {
  document.documentElement.lang = lang;
  $$('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
  $$('[data-i18n-html]').forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
  $$('[data-lang]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  renderTerms();
  if (openClass) fillPanel(openClass);
}

$$('[data-lang]').forEach((b) => b.addEventListener('click', () => {
  lang = b.dataset.lang;
  try { localStorage.setItem('lang', lang); } catch {}
  applyLang();
}));

// ---------- Curriculum ----------
const byId = new Map();
TERMS.forEach((term) => term.classes.forEach((c) => byId.set(c.id, { term, c })));

function renderTerms() {
  const root = $('#terms');
  root.innerHTML = TERMS.map((term) => `
    <article class="term ${term.status}" id="term-${term.n}">
      <header>
        <span class="term-n"><small>${t('cur.term')}</small>${term.n}</span>
        <span class="term-meta">${term.weeks} ${t('cur.weeks')}</span>
        <span class="badge ${term.status}">${t('cur.' + term.status)}</span>
      </header>
      <ul>
        ${term.classes.map((c) => `
          <li><button type="button" class="class-btn${c.skipped ? ' skipped' : ''}" data-class="${c.id}">
            <span>${c.title[lang]}</span>
            <small>${c.skipped ? t('cur.skipped') : `${c.res.length} ${t('cur.videos')} →`}</small>
          </button></li>`).join('')}
      </ul>
    </article>`).join('');
}

$('#terms').addEventListener('click', (e) => {
  const b = e.target.closest('[data-class]');
  if (b) openPanel(b.dataset.class);
});

// ---------- Panel ----------
const panel = $('#panel');
let openClass = null;

const esc = (s) => s.replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));

function fillPanel(id) {
  const { term, c } = byId.get(id);
  $('.panel-term', panel).textContent = `${t('cur.term')} ${term.n} · ${t('cur.' + term.status)}`;
  $('#panel-title').textContent = c.title[lang];
  panel.classList.toggle('is-skipped', !!c.skipped);
  if (c.skipped) {
    $('.note-text', panel).textContent = t('cur.skippedNote');
    $('.res', panel).innerHTML = '';
    $('.close', panel).setAttribute('aria-label', t('panel.close'));
    return;
  }
  $('.note-text', panel).textContent = c.note[lang];
  $('.try-text', panel).textContent = c.tryThis[lang];
  const ahead = term.status === 'ahead' ? `<li class="ahead-note">${esc(t('cur.aheadNote'))}</li>` : '';
  $('.res', panel).innerHTML = c.res.map(([who, vid, en, fr]) => `
    <li><a href="https://www.youtube.com/watch?v=${vid}" target="_blank" rel="noopener">
      <span class="who">${esc(who)}</span>
      <span class="what">${esc(lang === 'fr' ? fr : en)}</span>
      <span class="go" aria-label="${esc(t('panel.watch'))}">▶</span>
    </a></li>`).join('') + ahead;
  $('.close', panel).setAttribute('aria-label', t('panel.close'));
}

function openPanel(id, push = true) {
  if (!byId.has(id)) return;
  openClass = id;
  fillPanel(id);
  if (!panel.open) panel.showModal();
  panel.querySelector('.panel-inner').scrollTop = 0;
  if (push) history.replaceState(null, '', '#' + id);
}

function closePanel() {
  panel.classList.add('closing');
  setTimeout(() => {
    panel.classList.remove('closing');
    panel.close();
  }, 180);
}

panel.addEventListener('close', () => {
  openClass = null;
  if (byId.has(location.hash.slice(1))) history.replaceState(null, '', '#curriculum');
});
panel.addEventListener('click', (e) => {
  if (e.target === panel || e.target.closest('[data-close]')) closePanel();
});
panel.addEventListener('cancel', (e) => { e.preventDefault(); closePanel(); });

// ---------- Lightbox for drawings ----------
const lightbox = $('#lightbox');
$$('[data-zoom]').forEach((b) => b.addEventListener('click', () => {
  const img = $('img', lightbox);
  img.src = b.dataset.zoom;
  img.alt = $('img', b).alt;
  lightbox.showModal();
}));
lightbox.addEventListener('click', () => lightbox.close());

// ---------- Copy Discord ----------
$$('[data-copy]').forEach((b) => b.addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(b.dataset.copy); } catch {}
  b.textContent = t('contact.copied');
  setTimeout(() => { b.textContent = t('contact.copy'); }, 1500);
}));

// ---------- Nav shadow on scroll ----------
const nav = $('.nav');
addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 8), { passive: true });

// ---------- Reveal on scroll ----------
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
}, { rootMargin: '0px 0px -8% 0px' });

// ---------- Boot ----------
applyLang();
$$('.wrap').forEach((el) => io.observe(el));
if (byId.has(location.hash.slice(1))) openPanel(location.hash.slice(1), false);

// Load the 3D scene after first paint so text shows instantly.
const boot = () => import('./scene.js').then((m) => m.startScene($('#scene')));
if ('requestIdleCallback' in window) requestIdleCallback(boot, { timeout: 800 });
else setTimeout(boot, 200);

// ---------- External links always open in a new tab ----------
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="http"]');
  if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
  const win = window.open(a.href, '_blank', 'noopener');
  if (win !== undefined) e.preventDefault(); // popup handled; else let the browser follow target="_blank"
});
