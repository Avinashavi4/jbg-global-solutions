// ============================================
// NEXT-LEVEL INTERACTIONS & ANIMATIONS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    
    // ============================================
    // SCROLL REVEAL ANIMATIONS
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section:not(.hero)').forEach(section => {
        observer.observe(section);
    });

    // ============================================
    // 3D CARD TILT EFFECT (Mouse Follow)
    // ============================================
    const cards = document.querySelectorAll('.consulting-card, .service-card, .best-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-20px)
                scale(1.05)
            `;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
        });
    });

    // ============================================
    // PARTICLE EXPLOSION ON CARD HOVER
    // ============================================
    function createParticles(e, card) {
        const colors = ['#6366f1', '#8b5cf6', '#06b6d4', '#10b981'];
        const particleCount = 15;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = '6px';
            particle.style.height = '6px';
            particle.style.borderRadius = '50%';
            particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            particle.style.pointerEvents = 'none';
            particle.style.left = e.offsetX + 'px';
            particle.style.top = e.offsetY + 'px';
            particle.style.zIndex = '1000';
            
            card.appendChild(particle);
            
            const angle = (Math.PI * 2 * i) / particleCount;
            const velocity = 50 + Math.random() * 50;
            
            const animation = particle.animate([
                {
                    transform: 'translate(0, 0) scale(1)',
                    opacity: 1
                },
                {
                    transform: `translate(${Math.cos(angle) * velocity}px, ${Math.sin(angle) * velocity}px) scale(0)`,
                    opacity: 0
                }
            ], {
                duration: 800,
                easing: 'cubic-bezier(0, .9, .57, 1)'
            });
            
            animation.onfinish = () => particle.remove();
        }
    }

    cards.forEach(card => {
        card.addEventListener('mouseenter', (e) => {
            createParticles(e, card);
        });
    });

    // ============================================
    // ANIMATED NUMBER COUNTER
    // ============================================
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 50;
        const duration = 2000;
        const stepTime = duration / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            // Handle special formatting
            const text = element.textContent;
            if (text.includes('+')) {
                element.textContent = Math.floor(current) + '+';
            } else if (text.includes('%')) {
                element.textContent = Math.floor(current) + '%';
            } else {
                element.textContent = Math.floor(current);
            }
        }, stepTime);
    }

    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                const text = entry.target.textContent;
                const number = parseInt(text.replace(/[^0-9]/g, ''));
                animateCounter(entry.target, number);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-number').forEach(stat => {
        statObserver.observe(stat);
    });

    // ============================================
    // MAGNETIC BUTTON EFFECT
    // ============================================
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0, 0)';
        });
    });

    // ============================================
    // PARALLAX SCROLL EFFECT
    // ============================================
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        // Parallax for card images
        document.querySelectorAll('.card-image img').forEach((img, index) => {
            const speed = 0.05 + (index * 0.01);
            img.style.transform = `translateY(${scrolled * speed}px) scale(1.1)`;
        });
        
        // Parallax for icons
        document.querySelectorAll('.card-icon').forEach((icon, index) => {
            const speed = 0.03 + (index * 0.01);
            const rotation = scrolled * 0.05;
            icon.style.transform = `translateY(${scrolled * speed}px) rotate(${rotation}deg)`;
        });
    });

    // ============================================
    // CARD RIPPLE EFFECT ON CLICK
    // ============================================
    function createRipple(e) {
        const card = e.currentTarget;
        const ripple = document.createElement('div');
        
        const rect = card.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(99, 102, 241, 0.5)';
        ripple.style.pointerEvents = 'none';
        ripple.style.animation = 'ripple-animation 0.6s ease-out';
        
        card.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    }

    // Add ripple CSS animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple-animation {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    cards.forEach(card => {
        card.addEventListener('click', createRipple);
    });

    // ============================================
    // GLOWING CURSOR EFFECT
    // ============================================
    const cursor = document.createElement('div');
    cursor.style.position = 'fixed';
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursor.style.borderRadius = '50%';
    cursor.style.background = 'radial-gradient(circle, rgba(99, 102, 241, 0.8), transparent)';
    cursor.style.pointerEvents = 'none';
    cursor.style.zIndex = '10000';
    cursor.style.transition = 'transform 0.15s';
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });

    // Enlarge cursor on card hover
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(3)';
            cursor.style.background = 'radial-gradient(circle, rgba(139, 92, 246, 0.6), transparent)';
        });
        
        card.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.background = 'radial-gradient(circle, rgba(99, 102, 241, 0.8), transparent)';
        });
    });

    // ============================================
    // SMOOTH SCROLL TO SECTION
    // ============================================
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

    // ============================================
    // TYPING EFFECT FOR SECTION HEADERS
    // ============================================
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    const headerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('typed')) {
                entry.target.classList.add('typed');
                const originalText = entry.target.textContent;
                typeWriter(entry.target, originalText, 30);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.section-header h2').forEach(header => {
        headerObserver.observe(header);
    });

    // ============================================
    // CARD STACK EFFECT ON SCROLL
    // ============================================
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        cards.forEach((card, index) => {
            const cardTop = card.offsetTop;
            const cardHeight = card.offsetHeight;
            const windowHeight = window.innerHeight;
            
            if (scrollY + windowHeight > cardTop && scrollY < cardTop + cardHeight) {
                const progress = (scrollY + windowHeight - cardTop) / (windowHeight + cardHeight);
                const scale = 0.9 + (progress * 0.1);
                const translateY = (1 - progress) * 50;
                
                card.style.transform = `scale(${scale}) translateY(${translateY}px)`;
                card.style.opacity = progress;
            }
        });
    });

    // ============================================
    // FLOATING ANIMATION ON IDLE
    // ============================================
    let idleTimer;
    let isIdle = false;

    function startFloating() {
        if (!isIdle) {
            isIdle = true;
            cards.forEach((card, index) => {
                card.style.animation = `float ${6 + index}s ease-in-out infinite`;
            });
        }
    }

    function stopFloating() {
        isIdle = false;
        clearTimeout(idleTimer);
        idleTimer = setTimeout(startFloating, 3000);
    }

    document.addEventListener('mousemove', stopFloating);
    document.addEventListener('scroll', stopFloating);

    // Start floating after 3 seconds
    idleTimer = setTimeout(startFloating, 3000);

    console.log('🚀 Next-Level Animations Loaded!');
});
