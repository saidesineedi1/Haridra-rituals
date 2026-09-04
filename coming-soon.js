
document.addEventListener('DOMContentLoaded', () => {

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  startLiveCountdown();
});

function startLiveCountdown() {

  const targetDate = new Date().getTime() + (24 * 24 * 60 * 60 * 1000) + (18 * 60 * 60 * 1000);

  const daysEl = document.getElementById('cd-days');
  const hoursEl = document.getElementById('cd-hours');
  const minsEl = document.getElementById('cd-mins');
  const secsEl = document.getElementById('cd-secs');

  if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

  function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      daysEl.innerText = '00';
      hoursEl.innerText = '00';
      minsEl.innerText = '00';
      secsEl.innerText = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.innerText = days < 10 ? '0' + days : days;
    hoursEl.innerText = hours < 10 ? '0' + hours : hours;
    minsEl.innerText = minutes < 10 ? '0' + minutes : minutes;
    secsEl.innerText = seconds < 10 ? '0' + seconds : seconds;
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

function handleCsSubscribe(e) {
  e.preventDefault();
  const emailInput = document.getElementById('cs-email');
  if (!emailInput || !emailInput.value) return;

  alert(`Thank you! ${emailInput.value} has been added to our VIP launch waitlist. Check your inbox for a 20% launch code!`);
  emailInput.value = '';
}
