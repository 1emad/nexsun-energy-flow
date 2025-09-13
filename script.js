// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling behavior
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('[class*="fade"], [class*="scale"], [class*="glow"]');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Button click handlers
    const heroButton = document.querySelector('.hero-button');
    const ctaButton = document.querySelector('.cta-button');

    function handleSignUp() {
        // Placeholder for sign-up functionality
        alert('Thank you for your interest! Sign-up functionality would be implemented here.');
        
        // In a real implementation, you might:
        // - Open a modal with a sign-up form
        // - Redirect to a sign-up page
        // - Integrate with an email service
        console.log('Sign-up button clicked');
    }

    if (heroButton) {
        heroButton.addEventListener('click', handleSignUp);
    }

    if (ctaButton) {
        ctaButton.addEventListener('click', handleSignUp);
    }

    // Add scroll effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero-section');
        const heroContent = document.querySelector('.hero-content');
        
        if (heroSection && heroContent) {
            const rate = scrolled * -0.5;
            heroContent.style.transform = `translateY(${rate}px)`;
        }
    });

    // Add hover effects for cards
    const cards = document.querySelectorAll('.feature-card, .why-card, .capability-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add typing effect for hero title (optional enhancement)
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // Uncomment to enable typing effect
    // const heroTitle = document.querySelector('.hero-title');
    // if (heroTitle) {
    //     const originalText = heroTitle.textContent;
    //     typeWriter(heroTitle, originalText, 80);
    // }

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
});

// Utility functions
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

// Throttled scroll handler for better performance
const throttledScrollHandler = debounce(function() {
    // Add any scroll-based functionality here
    const scrollTop = window.pageYOffset;
    
    // Example: Add parallax effects or scroll-based animations
    if (scrollTop > 100) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
}, 16); // ~60fps

window.addEventListener('scroll', throttledScrollHandler);