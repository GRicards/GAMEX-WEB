
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  // Create user profile
  const currentUser = {
    email,
    name: email.split('@')[0],
    loginTime: new Date().toISOString()
  };
  
  // Store user in localStorage
  const users = JSON.parse(localStorage.getItem('loggedInUsers') || '[]');
  users.push(currentUser);
  localStorage.setItem('loggedInUsers', JSON.stringify(users));
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
  
  // Initialize empty purchased games array if not exists
  if (!localStorage.getItem('purchasedGames')) {
    localStorage.setItem('purchasedGames', '[]');
  }
  
  // Redirect to home page
  window.location.href = 'index.html';
});
