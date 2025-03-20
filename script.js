
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  // Store user in localStorage
  const users = JSON.parse(localStorage.getItem('loggedInUsers') || '[]');
  users.push({ email, loginTime: new Date().toISOString() });
  localStorage.setItem('loggedInUsers', JSON.stringify(users));
  
  // Redirect to users page
  window.location.href = 'users.html';
});
