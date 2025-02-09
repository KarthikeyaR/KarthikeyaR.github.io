// Enhanced Theme Toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeStyle = document.getElementById('theme-style');
    
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    });

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        themeStyle.href = `css/${theme}-theme.css`;
        themeToggle.innerHTML = theme === 'dark' 
            ? '<i class="fas fa-sun fa-lg"></i>' 
            : '<i class="fas fa-moon fa-lg"></i>';
    }
});

// // Search Functionality
// const searchInput = document.getElementById('search-input');
// const searchableElements = document.querySelectorAll('section p, section h3, .publication-card .description');

// searchInput.addEventListener('input', (e) => {
//     const searchTerm = e.target.value.toLowerCase();
    
//     searchableElements.forEach(element => {
//         const content = element.textContent.toLowerCase();
//         const parent = element.closest('section, .publication-card, .project-card');
        
//         if (parent) {
//             if (searchTerm === '' || content.includes(searchTerm)) {
//                 parent.style.display = '';
//             } else {
//                 parent.style.display = 'none';
//             }
//         }
//     });
// });

// // Smooth Scrolling for Navigation
// document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });