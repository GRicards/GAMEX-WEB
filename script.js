
function toggleProfile() {
  const modal = document.getElementById('profileModal');
  modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

function saveProfile() {
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  
  if (username && email) {
    alert('Profile saved!');
    toggleProfile();
  } else {
    alert('Please fill in all fields');
  }
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById('profileModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}
