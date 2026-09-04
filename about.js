
'use strict';

const state = {
  cart: []
};

document.addEventListener('DOMContentLoaded', () => {
  renderLucide();
  initTheme();
  initRTL();
  initHeader();
  initMobileNav();
  initSearch();
  initCartDrawer();
  initTimelineObserver();
  initSmoothScroll();
  initActiveNavLinks();
});

function renderLucide() {
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  }
}

function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const htmlEl = document.documentElement;
  const STORAGE_KEY = 'haridra-rituals-theme';

  const savedTheme = localStorage.getItem(STORAGE_KEY) || 'light';
  applyTheme(savedTheme);

  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    const current = htmlEl.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
  });

  function applyTheme(theme) {
    htmlEl.setAttribute('data-theme', theme);
    if (toggleBtn) {
      const isDark = theme === 'dark';
      toggleBtn.setAttribute('aria-pressed', isDark);
      toggleBtn.title = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    }
  }
}

function initRTL() {
  const rtlBtn = document.getElementById('rtl-toggle');
  const htmlEl = document.documentElement;
  const STORAGE_KEY = 'haridra-rituals-dir';

  const savedDir = localStorage.getItem(STORAGE_KEY) || 'ltr';
  applyDirection(savedDir);

  if (!rtlBtn) return;

  rtlBtn.addEventListener('click', () => {
    const current = htmlEl.getAttribute('dir') || 'ltr';
    const next = current === 'rtl' ? 'ltr' : 'rtl';
    applyDirection(next);
    localStorage.setItem(STORAGE_KEY, next);
  });

  function applyDirection(dir) {
    htmlEl.setAttribute('dir', dir);
    if (rtlBtn) {
      const isRTL = dir === 'rtl';
      rtlBtn.setAttribute('aria-pressed', isRTL);
      const label = rtlBtn.querySelector('.toggle-label');
      if (label) label.textContent = isRTL ? 'LTR' : 'RTL';
      rtlBtn.title = isRTL ? 'Switch to LTR Layout' : 'Switch to RTL Layout';
    }
  }
}

function initHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

function initMobileNav() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const drawer = document.getElementById('mobile-nav-drawer');
  const closeBtn = document.getElementById('mobile-nav-close');
  const overlay = document.getElementById('mobile-nav-overlay');
  const homeToggleBtn = document.getElementById('mobile-home-toggle');
  const homeItem = document.getElementById('mobile-nav-home-item');
  const links = document.querySelectorAll('.mobile-nav-link:not(.mobile-dropdown-btn)');

  if (!hamburgerBtn || !drawer) return;

  function openDrawer() {
    drawer.classList.add('open');
    if (overlay) overlay.classList.add('active');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  hamburgerBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  if (homeToggleBtn && homeItem) {
    homeToggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const isOpen = homeItem.classList.toggle('open');
      homeToggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  links.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

function initSearch() {
  const overlay = document.getElementById('search-overlay');
  const closeBtn = document.getElementById('search-close');
  const searchInput = document.getElementById('search-input');

  if (!overlay) return;

  function closeSearch() {
    overlay.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeSearch);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeSearch();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !overlay.hasAttribute('hidden')) {
      closeSearch();
    }
  });
}

function initCartDrawer() {
  const cartBtn = document.getElementById('cart-btn');
  const drawer = document.getElementById('cart-drawer');
  const closeBtn = document.getElementById('cart-drawer-close');
  const backdrop = document.getElementById('cart-drawer-backdrop');

  if (!cartBtn || !drawer) return;

  function openCart() {
    drawer.removeAttribute('hidden');
    setTimeout(() => {
      drawer.classList.add('open');
      if (backdrop) backdrop.classList.add('active');
    }, 10);
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    drawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('active');
    setTimeout(() => {
      drawer.setAttribute('hidden', '');
      document.body.style.overflow = '';
    }, 300);
  }

  cartBtn.addEventListener('click', openCart);
  if (closeBtn) closeBtn.addEventListener('click', closeCart);
  if (backdrop) backdrop.addEventListener('click', closeCart);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeCart();
    }
  });
}

function initTimelineObserver() {
  const timelineItems = document.querySelectorAll('.timeline-card-item');
  if (timelineItems.length === 0 || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  timelineItems.forEach(item => observer.observe(item));
}

function initActiveNavLinks() {
  const rawPath = window.location.pathname.split('/').pop().toLowerCase();
  const currentPath = (rawPath === '' || rawPath === 'index.html') ? 'index.html' : rawPath;

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const hrefBase = href.split('/').pop().toLowerCase();

    if (hrefBase === currentPath) {
      link.classList.add('active');
    } else if (currentPath === 'servicedetail.html' && hrefBase === 'services.html') {
      link.classList.add('active');
    } else if (currentPath === 'journals detail.html' && hrefBase === 'journals.html') {
      link.classList.add('active');
    } else if ((currentPath === 'index.html' || currentPath === 'home2.html') && link.id === 'nav-home') {
      link.classList.add('active');
    } else if (href.includes('.html') && hrefBase !== currentPath) {
      link.classList.remove('active');
    }
  });

  const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-sublink');
  mobileLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const hrefBase = href.split('/').pop().toLowerCase();

    if (hrefBase === currentPath) {
      link.classList.add('active');
    } else if (currentPath === 'servicedetail.html' && hrefBase === 'services.html') {
      link.classList.add('active');
    } else if (currentPath === 'journals detail.html' && hrefBase === 'journals.html') {
      link.classList.add('active');
    }
  });
}
