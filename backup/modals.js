/* ============================================
   Modal System for Service Details
   Interactive Popups with Animations
   ============================================ */

// Modal Content Data
const modalData = {
    'solution-architecture': {
        title: 'Solution Architecture',
        icon: 'fa-project-diagram',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80',
        description: 'Transform your business with enterprise-grade architecture design and implementation strategies.',
        details: [
            {
                title: 'Enterprise Architecture Design',
                content: 'We design scalable, resilient architectures that align with your business objectives. Our approach includes domain-driven design, event-driven architectures, and service-oriented patterns that ensure long-term maintainability and flexibility.'
            },
            {
                title: 'Microservices & Cloud-Native',
                content: 'Build modern applications with microservices architecture, containerization (Docker/Kubernetes), and cloud-native design patterns. We help you break down monoliths and create independently deployable services.'
            },
            {
                title: 'Integration Patterns',
                content: 'Implement robust integration strategies using API gateways, message queues (Kafka, RabbitMQ), event streaming, and enterprise service buses. We ensure seamless data flow across your ecosystem.'
            },
            {
                title: 'Scalability Roadmaps',
                content: 'Plan for growth with comprehensive scalability strategies including horizontal scaling, load balancing, caching strategies (Redis, Memcached), database sharding, and CDN implementation.'
            }
        ],
        benefits: [
            '40% improvement in system performance',
            '60% reduction in deployment time',
            '99.99% uptime reliability',
            'Seamless third-party integrations'
        ],
        technologies: ['AWS', 'Azure', 'Kubernetes', 'Docker', 'Microservices', 'API Gateway', 'Kafka', 'Redis']
    },
    'security-compliance': {
        title: 'Security & Compliance',
        icon: 'fa-shield-alt',
        image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1200&q=80',
        description: 'Protect your business with enterprise-grade security solutions and regulatory compliance frameworks.',
        details: [
            {
                title: 'Security Posture Assessment',
                content: 'Comprehensive security audits including penetration testing, vulnerability assessments, code reviews, and infrastructure security analysis. We identify gaps and provide actionable remediation plans.'
            },
            {
                title: 'Zero-Trust Architecture',
                content: 'Implement modern zero-trust security models with identity-based access control, micro-segmentation, continuous verification, and least-privilege principles. Never trust, always verify.'
            },
            {
                title: 'Compliance Management',
                content: 'Achieve and maintain compliance with HIPAA, PCI-DSS, GDPR, SOC 2, ISO 27001, and other regulatory frameworks. We provide documentation, training, and ongoing compliance monitoring.'
            },
            {
                title: 'Threat Intelligence & Response',
                content: 'Proactive threat detection using SIEM tools, security automation, incident response planning, and 24/7 security operations center (SOC) support.'
            }
        ],
        benefits: [
            '85% reduction in security incidents',
            'Full regulatory compliance',
            'Real-time threat detection',
            'Zero data breach incidents'
        ],
        technologies: ['AWS Security Hub', 'Azure Security Center', 'Splunk', 'CrowdStrike', 'OAuth 2.0', 'SSL/TLS', 'WAF', 'SIEM']
    },
    'devops-transformation': {
        title: 'DevOps Transformation',
        icon: 'fa-sync-alt',
        image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&q=80',
        description: 'Accelerate software delivery with modern DevOps practices and automation.',
        details: [
            {
                title: 'CI/CD Pipeline Implementation',
                content: 'Build automated pipelines with Jenkins, GitLab CI, GitHub Actions, or Azure DevOps. Implement continuous integration, automated testing, security scanning, and continuous deployment to multiple environments.'
            },
            {
                title: 'Infrastructure as Code (IaC)',
                content: 'Manage infrastructure using Terraform, CloudFormation, or Ansible. Version control your infrastructure, enable rapid provisioning, and ensure consistency across environments.'
            },
            {
                title: 'Observability & Monitoring',
                content: 'Implement comprehensive monitoring with Prometheus, Grafana, ELK Stack, and Datadog. Track application performance, infrastructure health, and user experience metrics in real-time.'
            },
            {
                title: 'SRE Practices',
                content: 'Adopt Site Reliability Engineering principles including error budgets, SLIs/SLOs/SLAs, incident management, blameless postmortems, and chaos engineering.'
            }
        ],
        benefits: [
            '10x faster deployment frequency',
            '75% reduction in lead time',
            '60% decrease in failure rate',
            '99.9% service availability'
        ],
        technologies: ['Jenkins', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Prometheus', 'Grafana', 'GitLab CI']
    },
    'cloud-strategy': {
        title: 'Cloud Strategy',
        icon: 'fa-cloud',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80',
        description: 'Maximize cloud ROI with strategic planning, migration, and optimization services.',
        details: [
            {
                title: 'Cloud Adoption Framework',
                content: 'Strategic planning using AWS CAF, Azure WAF, or Google Cloud Adoption Framework. We assess readiness, define governance, create migration roadmaps, and establish best practices.'
            },
            {
                title: 'Multi-Cloud Architecture',
                content: 'Design and implement multi-cloud strategies leveraging AWS, Azure, and GCP. Avoid vendor lock-in, optimize costs, and improve resilience with geographic distribution.'
            },
            {
                title: 'Cost Optimization',
                content: 'Reduce cloud spend by 30-50% through rightsizing, reserved instances, spot instances, auto-scaling, and FinOps practices. Continuous cost monitoring and optimization recommendations.'
            },
            {
                title: 'Cloud Governance',
                content: 'Establish policies, compliance frameworks, security controls, cost management, and operational excellence using AWS Control Tower, Azure Policy, and Google Cloud Organization Policies.'
            }
        ],
        benefits: [
            '45% reduction in cloud costs',
            '3x faster application deployment',
            '99.99% infrastructure uptime',
            'Global reach in 20+ regions'
        ],
        technologies: ['AWS', 'Azure', 'Google Cloud', 'CloudFormation', 'ARM Templates', 'Cloud Cost Management', 'Multi-Cloud']
    },
    'ai-analytics': {
        title: 'AI & Analytics',
        icon: 'fa-robot',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
        description: 'Unlock business insights with artificial intelligence, machine learning, and advanced analytics.',
        details: [
            {
                title: 'Data Platform Engineering',
                content: 'Build modern data platforms with data lakes (S3, ADLS), data warehouses (Snowflake, Redshift), and data pipelines (Apache Airflow, AWS Glue). Enable real-time and batch processing at scale.'
            },
            {
                title: 'MLOps & Model Deployment',
                content: 'Implement end-to-end machine learning operations including model training, versioning, A/B testing, monitoring, and automated retraining. Deploy models with SageMaker, Azure ML, or Vertex AI.'
            },
            {
                title: 'Predictive Analytics',
                content: 'Develop predictive models for forecasting, churn prediction, demand planning, fraud detection, and customer lifetime value. Use statistical analysis, deep learning, and ensemble methods.'
            },
            {
                title: 'Business Intelligence',
                content: 'Create interactive dashboards and reports with Tableau, Power BI, or Looker. Enable self-service analytics, data visualization, and real-time KPI monitoring for data-driven decisions.'
            }
        ],
        benefits: [
            '90% accuracy in predictions',
            '50% improvement in decision speed',
            '3x ROI from AI initiatives',
            'Real-time analytics at scale'
        ],
        technologies: ['Python', 'TensorFlow', 'PyTorch', 'Snowflake', 'AWS SageMaker', 'Power BI', 'Tableau', 'Apache Spark']
    },
    'enterprise-integration': {
        title: 'Enterprise Integration',
        icon: 'fa-network-wired',
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&q=80',
        description: 'Connect your enterprise ecosystem with seamless integration solutions.',
        details: [
            {
                title: 'API-Led Connectivity',
                content: 'Design and implement RESTful APIs, GraphQL, and gRPC services with proper authentication, rate limiting, versioning, and documentation. Build API-first architectures that enable digital transformation.'
            },
            {
                title: 'ESB & Middleware Solutions',
                content: 'Implement enterprise service bus platforms like MuleSoft, WSO2, or IBM Integration Bus. Enable message transformation, routing, orchestration, and protocol mediation.'
            },
            {
                title: 'Event-Driven Architecture',
                content: 'Build real-time, reactive systems using Apache Kafka, AWS EventBridge, or Azure Event Hubs. Implement event sourcing, CQRS, and asynchronous communication patterns.'
            },
            {
                title: 'B2B Integration',
                content: 'Secure partner integrations using EDI, AS2, SFTP, and API management platforms. Implement partner onboarding workflows, data mapping, and transaction monitoring.'
            }
        ],
        benefits: [
            '70% faster integration delivery',
            '99.9% message delivery rate',
            'Real-time data synchronization',
            'Seamless partner connectivity'
        ],
        technologies: ['MuleSoft', 'Apache Kafka', 'REST API', 'GraphQL', 'WSO2', 'Azure Event Hub', 'EDI', 'SFTP']
    }
};

// Initialize Modal System
class ModalSystem {
    constructor() {
        this.overlay = document.getElementById('modalOverlay');
        this.content = document.getElementById('modalContent');
        this.closeBtn = document.getElementById('modalClose');
        
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Close modal on X button
        this.closeBtn.addEventListener('click', () => this.closeModal());
        
        // Close modal on overlay click
        this.overlay.addEventListener('click', (e) => {
            if (e.target === this.overlay) {
                this.closeModal();
            }
        });

        // Close modal on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.overlay.classList.contains('active')) {
                this.closeModal();
            }
        });

        // Add click listeners to all consulting cards
        document.querySelectorAll('[data-modal]').forEach(card => {
            card.addEventListener('click', (e) => {
                const modalId = card.getAttribute('data-modal');
                this.openModal(modalId);
            });
        });
    }

    openModal(modalId) {
        const data = modalData[modalId];
        if (!data) return;

        // Build modal content
        this.content.innerHTML = `
            <div class="modal-hero">
                <img src="${data.image}" alt="${data.title}">
                <div class="modal-hero-overlay">
                    <div class="modal-icon">
                        <i class="fas ${data.icon}"></i>
                    </div>
                    <h2>${data.title}</h2>
                </div>
            </div>

            <div class="modal-body">
                <div class="modal-intro">
                    <p>${data.description}</p>
                </div>

                <div class="modal-details">
                    ${data.details.map((detail, index) => `
                        <div class="detail-section" style="animation-delay: ${index * 0.1}s">
                            <div class="detail-number">${String(index + 1).padStart(2, '0')}</div>
                            <div class="detail-content">
                                <h3>${detail.title}</h3>
                                <p>${detail.content}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <div class="modal-benefits">
                    <h3><i class="fas fa-check-circle"></i> Key Benefits</h3>
                    <div class="benefits-grid">
                        ${data.benefits.map((benefit, index) => `
                            <div class="benefit-item" style="animation-delay: ${index * 0.1 + 0.3}s">
                                <i class="fas fa-arrow-right"></i>
                                <span>${benefit}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="modal-technologies">
                    <h3><i class="fas fa-code"></i> Technologies & Tools</h3>
                    <div class="tech-tags">
                        ${data.technologies.map((tech, index) => `
                            <span class="tech-tag" style="animation-delay: ${index * 0.05 + 0.5}s">${tech}</span>
                        `).join('')}
                    </div>
                </div>

                <div class="modal-cta">
                    <a href="#contact" class="btn btn-primary" onclick="document.getElementById('modalOverlay').classList.remove('active')">
                        <span>Get Started with ${data.title}</span>
                        <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        `;

        // Show modal
        this.overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        this.overlay.classList.remove('active');
        document.body.style.overflow = '';
        
        // Clear content after animation
        setTimeout(() => {
            this.content.innerHTML = '';
        }, 300);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ModalSystem();
});
