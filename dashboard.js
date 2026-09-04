
document.addEventListener('DOMContentLoaded', () => {

  initDashboardCharts();

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
});

function switchTab(tabId) {

  const panes = document.querySelectorAll('.db-tab-pane');
  panes.forEach(pane => {
    pane.classList.remove('active');
    pane.hidden = true;
  });

  const navBtns = document.querySelectorAll('.db-nav-btn');
  navBtns.forEach(btn => {
    btn.classList.remove('active');
    btn.setAttribute('aria-selected', 'false');
  });

  const targetPane = document.getElementById(`pane-${tabId}`);
  if (targetPane) {
    targetPane.classList.add('active');
    targetPane.hidden = false;
  }

  const targetBtn = document.getElementById(`tab-btn-${tabId}`);
  if (targetBtn) {
    targetBtn.classList.add('active');
    targetBtn.setAttribute('aria-selected', 'true');
  }

  closeAllModals();
  const sidebar = document.getElementById('db-sidebar');
  if (sidebar && sidebar.classList.contains('mobile-open')) {
    sidebar.classList.remove('mobile-open');
  }
}

function toggleSidebar() {
  const sidebar = document.getElementById('db-sidebar');
  const body = document.body;
  if (!sidebar) return;

  if (window.innerWidth <= 850) {
    sidebar.classList.toggle('mobile-open');
  } else {
    sidebar.classList.toggle('collapsed');
    body.classList.toggle('sidebar-collapsed');
  }
}

function toggleNotifications() {
  const drawer = document.getElementById('db-notif-drawer');
  if (!drawer) return;
  const isHidden = drawer.hidden;
  drawer.hidden = !isHidden;

  const profileDD = document.getElementById('db-profile-dropdown');
  if (profileDD) profileDD.hidden = true;
}

function toggleProfileDropdown() {
  const dropdown = document.getElementById('db-profile-dropdown');
  if (!dropdown) return;
  const isHidden = dropdown.hidden;
  dropdown.hidden = !isHidden;

  const drawer = document.getElementById('db-notif-drawer');
  if (drawer) drawer.hidden = true;
}

function closeAllModals() {
  const drawer = document.getElementById('db-notif-drawer');
  const dropdown = document.getElementById('db-profile-dropdown');
  if (drawer) drawer.hidden = true;
  if (dropdown) dropdown.hidden = true;
}

document.addEventListener('click', (e) => {
  const profileWrapper = document.querySelector('.db-profile-wrapper');
  const notifBtn = document.getElementById('db-notif-btn');
  const notifDrawer = document.getElementById('db-notif-drawer');

  if (profileWrapper && !profileWrapper.contains(e.target)) {
    const dropdown = document.getElementById('db-profile-dropdown');
    if (dropdown) dropdown.hidden = true;
  }

  if (notifBtn && notifDrawer && !notifBtn.contains(e.target) && !notifDrawer.contains(e.target)) {
    notifDrawer.hidden = true;
  }
});

function initDashboardCharts() {
  if (typeof Chart === 'undefined') return;

  Chart.defaults.font.family = "'Plus Jakarta Sans', sans-serif";
  Chart.defaults.color = '#766F80';

  const ctxRevenue = document.getElementById('chart-revenue-line');
  if (ctxRevenue) {
    const revenueGradient = ctxRevenue.getContext('2d').createLinearGradient(0, 0, 0, 260);
    revenueGradient.addColorStop(0, 'rgba(107, 79, 138, 0.35)');
    revenueGradient.addColorStop(1, 'rgba(107, 79, 138, 0.0)');

    new Chart(ctxRevenue, {
      type: 'line',
      data: {
        labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [
          {
            label: 'Monthly Revenue ($)',
            data: [28400, 32100, 39500, 42000, 45100, 48250],
            borderColor: '#6B4F8A',
            borderWidth: 3,
            backgroundColor: revenueGradient,
            fill: true,
            tension: 0.4,
            pointBackgroundColor: '#6B4F8A',
            pointRadius: 4,
            pointHoverRadius: 7
          },
          {
            label: 'Unique Visitors',
            data: [12000, 14200, 17800, 19500, 22100, 24800],
            borderColor: '#A8C5A0',
            borderWidth: 2,
            borderDash: [5, 5],
            fill: false,
            tension: 0.4,
            pointBackgroundColor: '#A8C5A0',
            pointRadius: 3
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: true, position: 'top' },
          tooltip: {
            padding: 12,
            backgroundColor: 'rgba(30, 24, 38, 0.9)',
            titleFont: { size: 13, weight: 'bold' },
            bodyFont: { size: 12 }
          }
        },
        scales: {
          x: { grid: { display: false } },
          y: { grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { callback: value => '$' + value } }
        }
      }
    });
  }

  const ctxCategory = document.getElementById('chart-category-bar');
  if (ctxCategory) {
    new Chart(ctxCategory, {
      type: 'bar',
      data: {
        labels: ['Face Oils', 'Soaps', 'Toners', 'Butters', 'Ritual Sets'],
        datasets: [{
          label: 'Units Sold',
          data: [540, 420, 310, 280, 190],
          backgroundColor: [
            'rgba(107, 79, 138, 0.85)',
            'rgba(185, 167, 214, 0.85)',
            'rgba(168, 197, 160, 0.85)',
            'rgba(201, 162, 39, 0.85)',
            'rgba(192, 57, 43, 0.85)'
          ],
          borderRadius: 8,
          borderSkipped: false
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { display: false } },
          y: { grid: { color: 'rgba(0,0,0,0.05)' } }
        }
      }
    });
  }

  const ctxOrigin = document.getElementById('chart-origin-doughnut');
  if (ctxOrigin) {
    new Chart(ctxOrigin, {
      type: 'doughnut',
      data: {
        labels: ['Provence Lavender', 'Moroccan Rose', 'Ojai Botanicals', 'West African Shea'],
        datasets: [{
          data: [40, 25, 20, 15],
          backgroundColor: ['#6B4F8A', '#E67E7E', '#A8C5A0', '#C9A227'],
          borderWidth: 2,
          borderColor: '#ffffff'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom', labels: { boxWidth: 12, padding: 12 } }
        },
        cutout: '68%'
      }
    });
  }

  const ctxWeekly = document.getElementById('chart-weekly-sales-bar');
  if (ctxWeekly) {
    new Chart(ctxWeekly, {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Daily Sales ($)',
          data: [4200, 6800, 5900, 7100, 8400, 9600, 6250],
          backgroundColor: '#6B4F8A',
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { display: false } },
          y: { grid: { color: 'rgba(0,0,0,0.05)' } }
        }
      }
    });
  }

  const ctxRetention = document.getElementById('chart-retention-line');
  if (ctxRetention) {
    new Chart(ctxRetention, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [{
          label: 'Retention Rate (%)',
          data: [68, 72, 75, 78, 82, 84, 87, 89.4],
          borderColor: '#27AE60',
          borderWidth: 3,
          backgroundColor: 'rgba(39, 174, 96, 0.1)',
          fill: true,
          tension: 0.3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { grid: { display: false } },
          y: { ticks: { callback: v => v + '%' } }
        }
      }
    });
  }

  const ctxSkin = document.getElementById('chart-skintype-bar');
  if (ctxSkin) {
    new Chart(ctxSkin, {
      type: 'bar',
      data: {
        labels: ['Sensitive Skin', 'Dry & Dehydrated', 'Combination Glow', 'Age-Defying'],
        datasets: [{
          label: '% of Customers',
          data: [38, 28, 22, 12],
          backgroundColor: [
            'rgba(107, 79, 138, 0.85)',
            'rgba(168, 197, 160, 0.85)',
            'rgba(241, 196, 15, 0.85)',
            'rgba(41, 128, 185, 0.85)'
          ],
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { display: false } },
          y: { ticks: { callback: v => v + '%' } }
        }
      }
    });
  }
}
