const menuLink = document.querySelectorAll('a[href^="#"]');

menuLink.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.gallery-item, .contact-card, .hero-card').forEach((section) => {
  observer.observe(section);
});

