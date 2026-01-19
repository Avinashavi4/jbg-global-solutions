/* ============================================
   JBG AI ASSISTANT CHATBOT
   SEO-Optimized Conversational AI
   ============================================ */

// JBG Global Solutions Knowledge Base
const JBG_KNOWLEDGE = {
    company: {
        name: "JBG Global Solutions Pvt Ltd",
        tagline: "Transforming Businesses Through Technology & Innovation",
        description: "JBG Global Solutions is a global transformation partner delivering innovative solutions across IT, AI & Quantum AI, Digital Marketing, Non-IT Services, and Interior Infrastructure Development.",
        founded: "A fast-growing multi-domain service organization",
        mission: "To accelerate growth, optimize operations, and build future-ready ecosystems for organizations worldwide."
    },
    services: {
        it: {
            name: "Technology & Automation",
            items: ["AI & Machine Learning", "Quantum AI Solutions", "Cloud Computing", "DevOps & CI/CD", "Custom Software Development", "Mobile App Development", "Web Development", "Cybersecurity", "Data Analytics", "IoT Solutions"]
        },
        digital: {
            name: "Digital Marketing",
            items: ["SEO Optimization", "Social Media Marketing", "Content Marketing", "PPC Advertising", "Email Marketing", "Brand Strategy", "Influencer Marketing", "Analytics & Reporting"]
        },
        nonit: {
            name: "Non-IT Services",
            items: ["Business Process Outsourcing", "HR Solutions", "Recruitment Services", "Payroll Management", "Training & Development", "Compliance Services"]
        },
        infrastructure: {
            name: "Interior Infrastructure Development",
            items: ["Office Interior Design", "Commercial Space Planning", "Retail Store Design", "Hospitality Interiors", "Industrial Facility Design", "Smart Building Solutions"]
        }
    },
    contact: {
        email: "Admin@jbgglobal.com",
        phone: "+91 9063034557",
        address: "1-112/26/S/301, SUNVALLY Apartment, Kondapur, Serilingampally, K.V.Rangareddy- 500084, Telangana",
        hours: "Monday - Friday: 9:00 AM - 6:00 PM IST"
    },
    stats: {
        clients: "500+",
        countries: "15+",
        support: "24/7",
        experience: "Years of Excellence"
    }
};

// Chatbot Responses Database
const RESPONSES = {
    greetings: [
        "Hello! 👋 Welcome to JBG Global Solutions! I'm your AI assistant. How can I help you today?",
        "Hi there! 🌟 I'm the JBG AI Assistant. I'm here to help you learn about our services and solutions. What would you like to know?",
        "Welcome! 🚀 I'm here to assist you with any questions about JBG Global Solutions. How can I help?"
    ],
    
    services_general: `We offer comprehensive services across 4 major domains:

🖥️ **Technology & Automation** - AI, Cloud, DevOps, Custom Software
📱 **Digital Marketing** - SEO, Social Media, PPC, Content Strategy
👥 **Non-IT Services** - BPO, HR Solutions, Recruitment
🏢 **Infrastructure Development** - Office Interiors, Commercial Spaces

Which area interests you the most?`,

    it_services: `Our **Technology & Automation** services include:

🤖 AI & Machine Learning Solutions
⚛️ Quantum AI Development
☁️ Cloud Computing (AWS, Azure, GCP)
🔄 DevOps & CI/CD Implementation
💻 Custom Software Development
📱 Mobile App Development (iOS/Android)
🌐 Web Development
🔐 Cybersecurity Solutions
📊 Data Analytics & BI
🌐 IoT Solutions

Would you like more details on any specific service?`,

    digital_marketing: `Our **Digital Marketing** services include:

🔍 SEO Optimization - Rank higher on search engines
📱 Social Media Marketing - Build your brand presence
✍️ Content Marketing - Engaging content strategy
💰 PPC Advertising - Google Ads, Social Ads
📧 Email Marketing - Targeted campaigns
🎯 Brand Strategy - Complete brand identity
📈 Analytics & Reporting - Data-driven insights

Ready to grow your digital presence?`,

    non_it: `Our **Non-IT Services** include:

📋 Business Process Outsourcing (BPO)
👥 HR Solutions & Management
🔍 Recruitment & Staffing Services
💵 Payroll Management
📚 Training & Development Programs
✅ Compliance Services

Let us handle your operations while you focus on growth!`,

    infrastructure: `Our **Interior Infrastructure Development** services:

🏢 Office Interior Design
🏪 Commercial Space Planning
🛍️ Retail Store Design
🏨 Hospitality Interiors
🏭 Industrial Facility Design
🏠 Smart Building Solutions

We create spaces that inspire productivity and innovation!`,

    ai_quantum: `Our **AI & Quantum AI Solutions** are cutting-edge:

🧠 **Artificial Intelligence**
- Machine Learning Models
- Natural Language Processing
- Computer Vision
- Predictive Analytics
- AI-Powered Automation

⚛️ **Quantum AI**
- Quantum Computing Integration
- Quantum Machine Learning
- Optimization Algorithms
- Quantum Cryptography

We're building the future of intelligent systems!`,

    contact_info: `📞 **Get in Touch with Us:**

📧 Email: Admin@jbgglobal.com
📱 Phone: +91 9063034557
📍 Address: 1-112/26/S/301, SUNVALLY Apartment, Kondapur, Serilingampally, K.V.Rangareddy- 500084, Telangana
⏰ Hours: Monday - Friday, 9 AM - 6 PM IST

You can also visit our <a href="contact.html">Contact Page</a> to send us a message directly!`,

    about_company: `**About JBG Global Solutions**

🌍 We are a **global transformation partner** delivering innovative solutions across multiple domains.

🎯 **Our Mission:** To accelerate growth, optimize operations, and build future-ready ecosystems.

✨ **Why Choose Us:**
• 500+ Global Clients
• Presence in 15+ Countries
• 24/7 Support Available
• Expert Team of Professionals

Visit our <a href="about.html">About Page</a> to learn more!`,

    careers: `🚀 **Join Our Team at JBG Global Solutions!**

We're always looking for talented individuals to join our growing team.

💼 **Current Openings:**
- Software Developers
- AI/ML Engineers
- Digital Marketing Specialists
- UI/UX Designers
- Business Analysts
- Project Managers

📝 **Benefits:**
- Competitive Salary
- Remote Work Options
- Learning & Development
- Health Benefits
- Growth Opportunities

Visit our <a href="careers.html">Careers Page</a> to explore opportunities!`,

    pricing: `💰 **Pricing & Engagement Models**

We offer flexible engagement models:

📋 **Project-Based** - Fixed cost for defined scope
⏰ **Time & Material** - Pay for actual effort
👥 **Dedicated Team** - Your extended team
🔄 **Retainer Model** - Ongoing support & maintenance

For a custom quote, please <a href="contact.html">contact our team</a> with your requirements. We'll provide a detailed proposal within 24-48 hours!`,

    support: `🛠️ **24/7 Support Available**

We provide round-the-clock support for our clients:

📧 Email Support: Admin@jbgglobal.com
📱 Phone: +91 9063034557
💬 Live Chat: Available on our website
🎫 Ticket System: Track your requests

Our average response time is under 2 hours!`,

    fallback: [
        "I'd be happy to help you learn more about JBG Global Solutions! Could you please rephrase your question or choose from the options below?",
        "I'm not quite sure I understood that. Could you try asking in a different way? Or select one of the quick options below!",
        "Let me help you better! Please choose a topic or ask specifically about our services, products, or company."
    ]
};

// Quick Reply Options
const QUICK_REPLIES = {
    initial: [
        { text: "Our Services", action: "services" },
        { text: "About JBG", action: "about" },
        { text: "Contact Us", action: "contact" },
        { text: "Careers", action: "careers" }
    ],
    services: [
        { text: "IT & Technology", action: "it_services" },
        { text: "Digital Marketing", action: "digital_marketing" },
        { text: "Non-IT Services", action: "non_it" },
        { text: "Infrastructure", action: "infrastructure" }
    ],
    after_service: [
        { text: "Get a Quote", action: "pricing" },
        { text: "Contact Sales", action: "contact" },
        { text: "Other Services", action: "services" }
    ]
};

class JBGChatbot {
    constructor() {
        this.isOpen = false;
        this.messages = [];
        this.init();
    }

    init() {
        this.createChatWidget();
        this.attachEventListeners();
        this.showWelcomeMessage();
    }

    createChatWidget() {
        const chatHTML = `
            <div class="jbg-chatbot" id="jbgChatbot">
                <button class="chat-toggle" id="chatToggle" aria-label="Open chat">
                    <i class="fas fa-comments"></i>
                    <span class="chat-badge">1</span>
                </button>
                
                <div class="chat-window" id="chatWindow">
                    <div class="chat-header">
                        <div class="chat-avatar">
                            <i class="fas fa-robot"></i>
                        </div>
                        <div class="chat-info">
                            <h4>JBG AI Assistant</h4>
                            <span>🟢 Online | Typically replies instantly</span>
                        </div>
                        <button class="chat-close" id="chatClose" aria-label="Close chat">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    
                    <div class="chat-messages" id="chatMessages">
                        <!-- Messages will be inserted here -->
                    </div>
                    
                    <div class="chat-input-container">
                        <div class="chat-input-wrapper">
                            <input type="text" class="chat-input" id="chatInput" 
                                   placeholder="Type your message..." 
                                   autocomplete="off">
                            <button class="chat-send" id="chatSend" aria-label="Send message">
                                <i class="fas fa-paper-plane"></i>
                            </button>
                        </div>
                    </div>
                    
                    <div class="chat-powered">
                        Powered by <a href="index.html">JBG Global Solutions</a>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', chatHTML);
        
        this.chatbot = document.getElementById('jbgChatbot');
        this.toggle = document.getElementById('chatToggle');
        this.window = document.getElementById('chatWindow');
        this.messagesContainer = document.getElementById('chatMessages');
        this.input = document.getElementById('chatInput');
        this.sendBtn = document.getElementById('chatSend');
        this.closeBtn = document.getElementById('chatClose');
        this.badge = document.querySelector('.chat-badge');
    }

    attachEventListeners() {
        this.toggle.addEventListener('click', () => this.toggleChat());
        this.closeBtn.addEventListener('click', () => this.closeChat());
        this.sendBtn.addEventListener('click', () => this.sendMessage());
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
        
        // Close on outside click
        document.addEventListener('click', (e) => {
            if (this.isOpen && !this.chatbot.contains(e.target)) {
                // Optional: close on outside click
            }
        });
    }

    toggleChat() {
        this.isOpen = !this.isOpen;
        this.window.classList.toggle('active', this.isOpen);
        this.toggle.classList.toggle('active', this.isOpen);
        
        if (this.isOpen) {
            this.badge.style.display = 'none';
            this.input.focus();
        }
    }

    closeChat() {
        this.isOpen = false;
        this.window.classList.remove('active');
        this.toggle.classList.remove('active');
    }

    showWelcomeMessage() {
        setTimeout(() => {
            const greeting = RESPONSES.greetings[Math.floor(Math.random() * RESPONSES.greetings.length)];
            this.addBotMessage(greeting, QUICK_REPLIES.initial);
        }, 500);
    }

    sendMessage() {
        const text = this.input.value.trim();
        if (!text) return;

        this.addUserMessage(text);
        this.input.value = '';
        
        this.showTypingIndicator();
        
        setTimeout(() => {
            this.hideTypingIndicator();
            this.processMessage(text);
        }, 1000 + Math.random() * 500);
    }

    addUserMessage(text) {
        const time = this.getCurrentTime();
        const messageHTML = `
            <div class="message user">
                <div class="message-content">
                    <div class="message-bubble">${this.escapeHTML(text)}</div>
                    <div class="message-time">${time}</div>
                </div>
                <div class="message-avatar">
                    <i class="fas fa-user"></i>
                </div>
            </div>
        `;
        this.messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
        this.scrollToBottom();
    }

    addBotMessage(text, quickReplies = null) {
        const time = this.getCurrentTime();
        let quickRepliesHTML = '';
        
        if (quickReplies) {
            quickRepliesHTML = `
                <div class="quick-replies">
                    ${quickReplies.map(qr => 
                        `<button class="quick-reply" data-action="${qr.action}">${qr.text}</button>`
                    ).join('')}
                </div>
            `;
        }
        
        const messageHTML = `
            <div class="message bot">
                <div class="message-avatar">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="message-content">
                    <div class="message-bubble">${this.formatMessage(text)}</div>
                    ${quickRepliesHTML}
                    <div class="message-time">${time}</div>
                </div>
            </div>
        `;
        this.messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
        
        // Attach quick reply listeners
        if (quickReplies) {
            const buttons = this.messagesContainer.querySelectorAll('.quick-reply:not([data-attached])');
            buttons.forEach(btn => {
                btn.setAttribute('data-attached', 'true');
                btn.addEventListener('click', () => {
                    const action = btn.getAttribute('data-action');
                    this.handleQuickReply(action, btn.textContent);
                });
            });
        }
        
        this.scrollToBottom();
    }

    showTypingIndicator() {
        const typingHTML = `
            <div class="typing-indicator" id="typingIndicator">
                <div class="message-avatar">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        this.messagesContainer.insertAdjacentHTML('beforeend', typingHTML);
        this.scrollToBottom();
    }

    hideTypingIndicator() {
        const typing = document.getElementById('typingIndicator');
        if (typing) typing.remove();
    }

    processMessage(text) {
        const lowerText = text.toLowerCase();
        let response = '';
        let quickReplies = null;

        // Greeting patterns
        if (this.matchesPattern(lowerText, ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'])) {
            response = RESPONSES.greetings[Math.floor(Math.random() * RESPONSES.greetings.length)];
            quickReplies = QUICK_REPLIES.initial;
        }
        // Services patterns
        else if (this.matchesPattern(lowerText, ['service', 'services', 'what do you do', 'what you offer', 'offerings', 'solutions'])) {
            response = RESPONSES.services_general;
            quickReplies = QUICK_REPLIES.services;
        }
        // IT Services
        else if (this.matchesPattern(lowerText, ['it service', 'technology', 'software', 'development', 'tech', 'automation', 'cloud', 'devops'])) {
            response = RESPONSES.it_services;
            quickReplies = QUICK_REPLIES.after_service;
        }
        // AI & Quantum
        else if (this.matchesPattern(lowerText, ['ai', 'artificial intelligence', 'machine learning', 'ml', 'quantum', 'deep learning'])) {
            response = RESPONSES.ai_quantum;
            quickReplies = QUICK_REPLIES.after_service;
        }
        // Digital Marketing
        else if (this.matchesPattern(lowerText, ['digital', 'marketing', 'seo', 'social media', 'advertising', 'ppc', 'content'])) {
            response = RESPONSES.digital_marketing;
            quickReplies = QUICK_REPLIES.after_service;
        }
        // Non-IT
        else if (this.matchesPattern(lowerText, ['non-it', 'non it', 'bpo', 'hr', 'human resource', 'recruitment', 'payroll', 'outsourcing'])) {
            response = RESPONSES.non_it;
            quickReplies = QUICK_REPLIES.after_service;
        }
        // Infrastructure
        else if (this.matchesPattern(lowerText, ['infrastructure', 'interior', 'office', 'design', 'construction', 'building', 'space'])) {
            response = RESPONSES.infrastructure;
            quickReplies = QUICK_REPLIES.after_service;
        }
        // Contact
        else if (this.matchesPattern(lowerText, ['contact', 'reach', 'phone', 'email', 'call', 'talk', 'connect', 'touch'])) {
            response = RESPONSES.contact_info;
        }
        // About
        else if (this.matchesPattern(lowerText, ['about', 'company', 'who are you', 'jbg', 'organization', 'tell me about'])) {
            response = RESPONSES.about_company;
            quickReplies = QUICK_REPLIES.initial;
        }
        // Careers
        else if (this.matchesPattern(lowerText, ['career', 'job', 'jobs', 'hiring', 'work', 'join', 'vacancy', 'opening', 'position'])) {
            response = RESPONSES.careers;
        }
        // Pricing
        else if (this.matchesPattern(lowerText, ['price', 'pricing', 'cost', 'quote', 'budget', 'rate', 'charge', 'fee'])) {
            response = RESPONSES.pricing;
        }
        // Support
        else if (this.matchesPattern(lowerText, ['support', 'help', 'issue', 'problem', 'assist', 'ticket'])) {
            response = RESPONSES.support;
        }
        // Thank you
        else if (this.matchesPattern(lowerText, ['thank', 'thanks', 'appreciate', 'helpful'])) {
            response = "You're welcome! 😊 Is there anything else I can help you with?";
            quickReplies = QUICK_REPLIES.initial;
        }
        // Bye
        else if (this.matchesPattern(lowerText, ['bye', 'goodbye', 'see you', 'later'])) {
            response = "Thank you for chatting with JBG Global Solutions! 👋 Have a great day! Feel free to come back anytime.";
        }
        // Fallback
        else {
            response = RESPONSES.fallback[Math.floor(Math.random() * RESPONSES.fallback.length)];
            quickReplies = QUICK_REPLIES.initial;
        }

        this.addBotMessage(response, quickReplies);
    }

    handleQuickReply(action, text) {
        // Add user message for the quick reply
        this.addUserMessage(text);
        
        this.showTypingIndicator();
        
        setTimeout(() => {
            this.hideTypingIndicator();
            
            let response = '';
            let quickReplies = null;
            
            switch(action) {
                case 'services':
                    response = RESPONSES.services_general;
                    quickReplies = QUICK_REPLIES.services;
                    break;
                case 'it_services':
                    response = RESPONSES.it_services;
                    quickReplies = QUICK_REPLIES.after_service;
                    break;
                case 'digital_marketing':
                    response = RESPONSES.digital_marketing;
                    quickReplies = QUICK_REPLIES.after_service;
                    break;
                case 'non_it':
                    response = RESPONSES.non_it;
                    quickReplies = QUICK_REPLIES.after_service;
                    break;
                case 'infrastructure':
                    response = RESPONSES.infrastructure;
                    quickReplies = QUICK_REPLIES.after_service;
                    break;
                case 'about':
                    response = RESPONSES.about_company;
                    quickReplies = QUICK_REPLIES.initial;
                    break;
                case 'contact':
                    response = RESPONSES.contact_info;
                    break;
                case 'careers':
                    response = RESPONSES.careers;
                    break;
                case 'pricing':
                    response = RESPONSES.pricing;
                    break;
                default:
                    response = RESPONSES.services_general;
                    quickReplies = QUICK_REPLIES.services;
            }
            
            this.addBotMessage(response, quickReplies);
        }, 800);
    }

    matchesPattern(text, patterns) {
        return patterns.some(pattern => text.includes(pattern));
    }

    formatMessage(text) {
        // Convert markdown-style bold to HTML
        text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        // Convert newlines to <br>
        text = text.replace(/\n/g, '<br>');
        return text;
    }

    escapeHTML(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    getCurrentTime() {
        return new Date().toLocaleTimeString('en-US', { 
            hour: 'numeric', 
            minute: '2-digit',
            hour12: true 
        });
    }

    scrollToBottom() {
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }
}

// Initialize chatbot when DOM is ready
function initChatbot() {
    if (!window.jbgChatbot) {
        window.jbgChatbot = new JBGChatbot();
        console.log('JBG Chatbot initialized successfully');
    }
}

// Multiple initialization methods to ensure it loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChatbot);
} else {
    // DOM already loaded
    initChatbot();
}

// Also try on window load as backup
window.addEventListener('load', initChatbot);

// SEO-friendly structured data for the chatbot
const chatbotSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "JBG AI Assistant",
    "description": "AI-powered chatbot assistant for JBG Global Solutions - helping visitors learn about IT services, digital marketing, infrastructure development and more.",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
    },
    "provider": {
        "@type": "Organization",
        "name": "JBG Global Solutions Pvt Ltd"
    }
};

// Add schema to page
const schemaScript = document.createElement('script');
schemaScript.type = 'application/ld+json';
schemaScript.text = JSON.stringify(chatbotSchema);
document.head.appendChild(schemaScript);
