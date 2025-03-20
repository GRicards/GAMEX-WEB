
function displayUsers() {
  const users = JSON.parse(localStorage.getItem('loggedInUsers') || '[]');
  const userList = document.getElementById('userList');
  userList.innerHTML = '';
  
  users.forEach(user => {
    const li = document.createElement('li');
    li.className = 'user-item';
    li.textContent = user.email;
    userList.appendChild(li);
  });
}

window.onload = displayUsers;
