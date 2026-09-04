
document.addEventListener('DOMContentLoaded', () => {

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
});

function togglePasswordVisibility(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;

  const isPassword = input.type === 'password';
  input.type = isPassword ? 'text' : 'password';

  if (btn) {
    btn.innerHTML = isPassword 
      ? '<i data-lucide="eye-off" aria-hidden="true"></i>' 
      : '<i data-lucide="eye" aria-hidden="true"></i>';
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }
}

function handleLoginSubmit(e) {
  e.preventDefault();

  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  if (!email || !password) {
    alert('Please enter your email and password.');
    return;
  }

  alert(`Welcome back to Haridra Rituals, ${email}! Redirecting to Dashboard...`);
  window.location.href = 'dashboard.html';
}

function handleSocialAuth(provider) {
  alert(`Connecting securely with ${provider}... Authenticated! Redirecting...`);
  window.location.href = 'dashboard.html';
}
