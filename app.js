// Main JavaScript for SintCrawl website

// Language handling
let currentLanguage = 'fr';

// Translate the page based on the current language
function translatePage() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
      // Check if the element is an input value, placeholder, or regular content
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        if (element.getAttribute('placeholder')) {
          element.setAttribute('placeholder', translations[currentLanguage][key]);
        } else {
          element.value = translations[currentLanguage][key];
        }
      } else if (element.tagName === 'OPTION') {
        element.textContent = translations[currentLanguage][key];
      } else {
        element.textContent = translations[currentLanguage][key];
      }
    }
  });

  // Update language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-lang') === currentLanguage) {
      btn.classList.add('active');
    }
  });

  // Update HTML lang attribute
  document.documentElement.setAttribute('lang', currentLanguage);
}

// Handle language switching
document.addEventListener('DOMContentLoaded', () => {
  // Set up language switcher
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      currentLanguage = btn.getAttribute('data-lang');
      translatePage();
    });
  });

  // Set initial translation
  translatePage();

  // Set up mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Close mobile menu if open
        if (navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
        }
      }
    });
  });

  // Initialize hero terminal animation
  const heroTerminalElement = document.querySelector('.hero-terminal .terminal-body');
  if (heroTerminalElement) {
    const initialLines = [
      { text: '$ sintcrawl --target https://example.com', typingEffect: true },
      { text: 'SintCrawl v2.3.1 - OSINT Web Crawler', delay: 1000, typingEffect: false },
      { text: '[STATUS] Scanning target...', class: 'loading', delay: 1000 }
    ];
    
    const heroTerminal = new Terminal(heroTerminalElement, {
      typingSpeed: 70,
      lineDelay: 700
    });
    
    heroTerminal.addLines(initialLines).startTyping();
  }

  // Initialize demo terminal and feature switching
  const demoTerminalElement = document.getElementById('demo-terminal');
  const demoFeatures = document.querySelectorAll('.demo-feature');
  
  if (demoTerminalElement && demoFeatures.length) {
    const demoTerminal = new Terminal(demoTerminalElement, {
      typingSpeed: 40,
      lineDelay: 600,
      autoStart: false
    });
    
    // Start with emails demo
    demoTerminal.addLines(demoTerminalLines.emails).startTyping();
    
    // Set up demo feature switching
    demoFeatures.forEach(feature => {
      feature.addEventListener('click', () => {
        // Update active state
        demoFeatures.forEach(f => f.classList.remove('active'));
        feature.classList.add('active');
        
        // Get demo type
        const demoType = feature.getAttribute('data-demo');
        if (demoType && demoTerminalLines[demoType]) {
          demoTerminal.clearLines().addLines(demoTerminalLines[demoType]).startTyping();
        }
      });
    });
  }

  // Contact form submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simple form validation
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');
      
      if (!nameInput.value || !emailInput.value || !messageInput.value) {
        alert(currentLanguage === 'fr' ? 
          'Veuillez remplir tous les champs obligatoires.' : 
          'Please fill in all required fields.');
        return;
      }
      
      // Normally would send to server, but for demo just show success message
      const formElements = contactForm.elements;
      for (let i = 0; i < formElements.length; i++) {
        if (formElements[i].type !== 'submit') {
          formElements[i].value = '';
        }
      }
      
      alert(currentLanguage === 'fr' ? 
        'Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.' : 
        'Thank you for your message! We will respond to you as soon as possible.');
    });
  }
});

// Add animation for elements when they come into view
function animateOnScroll() {
  const elements = document.querySelectorAll('.feature-card, .case-card, .demo-container, .download-container, .contact-form');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  
  elements.forEach(element => {
    observer.observe(element);
    // Add the base class for animation
    element.classList.add('scroll-animation');
  });
}

// Call animation setup after page load
window.addEventListener('load', animateOnScroll);

// Add CSS for animations dynamically
(function() {
  const style = document.createElement('style');
  style.textContent = `
    .scroll-animation {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    .scroll-animation.animate {
      opacity: 1;
      transform: translateY(0);
    }
    
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
    
    .terminal-cursor {
      animation: blink 1s step-end infinite;
    }
  `;
  document.head.appendChild(style);
})();