/* ==============================================
   AWWWARDS 2026 — INTERACTIONS & ANIMATIONS
   ============================================== */
(function () {
    'use strict';

    /* ---------- SCROLL REVEAL ---------- */
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('aw-visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.aw-reveal').forEach((el) => {
        revealObserver.observe(el);
    });

    /* ---------- STAGGER DELAYS ---------- */
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

    /* ---------- COUNTER ANIMATION ---------- */
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
                    // Ease out cubic
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

    /* ---------- HERO ORB PARALLAX ---------- */
    const hero = document.querySelector('.aw-hero');
    if (hero) {
        const orbs = hero.querySelectorAll('.aw-hero-orb');
        const floats = hero.querySelectorAll('.aw-float-card');

        hero.addEventListener('mousemove', (e) => {
            const rect = hero.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            orbs.forEach((orb, i) => {
                const speed = (i + 1) * 18;
                orb.style.transform = 'translate(' + (x * speed) + 'px, ' + (y * speed) + 'px)';
            });

            floats.forEach((card, i) => {
                const speed = (i + 1) * 8;
                card.style.transform = 'translate(' + (x * speed) + 'px, ' + (y * speed) + 'px)';
            });
        });
    }

    /* ---------- GLASS CARD TILT ---------- */
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

    /* ---------- PRODUCT CARD TILT ---------- */
    document.querySelectorAll('.aw-product-card').forEach((card) => {
        card.addEventListener('mousemove', function (e) {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            const rotateX = (0.5 - y) * 6;
            const rotateY = (x - 0.5) * 6;
            card.style.transform = 'translateY(-8px) perspective(600px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';

            // Move glow with mouse
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

    /* ---------- CARD GLOW FOLLOW CURSOR ---------- */
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

    /* ---------- SCROLL HIDE HINT ---------- */
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

    /* ---------- VARIABLE FONT WEIGHT ON SCROLL ---------- */
    const metricNumbers = document.querySelectorAll('.aw-metric-number');
    if (metricNumbers.length > 0) {
        const metricsSection = document.querySelector('#metrics');
        if (metricsSection) {
            function updateFontWeight() {
                const rect = metricsSection.getBoundingClientRect();
                const viewH = window.innerHeight;
                const progress = Math.max(0, Math.min(1, 1 - (rect.top / viewH)));
                const weight = Math.round(300 + progress * 600); // 300 → 900
                metricNumbers.forEach((el) => {
                    el.style.fontWeight = weight;
                });
            }
            window.addEventListener('scroll', updateFontWeight, { passive: true });
        }
    }

})();
