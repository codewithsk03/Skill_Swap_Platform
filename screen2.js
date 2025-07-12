function validateForm() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    alert("Please fill in both fields.");
    return false;
  }

  alert("Login successful (demo only)");
  return false;
}

function handleGoogleLogin() {
  alert("Google Login clicked (you can integrate Google OAuth here)");
}

function handleFacebookLogin() {
  alert("Facebook Login clicked (you can integrate Facebook OAuth here)");
}