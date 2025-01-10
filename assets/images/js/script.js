/*************************************************
  script.js

  1) Adds interactive "Read More" toggles to each project.
  2) You can add more interactive or dynamic features as desired.
**************************************************/

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Grab all the read-more buttons
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    
    readMoreButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        // The associated read-more-content is the next sibling of the button
        const content = btn.nextElementSibling;
        
        if (content.classList.contains('hidden')) {
          content.classList.remove('hidden');
          btn.textContent = 'Show Less';
        } else {
          content.classList.add('hidden');
          btn.textContent = 'Read More';
        }
      });
    });
  });
  