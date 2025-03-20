document.addEventListener('DOMContentLoaded', function() {
    // Apply configuration settings
    applyConfigSettings();
    
    // Add smooth scrolling for anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');
    
    for (let anchor of anchors) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Account for header height
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // Function to apply configuration settings from config.js
    function applyConfigSettings() {
        if (!window.SITE_CONFIG) {
            console.error('Configuration not found! Make sure config.js is loaded before script.js');
            return;
        }
        
        const config = window.SITE_CONFIG;
        
        // Set download links
        const downloadBtn = document.querySelector('.btn-download');
        if (downloadBtn) {
            downloadBtn.href = config.downloads.latest.installer;
        }
        
        const allReleasesBtn = document.querySelector('.btn-text');
        if (allReleasesBtn) {
            allReleasesBtn.href = config.downloads.allReleases;
        }
        
        // Set version and release date
        const versionElement = document.querySelector('.download-info h3');
        if (versionElement) {
            versionElement.textContent = `GOONWARE v${config.downloads.latest.version}`;
        }
        
        const releaseDateElement = document.querySelector('.download-info p');
        if (releaseDateElement) {
            releaseDateElement.textContent = `Released: ${config.downloads.latest.releaseDate}`;
        }
        
        // Set repository links
        const footerLinks = document.querySelectorAll('.footer-links a');
        if (footerLinks.length >= 3) {
            footerLinks[0].href = config.repository.main;
            footerLinks[1].href = config.repository.issues;
            footerLinks[2].href = config.repository.wiki;
        }
    }
    
    // Add animation for cards on scroll
    const animateOnScroll = function() {
        const cards = document.querySelectorAll('.feature-card, .usage-card, .requirement-item');
        const sections = document.querySelectorAll('.section-title');
        
        // Add stagger delay based on index
        cards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardTop < windowHeight - 100) {
                // Adding delay based on card position
                setTimeout(() => {
                    card.classList.add('animate');
                }, 100 * (index % 3)); // Staggered delay for each column
            }
        });
        
        // Animate section titles
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight - 50) {
                section.classList.add('animate-title');
            }
        });
    };
    
    // Add animate class to CSS
    const style = document.createElement('style');
    style.textContent = `
        .feature-card, .usage-card, .requirement-item {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .feature-card.animate, .usage-card.animate, .requirement-item.animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        .section-title {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.8s ease, transform 0.8s ease;
            position: relative;
        }
        
        .section-title.animate-title {
            opacity: 1;
            transform: translateY(0);
        }
        
        .section-title::after {
            transform: scaleX(0);
            transition: transform 1s ease;
            transform-origin: left;
        }
        
        .section-title.animate-title::after {
            transform: scaleX(1);
        }
        
        /* Advanced hover effects for cards */
        .feature-card, .usage-card {
            transition: transform 0.4s ease, box-shadow 0.4s ease, background-color 0.3s ease;
        }
        
        .feature-card:hover, .usage-card:hover {
            background-color: rgba(26, 26, 40, 0.95);
        }
        
        /* Shiny border effect on hover */
        .download-card {
            position: relative;
            overflow: hidden;
        }
        
        .download-card::after {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(
                to bottom right,
                rgba(255, 255, 255, 0) 0%,
                rgba(255, 255, 255, 0) 40%,
                rgba(255, 255, 255, 0.1) 50%,
                rgba(255, 255, 255, 0) 60%,
                rgba(255, 255, 255, 0) 100%
            );
            transform: rotate(45deg);
            transition: transform 0.5s ease;
            z-index: 1;
            pointer-events: none;
        }
        
        .download-card:hover::after {
            transform: rotate(45deg) translate(100%, 100%);
        }
    `;
    
    document.head.appendChild(style);
    
    // Run animation on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Run once on page load
    animateOnScroll();
    
    // Add hover effect to download buttons
    const downloadButtons = document.querySelectorAll('.btn-download');
    
    downloadButtons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.boxShadow = '0 15px 30px rgba(166, 77, 255, 0.5)';
            this.style.transform = 'translateY(-5px)';
            
            // Add sparkle effect
            const sparkleCount = 5;
            for (let i = 0; i < sparkleCount; i++) {
                createSparkle(this);
            }
        });
        
        button.addEventListener('mouseout', function() {
            this.style.boxShadow = '';
            this.style.transform = '';
        });
    });
    
    // Add pulsing effect to primary CTA
    const primaryCta = document.querySelector('.hero .btn-primary');
    
    if (primaryCta) {
        const pulseCta = function() {
            primaryCta.classList.add('pulse');
            
            setTimeout(() => {
                primaryCta.classList.remove('pulse');
            }, 1000);
        };
        
        // Add pulse class to CSS
        const pulseStyle = document.createElement('style');
        pulseStyle.textContent = `
            @keyframes pulse {
                0% {
                    box-shadow: 0 0 0 0 rgba(166, 77, 255, 0.7);
                }
                70% {
                    box-shadow: 0 0 0 15px rgba(166, 77, 255, 0);
                }
                100% {
                    box-shadow: 0 0 0 0 rgba(166, 77, 255, 0);
                }
            }
            
            .btn-primary.pulse {
                animation: pulse 1.5s;
            }
            
            /* Add particle effects */
            .hero {
                position: relative;
                overflow: hidden;
            }
            
            .particle {
                position: absolute;
                border-radius: 50%;
                background: rgba(166, 77, 255, 0.2);
                pointer-events: none;
                z-index: 0;
            }
        `;
        
        document.head.appendChild(pulseStyle);
        
        // Pulse every 5 seconds
        setInterval(pulseCta, 5000);
        
        // Initial pulse after 2 seconds
        setTimeout(pulseCta, 2000);
    }
    
    // Add particle effect to hero
    const createParticles = function() {
        const hero = document.querySelector('.hero');
        
        if (!hero) return;
        
        const particleCount = 18;
        
        for (let i = 0; i < particleCount; i++) {
            createParticle(hero);
        }
    };
    
    const createParticle = function(parent) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Random size (px)
        const size = Math.floor(Math.random() * 80) + 40;
        
        // Random opacity
        const opacity = Math.random() * 0.1 + 0.05;
        
        // Random animation duration
        const duration = Math.random() * 20 + 10;
        
        // Set styles
        particle.style.left = x + '%';
        particle.style.top = y + '%';
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.opacity = opacity;
        particle.style.animation = `floatParticle ${duration}s infinite alternate ease-in-out`;
        
        // Set random animation delay
        particle.style.animationDelay = (Math.random() * 5) + 's';
        
        // Add keyframes for the particle
        const keyframes = `
            @keyframes floatParticle {
                0% {
                    transform: translate(0, 0);
                }
                100% {
                    transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
                }
            }
        `;
        
        const styleElement = document.createElement('style');
        styleElement.textContent = keyframes;
        document.head.appendChild(styleElement);
        
        // Add to parent
        parent.appendChild(particle);
    };
    
    // Run particles on load
    createParticles();
    
    // Create sparkle effect
    const createSparkle = function(element) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        
        // Random position around the button
        const offsetX = (Math.random() - 0.5) * element.offsetWidth * 1.5;
        const offsetY = (Math.random() - 0.5) * element.offsetHeight * 1.5;
        
        // Random size
        const size = Math.random() * 10 + 5;
        
        // Position sparkle
        sparkle.style.width = size + 'px';
        sparkle.style.height = size + 'px';
        sparkle.style.position = 'absolute';
        sparkle.style.borderRadius = '50%';
        sparkle.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        sparkle.style.boxShadow = '0 0 10px 2px rgba(166, 77, 255, 0.8)';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '10';
        
        // Use element's position as reference
        const rect = element.getBoundingClientRect();
        const x = rect.left + rect.width / 2 + offsetX;
        const y = rect.top + rect.height / 2 + offsetY;
        
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        
        // Animate
        sparkle.animate([
            { 
                transform: 'scale(0) rotate(0deg)',
                opacity: 0 
            },
            { 
                transform: 'scale(1) rotate(180deg)',
                opacity: 1,
                offset: 0.5 
            },
            { 
                transform: 'scale(0) rotate(360deg)',
                opacity: 0 
            }
        ], {
            duration: 1000,
            easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)'
        });
        
        // Add to document
        document.body.appendChild(sparkle);
        
        // Remove after animation
        setTimeout(() => {
            document.body.removeChild(sparkle);
        }, 1000);
    };
}); 