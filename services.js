
const SERVICES_DATA = [
  {
    id: 1,
    slug: 'lavender-glow-facial',
    title: 'Lavender Glow Facial',
    category: 'facial',
    image: 'assets/skin-rosehip-face.jpg',
    price: '$89',
    rating: 4.9,
    reviews: 142,
    badge: 'Best Seller',
    tag: 'Facial',
    shortDesc: 'A calming, antioxidant-rich facial ritual using French lavender extract and cold-pressed herbal oils.',
  },
  {
    id: 2,
    slug: 'rosehip-oil-elixir',
    title: 'Rosehip Oil Elixir',
    category: 'oil',
    image: 'assets/rosehip-oil.jpg',
    price: '$64',
    rating: 4.8,
    reviews: 98,
    badge: 'New Formula',
    tag: 'Herbal Oil',
    shortDesc: 'Pure cold-pressed rosehip seed oil blended with vitamin C-rich plant extracts.',
  },
  {
    id: 3,
    slug: 'shea-body-butter-ritual',
    title: 'Shea Body Butter Ritual',
    category: 'body',
    image: 'assets/body-butter.jpg',
    price: '$52',
    rating: 4.9,
    reviews: 211,
    badge: null,
    tag: 'Body Treatment',
    shortDesc: 'Luxuriously whipped shea butter infused with vanilla, cocoa, and healing herbal extracts.',
  },
  {
    id: 4,
    slug: 'lavender-oat-soap-bar',
    title: 'Lavender & Oat Soap Bar',
    category: 'soap',
    image: 'assets/soap-lavender-oat.jpg',
    price: '$14',
    rating: 5.0,
    reviews: 327,
    badge: '100% Organic',
    tag: 'Handmade Soap',
    shortDesc: 'Cold-cured for 6 weeks with French lavender flowers and colloidal oats.',
  },
  {
    id: 5,
    slug: 'forest-mist-hydrosol-toner',
    title: 'Forest Mist Hydrosol Toner',
    category: 'facial',
    image: 'assets/forest-mist.jpg',
    price: '$38',
    rating: 4.7,
    reviews: 189,
    badge: null,
    tag: 'Facial Ritual',
    shortDesc: 'A refreshing face mist infused with wild pine hydrosol, witch hazel, and alpine spring water.',
  },
  {
    id: 6,
    slug: 'artisan-soap-craft-workshop',
    title: 'Artisan Soap Craft Workshop',
    category: 'soap',
    image: 'assets/soap-craft.jpg',
    price: '$120',
    rating: 4.9,
    reviews: 76,
    badge: 'Popular',
    tag: 'Workshop',
    shortDesc: 'An immersive hands-on workshop teaching the ancient art of cold-process soap-making.',
  },
  {
    id: 7,
    slug: 'phyto-active-serum-treatment',
    title: 'Phyto-Active Serum Treatment',
    category: 'facial',
    image: 'assets/skin-mist-face.jpg',
    price: '$76',
    rating: 4.8,
    reviews: 154,
    badge: null,
    tag: 'Serum',
    shortDesc: 'A concentrated phyto-serum with 12 active plant compounds and peptide-rich herbal extracts.',
  },
  {
    id: 8,
    slug: 'shea-radiance-face-treatment',
    title: 'Shea Radiance Face Treatment',
    category: 'body',
    image: 'assets/skin-shea-face.jpg',
    price: '$145',
    rating: 5.0,
    reviews: 93,
    badge: 'Luxury',
    tag: 'Face Treatment',
    shortDesc: 'A luxurious shea-based facial treatment enriched with gold-infused plant extracts.',
  },
];

function navigateToServiceDetail(serviceId) {
  const service = SERVICES_DATA.find((s) => s.id === parseInt(serviceId));
  if (!service) return;

  sessionStorage.setItem('selectedService', JSON.stringify(service));
  sessionStorage.setItem('selectedServiceId', serviceId);

  window.location.href = `servicedetail.html?id=${serviceId}&service=${service.slug}`;
}

function initCardButtons() {
  const cardBtns = document.querySelectorAll('.sv-card-btn');
  cardBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceId = btn.getAttribute('data-service-id');
      navigateToServiceDetail(serviceId);
    });
  });

  const cards = document.querySelectorAll('.sv-card');
  cards.forEach((card) => {
    const title = card.querySelector('.sv-card-title');
    const imgWrap = card.querySelector('.sv-card-img-wrap');
    const serviceId = card.getAttribute('data-service-id');

    [title, imgWrap].forEach((el) => {
      if (el) {
        el.style.cursor = 'pointer';
        el.addEventListener('click', () => {
          navigateToServiceDetail(serviceId);
        });
      }
    });
  });
}

function initFilters() {
  const filterBtns = document.querySelectorAll('.sv-filter-btn');
  const cards = document.querySelectorAll('.sv-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {

      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cards.forEach((card) => {
        const category = card.getAttribute('data-category');

        if (filter === 'all' || category === filter) {
          card.classList.remove('sv-card--hidden');

          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          requestAnimationFrame(() => {
            setTimeout(() => {
              card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 50);
          });
        } else {
          card.classList.add('sv-card--hidden');
        }
      });
    });
  });
}

function initScrollAnimations() {
  const animatables = document.querySelectorAll(
    '.sv-card, .sv-process-step, .sv-heritage-content, .sv-heritage-visual, .sv-ingredient-item, .sv-trust-item, .sv-heritage-img-card'
  );

  animatables.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.55s cubic-bezier(0.4, 0, 0.2, 1), transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)';
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  const svCards = document.querySelectorAll('.sv-card');
  svCards.forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.07}s`;
  });

  const trustItems = document.querySelectorAll('.sv-trust-item');
  trustItems.forEach((item, i) => {
    item.style.transitionDelay = `${i * 0.06}s`;
  });

  const ingredientItems = document.querySelectorAll('.sv-ingredient-item');
  ingredientItems.forEach((item, i) => {
    item.style.transitionDelay = `${i * 0.08}s`;
  });

  animatables.forEach((el) => observer.observe(el));
}

function initHeroAnimations() {
  const heroContent = document.querySelector('.sv-hero-content');
  const heroVisual = document.querySelector('.sv-hero-visual');

  if (heroContent) {
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(30px)';
    heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    setTimeout(() => {
      heroContent.style.opacity = '1';
      heroContent.style.transform = 'translateY(0)';
    }, 200);
  }

  if (heroVisual) {
    heroVisual.style.opacity = '0';
    heroVisual.style.transform = 'scale(0.92)';
    heroVisual.style.transition = 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s';
    setTimeout(() => {
      heroVisual.style.opacity = '1';
      heroVisual.style.transform = 'scale(1)';
    }, 100);
  }
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        const headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 84;
        const y = target.getBoundingClientRect().top + window.scrollY - headerH - 16;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });
}

function initHeaderScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
}

function initFilterSectionObserver() {
  const filterSection = document.getElementById('services-collection');
  if (!filterSection) return;

  const sticky = filterSection;
  const observer = new IntersectionObserver(
    ([e]) => {
      sticky.classList.toggle('is-pinned', e.intersectionRatio < 1);
    },
    { threshold: [1] }
  );
  observer.observe(sticky);
}

document.addEventListener('DOMContentLoaded', () => {

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  initHeroAnimations();
  initCardButtons();
  initFilters();
  initScrollAnimations();
  initSmoothScroll();
  initHeaderScroll();
  initFilterSectionObserver();
  initActiveNavLinks();
});

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
