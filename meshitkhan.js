/* ============================================
   meshitkhan.js
   Nav scroll · Reveal · Mobile menu
   ============================================ */

// ── NAVBAR SCROLL ─────────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('nav')
    .classList.toggle('scrolled', window.scrollY > 20);
});

// ── MOBILE MENU ──────────────────────────────
document.querySelectorAll('#navLinks a').forEach(a => {
  a.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});

// ── SCROLL REVEAL ────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── STAGGER GRID CARDS ───────────────────────
// Expertise cards
document.querySelectorAll('#expertise .mk-card').forEach((el, i) => {
  el.style.transitionDelay = `${i * 70}ms`;
});

// Geo cards
document.querySelectorAll('#geography .mk-card').forEach((el, i) => {
  el.style.transitionDelay = `${i * 50}ms`;
});

// Number cards
document.querySelectorAll('#numbers .mk-card').forEach((el, i) => {
  el.style.transitionDelay = `${i * 60}ms`;
});
