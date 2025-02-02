document.addEventListener('DOMContentLoaded', () => {
    // Typing Effect
    const text = "Hi, I'm Arpan";
    const typingElement = document.querySelector('.typing-text');
    let index = 0;
    
    function typeText() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 100); // Adjust typing speed here (milliseconds)
        }
    }
    
    // Start typing effect
    typeText();

    // Existing code...
    // Burger Menu Toggle (Mobile)
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
    }

    // Smooth Scrolling
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                navMenu.classList.remove('show');
                window.scrollTo({
                    top: targetSection.offsetTop - 60,
                    behavior: 'smooth',
                });
            }
        });
    });

    // Read More toggles in Projects
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    toggleBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const details = btn.nextElementSibling;
            if (details.classList.contains('hidden')) {
                details.classList.remove('hidden');
                btn.textContent = 'Show Less';
            } else {
                details.classList.add('hidden');
                btn.textContent = 'Read More';
            }
        });
    });

    // Back to Top button
    const backToTop = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 600) {
            backToTop.style.display = 'inline-block';
        } else {
            backToTop.style.display = 'none';
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });
});