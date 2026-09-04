
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  renderLucide();
  initTheme();
  initRTL();
  initHeader();
  initMobileNav();
  initSearch();
  initCartDrawer();
  initContactForm();
  initFaqAccordion();
  initGoogleMapSwitcher();
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

function initContactForm() {
  const form = document.getElementById('main-contact-form');
  const submitBtn = document.getElementById('submit-contact-btn');
  const successBanner = document.getElementById('form-success-banner');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    const nameInput = document.getElementById('contact-name');
    const nameGroup = nameInput.closest('.form-group');
    if (!nameInput.value.trim()) {
      nameGroup.classList.add('has-error');
      isValid = false;
    } else {
      nameGroup.classList.remove('has-error');
    }

    const emailInput = document.getElementById('contact-email');
    const emailGroup = emailInput.closest('.form-group');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      emailGroup.classList.add('has-error');
      isValid = false;
    } else {
      emailGroup.classList.remove('has-error');
    }

    const categorySelect = document.getElementById('contact-category');
    const categoryGroup = categorySelect.closest('.form-group');
    if (!categorySelect.value) {
      categoryGroup.classList.add('has-error');
      isValid = false;
    } else {
      categoryGroup.classList.remove('has-error');
    }

    const messageInput = document.getElementById('contact-message');
    const messageGroup = messageInput.closest('.form-group');
    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      messageGroup.classList.add('has-error');
      isValid = false;
    } else {
      messageGroup.classList.remove('has-error');
    }

    if (isValid) {
      submitBtn.disabled = true;
      submitBtn.querySelector('span').textContent = 'Sending Message...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.querySelector('span').textContent = 'Send Message';
        form.reset();
        if (successBanner) {
          successBanner.removeAttribute('hidden');
          successBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 1200);
    }
  });
}

function initFaqAccordion() {
  const accordionItems = document.querySelectorAll('.faq-accordion-item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.faq-accordion-header');
    const body = item.querySelector('.faq-accordion-body');

    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      accordionItems.forEach(other => {
        other.classList.remove('open');
        const otherHeader = other.querySelector('.faq-accordion-header');
        const otherBody = other.querySelector('.faq-accordion-body');
        if (otherHeader) otherHeader.setAttribute('aria-expanded', 'false');
        if (otherBody) otherBody.setAttribute('hidden', '');
      });

      if (!isOpen) {
        item.classList.add('open');
        header.setAttribute('aria-expanded', 'true');
        body.removeAttribute('hidden');
      }
    });
  });
}

function initGoogleMapSwitcher() {
  const tabs = document.querySelectorAll('.map-tab-btn');
  const details = document.querySelectorAll('.studio-detail-content');
  const iframe = document.getElementById('google-map-iframe');
  const tag = document.getElementById('map-location-tag');

  const MAP_URLS = {
    ojai: 'https://maps.google.com/maps?q=104+Botanical+Way+Ojai+CA+93023&t=&z=14&ie=UTF8&iwloc=&output=embed',
    la: 'https://maps.google.com/maps?q=412+Abbot+Kinney+Blvd+Venice+CA+90291&t=&z=14&ie=UTF8&iwloc=&output=embed',
    sf: 'https://maps.google.com/maps?q=842+Fillmore+St+San+Francisco+CA+94117&t=&z=14&ie=UTF8&iwloc=&output=embed'
  };

  const MAP_TAGS = {
    ojai: 'Live Google Map • Ojai Flagship Sanctuary',
    la: 'Live Google Map • Venice Beach Apothecary Bar',
    sf: 'Live Google Map • San Francisco Ritual Room'
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const studioId = tab.getAttribute('data-studio');

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      if (iframe && MAP_URLS[studioId]) {
        iframe.src = MAP_URLS[studioId];
      }
      if (tag && MAP_TAGS[studioId]) {
        tag.textContent = MAP_TAGS[studioId];
      }

      details.forEach(panel => {
        if (panel.id === `studio-${studioId}`) {
          panel.removeAttribute('hidden');
          panel.classList.add('active');
        } else {
          panel.setAttribute('hidden', '');
          panel.classList.remove('active');
        }
      });
    });
  });
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
