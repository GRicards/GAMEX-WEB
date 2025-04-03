
// Simulated registered users
const registeredUsers = [
  'user@gmail.com',
  'test@gmail.com',
  'admin@gmail.com'
];

function showNotification(message, type) {
  const notification = document.getElementById('notification');
  notification.textContent = message;
  notification.className = `notification ${type}`;
  
  // Hide notification after 3 seconds
  setTimeout(() => {
    notification.className = 'notification';
  }, 3000);
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  // Check if email contains @gmail
  if (!email.includes('@gmail')) {
    showNotification('Please enter a valid Gmail address', 'error');
    return;
  }

  // Check if email is registered
  if (!registeredUsers.includes(email)) {
    showNotification('Email not found. Please register first.', 'error');
    return;
  }
  
  // Store user in localStorage
  const users = JSON.parse(localStorage.getItem('loggedInUsers') || '[]');
  users.push({ email, loginTime: new Date().toISOString() });
  localStorage.setItem('loggedInUsers', JSON.stringify(users));
  
  // Show success notification
  showNotification('Successfully signed in!', 'success');
});
