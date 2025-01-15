document.addEventListener('DOMContentLoaded', () => {
  // Toggle "Read More" sections for project cards
  const readMoreButtons = document.querySelectorAll('.read-more-btn');

  readMoreButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
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
