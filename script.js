
document.addEventListener('DOMContentLoaded', () => {
  const profileBtn = document.querySelector('.profile-btn');
  const loginModal = document.getElementById('login-modal');

  profileBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
  });

  loginModal.addEventListener('click', (e) => {
    if (e.target === loginModal) {
      loginModal.style.display = 'none';
    }
  });

  // Prevent form submission (demo only)
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Login functionality not implemented in this demo');
  });
});
