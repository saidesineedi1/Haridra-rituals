
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

function handleSignupSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('signup-name').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  const confirmPassword = document.getElementById('signup-confirm-password').value;
  const agreeTerms = document.getElementById('agree-terms').checked;

  if (!name || !email || !password || !confirmPassword) {
    alert('Please fill out all required fields.');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match. Please verify your password.');
    return;
  }

  if (!agreeTerms) {
    alert('Please agree to the Terms of Service & Privacy Policy to continue.');
    return;
  }

  alert(`Account successfully created for ${name}! Welcome to Haridra Rituals. Redirecting...`);
  window.location.href = 'dashboard.html';
}

function handleSocialAuth(provider) {
  alert(`Signing up with ${provider}... Account created! Redirecting to Dashboard...`);
  window.location.href = 'dashboard.html';
}
