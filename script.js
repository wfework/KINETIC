(function () {
  // ─── Active nav: highlight current page ───────────────────────
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // ─── Mobile nav toggle ────────────────────────────────────────
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');

  function openNav() {
    nav.classList.add('open');
    navToggle.setAttribute('aria-expanded', 'true');
    navToggle.textContent = '✕';
  }
  function closeNav() {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.textContent = '☰';
  }

  navToggle?.addEventListener('click', e => {
    e.stopPropagation();
    nav?.classList.contains('open') ? closeNav() : openNav();
  });

  // Close nav when a link is tapped (mobile navigation)
  nav?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', closeNav);
  });

  // Close nav on outside click
  document.addEventListener('click', e => {
    if (nav?.classList.contains('open') && !nav.contains(e.target) && e.target !== navToggle) {
      closeNav();
    }
  });

  // Close nav on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && nav?.classList.contains('open')) closeNav();
  });
})();
