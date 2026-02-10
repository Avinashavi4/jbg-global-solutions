/* ============================================
   JBG Global Solutions - EXPO LEVEL 3D JavaScript
   Ultra Premium Next-Level Animations & Interactions
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all systems
    initStarfield();
    initParticles();
    initNavbar();
    initRevealAnimations();
    init3DCards();
    initMouseFollow();
    initTextAnimations();
    initCounterAnimations();
    initMobileMenu();
    initJobFilters();
});

/* ============================================
   STARFIELD GENERATOR
   ============================================ */
function initStarfield() {
    const starfield = document.querySelector('.starfield');
    if (!starfield) return;
    
    const starCount = 200;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.setProperty('--duration', `${2 + Math.random() * 4}s`);
        star.style.animationDelay = `${Math.random() * 5}s`;
        star.style.transform = `scale(${0.5 + Math.random() * 1.5})`;
        starfield.appendChild(star);
    }
}

/* ============================================
   PARTICLE SYSTEM
   ============================================ */
function initParticles() {
    const particles = document.querySelector('.particles');
    if (!particles) return;
    
    const particleCount = 50;
    const colors = ['#a855f7', '#06b6d4', '#ec4899', '#3b82f6', '#22c55e'];
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${10 + Math.random() * 20}s`;
        particle.style.animationDelay = `${Math.random() * 15}s`;
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.boxShadow = `0 0 10px ${particle.style.background}, 0 0 20px ${particle.style.background}`;
        particle.style.width = `${2 + Math.random() * 4}px`;
        particle.style.height = particle.style.width;
        particles.appendChild(particle);
    }
}

/* ============================================
   NAVBAR EFFECTS
   ============================================ */
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
}

/* ============================================
   MOBILE MENU
   ============================================ */
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (!hamburger || !navLinks) return;
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu when clicking links
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

/* ============================================
   REVEAL ANIMATIONS
   ============================================ */
function initRevealAnimations() {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger-children');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '-50px'
    });
    
    revealElements.forEach(el => revealObserver.observe(el));
}

/* ============================================
   3D CARD TILT EFFECT
   ============================================ */
function init3DCards() {
    const cards = document.querySelectorAll('.service-card, .case-card, .stat-card, .benefit-card, .job-card, .location-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 15;
            const rotateY = (centerX - x) / 15;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

/* ============================================
   MOUSE FOLLOW EFFECTS
   ============================================ */
function initMouseFollow() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const polyhedron = document.querySelector('.polyhedron');
    const holoDisplay = document.querySelector('.holo-display');
    
    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        
        if (polyhedron) {
            polyhedron.style.transform = `
                translate(-50%, -50%)
                rotateX(${y * 20}deg)
                rotateY(${x * 20}deg)
            `;
        }
        
        if (holoDisplay) {
            holoDisplay.style.transform = `
                translate(${x * 20}px, ${y * 20}px)
            `;
        }
    });
    
    hero.addEventListener('mouseleave', () => {
        if (polyhedron) {
            polyhedron.style.transform = '';
        }
        if (holoDisplay) {
            holoDisplay.style.transform = '';
        }
    });
}

/* ============================================
   TEXT ANIMATIONS
   ============================================ */
function initTextAnimations() {
    // Split text for character animations
    const splitTextElements = document.querySelectorAll('[data-split-text]');
    
    splitTextElements.forEach(el => {
        const text = el.textContent;
        el.innerHTML = '';
        
        text.split('').forEach((char, i) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.animationDelay = `${i * 0.05}s`;
            el.appendChild(span);
        });
    });
    
    // Typing effect
    const typingElements = document.querySelectorAll('[data-typing]');
    
    typingElements.forEach(el => {
        const text = el.getAttribute('data-typing');
        let index = 0;
        el.textContent = '';
        
        const typeChar = () => {
            if (index < text.length) {
                el.textContent += text[index];
                index++;
                setTimeout(typeChar, 50 + Math.random() * 50);
            }
        };
        
        // Start typing when element is visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typeChar();
                    observer.disconnect();
                }
            });
        });
        
        observer.observe(el);
    });
}

/* ============================================
   COUNTER ANIMATIONS
   ============================================ */
function initCounterAnimations() {
    const counters = document.querySelectorAll('.stat-number[data-count]');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                const target = entry.target;
                const countTo = parseInt(target.getAttribute('data-count'));
                const suffix = target.getAttribute('data-suffix') || '';
                const duration = 2000;
                const startTime = performance.now();
                
                const updateCounter = (currentTime) => {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    
                    // Easing function
                    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                    const current = Math.floor(countTo * easeOutQuart);
                    
                    target.textContent = current.toLocaleString() + suffix;
                    
                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    } else {
                        target.textContent = countTo.toLocaleString() + suffix;
                    }
                };
                
                requestAnimationFrame(updateCounter);
                target.classList.add('counted');
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => counterObserver.observe(counter));
}

/* ============================================
   JOB FILTERS
   ============================================ */
function initJobFilters() {
    const filterButtons = document.querySelectorAll('.job-filter');
    const jobCards = document.querySelectorAll('.job-card');
    
    if (!filterButtons.length || !jobCards.length) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            // Filter cards with animation
            jobCards.forEach((card, index) => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.style.display = 'flex';
                    card.style.animation = `fadeInUp 0.5s ease ${index * 0.1}s forwards`;
                } else {
                    card.style.animation = 'fadeOutDown 0.3s ease forwards';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

/* ============================================
   SMOOTH SCROLL
   ============================================ */
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

/* ============================================
   PARALLAX EFFECTS
   ============================================ */
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    // Parallax for nebula clouds
    document.querySelectorAll('.nebula').forEach((nebula, i) => {
        const speed = 0.1 + (i * 0.05);
        nebula.style.transform = `translateY(${scrolled * speed}px)`;
    });
    
    // Parallax for grid floor
    const gridFloor = document.querySelector('.grid-floor');
    if (gridFloor) {
        gridFloor.style.transform = `perspective(500px) rotateX(60deg) translateZ(0) translateY(${scrolled * 0.1}px)`;
    }
});

/* ============================================
   MAGNETIC BUTTONS
   ============================================ */
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = '';
    });
});

/* ============================================
   FORM INTERACTIONS
   ============================================ */
document.querySelectorAll('.form-group input, .form-group textarea, .form-group select').forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', () => {
        if (!input.value) {
            input.parentElement.classList.remove('focused');
        }
    });
    
    if (input.value) {
        input.parentElement.classList.add('focused');
    }
});

/* ============================================
   GLITCH EFFECT - DISABLED (CSS-Only Version)
   ============================================ */
function createGlitchEffect() {
    // Using CSS-only glitch effect now to prevent text corruption
    const glitchText = document.querySelectorAll('.glitch-text');
    
    glitchText.forEach(text => {
        // Store original text as data attribute for CSS pseudo-elements
        const originalText = text.textContent.trim();
        text.setAttribute('data-text', originalText);
    });
}

// Initialize glitch effect (safe version)
createGlitchEffect();

/* ============================================
   CURSOR GLOW EFFECT
   ============================================ */
const cursorGlow = document.createElement('div');
cursorGlow.className = 'cursor-glow';
cursorGlow.style.cssText = `
    position: fixed;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s ease;
    opacity: 0;
`;
document.body.appendChild(cursorGlow);

document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
    cursorGlow.style.opacity = '1';
});

document.addEventListener('mouseleave', () => {
    cursorGlow.style.opacity = '0';
});

/* ============================================
   LOADING ANIMATION
   ============================================ */
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger hero animations
    setTimeout(() => {
        document.querySelectorAll('.hero .line span').forEach((span, i) => {
            span.style.animationPlayState = 'running';
        });
    }, 500);
});

/* ============================================
   CSS KEYFRAMES INJECTION
   ============================================ */
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fadeOutDown {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(30px);
        }
    }
`;
document.head.appendChild(styleSheet);

console.log('🚀 JBG Global Solutions - EXPO Level 3D Website Initialized');
