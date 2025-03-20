
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  // Here you would typically handle the login authentication
  console.log('Login attempt:', { email, password });
});
