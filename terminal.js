class Terminal {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      typingSpeed: options.typingSpeed || 50,
      cursor: options.cursor || '▋',
      cursorBlink: options.cursorBlink !== undefined ? options.cursorBlink : true,
      lineDelay: options.lineDelay || 500,
      autoStart: options.autoStart !== undefined ? options.autoStart : true
    };
    this.lines = [];
    this.lineIndex = 0;
    this.charIndex = 0;
    this.isTyping = false;
    this.cursorElement = null;
    
    if (this.options.cursorBlink) {
      this.createCursor();
    }
    
    if (this.options.autoStart && this.element) {
      this.startTyping();
    }
  }
  
  createCursor() {
    this.cursorElement = document.createElement('span');
    this.cursorElement.className = 'terminal-cursor';
    this.cursorElement.innerHTML = this.options.cursor;
    this.cursorElement.style.animation = 'blink 1s step-end infinite';
    if (this.element) {
      this.element.appendChild(this.cursorElement);
    }
  }
  
  addLines(lines) {
    this.lines = [...this.lines, ...lines];
    return this;
  }
  
  clearLines() {
    this.lines = [];
    if (this.element) {
      this.element.innerHTML = '';
      if (this.cursorElement) {
        this.element.appendChild(this.cursorElement);
      }
    }
    return this;
  }
  
  startTyping() {
    if (!this.element || this.isTyping || this.lines.length === 0) return;
    
    this.isTyping = true;
    this.typeNextLine();
  }
  
  typeNextLine() {
    if (this.lineIndex >= this.lines.length) {
      this.isTyping = false;
      if (this.options.onComplete) {
        this.options.onComplete();
      }
      return;
    }
    
    const line = this.lines[this.lineIndex];
    let lineElement = document.createElement('div');
    lineElement.className = 'terminal-line';
    
    if (line.class) {
      lineElement.classList.add(line.class);
    }
    
    this.element.insertBefore(lineElement, this.cursorElement);
    
    if (line.instantPrint || !line.typingEffect) {
      lineElement.textContent = line.text;
      this.lineIndex++;
      setTimeout(() => this.typeNextLine(), line.delay || this.options.lineDelay);
    } else {
      this.typeTextInElement(lineElement, line.text, 0, () => {
        this.lineIndex++;
        setTimeout(() => this.typeNextLine(), line.delay || this.options.lineDelay);
      });
    }
  }
  
  typeTextInElement(element, text, index, callback) {
    if (index < text.length) {
      element.textContent = text.slice(0, index + 1);
      setTimeout(() => {
        this.typeTextInElement(element, text, index + 1, callback);
      }, this.options.typingSpeed);
    } else {
      callback();
    }
  }
}

// Demo terminal lines for different features
const demoTerminalLines = {
  emails: [
    { text: '$ sintcrawl --target https://example.com --extract emails', typingEffect: true },
    { text: 'SintCrawl v2.3.1 - OSINT Web Crawler', delay: 800, typingEffect: false },
    { text: '[INFO] Starting scan on https://example.com', delay: 600, typingEffect: false },
    { text: '[STATUS] Crawling website...' },
    { text: '[FOUND] Extracted 12 email addresses:', delay: 1000 },
    { text: '  ➤ info@example.com' },
    { text: '  ➤ support@example.com' },
    { text: '  ➤ john.doe@example.com' },
    { text: '  ➤ careers@example.com' },
    { text: '  ➤ sales@example.com' },
    { text: '  ➤ partners@example.com' },
    { text: '[INFO] Full report saved to "emails_example.com_report.txt"', delay: 800 },
    { text: '$ _', class: 'cursor-line', typingEffect: false }
  ],
  subdomains: [
    { text: '$ sintcrawl --target example.com --find subdomains', typingEffect: true },
    { text: 'SintCrawl v2.3.1 - OSINT Web Crawler', delay: 800, typingEffect: false },
    { text: '[INFO] Starting subdomain enumeration for example.com', delay: 600, typingEffect: false },
    { text: '[STATUS] Checking DNS records...' },
    { text: '[STATUS] Using passive sources...' },
    { text: '[FOUND] Discovered 8 subdomains:', delay: 1000 },
    { text: '  ➤ www.example.com' },
    { text: '  ➤ blog.example.com' },
    { text: '  ➤ shop.example.com' },
    { text: '  ➤ mail.example.com' },
    { text: '  ➤ dev.example.com' },
    { text: '  ➤ api.example.com' },
    { text: '[INFO] Full report saved to "subdomains_example.com_report.txt"', delay: 800 },
    { text: '$ _', class: 'cursor-line', typingEffect: false }
  ],
  links: [
    { text: '$ sintcrawl --target https://example.com --map links', typingEffect: true },
    { text: 'SintCrawl v2.3.1 - OSINT Web Crawler', delay: 800, typingEffect: false },
    { text: '[INFO] Starting link mapping on https://example.com', delay: 600, typingEffect: false },
    { text: '[STATUS] Crawling website structure...' },
    { text: '[STATUS] Following internal links...' },
    { text: '[FOUND] Mapped 42 internal links:', delay: 1000 },
    { text: '  ➤ https://example.com/about' },
    { text: '  ➤ https://example.com/products' },
    { text: '  ➤ https://example.com/services' },
    { text: '  ➤ https://example.com/contact' },
    { text: '  ➤ https://example.com/blog/latest' },
    { text: '[INFO] Link structure visualization saved to "links_map_example.com.html"', delay: 800 },
    { text: '$ _', class: 'cursor-line', typingEffect: false }
  ],
  images: [
    { text: '$ sintcrawl --target https://example.com --gather images', typingEffect: true },
    { text: 'SintCrawl v2.3.1 - OSINT Web Crawler', delay: 800, typingEffect: false },
    { text: '[INFO] Starting image URL extraction on https://example.com', delay: 600, typingEffect: false },
    { text: '[STATUS] Scanning pages for image resources...' },
    { text: '[FOUND] Extracted 25 image URLs:', delay: 1000 },
    { text: '  ➤ https://example.com/images/logo.png' },
    { text: '  ➤ https://example.com/images/banner.jpg' },
    { text: '  ➤ https://example.com/uploads/team/john-doe.jpg' },
    { text: '  ➤ https://example.com/products/product1.png' },
    { text: '  ➤ https://cdn.example.com/assets/hero-image.webp' },
    { text: '[INFO] Image list saved to "images_example.com_list.csv"', delay: 800 },
    { text: '[INFO] Metadata analysis available with --analyze-metadata flag', delay: 500 },
    { text: '$ _', class: 'cursor-line', typingEffect: false }
  ]
};