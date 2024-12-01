
// Smooth scrolling for navigation
document.querySelector('.see-portfolio').addEventListener('click', () => {
  document.querySelector('.portfolio').scrollIntoView({ behavior: 'smooth' });
});

// Smooth scrolling for navigation for get in touch
document.querySelector('.get-in-touch').addEventListener('click', () => {
  document.querySelector('.contact').scrollIntoView({ behavior: 'smooth' });
});

// Button hover effects
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('mouseenter', () => {
      button.style.opacity = '0.7';
  });
  button.addEventListener('mouseleave', () => {
      button.style.opacity = '1';
  });
});


// Project details button animation
const projectButtons = document.querySelectorAll('.project-details');
projectButtons.forEach(button => {
  button.addEventListener('mouseenter', () => {
      button.querySelector('span').style.transform = 'translateX(5px)';
  });
  button.addEventListener('mouseleave', () => {
      button.querySelector('span').style.transform = 'translateX(0)';
  });
});

// redirect project details into project layer
const pindahproject1 = document.querySelector('#project-1'); // Replace 'div' with the ID or class of your actual div element

pindahproject1.addEventListener('click', function() {
  window.location.href = './html/project.html'; // Replace 'https://www.example.com' with the URL of your desired page
});

// Scroll Reveal Animation
document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll(
    '.header, .capabilities, .capability-card, .portfolio, .project-card, .contact, .hero, .data-acquisition, .data-cleaning, .data-visualization, .hiring'
  );

  const revealOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-active');
        observer.unobserve(entry.target);
      }
    });
  }, revealOptions);

  // Add initial CSS for reveal effect
  const styleTag = document.createElement('style');
  styleTag.textContent = `
    .header, 
    .capabilities, 
    .capability-card, 
    .portfolio, 
    .project-card, 
    .contact, .hero, .data-acquisition, .data-cleaning, .data-visualization, .hiring {
      opacity: 0;
      transform: translateY(50px);
      transition: opacity 0.8s ease, transform 0.8s ease;
    }

    .reveal-active {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(styleTag);

  // Observe elements
  revealElements.forEach(element => {
    revealOnScroll.observe(element);
  });
});
