/* ============================================
   JBG Global Solutions - Premium Site Interactions
   World-Class Website Experience
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ---- Preloader ----
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.classList.add('loaded');
                document.body.style.overflow = '';
                // Trigger any hero animations after preloader
                document.querySelectorAll('.hero-home-content.reveal').forEach(el => el.classList.add('active'));
            }, 2000);
        });
        // Fallback: remove preloader after 4 seconds max
        setTimeout(() => {
            if (preloader && !preloader.classList.contains('loaded')) {
                preloader.classList.add('loaded');
                document.body.style.overflow = '';
            }
        }, 4000);
    }

    // ---- Custom Cursor ----
    const cursorDot = document.getElementById('cursorDot');
    const cursorRing = document.getElementById('cursorRing');
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    if (cursorDot && cursorRing && window.matchMedia('(hover: hover) and (min-width: 1025px)').matches) {
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursorDot.style.left = mouseX + 'px';
            cursorDot.style.top = mouseY + 'px';
            cursorDot.classList.add('visible');
            cursorRing.classList.add('visible');
        });

        // Smooth ring follow
        function animateRing() {
            ringX += (mouseX - ringX) * 0.15;
            ringY += (mouseY - ringY) * 0.15;
            cursorRing.style.left = ringX + 'px';
            cursorRing.style.top = ringY + 'px';
            requestAnimationFrame(animateRing);
        }
        animateRing();

        // Hover effect on interactive elements
        const hoverTargets = document.querySelectorAll('a, button, .btn, .service-card-img, .testimonial-card, .industry-chip, .result-card');
        hoverTargets.forEach(el => {
            el.addEventListener('mouseenter', () => cursorRing.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursorRing.classList.remove('hover'));
        });

        // Click effect
        document.addEventListener('mousedown', () => cursorRing.classList.add('clicking'));
        document.addEventListener('mouseup', () => cursorRing.classList.remove('clicking'));

        // Hide on mouse leave
        document.addEventListener('mouseleave', () => {
            cursorDot.classList.remove('visible');
            cursorRing.classList.remove('visible');
        });
        document.addEventListener('mouseenter', () => {
            cursorDot.classList.add('visible');
            cursorRing.classList.add('visible');
        });
    }

    // ---- Scroll Progress Bar ----
    const scrollProgress = document.getElementById('scrollProgress');
    if (scrollProgress) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            scrollProgress.style.width = scrollPercent + '%';
        }, { passive: true });
    }

    // ---- Navbar Scroll Effect ----
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        lastScroll = currentScroll;
    }, { passive: true });

    // ---- Mobile Menu Toggle ----
    window.toggleMenu = function() {
        const navLinks = document.querySelector('.nav-links');
        const hamburger = document.querySelector('.hamburger');
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('open');
    };

    // Close mobile menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.remove('active');
        });
    });

    // ---- Scroll Reveal Animations ----
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // ---- Image Reveal Animation ----
    const imgReveals = document.querySelectorAll('.img-reveal');
    const imgObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.3 });

    imgReveals.forEach(el => imgObserver.observe(el));

    // ---- Animated Counter (Hero Stats + General) ----
    function animateCounter(el) {
        const target = parseInt(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const duration = 2200;
        const startTime = performance.now();
        const startVal = 0;

        function easeOutExpo(t) {
            return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
        }

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutExpo(progress);
            const current = Math.floor(startVal + (target - startVal) * easedProgress);

            el.textContent = current + suffix;

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    }

    const counters = document.querySelectorAll('[data-count]');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(el => counterObserver.observe(el));

    // ---- Magnetic Button Effect ----
    const magneticBtns = document.querySelectorAll('.magnetic-btn');
    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
            btn.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        });

        btn.addEventListener('mouseenter', () => {
            btn.style.transition = 'transform 0.15s ease';
        });
    });

    // ---- 3D Tilt Cards ----
    const tiltCards = document.querySelectorAll('.tilt-card');
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            card.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(800px) rotateY(0) rotateX(0) scale(1)';
            card.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        });

        card.addEventListener('mouseenter', () => {
            card.style.transition = 'transform 0.1s ease';
        });
    });

    // ---- Parallax Images on Scroll ----
    const parallaxImages = document.querySelectorAll('.parallax-img img');

    window.addEventListener('scroll', () => {
        parallaxImages.forEach(img => {
            const rect = img.parentElement.getBoundingClientRect();
            const scrollPercent = (rect.top - window.innerHeight) / (rect.height + window.innerHeight);
            const offset = scrollPercent * -50;
            img.style.transform = `translateY(${offset}px) scale(1.1)`;
        });
    }, { passive: true });

    // ---- Image Tilt Effect ----
    const tiltElements = document.querySelectorAll('.img-tilt');

    tiltElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            el.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = 'perspective(1000px) rotateY(0) rotateX(0)';
        });
    });

    // ---- Smooth Anchor Scroll ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ---- Active Nav Link Based on Page ----
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });

    // ---- Typed Text Effect (Hero) ----
    const typedElement = document.querySelector('.typed-text');
    if (typedElement) {
        const words = JSON.parse(typedElement.dataset.words || '[]');
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 100;

        function typeLoop() {
            const currentWord = words[wordIndex];

            if (isDeleting) {
                typedElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
                typeSpeed = 50;
            } else {
                typedElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
                typeSpeed = 100;
            }

            if (!isDeleting && charIndex === currentWord.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 400;
            }

            setTimeout(typeLoop, typeSpeed);
        }

        if (words.length > 0) typeLoop();
    }

    // ---- Marquee speed control (optional) ----
    const marquees = document.querySelectorAll('.marquee-track');
    marquees.forEach(track => {
        track.addEventListener('mouseenter', () => {
            track.style.animationPlayState = 'paused';
        });
        track.addEventListener('mouseleave', () => {
            track.style.animationPlayState = 'running';
        });
    });

    // ---- Image lazy load with animation ----
    const lazyImages = document.querySelectorAll('img[data-src]');
    const lazyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                img.addEventListener('load', () => {
                    img.style.opacity = '1';
                    img.style.transform = 'scale(1)';
                });
                lazyObserver.unobserve(img);
            }
        });
    }, { rootMargin: '200px' });

    lazyImages.forEach(img => {
        img.style.opacity = '0';
        img.style.transform = 'scale(0.95)';
        img.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        lazyObserver.observe(img);
    });

    // --- Prevent jump for placeholder links ---
    document.querySelectorAll('a[href="#"]').forEach(link => {
        link.addEventListener('click', e => e.preventDefault());
    });

    // ---- Auto Aria-Labels for Social Links ----
    document.querySelectorAll('.social-links a, .social-link').forEach(link => {
        if (!link.getAttribute('aria-label')) {
            const icon = link.querySelector('i');
            if (icon) {
                const cls = icon.className || '';
                if (cls.includes('linkedin')) link.setAttribute('aria-label', 'LinkedIn');
                else if (cls.includes('twitter')) link.setAttribute('aria-label', 'Twitter');
                else if (cls.includes('facebook')) link.setAttribute('aria-label', 'Facebook');
                else if (cls.includes('instagram')) link.setAttribute('aria-label', 'Instagram');
                else if (cls.includes('youtube')) link.setAttribute('aria-label', 'YouTube');
            }
        }
    });

    // ---- Cookie Consent Banner ----
    if (!localStorage.getItem('jbg_cookie_consent')) {
        const banner = document.createElement('div');
        banner.className = 'cookie-banner';
        banner.innerHTML = `
            <p>We use cookies to enhance your experience and analyze site traffic. <a href="privacy-policy.html">Learn More</a></p>
            <div class="cookie-actions">
                <button class="cookie-accept" onclick="this.closest('.cookie-banner').remove();localStorage.setItem('jbg_cookie_consent','accepted')">Accept</button>
                <button class="cookie-decline" onclick="this.closest('.cookie-banner').remove();localStorage.setItem('jbg_cookie_consent','declined')">Decline</button>
            </div>`;
        document.body.appendChild(banner);
    }

    // ---- Parallax Hero Background on Scroll ----
    const heroBg = document.querySelector('.hero-home-bg img');
    if (heroBg) {
        window.addEventListener('scroll', () => {
            const scrollY = window.pageYOffset;
            heroBg.style.transform = `scale(1.1) translateY(${scrollY * 0.15}px)`;
        }, { passive: true });
    }

    // ---- Text Scramble Effect on hover for result metrics ----
    const resultMetrics = document.querySelectorAll('.result-metric');
    resultMetrics.forEach(metric => {
        const originalText = metric.textContent;
        metric.addEventListener('mouseenter', () => {
            const chars = '0123456789%+KMB';
            let iterations = 0;
            const interval = setInterval(() => {
                metric.textContent = originalText.split('').map((char, idx) => {
                    if (idx < iterations) return originalText[idx];
                    return chars[Math.floor(Math.random() * chars.length)];
                }).join('');
                iterations += 1/3;
                if (iterations >= originalText.length) {
                    clearInterval(interval);
                    metric.textContent = originalText;
                }
            }, 30);
        });
    });

    // ---- Service Cards — Glow Follow Mouse ----
    document.querySelectorAll('.service-card-img').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', x + 'px');
            card.style.setProperty('--mouse-y', y + 'px');
        });
    });

    // ============================================
    // HOMEPAGE — Hero Carousel
    // ============================================
    const heroCarousel = document.getElementById('heroCarousel');
    if (heroCarousel) {
        const slides = heroCarousel.querySelectorAll('.hp-hero-slide');
        const dots = heroCarousel.querySelectorAll('.hp-dot');
        const prevBtn = heroCarousel.querySelector('.hp-hero-prev');
        const nextBtn = heroCarousel.querySelector('.hp-hero-next');
        let currentSlide = 0;
        let heroInterval;
        const HERO_SPEED = 6000;

        function goToSlide(idx) {
            slides[currentSlide].classList.remove('active');
            dots[currentSlide].classList.remove('active');
            currentSlide = (idx + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        }

        function nextSlide() { goToSlide(currentSlide + 1); }
        function prevSlide() { goToSlide(currentSlide - 1); }

        function startHeroAuto() {
            heroInterval = setInterval(nextSlide, HERO_SPEED);
        }
        function resetHeroAuto() {
            clearInterval(heroInterval);
            startHeroAuto();
        }

        if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetHeroAuto(); });
        if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetHeroAuto(); });
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                goToSlide(parseInt(dot.dataset.slide));
                resetHeroAuto();
            });
        });

        // Touch/swipe support
        let touchStartX = 0;
        heroCarousel.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
        heroCarousel.addEventListener('touchend', (e) => {
            const diff = touchStartX - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 60) {
                diff > 0 ? nextSlide() : prevSlide();
                resetHeroAuto();
            }
        }, { passive: true });

        startHeroAuto();
    }

    // ============================================
    // HOMEPAGE — Horizontal Scroll Arrows
    // ============================================
    document.querySelectorAll('.hp-arr').forEach(btn => {
        btn.addEventListener('click', () => {
            const trackId = btn.dataset.carousel;
            const track = document.getElementById(trackId);
            if (!track) return;
            const scrollAmount = 400;
            if (btn.classList.contains('hp-arr-prev')) {
                track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        });
    });

    // ============================================
    // HOMEPAGE — Solutions Tabs
    // ============================================
    document.querySelectorAll('.hp-sol-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const panelId = tab.dataset.panel;
            // Deactivate all tabs in this group
            tab.closest('.hp-sol-tabs').querySelectorAll('.hp-sol-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            // Switch panels
            document.querySelectorAll('.hp-sol-panel').forEach(p => p.classList.remove('active'));
            const target = document.getElementById(panelId);
            if (target) target.classList.add('active');
        });
    });

    // ============================================
    // HOMEPAGE — News & Insights Tabs
    // ============================================
    document.querySelectorAll('.hp-ni-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const panelId = tab.dataset.panel;
            tab.closest('.hp-ni-tabs').querySelectorAll('.hp-ni-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            document.querySelectorAll('.hp-ni-panel').forEach(p => p.classList.remove('active'));
            const target = document.getElementById(panelId);
            if (target) target.classList.add('active');
        });
    });

    // ============================================
    // HOMEPAGE — Scroll-triggered section reveals
    // ============================================
    const hpSections = document.querySelectorAll('.hp-whats-new, .hp-solutions, .hp-stories, .hp-stats, .hp-events, .hp-news-insights, .hp-careers, .hp-partner-cta');
    const hpObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('hp-visible');
                hpObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    hpSections.forEach(s => hpObserver.observe(s));

});
