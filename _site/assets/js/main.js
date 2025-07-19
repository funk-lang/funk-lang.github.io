// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll effect to navbar
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Enhanced Funk syntax highlighting - simple approach
    enhanceFunkSyntaxHighlighting();
});

function enhanceFunkSyntaxHighlighting() {
    // Simple, targeted approach for the Monad example
    const codeBlocks = document.querySelectorAll('code.language-funk');
    
    codeBlocks.forEach(codeBlock => {
        if (codeBlock.dataset.highlighted) return;
        codeBlock.dataset.highlighted = 'true';
        
        // Get the text content and clean it
        let text = codeBlock.textContent.trim();
        
        // If we detect duplication, take only the first instance
        if (text.split('trait Monad').length > 2) {
            const parts = text.split('trait Monad');
            text = 'trait Monad' + parts[1].split('trait Monad')[0];
        }
        
        // Apply simple highlighting using replace
        let highlighted = text
            // Keywords
            .replace(/\b(trait|let|forall)\b/g, '<span class="funk-keyword">$1</span>')
            // Type annotations
            .replace(/::/g, '<span class="funk-type-annotation">::</span>')
            // Arrows
            .replace(/->/g, '<span class="funk-arrow">-></span>')
            // Type constructors (capitalized words)
            .replace(/\b([A-Z][a-zA-Z]*)\b/g, '<span class="funk-type-constructor">$1</span>')
            // Special symbols
            .replace(/#([a-zA-Z]+)/g, '<span class="funk-special-symbol">#$1</span>')
            // Parentheses with colors
            .replace(/\(/g, '<span class="funk-rainbow-bracket-1">(</span>')
            .replace(/\)/g, '<span class="funk-rainbow-bracket-1">)</span>')
            .replace(/\{/g, '<span class="funk-rainbow-bracket-2">{</span>')
            .replace(/\}/g, '<span class="funk-rainbow-bracket-2">}</span>');
        
        codeBlock.innerHTML = highlighted;
    });
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
