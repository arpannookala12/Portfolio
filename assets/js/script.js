// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Burger Menu Toggle (Mobile)
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
  
    if (navToggle) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
      });
    }
  
    // Smooth Scrolling (optional)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          // close menu on mobile
          navMenu.classList.remove('show');
  
          // smooth scroll
          window.scrollTo({
            top: targetSection.offsetTop - 60, // offset for sticky header
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
      // Show the button if scrollY > 600
      if (window.scrollY > 600) {
        backToTop.style.display = 'inline-block';
      } else {
        backToTop.style.display = 'none';
      }
    });
  
    // Click event for back-to-top
    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  });
  