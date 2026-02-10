/* ============================================
   JBG Global Solutions - Site Interactions & Animations
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

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
    });

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

    // ---- Counter Animation ----
    const counters = document.querySelectorAll('[data-count]');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.count);
                const suffix = el.dataset.suffix || '';
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;

                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    el.textContent = Math.floor(current) + suffix;
                }, 16);

                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(el => counterObserver.observe(el));

    // ---- Parallax Images on Scroll ----
    const parallaxImages = document.querySelectorAll('.parallax-img img');

    window.addEventListener('scroll', () => {
        parallaxImages.forEach(img => {
            const rect = img.parentElement.getBoundingClientRect();
            const scrollPercent = (rect.top - window.innerHeight) / (rect.height + window.innerHeight);
            const offset = scrollPercent * -50;
            img.style.transform = `translateY(${offset}px) scale(1.1)`;
        });
    });

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

    // --- Dead Link Handler: Prevent jump & show toast for href="#" ---
    document.querySelectorAll('a[href="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Show subtle toast
            let toast = document.getElementById('jbg-toast');
            if (!toast) {
                toast = document.createElement('div');
                toast.id = 'jbg-toast';
                toast.style.cssText = 'position:fixed;bottom:32px;left:50%;transform:translateX(-50%) translateY(20px);background:#0A1628;color:#fff;padding:14px 28px;border-radius:12px;font-size:0.9rem;font-weight:600;z-index:9999;opacity:0;transition:all 0.35s cubic-bezier(0.4,0,0.2,1);pointer-events:none;box-shadow:0 8px 32px rgba(0,0,0,0.25);border:1px solid rgba(255,255,255,0.08);';
                document.body.appendChild(toast);
            }
            toast.textContent = 'Coming Soon — Stay Tuned!';
            toast.style.opacity = '1';
            toast.style.transform = 'translateX(-50%) translateY(0)';
            clearTimeout(toast._timeout);
            toast._timeout = setTimeout(() => {
                toast.style.opacity = '0';
                toast.style.transform = 'translateX(-50%) translateY(20px)';
            }, 2500);
        });
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
        banner.id = 'cookie-consent';
        banner.innerHTML = `
            <div style="position:fixed;bottom:0;left:0;right:0;background:#0A1628;color:#fff;padding:16px 24px;display:flex;align-items:center;justify-content:space-between;gap:16px;z-index:10000;font-size:0.9rem;box-shadow:0 -4px 24px rgba(0,0,0,0.3);flex-wrap:wrap;border-top:1px solid rgba(59,130,246,0.2);">
                <p style="margin:0;color:rgba(255,255,255,0.8);flex:1;min-width:250px;line-height:1.5;">We use cookies to enhance your browsing experience and analyze site traffic. By continuing, you consent to our use of cookies. <a href="privacy-policy.html" style="color:#3b82f6;text-decoration:underline;">Learn More</a></p>
                <div style="display:flex;gap:10px;flex-shrink:0;">
                    <button onclick="document.getElementById('cookie-consent').remove();localStorage.setItem('jbg_cookie_consent','accepted')" style="background:linear-gradient(135deg,#3b82f6,#2563eb);color:#fff;border:none;padding:10px 24px;border-radius:8px;font-weight:600;cursor:pointer;font-size:0.85rem;transition:transform 0.2s;">Accept</button>
                    <button onclick="document.getElementById('cookie-consent').remove();localStorage.setItem('jbg_cookie_consent','declined')" style="background:rgba(255,255,255,0.08);color:rgba(255,255,255,0.7);border:1px solid rgba(255,255,255,0.15);padding:10px 20px;border-radius:8px;font-weight:500;cursor:pointer;font-size:0.85rem;">Decline</button>
                </div>
            </div>`;
        document.body.appendChild(banner);
    }

});
