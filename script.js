/* Enhanced JavaScript functionality - No animations version */

// Add active class to current navigation item
const currentLocation = location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.nav-link, .dropdown-item');

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentLocation) {
        link.classList.add('active');
    }
});

// Enhanced navigation without animations
document.querySelectorAll('.tree-item a').forEach(link => {
    link.addEventListener('mouseenter', function() {
        // Simple hover effect without animation
        this.style.backgroundColor = 'rgba(0, 184, 148, 0.15)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '';
    });
});

// Console welcome message
console.log('%c🎓 Welcome to 2026 Internship Program!', 'color: #00B894; font-size: 16px; font-weight: bold;');
console.log('%cNagarro - Thinking Breakthroughs', 'color: #2d3436; font-size: 12px;');