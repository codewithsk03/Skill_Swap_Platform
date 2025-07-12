const loginLink = document.getElementById('loginLink');
const userAvatar = document.getElementById('userAvatar');
const requestButtons = document.querySelectorAll('.request-btn');

function checkLoginStatus() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const userEmail = localStorage.getItem('userEmail');

  if (isLoggedIn && userEmail) {
    const firstLetter = userEmail.charAt(0).toUpperCase();
    userAvatar.textContent = firstLetter;
    userAvatar.style.display = 'flex';

    loginLink.style.display = 'none';

    requestButtons.forEach(btn => {
      btn.disabled = false;
    });
  } else {
    userAvatar.style.display = 'none';
    loginLink.style.display = 'inline-block';

    requestButtons.forEach(btn => {
      btn.disabled = true;
    });
  }
}

requestButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      alert('Kindly login for it.');
    } else {
      alert('Request sent!');
    }
  });
});

checkLoginStatus();

userAvatar.addEventListener('click', () => {
  // Clear login data
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('userEmail');

  // Optionally, show confirmation
  alert('You have been logged out.');

  // Reload the page to reset UI
  window.location.reload();
});
