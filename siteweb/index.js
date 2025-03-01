// scroll to specific values,
// same as window.scroll() method.
// for scrolling a particular distance, use window.scrollBy().
window.scroll({
    top: 2500, 
    left: 0, 
    behavior: 'smooth' 
  });
  
  // scroll certain amounts from current position 
  window.scrollBy({ 
    top: 200, // negative value acceptable
    left: 10, 
    behavior: 'smooth' 
  });
 document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section.animated');

    sections.forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }, index * 1); // Delay each section by 1s
    });
});