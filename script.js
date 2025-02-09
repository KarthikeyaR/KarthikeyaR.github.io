// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const themeStyle = document.getElementById('theme-style');

themeToggle.addEventListener('click', () => {
    const currentTheme = themeStyle.href.includes('light-theme.css') ? 'dark' : 'light';
    themeStyle.href = `css/${currentTheme}-theme.css`;
    themeToggle.innerHTML = currentTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Search Functionality
const searchInput = document.getElementById('search-input');
const searchableElements = document.querySelectorAll('section p, section h3, .publication-card .description');

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    searchableElements.forEach(element => {
        const content = element.textContent.toLowerCase();
        const parent = element.closest('section, .publication-card, .project-card');
        
        if (parent) {
            if (searchTerm === '' || content.includes(searchTerm)) {
                parent.style.display = '';
            } else {
                parent.style.display = 'none';
            }
        }
    });
});

// Smooth Scrolling for Navigation
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});