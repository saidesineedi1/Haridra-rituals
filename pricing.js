

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  initBillingToggle();
  initFaqAccordion();
  initFaqTabs();
  initPricingPlanButtons();
});

function initBillingToggle() {
  const toggleBtns = document.querySelectorAll('.pr-toggle-btn');
  const cards = document.querySelectorAll('.pr-card[data-monthly-price]');

  if (toggleBtns.length === 0 || cards.length === 0) return;

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cycle = btn.getAttribute('data-cycle');

      toggleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      cards.forEach(card => {
        const amountEl = card.querySelector('.pr-amount');
        const periodEl = card.querySelector('.pr-period');
        const noteEl = card.querySelector('.pr-billed-note');

        const monthlyPrice = card.getAttribute('data-monthly-price');
        const annualPrice = card.getAttribute('data-annual-price');

        if (!amountEl) return;

        if (cycle === 'annual') {
          animatePriceChange(amountEl, annualPrice);
          if (periodEl) periodEl.textContent = '/ month';
          if (noteEl) noteEl.textContent = `Billed annually ($${parseInt(annualPrice) * 12}/yr)`;
        } else {
          animatePriceChange(amountEl, monthlyPrice);
          if (periodEl) periodEl.textContent = '/ month';
          if (noteEl) noteEl.textContent = 'Billed monthly';
        }
      });
    });
  });
}

function animatePriceChange(element, targetPrice) {
  element.style.opacity = '0';
  element.style.transform = 'translateY(-6px)';
  
  setTimeout(() => {
    element.textContent = targetPrice;
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
  }, 150);
}

function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.pr-faq-item');

  if (faqItems.length === 0) return;

  faqItems.forEach(item => {
    const trigger = item.querySelector('.pr-faq-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherTrigger = otherItem.querySelector('.pr-faq-trigger');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
        }
      });

      if (isOpen) {
        item.classList.remove('active');
        trigger.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
      }

      if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
      }
    });
  });
}

function initFaqTabs() {
  const tabs = document.querySelectorAll('.pr-faq-tab');
  const items = document.querySelectorAll('.pr-faq-item');

  if (tabs.length === 0 || items.length === 0) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const category = tab.getAttribute('data-category');

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      items.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        if (category === 'all' || itemCat === category) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

function initPricingPlanButtons() {
  const planBtns = document.querySelectorAll('.pr-select-plan-btn');

  planBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const planName = btn.getAttribute('data-plan-name') || 'Ritual Membership';
      const planPrice = btn.getAttribute('data-plan-price') || '$59.00';

      showPricingToast(`Subscribed to ${planName}`, `Your ritual box is set for ${planPrice}/mo.`);

      if (typeof openCartDrawer === 'function') {
        openCartDrawer();
      }
    });
  });
}

function showPricingToast(title, message) {
  const toast = document.getElementById('cart-toast');
  const toastTitle = document.getElementById('toast-title');
  const toastMsg = document.getElementById('toast-msg');

  if (!toast) return;

  if (toastTitle) toastTitle.textContent = title;
  if (toastMsg) toastMsg.textContent = message;

  toast.hidden = false;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.hidden = true;
    }, 300);
  }, 4000);
}
