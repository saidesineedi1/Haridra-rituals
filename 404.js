
document.addEventListener('DOMContentLoaded', () => {

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  const hero404 = document.querySelector('.err-404-number-box');
  if (hero404) {
    document.addEventListener('mousemove', (e) => {
      const xAxis = (window.innerWidth / 2 - e.pageX) / 45;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 45;
      hero404.style.transform = `translateY(${yAxis}px) rotate(${xAxis * 0.5}deg)`;
    });
  }
});
