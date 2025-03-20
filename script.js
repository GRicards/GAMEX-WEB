
document.addEventListener('DOMContentLoaded', () => {
    // Search button functionality
    const searchBtn = document.querySelector('.search-btn');
    searchBtn.addEventListener('click', () => {
        // Add search functionality here
        console.log('Search clicked');
    });

    // Profile button functionality
    const profileBtn = document.querySelector('.profile-btn');
    profileBtn.addEventListener('click', () => {
        // Add profile functionality here
        console.log('Profile clicked');
    });

    // Navigation link highlighting
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            e.target.classList.add('active');
        });
    });
});
