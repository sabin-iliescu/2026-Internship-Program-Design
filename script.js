/* Ultra-fine JavaScript functionality with sophisticated Y-axis scroll animations */

// Add active class to current navigation item
const currentLocation = location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.nav-link, .dropdown-item');

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentLocation) {
        link.classList.add('active');
    }
});

// ===============================
// ULTRA-FINE SCROLL ANIMATIONS ON Y-AXIS
// ===============================

// Intersection Observer with refined precision
const observeScrollAnimations = () => {
    const animatedElements = document.querySelectorAll('.scroll-animate, .objective-animate');
    
    // Ultra-precise observer options
    const observerOptions = {
        threshold: [0, 0.1, 0.25, 0.5], // Multiple thresholds for smoother detection
        rootMargin: '0px 0px -30px 0px' // Trigger earlier for better UX
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
                const element = entry.target;
                
                // Smooth visibility class addition with micro-delay
                requestAnimationFrame(() => {
                    setTimeout(() => {
                        element.classList.add('visible');
                    }, 50); // 50ms micro-delay for smoother entrance
                });
                
                // Special handling for objective section with cascade effect
                if (element.classList.contains('objective-animate')) {
                    const objectiveSection = element.querySelector('.objective-section');
                    if (objectiveSection) {
                        setTimeout(() => {
                            objectiveSection.classList.add('visible');
                        }, 250); // Refined delay for perfect cascade
                    }
                }
                
                // Progressive text reveal for paragraphs
                const textElements = element.querySelectorAll('p, .card-text');
                textElements.forEach((textEl, index) => {
                    setTimeout(() => {
                        textEl.style.opacity = '1';
                        textEl.style.transform = 'translateY(0)';
                    }, 400 + (index * 50));
                });
                
                // One-time animation for performance
                observer.unobserve(element);
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    animatedElements.forEach(element => {
        observer.observe(element);
    });
};

// ===============================
// ULTRA-REFINED NAVIGATION INTERACTIONS
// ===============================

// Enhanced tree navigation with magnetic hover effects
document.querySelectorAll('.tree-item a').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.backgroundColor = 'rgba(0, 184, 148, 0.12)';
        this.style.transform = 'translateX(4px) scale(1.02)';
        this.style.transition = 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        this.style.boxShadow = '0 4px 12px rgba(0, 184, 148, 0.1)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '';
        this.style.transform = 'translateX(0) scale(1)';
        this.style.boxShadow = '';
    });
});

// Enhanced navbar brand with elegant micro-interactions
const navbarBrand = document.querySelector('.navbar-brand');
if (navbarBrand) {
    navbarBrand.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.fas');
        if (icon) {
            icon.style.transform = 'scale(1.15) rotate(8deg)';
            icon.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        }
        this.style.transform = 'translateY(-1px)';
        this.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    });
    
    navbarBrand.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.fas');
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0deg)';
        }
        this.style.transform = 'translateY(0)';
    });
}

// ===============================
// SOPHISTICATED CARD INTERACTIONS
// ===============================

// Enhanced card hover with floating effect
const addCardInteractions = () => {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Pause breathing animation on hover
            this.style.animation = 'none';
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            // Resume breathing animation
            this.style.animation = 'cardBreathe 6s ease-in-out infinite';
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
};

// ===============================
// ULTRA-SMOOTH SCROLL BEHAVIOR
// ===============================

// Silk-smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===============================
// PERFORMANCE OPTIMIZATION WITH RAF
// ===============================

// Optimized debounce with requestAnimationFrame
const rafDebounce = (func) => {
    let ticking = false;
    return function(...args) {
        if (!ticking) {
            requestAnimationFrame(() => {
                func.apply(this, args);
                ticking = false;
            });
            ticking = true;
        }
    };
};

// ===============================
// ENHANCED INITIALIZATION
// ===============================

// Initialize all ultra-fine animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Micro-delay for ultra-smooth page load
    setTimeout(() => {
        observeScrollAnimations();
        addCardInteractions();
    }, 80); // Optimized timing for better UX
});

// ===============================
// ACCESSIBILITY WITH MOTION PREFERENCES
// ===============================

// Respect user's motion preferences with grace
const respectMotionPreferences = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const style = document.createElement('style');
        style.textContent = `
            .scroll-animate,
            .objective-animate,
            .card {
                transition: opacity 0.2s ease !important;
                transform: none !important;
                animation: none !important;
            }
            .scroll-animate.visible,
            .objective-animate.visible {
                opacity: 1 !important;
            }
        `;
        document.head.appendChild(style);
    }
};

// Apply motion preferences gracefully
respectMotionPreferences();

// ===============================
// ENHANCED CONSOLE MESSAGES
// ===============================

// Elegant console branding
console.log('%c🎓 Welcome to 2026 Internship Program!', 'color: #00B894; font-size: 16px; font-weight: bold;');
console.log('%cNagarro - Thinking Breakthroughs', 'color: #2d3436; font-size: 12px;');
console.log('%c✨ Ultra-fine scroll animations enabled', 'color: #00B894; font-size: 12px; font-style: italic;');
console.log('%c🎯 Performance optimized with RAF', 'color: #636e72; font-size: 10px;');