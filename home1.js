
'use strict';

const PRODUCTS_DATA = {
  'prod-1': {
    id: 'prod-1',
    name: 'Lavender & Oat Bar Soap',
    category: 'Handmade Soap',
    price: 14.00,
    img: 'assets/soap-lavender-oat.jpg',
    desc: 'Cold-cured for 6 weeks with French lavender buds, colloidal oats, and pure extra virgin olive oil. Leaves skin silky soft, deeply calm, and clean.',
    rating: '4.9 (128 reviews)'
  },
  'prod-2': {
    id: 'prod-2',
    name: 'Rosehip Renewal Face Oil',
    category: 'Face Oil',
    price: 32.00,
    img: 'assets/rosehip-oil.jpg',
    desc: 'Pure cold-pressed rosehip seed oil infused with wild lavender blossoms and antioxidant-rich jojoba. Provides overnight restoration and morning glow.',
    rating: '5.0 (94 reviews)'
  },
  'prod-3': {
    id: 'prod-3',
    name: 'Lavender Botanical Body Butter',
    category: 'Body Care',
    price: 26.00,
    img: 'assets/body-butter.jpg',
    desc: 'Whipped raw shea butter, organic murumuru, and soothing wild lavender essence that melts on contact to lock in 24-hour hydration.',
    rating: '4.9 (186 reviews)'
  },
  'prod-4': {
    id: 'prod-4',
    name: 'Lavender & Sage Balancing Mist',
    category: 'Toner & Mist',
    price: 22.00,
    img: 'assets/forest-mist.jpg',
    desc: 'Steam-distilled French lavender hydrosol and mountain clary sage to immediately restore delicate pH balance and tone your skin.',
    rating: '4.8 (72 reviews)'
  }
};

const state = {
  cart: [],
  quickViewProduct: null,
  quickViewQty: 1
};

document.addEventListener('DOMContentLoaded', () => {
  renderLucide();
  initTheme();
  initRTL();
  initHeader();
  initMobileNav();
  initSearch();
  initCartDrawer();
  initIngredients();
  initProductInteractions();
  initQuickViewModal();
  initNewsletter();
  initSmoothScroll();
  initActiveNavLinks();
});

function renderLucide() {
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  }
}

function initIngredients() {
  const cards = document.querySelectorAll('.ingredient-card-btn');
  const panels = document.querySelectorAll('.ingredient-panel');

  if (cards.length === 0 || panels.length === 0) return;

  cards.forEach(card => {
    function activateCard() {
      const targetId = card.getAttribute('data-target');
      if (!targetId) return;

      cards.forEach(c => {
        c.classList.remove('active');
        c.setAttribute('aria-selected', 'false');
      });
      card.classList.add('active');
      card.setAttribute('aria-selected', 'true');

      panels.forEach(panel => {
        if (panel.id === targetId) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });

      renderLucide();
    }

    card.addEventListener('click', activateCard);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        activateCard();
      }
    });
  });
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
  const searchBtn = document.getElementById('search-btn');
  const overlay = document.getElementById('search-overlay');
  const closeBtn = document.getElementById('search-close');
  const searchInput = document.getElementById('search-input');
  const suggestions = document.querySelectorAll('.sugg-pill');
  const resultsContainer = document.getElementById('search-results-list');

  if (!searchBtn || !overlay) return;

  function openSearch() {
    overlay.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    if (searchInput) {
      searchInput.value = '';
      setTimeout(() => searchInput.focus(), 80);
    }
    renderSearchResults('');
  }

  function closeSearch() {
    overlay.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }

  searchBtn.addEventListener('click', openSearch);
  if (closeBtn) closeBtn.addEventListener('click', closeSearch);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeSearch();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !overlay.hasAttribute('hidden')) {
      closeSearch();
    }
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderSearchResults(e.target.value.trim().toLowerCase());
    });
  }

  suggestions.forEach(pill => {
    pill.addEventListener('click', () => {
      const q = pill.getAttribute('data-query') || '';
      if (searchInput) {
        searchInput.value = q;
        renderSearchResults(q.toLowerCase());
      }
    });
  });

  function renderSearchResults(query) {
    if (!resultsContainer) return;
    resultsContainer.innerHTML = '';

    if (!query) return;

    const matched = Object.values(PRODUCTS_DATA).filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.desc.toLowerCase().includes(query)
    );

    if (matched.length === 0) {
      resultsContainer.innerHTML = `<p style="padding: 12px; font-size: 0.85rem; color: var(--text-muted);">No botanical products found for "${query}".</p>`;
      return;
    }

    matched.forEach(item => {
      const el = document.createElement('div');
      el.className = 'search-result-item';
      el.innerHTML = `
        <div style="display:flex;align-items:center;gap:12px;">
          <img src="${item.img}" alt="${item.name}" style="width:40px;height:40px;border-radius:6px;object-fit:cover;" />
          <div>
            <strong style="font-size:0.9rem;display:block;">${item.name}</strong>
            <span style="font-size:0.75rem;color:var(--text-muted);">${item.category}</span>
          </div>
        </div>
        <span style="font-weight:700;color:var(--deep-lavender);">$${item.price.toFixed(2)}</span>
      `;
      el.addEventListener('click', () => {
        closeSearch();
        openQuickView(item.id);
      });
      resultsContainer.appendChild(el);
    });
  }
}

function initCartDrawer() {
  const cartBtn = document.getElementById('cart-btn');
  const cartDrawer = document.getElementById('cart-drawer');
  const closeBtn = document.getElementById('cart-drawer-close');
  const backdrop = document.getElementById('cart-drawer-backdrop');
  const emptyCta = document.getElementById('cart-empty-cta');
  const checkoutBtn = document.getElementById('cart-checkout-btn');

  function openCart() {
    if (!cartDrawer) return;
    cartDrawer.removeAttribute('hidden');
    requestAnimationFrame(() => {
      cartDrawer.classList.add('open');
      if (backdrop) backdrop.classList.add('active');
    });
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    if (!cartDrawer) return;
    cartDrawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('active');
    setTimeout(() => {
      cartDrawer.setAttribute('hidden', '');
    }, 320);
    document.body.style.overflow = '';
  }

  if (cartBtn) cartBtn.addEventListener('click', openCart);
  if (closeBtn) closeBtn.addEventListener('click', closeCart);
  if (backdrop) backdrop.addEventListener('click', closeCart);

  if (emptyCta) {
    emptyCta.addEventListener('click', () => {
      closeCart();
    });
  }

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (state.cart.length === 0) return;
      showToast('Redirecting to secure organic checkout...', 'Thank you for your ritual order!');
      setTimeout(() => {
        state.cart = [];
        updateCartUI();
        closeCart();
      }, 1800);
    });
  }

  window.openCartDrawer = openCart;
}

function addToCart(productId, quantity = 1) {
  const prod = PRODUCTS_DATA[productId];
  if (!prod) return;

  const existing = state.cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    state.cart.push({
      id: prod.id,
      name: prod.name,
      price: prod.price,
      img: prod.img,
      quantity: quantity
    });
  }

  updateCartUI();
  showToast(prod.name, `Added ${quantity} item${quantity > 1 ? 's' : ''} to your bag!`);
}

function updateCartUI() {
  const countBadge = document.getElementById('cart-count');
  const drawerCount = document.getElementById('drawer-item-count');
  const emptyState = document.getElementById('cart-empty');
  const itemsContainer = document.getElementById('cart-items-list');
  const subtotalEl = document.getElementById('cart-subtotal');

  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (countBadge) countBadge.textContent = totalItems;
  if (drawerCount) drawerCount.textContent = totalItems;
  if (subtotalEl) subtotalEl.textContent = `$${totalPrice.toFixed(2)}`;

  if (!itemsContainer) return;

  if (state.cart.length === 0) {
    if (emptyState) emptyState.style.display = 'flex';
    itemsContainer.innerHTML = '';
  } else {
    if (emptyState) emptyState.style.display = 'none';
    itemsContainer.innerHTML = '';

    state.cart.forEach(item => {
      const row = document.createElement('div');
      row.className = 'cart-item-row';
      row.innerHTML = `
        <img src="${item.img}" alt="${item.name}" class="cart-item-thumb" />
        <div class="cart-item-details">
          <h4 class="cart-item-name">${item.name}</h4>
          <p class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</p>
          <div class="cart-item-controls">
            <div class="cart-qty-wrap">
              <button class="cart-qty-btn" data-action="minus" data-id="${item.id}">-</button>
              <span class="cart-qty-val">${item.quantity}</span>
              <button class="cart-qty-btn" data-action="plus" data-id="${item.id}">+</button>
            </div>
            <button class="cart-remove-btn" data-id="${item.id}">Remove</button>
          </div>
        </div>
      `;

      row.querySelector('[data-action="minus"]').addEventListener('click', () => {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.cart = state.cart.filter(i => i.id !== item.id);
        }
        updateCartUI();
      });

      row.querySelector('[data-action="plus"]').addEventListener('click', () => {
        item.quantity += 1;
        updateCartUI();
      });

      row.querySelector('.cart-remove-btn').addEventListener('click', () => {
        state.cart = state.cart.filter(i => i.id !== item.id);
        updateCartUI();
      });

      itemsContainer.appendChild(row);
    });
  }

  renderLucide();
}

function initProductInteractions() {

  const addButtons = document.querySelectorAll('.add-to-cart-btn');
  addButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      addToCart(id, 1);
    });
  });

  const wishButtons = document.querySelectorAll('.product-wish');
  wishButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      btn.classList.toggle('liked');
      const isLiked = btn.classList.contains('liked');
      showToast('Wishlist Updated', isLiked ? 'Saved to your favorite botanical rituals!' : 'Removed from wishlist.');
    });
  });

  const filterTabs = document.querySelectorAll('.filter-tab');
  const productCards = document.querySelectorAll('.product-card');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const filter = tab.getAttribute('data-filter');

      productCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

function initQuickViewModal() {
  const quickButtons = document.querySelectorAll('.btn-quick-view');
  const modal = document.getElementById('quick-modal');
  const backdrop = document.getElementById('quick-modal-backdrop');
  const closeBtn = document.getElementById('quick-modal-close');
  const qtyMinus = document.getElementById('qty-minus');
  const qtyPlus = document.getElementById('qty-plus');
  const qtyCount = document.getElementById('qty-count');
  const addBtn = document.getElementById('quick-add-btn');

  quickButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const prodId = btn.getAttribute('data-product');
      openQuickView(prodId);
    });
  });

  function closeModal() {
    if (!modal) return;
    modal.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  if (qtyMinus) {
    qtyMinus.addEventListener('click', () => {
      if (state.quickViewQty > 1) {
        state.quickViewQty -= 1;
        if (qtyCount) qtyCount.textContent = state.quickViewQty;
      }
    });
  }

  if (qtyPlus) {
    qtyPlus.addEventListener('click', () => {
      state.quickViewQty += 1;
      if (qtyCount) qtyCount.textContent = state.quickViewQty;
    });
  }

  if (addBtn) {
    addBtn.addEventListener('click', () => {
      if (state.quickViewProduct) {
        addToCart(state.quickViewProduct.id, state.quickViewQty);
        closeModal();
      }
    });
  }

  window.openQuickView = function(productId) {
    const prod = PRODUCTS_DATA[productId];
    if (!prod || !modal) return;

    state.quickViewProduct = prod;
    state.quickViewQty = 1;

    document.getElementById('quick-modal-img').src = prod.img;
    document.getElementById('quick-modal-cat').textContent = prod.category;
    document.getElementById('quick-modal-title').textContent = prod.name;
    document.getElementById('quick-modal-price').textContent = `$${prod.price.toFixed(2)}`;
    document.getElementById('quick-modal-desc').textContent = prod.desc;
    if (qtyCount) qtyCount.textContent = '1';

    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    renderLucide();
  };
}

function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  const input = document.getElementById('newsletter-email');
  const success = document.getElementById('newsletter-success');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!input || !input.value.trim() || !input.checkValidity()) {
      input.focus();
      return;
    }

    if (success) {
      success.removeAttribute('hidden');
    }
    input.value = '';
    showToast('Subscribed!', 'Welcome to Haridra Rituals. Check your inbox for special botanical perks.');
    renderLucide();
  });
}

let toastTimeout;
function showToast(title, msg) {
  const toast = document.getElementById('cart-toast');
  const titleEl = document.getElementById('toast-title');
  const msgEl = document.getElementById('toast-msg');

  if (!toast) return;

  if (titleEl) titleEl.textContent = title;
  if (msgEl) msgEl.textContent = msg;

  toast.removeAttribute('hidden');
  clearTimeout(toastTimeout);

  renderLucide();

  toastTimeout = setTimeout(() => {
    toast.setAttribute('hidden', '');
  }, 3500);
}

function initSmoothScroll() {
  const sections = document.querySelectorAll('section[id], footer[id]');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        current = sec.getAttribute('id');
      }
    });

    if (current) {
      const anchorLinks = document.querySelectorAll('.nav-link[href^="#"]');
      anchorLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    }
  }, { passive: true });
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
