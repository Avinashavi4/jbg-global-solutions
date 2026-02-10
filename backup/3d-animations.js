// ============================================
// 3D CARD ANIMATIONS & SCROLL EFFECTS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all card elements
    const cards = document.querySelectorAll(`
        .consulting-card,
        .service-card,
        .best-card,
        .premium-card,
        .feature-card,
        .offering-card,
        .tech-card,
        .why-card,
        .team-member,
        .testimonial-card,
        .process-step,
        .vertical-card,
        .tech-group
    `);

    cards.forEach(card => {
        cardObserver.observe(card);
        
        // Add 3D tilt effect on mouse move
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `
                translateY(-20px) 
                scale(1.08)
                rotateX(${rotateX}deg) 
                rotateY(${rotateY}deg)
                translateZ(30px)
            `;
        });
        
        // Reset transform on mouse leave
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1) rotateX(0deg) rotateY(0deg) translateZ(0)';
        });
        
        // Enhanced click handler for expanded details
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking a button or link
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
                return;
            }
            
            // Add ripple effect
            createRipple(e, this);
            
            // Trigger modal if data-modal attribute exists
            const modalId = this.getAttribute('data-modal');
            if (modalId && window.openModal) {
                window.openModal(modalId);
            } else {
                // Show quick preview popup
                showQuickPreview(this);
            }
        });
    });

    // Create ripple effect on click
    function createRipple(event, element) {
        const ripple = document.createElement('div');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, transparent 70%);
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            animation: rippleEffect 0.8s ease-out;
            z-index: 10;
        `;
        
        element.style.position = 'relative';
        element.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 800);
    }

    // Show quick preview popup
    function showQuickPreview(card) {
        const title = card.querySelector('h3')?.textContent || 'Details';
        const description = card.querySelector('p')?.textContent || '';
        const icon = card.querySelector('i')?.className || '';
        
        // Remove existing preview
        const existingPreview = document.querySelector('.quick-preview-popup');
        if (existingPreview) {
            existingPreview.remove();
        }
        
        // Create preview popup
        const preview = document.createElement('div');
        preview.className = 'quick-preview-popup';
        preview.innerHTML = `
            <div class="preview-content">
                <button class="preview-close">&times;</button>
                ${icon ? `<i class="${icon}"></i>` : ''}
                <h2>${title}</h2>
                <p>${description}</p>
                <div class="preview-actions">
                    <button class="btn-learn-more">Learn More</button>
                    <button class="btn-contact">Get in Touch</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(preview);
        
        // Animate in
        setTimeout(() => preview.classList.add('active'), 10);
        
        // Close handlers
        preview.querySelector('.preview-close').addEventListener('click', () => {
            preview.classList.remove('active');
            setTimeout(() => preview.remove(), 300);
        });
        
        preview.addEventListener('click', (e) => {
            if (e.target === preview) {
                preview.classList.remove('active');
                setTimeout(() => preview.remove(), 300);
            }
        });
        
        // Button handlers
        preview.querySelector('.btn-learn-more').addEventListener('click', () => {
            const modalId = card.getAttribute('data-modal');
            if (modalId && window.openModal) {
                preview.remove();
                window.openModal(modalId);
            }
        });
        
        preview.querySelector('.btn-contact').addEventListener('click', () => {
            preview.remove();
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Parallax effect on scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        document.querySelectorAll('.section-header').forEach(header => {
            const speed = 0.5;
            const yPos = -(scrolled * speed);
            header.style.transform = `translateY(${yPos}px)`;
        });
    });

    // Add floating animation to stat numbers
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach((stat, index) => {
        const delay = index * 0.2;
        stat.style.animation = `countUp 2s ease-out ${delay}s forwards, float 3s ease-in-out infinite ${delay}s`;
    });

    // Magnetic button effect
    document.querySelectorAll('.btn, .btn-primary').forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.05)`;
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0, 0) scale(1)';
        });
    });

    // Add particle system to hero section
    createParticles();
    
    // Smooth scroll for all internal links
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
});

// Particle system
function createParticles() {
    const sections = document.querySelectorAll('section:not(.hero)');
    
    sections.forEach(section => {
        if (Math.random() > 0.5) { // Add particles to 50% of sections
            const particleCount = 15;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'floating-particle';
                particle.style.cssText = `
                    position: absolute;
                    width: ${Math.random() * 8 + 4}px;
                    height: ${Math.random() * 8 + 4}px;
                    background: radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent);
                    border-radius: 50%;
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                    pointer-events: none;
                    animation: floatUp ${Math.random() * 10 + 10}s linear infinite;
                    animation-delay: ${Math.random() * 5}s;
                    z-index: 0;
                `;
                
                if (section.style.position !== 'relative') {
                    section.style.position = 'relative';
                }
                section.appendChild(particle);
            }
        }
    });
}

// Count up animation for stats
function animateValue(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + (element.textContent.includes('+') ? '+' : '');
    }, 16);
}

// Trigger count animation when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                if (number) {
                    animateValue(stat, 0, number, 2000);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes rippleEffect {
        to {
            transform: scale(2.5);
            opacity: 0;
        }
    }
    
    @keyframes countUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.3;
        }
        50% {
            opacity: 0.6;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    .quick-preview-popup {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(10px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .quick-preview-popup.active {
        opacity: 1;
    }
    
    .preview-content {
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.98));
        backdrop-filter: blur(20px);
        border: 2px solid rgba(59, 130, 246, 0.3);
        border-radius: 24px;
        padding: 3rem;
        max-width: 600px;
        width: 90%;
        transform: scale(0.8) translateY(50px);
        transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        position: relative;
        box-shadow: 0 30px 80px rgba(30, 58, 138, 0.4);
    }
    
    .quick-preview-popup.active .preview-content {
        transform: scale(1) translateY(0);
    }
    
    .preview-close {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: rgba(239, 68, 68, 0.1);
        border: 2px solid rgba(239, 68, 68, 0.3);
        color: #ef4444;
        font-size: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 1;
    }
    
    .preview-close:hover {
        background: rgba(239, 68, 68, 0.2);
        transform: rotate(90deg);
    }
    
    .preview-content i {
        font-size: 4rem;
        background: linear-gradient(135deg, #1e40af, #3b82f6, #60a5fa);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        display: block;
        margin-bottom: 1.5rem;
        animation: float 3s ease-in-out infinite;
    }
    
    .preview-content h2 {
        color: #1e3a8a;
        font-size: 2rem;
        margin-bottom: 1rem;
        font-weight: 700;
    }
    
    .preview-content p {
        color: #1e40af;
        font-size: 1.1rem;
        line-height: 1.8;
        margin-bottom: 2rem;
    }
    
    .preview-actions {
        display: flex;
        gap: 1rem;
        justify-content: center;
    }
    
    .preview-actions button {
        padding: 1rem 2rem;
        border-radius: 12px;
        border: none;
        font-weight: 700;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.3s ease;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
    
    .btn-learn-more {
        background: linear-gradient(135deg, #1e40af, #3b82f6);
        color: white;
        box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
    }
    
    .btn-learn-more:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 30px rgba(37, 99, 235, 0.5);
    }
    
    .btn-contact {
        background: white;
        color: #1e40af;
        border: 2px solid #3b82f6;
    }
    
    .btn-contact:hover {
        background: #f0f9ff;
        transform: translateY(-3px);
    }
`;
document.head.appendChild(style);

console.log('🎨 3D Animations and Interactive Effects Loaded!');
