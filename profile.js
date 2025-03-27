
// Get user profile from localStorage
const currentUser = JSON.parse(localStorage.getItem('currentUser'));
const purchasedGames = JSON.parse(localStorage.getItem('purchasedGames') || '[]');

// Update profile information
if (currentUser) {
  document.getElementById('profileName').textContent = currentUser.name || currentUser.email;
  document.getElementById('profileEmail').textContent = currentUser.email;
} else {
  window.location.href = 'login.html';
}

// Display purchased games
const purchasedGamesList = document.getElementById('purchasedGamesList');
purchasedGames.forEach(game => {
  const gameCard = document.createElement('div');
  gameCard.className = 'game-card';
  gameCard.innerHTML = `
    <img src="${game.image}" alt="${game.title}" class="game-image">
    <div class="game-info">
      <div class="game-title">${game.title}</div>
      <div class="game-price">${game.price}</div>
    </div>
  `;
  purchasedGamesList.appendChild(gameCard);
});
