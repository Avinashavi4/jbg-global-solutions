/* ==============================================
   AWWWARDS 2026 — INTERACTIONS & ANIMATIONS
   TCS-Style Hero Slider + Scroll Reveal + Counters
   ============================================== */
(function () {
    'use strict';

    /* ===================================================
       HERO IMAGE SLIDER (TCS-style auto-rotation)
       =================================================== */
    const heroSlider = {
        slides: document.querySelectorAll('.aw-slide'),
        panels: document.querySelectorAll('.aw-slide-panel'),
        dots: document.querySelectorAll('.aw-dot'),
        counterEl: document.querySelector('.aw-counter-current'),
        current: 0,
        total: 0,
        interval: null,
        DURATION: 6000, // 6 seconds per slide

        init() {
            this.total = this.slides.length;
            if (this.total === 0) return;

            // Dot clicks
            this.dots.forEach((dot) => {
                dot.addEventListener('click', () => {
                    const idx = parseInt(dot.dataset.index, 10);
                    if (!isNaN(idx)) this.goTo(idx);
                });
            });

            // Arrow clicks
            const prevBtn = document.querySelector('.aw-arrow-prev');
            const nextBtn = document.querySelector('.aw-arrow-next');
            if (prevBtn) prevBtn.addEventListener('click', () => this.prev());
            if (nextBtn) nextBtn.addEventListener('click', () => this.next());

            // Pause on hover
            const hero = document.querySelector('.aw-hero');
            if (hero) {
                hero.addEventListener('mouseenter', () => this.stop());
                hero.addEventListener('mouseleave', () => this.start());
            }

            // Keyboard arrows
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') this.prev();
                if (e.key === 'ArrowRight') this.next();
            });

            // Touch swipe support
            this.initSwipe(hero);

            // Start auto-play
            this.start();
        },

        goTo(index) {
            if (index === this.current || index < 0 || index >= this.total) return;

            // Deactivate current
            this.slides[this.current].classList.remove('aw-slide-active');
            this.panels[this.current].classList.remove('aw-panel-active');
            this.dots[this.current].classList.remove('aw-dot-active');

            // Activate new
            this.current = index;
            this.slides[this.current].classList.add('aw-slide-active');
            this.panels[this.current].classList.add('aw-panel-active');
            this.dots[this.current].classList.add('aw-dot-active');

            // Update counter
            if (this.counterEl) {
                this.counterEl.textContent = String(this.current + 1).padStart(2, '0');
            }

            // Restart auto-play timer
            this.stop();
            this.start();
        },

        next() {
            this.goTo((this.current + 1) % this.total);
        },

        prev() {
            this.goTo((this.current - 1 + this.total) % this.total);
        },

        start() {
            if (this.interval) return;
            this.interval = setInterval(() => this.next(), this.DURATION);
        },

        stop() {
            clearInterval(this.interval);
            this.interval = null;
        },

        initSwipe(el) {
            if (!el) return;
            let startX = 0;
            let startY = 0;
            el.addEventListener('touchstart', (e) => {
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
            }, { passive: true });
            el.addEventListener('touchend', (e) => {
                const dx = e.changedTouches[0].clientX - startX;
                const dy = e.changedTouches[0].clientY - startY;
                if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
                    if (dx < 0) this.next();
                    else this.prev();
                }
            }, { passive: true });
        }
    };

    heroSlider.init();

    /* ===================================================
       SCROLL REVEAL
       =================================================== */
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('aw-visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );
    document.querySelectorAll('.aw-reveal').forEach((el) => {
        revealObserver.observe(el);
    });

    /* ===================================================
       STAGGER DELAYS
       =================================================== */
    document.querySelectorAll('.aw-glass-card').forEach((c, i) => {
        c.style.transitionDelay = (i * 0.15) + 's';
    });
    document.querySelectorAll('.aw-product-card').forEach((c, i) => {
        c.style.transitionDelay = (i * 0.18) + 's';
    });
    document.querySelectorAll('.aw-price-card').forEach((c, i) => {
        c.style.transitionDelay = (i * 0.15) + 's';
    });
    document.querySelectorAll('.aw-metric').forEach((c, i) => {
        c.style.transitionDelay = (i * 0.12) + 's';
    });

    /* ===================================================
       COUNTER ANIMATION
       =================================================== */
    const counterObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                const target = parseInt(el.dataset.target, 10);
                if (isNaN(target) || el.dataset.counted) return;
                el.dataset.counted = 'true';

                const duration = 2200;
                const startTime = performance.now();

                function tick(now) {
                    const elapsed = now - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const ease = 1 - Math.pow(1 - progress, 3);
                    el.textContent = Math.floor(ease * target);
                    if (progress < 1) {
                        requestAnimationFrame(tick);
                    } else {
                        el.textContent = target;
                    }
                }
                requestAnimationFrame(tick);
                counterObserver.unobserve(el);
            });
        },
        { threshold: 0.5 }
    );
    document.querySelectorAll('.aw-metric-number').forEach((el) => {
        counterObserver.observe(el);
    });

    /* ===================================================
       GLASS CARD 3D TILT
       =================================================== */
    document.querySelectorAll('.aw-glass-card').forEach((card) => {
        card.addEventListener('mousemove', function (e) {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            const rotateX = (0.5 - y) * 8;
            const rotateY = (x - 0.5) * 8;
            card.style.transform = 'translateY(-10px) perspective(600px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
        });
        card.addEventListener('mouseleave', function () {
            card.style.transform = '';
        });
    });

    /* ===================================================
       PRODUCT CARD 3D TILT + GLOW
       =================================================== */
    document.querySelectorAll('.aw-product-card').forEach((card) => {
        card.addEventListener('mousemove', function (e) {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            const rotateX = (0.5 - y) * 6;
            const rotateY = (x - 0.5) * 6;
            card.style.transform = 'translateY(-8px) perspective(600px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';

            const glowEl = card.querySelector('.aw-card-glow');
            if (glowEl) {
                glowEl.style.background = 'radial-gradient(circle at ' + (x * 100) + '% ' + (y * 100) + '%, rgba(0,255,136,0.08), transparent 60%)';
                glowEl.style.opacity = '1';
            }
        });
        card.addEventListener('mouseleave', function () {
            card.style.transform = '';
        });
    });

    /* ===================================================
       CARD GLOW FOLLOW CURSOR
       =================================================== */
    document.querySelectorAll('.aw-glass-card').forEach((card) => {
        const glow = card.querySelector('.aw-card-glow');
        if (!glow) return;
        card.addEventListener('mousemove', function (e) {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            glow.style.background = 'radial-gradient(circle at ' + x + '% ' + y + '%, rgba(0,255,136,0.08), transparent 55%)';
        });
    });

    /* ===================================================
       SCROLL HIDE HINT
       =================================================== */
    const scrollHint = document.querySelector('.aw-scroll-hint');
    if (scrollHint) {
        function checkScroll() {
            if (window.scrollY > 100) {
                scrollHint.style.opacity = '0';
                scrollHint.style.pointerEvents = 'none';
            } else {
                scrollHint.style.opacity = '';
                scrollHint.style.pointerEvents = '';
            }
        }
        window.addEventListener('scroll', checkScroll, { passive: true });
    }

    /* ===================================================
       VARIABLE FONT WEIGHT ON SCROLL
       =================================================== */
    const metricNumbers = document.querySelectorAll('.aw-metric-number');
    if (metricNumbers.length > 0) {
        const metricsSection = document.querySelector('#metrics');
        if (metricsSection) {
            function updateFontWeight() {
                const rect = metricsSection.getBoundingClientRect();
                const viewH = window.innerHeight;
                const progress = Math.max(0, Math.min(1, 1 - (rect.top / viewH)));
                const weight = Math.round(300 + progress * 600);
                metricNumbers.forEach((el) => {
                    el.style.fontWeight = weight;
                });
            }
            window.addEventListener('scroll', updateFontWeight, { passive: true });
        }
    }

})();
