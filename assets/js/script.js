// ============================================
// JBG Global Solutions - Main JavaScript
// ============================================

// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Close menu when a link is clicked
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            if (hamburger) {
                hamburger.classList.remove('active');
            }
        });
    });

    // Carousel Functionality
    const carouselItems = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.carousel-controls .dot');
    let currentSlide = 0;

    function showSlide(index) {
        carouselItems.forEach((item, i) => {
            item.classList.remove('active');
            if (i === index) {
                item.classList.add('active');
            }
        });
        
        dots.forEach((dot, i) => {
            dot.classList.remove('active');
            if (i === index) {
                dot.classList.add('active');
            }
        });
    }

    // Dot click handlers
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            currentSlide = i;
            showSlide(currentSlide);
        });
    });

    if (carouselItems.length > 0) {
        setInterval(() => {
            currentSlide = (currentSlide + 1) % carouselItems.length;
            showSlide(currentSlide);
        }, 5000); // Change slide every 5 seconds
    }

    // Contact Form Handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleContactForm();
        });
    }

    // Portfolio Filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filter items
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // Add scroll animation for elements
    observeElements();
});

// Handle Contact Form Submission
function handleContactForm() {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic validation
    if (!name || !email || !subject || !message) {
        showMessage(formMessage, 'Please fill in all required fields.', 'error');
        return;
    }

    // Email validation
    if (!validateEmail(email)) {
        showMessage(formMessage, 'Please enter a valid email address.', 'error');
        return;
    }

    // Here you would typically send the form data to a server
    console.log('Form Data:', {
        name,
        email,
        subject,
        message
    });

    showMessage(formMessage, 'Thank you for your message! We\'ll get back to you soon.', 'success');
    form.reset();

    // Clear message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

// Show form message
function showMessage(element, text, type) {
    element.textContent = text;
    element.className = `form-message ${type}`;
    element.style.display = 'block';
}

// Email validation
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Observe elements for scroll animation
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe service cards, team members, etc.
    const elements = document.querySelectorAll(
        '.service-card-large, .tech-card, .team-member, .portfolio-item, .faq-item'
    );
    
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Add active class to current navigation link
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Call highlight function when page loads
document.addEventListener('DOMContentLoaded', highlightCurrentPage);

// Utility: Debounce function for resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize
window.addEventListener('resize', debounce(() => {
    // Add any responsive behavior here
}, 250));

// ============================================
// 3D TILT EFFECT FOR SERVICE CARDS
// ============================================

function init3DTiltEffect() {
    const cards = document.querySelectorAll('.service-card, .why-card, .client-type');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.02)`;
            
            // Dynamic shine effect
            const shine = card.querySelector('.card-shine') || createShineElement(card);
            const shineX = (x / rect.width) * 100;
            const shineY = (y / rect.height) * 100;
            shine.style.background = `radial-gradient(circle at ${shineX}% ${shineY}%, rgba(255,255,255,0.15) 0%, transparent 60%)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
            const shine = card.querySelector('.card-shine');
            if (shine) shine.style.background = 'transparent';
        });
    });
}

function createShineElement(card) {
    const shine = document.createElement('div');
    shine.className = 'card-shine';
    shine.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        border-radius: inherit;
        z-index: 1;
        transition: background 0.1s ease;
    `;
    card.appendChild(shine);
    return shine;
}

// Initialize 3D effects when DOM is ready
document.addEventListener('DOMContentLoaded', init3DTiltEffect);

// ============================================
// FLOATING ICON PARTICLES ON HOVER
// ============================================

function initIconParticles() {
    const serviceIcons = document.querySelectorAll('.service-icon');
    
    serviceIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            createParticles(icon);
        });
    });
}

function createParticles(element) {
    const colors = ['#3b82f6', '#8b5cf6', '#06b6d4', '#60a5fa'];
    
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.className = 'hover-particle';
        
        const size = Math.random() * 8 + 4;
        const angle = (i / 8) * Math.PI * 2;
        const distance = 60 + Math.random() * 40;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: 50%;
            pointer-events: none;
            z-index: 100;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            box-shadow: 0 0 10px currentColor;
        `;
        
        element.appendChild(particle);
        
        // Animate particle
        particle.animate([
            { 
                transform: 'translate(-50%, -50%) scale(1)',
                opacity: 1 
            },
            { 
                transform: `translate(calc(-50% + ${Math.cos(angle) * distance}px), calc(-50% + ${Math.sin(angle) * distance}px)) scale(0)`,
                opacity: 0 
            }
        ], {
            duration: 800,
            easing: 'cubic-bezier(0, 0.5, 0.5, 1)',
            fill: 'forwards'
        }).onfinish = () => particle.remove();
    }
}

document.addEventListener('DOMContentLoaded', initIconParticles);

console.log('JBG Global Solutions Website Loaded');
