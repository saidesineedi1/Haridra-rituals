
'use strict';

const state = {
  cart: [],
  activeTheme: localStorage.getItem('haridra-rituals-theme') || 'light',
  activeDir: localStorage.getItem('haridra-rituals-dir') || 'ltr'
};

document.addEventListener('DOMContentLoaded', () => {
  renderLucide();
  initTheme();
  initRTL();
  initHeader();
  initMobileNav();
  initSearch();
  initCartDrawer();
  initScrollAnimations();
  initSmoothScroll();
  initActiveNavLinks();
});

function renderLucide() {
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  }
}

function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;

  const currentTheme = localStorage.getItem('haridra-rituals-theme') || 'light';
  html.setAttribute('data-theme', currentTheme);
  state.activeTheme = currentTheme;

  if (themeToggle) {
    themeToggle.setAttribute('aria-pressed', currentTheme === 'dark' ? 'true' : 'false');
    themeToggle.addEventListener('click', () => {
      const isDark = html.getAttribute('data-theme') === 'dark';
      const newTheme = isDark ? 'light' : 'dark';

      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('haridra-rituals-theme', newTheme);
      themeToggle.setAttribute('aria-pressed', newTheme === 'dark' ? 'true' : 'false');
      state.activeTheme = newTheme;
    });
  }
}

function initRTL() {
  const rtlToggle = document.getElementById('rtl-toggle');
  const html = document.documentElement;

  const currentDir = localStorage.getItem('haridra-rituals-dir') || 'ltr';
  html.setAttribute('dir', currentDir);
  state.activeDir = currentDir;

  if (rtlToggle) {
    rtlToggle.setAttribute('aria-pressed', currentDir === 'rtl' ? 'true' : 'false');
    rtlToggle.addEventListener('click', () => {
      const isRtl = html.getAttribute('dir') === 'rtl';
      const newDir = isRtl ? 'ltr' : 'rtl';

      html.setAttribute('dir', newDir);
      localStorage.setItem('haridra-rituals-dir', newDir);
      rtlToggle.setAttribute('aria-pressed', newDir === 'rtl' ? 'true' : 'false');
      state.activeDir = newDir;
    });
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
  const links = document.querySelectorAll('.mobile-nav-link:not(.mobile-dropdown-btn)');
  const sublinks = document.querySelectorAll('.mobile-sublink');
  const homeToggleBtn = document.getElementById('mobile-home-toggle');
  const homeItem = document.getElementById('mobile-nav-home-item');

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
    link.addEventListener('click', () => {
      closeDrawer();
      document.querySelectorAll('.mobile-nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  sublinks.forEach(sublink => {
    sublink.addEventListener('click', () => {
      closeDrawer();
    });
  });
}

function initSearch() {
  const searchOverlay = document.getElementById('search-overlay');
  const searchInput = document.getElementById('search-input');
  const searchClose = document.getElementById('search-close');
  const suggPills = document.querySelectorAll('.sugg-pill');

  if (!searchOverlay) return;

  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      openSearch();
    }
    if (e.key === 'Escape' && !searchOverlay.hidden) {
      closeSearch();
    }
  });

  const searchBtn = document.getElementById('search-btn');

  function openSearch() {
    searchOverlay.hidden = false;
    if (searchInput) searchInput.focus();
    document.body.style.overflow = 'hidden';
  }

  function closeSearch() {
    searchOverlay.hidden = true;
    document.body.style.overflow = '';
  }

  if (searchBtn) searchBtn.addEventListener('click', openSearch);
  if (searchClose) searchClose.addEventListener('click', closeSearch);

  searchOverlay.addEventListener('click', (e) => {
    if (e.target === searchOverlay) {
      closeSearch();
    }
  });

  suggPills.forEach(pill => {
    pill.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = pill.getAttribute('data-query') || '';
        searchInput.focus();
      }
    });
  });
}

function initCartDrawer() {
  const cartBtn = document.getElementById('cart-btn');
  const cartDrawer = document.getElementById('cart-drawer');
  const cartClose = document.getElementById('cart-drawer-close');
  const cartBackdrop = document.getElementById('cart-drawer-backdrop');

  if (!cartBtn || !cartDrawer) return;

  function openCart() {
    cartDrawer.hidden = false;
    setTimeout(() => {
      cartDrawer.classList.add('open');
      if (cartBackdrop) cartBackdrop.classList.add('active');
    }, 10);
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    cartDrawer.classList.remove('open');
    if (cartBackdrop) cartBackdrop.classList.remove('active');
    setTimeout(() => {
      cartDrawer.hidden = true;
      document.body.style.overflow = '';
    }, 350);
  }

  cartBtn.addEventListener('click', openCart);
  if (cartClose) cartClose.addEventListener('click', closeCart);
  if (cartBackdrop) cartBackdrop.addEventListener('click', closeCart);
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h') || '80', 10);
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerH;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

function initScrollAnimations() {
  const sections = document.querySelectorAll('.h2-section');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('h2-in-view');
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    sections.forEach(section => {
      observer.observe(section);
    });
  }
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

  if (currentPath === 'index.html' || currentPath === 'home2.html') {
    const mobileHomeToggle = document.getElementById('mobile-home-toggle');
    if (mobileHomeToggle) mobileHomeToggle.classList.add('active');
  }
}
