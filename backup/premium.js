/* ============================================
   JBG Global Solutions - Premium JavaScript
   Professional Micro-Interactions & Animations
   Built with Enterprise Standards
   ============================================ */

class PremiumWebsite {
    constructor() {
        this.initializeElements();
        this.setupEventListeners();
        this.setupScrollAnimations();
        this.setupFormValidation();
        this.setupMobileMenu();
    }

    // Initialize DOM Elements
    initializeElements() {
        this.hamburger = document.querySelector('.hamburger');
        this.navLinks = document.querySelector('.nav-links');
        this.navItems = document.querySelectorAll('.nav-links a');
        this.contactForm = document.querySelector('.contact-form');
        this.formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    }

    // Setup Event Listeners
    setupEventListeners() {
        // Mobile menu toggle
        if (this.hamburger) {
            this.hamburger.addEventListener('click', () => this.toggleMobileMenu());
        }

        // Navigation smooth scroll and active state
        this.navItems.forEach(item => {
            item.addEventListener('click', (e) => this.handleNavClick(e));
        });

        // Form submission
        if (this.contactForm) {
            this.contactForm.addEventListener('submit', (e) => this.handleFormSubmit(e));
        }

        // Input focus effects
        this.formInputs.forEach(input => {
            input.addEventListener('focus', (e) => this.handleInputFocus(e));
            input.addEventListener('blur', (e) => this.handleInputBlur(e));
        });

        // Window scroll for nav highlighting
        window.addEventListener('scroll', () => this.updateNavHighlight());

        // Smooth scroll behavior
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => this.smoothScroll(e));
        });
    }

    // Mobile Menu Toggle
    toggleMobileMenu() {
        this.navLinks.classList.toggle('active');
        
        // Hamburger animation
        const spans = this.hamburger.querySelectorAll('span');
        if (this.navLinks.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(10px, 10px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.opacity = '1';
            spans[2].style.transform = '';
        }
    }

    // Handle Navigation Click
    handleNavClick(e) {
        // Close mobile menu
        if (this.navLinks.classList.contains('active')) {
            this.navLinks.classList.remove('active');
            const spans = this.hamburger.querySelectorAll('span');
            spans[0].style.transform = '';
            spans[1].style.opacity = '1';
            spans[2].style.transform = '';
        }

        // Update active state
        this.navItems.forEach(item => item.classList.remove('active'));
        e.target.classList.add('active');
    }

    // Smooth Scroll - Simplified for stability
    smoothScroll(e) {
        const href = e.currentTarget.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const navHeight = 80; // Fixed navbar height
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    }

    // Update Navigation Highlight on Scroll
    updateNavHighlight() {
        let current = '';
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        this.navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    }

    // Form Input Focus Effect
    handleInputFocus(e) {
        const group = e.target.closest('.form-group');
        if (group) {
            group.style.transform = 'translateY(-2px)';
        }
    }

    // Form Input Blur Effect
    handleInputBlur(e) {
        const group = e.target.closest('.form-group');
        if (group) {
            group.style.transform = '';
        }
    }

    // Form Validation & Submission
    handleFormSubmit(e) {
        e.preventDefault();

        const formData = new FormData(this.contactForm);
        const data = Object.fromEntries(formData);

        // Validate
        if (!this.validateForm(data)) {
            return;
        }

        // Submit (in real scenario, send to server)
        console.log('Form Data:', data);
        this.showFormSuccess();
        this.contactForm.reset();
    }

    // Validate Form
    validateForm(data) {
        // Name validation
        if (!data.name || data.name.trim().length < 2) {
            this.showError('Please enter a valid name');
            return false;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            this.showError('Please enter a valid email address');
            return false;
        }

        // Message validation
        if (!data.message || data.message.trim().length < 10) {
            this.showError('Please enter a message (at least 10 characters)');
            return false;
        }

        return true;
    }

    // Show Form Error
    showError(message) {
        const error = document.createElement('div');
        error.className = 'form-error';
        error.textContent = message;
        error.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: #ef4444;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            z-index: 2000;
            animation: slideIn 0.3s ease-out;
            max-width: 300px;
        `;

        document.body.appendChild(error);

        setTimeout(() => {
            error.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => error.remove(), 300);
        }, 4000);
    }

    // Show Form Success
    showFormSuccess() {
        const success = document.createElement('div');
        success.className = 'form-success';
        success.textContent = 'Message sent successfully! We\'ll get back to you soon.';
        success.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: #10b981;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            z-index: 2000;
            animation: slideIn 0.3s ease-out;
            max-width: 300px;
        `;

        document.body.appendChild(success);

        setTimeout(() => {
            success.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => success.remove(), 300);
        }, 4000);
    }

    // Setup Scroll Animations - Instagram Story Style
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-active');
                }
            });
        }, observerOptions);

        // Observe all cards with staggered animation
        const cards = document.querySelectorAll(
            '.consulting-card, .service-card, .best-card, .feature-card, ' +
            '.team-member, .testimonial-card, .process-step, ' +
            '.vertical-card, .tech-group'
        );

        cards.forEach(card => {
            observer.observe(card);
        });
    }

    // Animate Element on Scroll
    animateElement(element) {
        element.classList.add('animate-in');
    }

    // Setup Form Validation
    setupFormValidation() {
        this.formInputs.forEach(input => {
            input.addEventListener('input', (e) => {
                this.validateInput(e.target);
            });
        });
    }

    // Validate Individual Input
    validateInput(input) {
        const isValid = this.isInputValid(input);
        
        if (isValid) {
            input.style.borderColor = '#10b981';
            input.style.boxShadow = '0 0 0 4px rgba(16, 185, 129, 0.1)';
        } else {
            input.style.borderColor = '';
            input.style.boxShadow = '';
        }
    }

    // Check if Input is Valid
    isInputValid(input) {
        if (!input.value.trim()) return false;

        if (input.type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(input.value);
        }

        if (input.name === 'name') {
            return input.value.trim().length >= 2;
        }

        if (input.name === 'message') {
            return input.value.trim().length >= 10;
        }

        return true;
    }
}

// CSS Animations (added dynamically)
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }

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

    @keyframes fadeInScale {
        from {
            opacity: 0;
            transform: scale(0.9);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    @keyframes pulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.7;
        }
    }

    /* Smooth transitions for all interactive elements */
    input, textarea, button, a {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* Loading animation for buttons */
    .btn:active {
        transform: scale(0.98);
    }
`;
document.head.appendChild(style);

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new PremiumWebsite();
});
