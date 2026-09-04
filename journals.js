
const JOURNAL_ARTICLES = [
  {
    slug: 'the-lavender-diaries',
    title: 'The Lavender Diaries: From Field to Flask',
    category: 'ingredients',
    author: 'Aria Fontaine',
    date: 'Aug 15, 2026',
    readTime: '8 min',
  },
  {
    slug: 'rosehip-the-vitamin-c-powerhouse',
    title: 'Rosehip: The Vitamin C Powerhouse Your Skin Needs',
    category: 'science',
    author: 'Dr. Mara Elise',
    date: 'Aug 10, 2026',
    readTime: '6 min',
  },
  {
    slug: 'the-5-minute-morning-ritual',
    title: 'The 5-Minute Morning Ritual That Changed Everything',
    category: 'rituals',
    author: 'Sage Williams',
    date: 'Aug 5, 2026',
    readTime: '4 min',
  },
  {
    slug: 'cold-process-soap-making',
    title: "Cold-Process Soap Making: A Beginner's Artisan Guide",
    category: 'diy',
    author: 'Luna Cassidy',
    date: 'Jul 28, 2026',
    readTime: '10 min',
  },
  {
    slug: 'slow-beauty-movement',
    title: 'The Slow Beauty Movement: Less Products, More Ritual',
    category: 'lifestyle',
    author: 'Aria Fontaine',
    date: 'Jul 22, 2026',
    readTime: '5 min',
  },
  {
    slug: 'shea-butter-ancient-wisdom',
    title: 'Shea Butter: Ancient African Wisdom for Modern Skin',
    category: 'ingredients',
    author: 'Dr. Mara Elise',
    date: 'Jul 15, 2026',
    readTime: '7 min',
  },
];

function openJournal(slug) {
  if (!slug) return;
  window.location.href = `journals detail.html?article=${encodeURIComponent(slug)}`;
}

function toggleFaq(btn) {
  const item = btn.closest('.jn-faq-item');
  const isExpanded = btn.getAttribute('aria-expanded') === 'true';
  const content = item.querySelector('.jn-faq-content');

  document.querySelectorAll('.jn-faq-item').forEach(otherItem => {
    if (otherItem !== item) {
      otherItem.classList.remove('active');
      const otherBtn = otherItem.querySelector('.jn-faq-trigger');
      const otherContent = otherItem.querySelector('.jn-faq-content');
      if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
      if (otherContent) otherContent.style.maxHeight = '0';
    }
  });

  if (isExpanded) {
    item.classList.remove('active');
    btn.setAttribute('aria-expanded', 'false');
    content.style.maxHeight = '0';
  } else {
    item.classList.add('active');
    btn.setAttribute('aria-expanded', 'true');
    content.style.maxHeight = content.scrollHeight + 'px';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initActiveNavLinks();

  const filterTabs = document.querySelectorAll('.jn-filter-tab');
  const articleCards = document.querySelectorAll('.jn-article-card');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const filter = tab.dataset.filter;

      filterTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      articleCards.forEach(card => {
        const category = card.dataset.category;
        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

        if (filter === 'all' || category === filter) {
          card.classList.remove('jn-hidden');
          requestAnimationFrame(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          });
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(16px)';
          setTimeout(() => card.classList.add('jn-hidden'), 300);
        }
      });
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const targetId = anchor.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  const observerOpts = { threshold: 0.12, rootMargin: '0px 0px -50px 0px' };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('jn-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOpts);

  document.querySelectorAll('.jn-article-card, .jn-section-header, .jn-newsletter-content, .jn-faq-item').forEach(el => {
    observer.observe(el);
  });

  if (typeof lucide !== 'undefined') lucide.createIcons();
});

function handleNewsletterSubmit(event) {
  event.preventDefault();
  const emailInput = document.getElementById('jn-email-input');
  const formSuccess = document.getElementById('jn-form-success');
  const submitBtn = document.getElementById('jn-nl-submit-btn');
  const email = emailInput.value.trim();

  if (!email || !email.includes('@')) {
    emailInput.style.borderColor = '#e74c3c';
    emailInput.focus();
    setTimeout(() => { emailInput.style.borderColor = ''; }, 2000);
    return;
  }

  submitBtn.disabled = true;
  submitBtn.innerHTML = '<span>Subscribing...</span>';

  setTimeout(() => {
    document.getElementById('jn-newsletter-form').querySelector('.jn-form-group').style.display = 'none';
    document.getElementById('jn-newsletter-form').querySelector('.jn-form-note').style.display = 'none';
    formSuccess.hidden = false;
    formSuccess.style.animation = 'jnFadeIn 0.5s ease both';
  }, 1000);
}

function loadMoreArticles() {
  const btn = document.getElementById('jn-load-more');
  const grid = document.getElementById('jn-articles-grid');

  btn.disabled = true;
  btn.querySelector('span').textContent = 'Loading...';

  setTimeout(() => {
    const extraArticles = [
      {
        slug: 'forest-bathing-skin',
        title: 'Forest Bathing for Your Skin: The Phytoncide Effect',
        category: 'science',
        badge: 'Skin Science',
        badgeClass: 'jn-badge-science',
        imgSrc: 'assets/forest-mist.jpg',
        author: 'Dr. Mara Elise',
        authorImg: 'assets/founder2.jpg',
        date: 'Jul 8, 2026',
        readTime: '6 min read',
        excerpt: 'How spending time in forests — and incorporating forest plant extracts — can measurably reduce cortisol and improve skin barrier function.',
      },
      {
        slug: 'ayurvedic-face-oiling',
        title: 'Abhyanga for the Face: The Ayurvedic Art of Face Oiling',
        category: 'rituals',
        badge: 'Rituals',
        badgeClass: 'jn-badge-ritual',
        imgSrc: 'assets/hero2-elixir.jpg',
        author: 'Sage Williams',
        authorImg: 'assets/founder3.jpg',
        date: 'Jul 1, 2026',
        readTime: '5 min read',
        excerpt: "The 5,000-year-old Ayurvedic practice of self-massage adapted for modern skin — what oils to use and the ritual that works.",
      },
    ];

    extraArticles.forEach((art, i) => {
      const article = document.createElement('article');
      article.className = 'jn-article-card';
      article.dataset.category = art.category;
      article.setAttribute('role', 'listitem');
      article.setAttribute('id', `card-extra-${i}`);
      article.setAttribute('tabindex', '0');
      article.setAttribute('aria-label', `Read: ${art.title}`);
      article.setAttribute('onclick', `openJournal('${art.slug}')`);
      article.setAttribute('onkeydown', `if(event.key==='Enter')openJournal('${art.slug}')`);
      article.style.opacity = '0';
      article.style.transform = 'translateY(20px)';
      article.innerHTML = `
        <div class="jn-card-img-wrap">
          <img src="${art.imgSrc}" alt="${art.title}" class="jn-card-real-img" />
          <span class="jn-card-badge ${art.badgeClass}">${art.badge}</span>
          <div class="jn-card-hover-icon" aria-hidden="true"><i data-lucide="arrow-right"></i></div>
        </div>
        <div class="jn-card-body">
          <div class="jn-card-meta">
            <span><i data-lucide="calendar"></i> ${art.date}</span>
            <span class="jn-meta-dot">•</span>
            <span><i data-lucide="clock"></i> ${art.readTime}</span>
          </div>
          <h3 class="jn-card-title">${art.title}</h3>
          <p class="jn-card-excerpt">${art.excerpt}</p>
          <div class="jn-card-footer">
            <div class="jn-card-author">
              <img src="${art.authorImg}" alt="${art.author}" class="jn-author-avatar-img" />
              <span>${art.author}</span>
            </div>
            <span class="jn-card-read-link">Read <i data-lucide="arrow-right"></i></span>
          </div>
        </div>`;
      grid.appendChild(article);

      requestAnimationFrame(() => {
        article.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        article.style.opacity = '1';
        article.style.transform = 'translateY(0)';
      });
    });

    if (typeof lucide !== 'undefined') lucide.createIcons();

    btn.querySelector('span').textContent = 'No More Stories';
    btn.style.opacity = '0.5';
    btn.style.cursor = 'not-allowed';
  }, 900);
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
