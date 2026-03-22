/* ============================================================
   JOHN VINCENT B. MADERAZO — Nursing Portfolio script.js
   ============================================================ */

// ── LOADING SCREEN ────────────────────────────────────────
(function () {
  const loader = document.getElementById('loader');
  const bar    = document.getElementById('loaderBar');
  const pct    = document.getElementById('loaderPct');

  let progress = 0;
  // Total duration of the loading animation in ms
  const DURATION = 2200;
  const INTERVAL = 40;
  const steps = DURATION / INTERVAL;
  let current = 0;

  const timer = setInterval(() => {
    current++;
    // Ease-out curve so it slows near the end
    const t = current / steps;
    progress = Math.round((1 - Math.pow(1 - t, 2)) * 100);
    progress = Math.min(progress, 100);

    bar.style.width = progress + '%';
    pct.textContent = progress + '%';

    if (current >= steps) {
      clearInterval(timer);
      setTimeout(() => loader.classList.add('hide'), 300);
    }
  }, INTERVAL);
})();

// ── CUSTOM CURSOR ────────────────────────────────────────
const cursorRing = document.getElementById('customCursor');
const cursorDot  = document.getElementById('customCursorDot');

document.addEventListener('mousemove', e => {
  cursorRing.style.left = e.clientX + 'px';
  cursorRing.style.top  = e.clientY + 'px';
  cursorDot.style.left  = e.clientX + 'px';
  cursorDot.style.top   = e.clientY + 'px';
});

document.querySelectorAll('a, button, img, video, [contenteditable], .interest-chip, .fact-card, .challenge-card, .hobby-card').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
});

document.addEventListener('mousedown', () => document.body.classList.add('cursor-click'));
document.addEventListener('mouseup',   () => document.body.classList.remove('cursor-click'));

// ── AOS (Animate on Scroll) ──────────────────────────────
const aosObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in-view'); });
}, { threshold: 0.1 });

document.querySelectorAll('[data-aos]').forEach(el => aosObserver.observe(el));

// ── SCROLL TO PAGE ────────────────────────────────────────
function scrollToPage(id) {
  const target = document.getElementById(id);
  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ── LIGHTBOX ──────────────────────────────────────────────
const lightbox = document.getElementById('lightbox');
const lbImg    = document.getElementById('lbImg');
const lbClose  = document.getElementById('lbClose');

// Make all portfolio images open in lightbox on click
document.querySelectorAll(
  '.about-photo-img, .hobby-photo-img, .why-photo-img, .exp-photo-img, .doc-photo-img, .cover-photo-preview, .refl-photo-img, .challenge-photo-img'
).forEach(img => {
  img.style.cursor = 'pointer';
  img.addEventListener('click', () => openLightbox(img.src));
});

function openLightbox(src) {
  lbImg.src = src;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}
lbClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

// ── PARALLAX on cover orbs ────────────────────────────────
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  document.querySelectorAll('.cover-orb').forEach((orb, i) => {
    orb.style.transform = `translateY(${scrollY * (0.06 + i * 0.03)}px)`;
  });
});

console.log('%c✚ Portfolio — John Vincent B. Maderazo\nFundamentals of Nursing (RLE)',
  'color:#F59E0B;font-size:13px;font-weight:700;');