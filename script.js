const initializeHeroAnimation = () => {
  const heroTitle = document.querySelector('.hero-title');
  if (!heroTitle) return;

  const rawText = heroTitle.textContent.trim();
  heroTitle.innerHTML = rawText
    .split('')
    .map((char) => {
      if (char === ' ') {
        return "<span class=\"letter spacer\">&nbsp;</span>";
      }
      return `<span class="letter">${char}</span>`;
    })
    .join('');

  const letters = heroTitle.querySelectorAll('.letter');

  anime.timeline({ loop: false })
    .add({
      targets: '.eyebrow',
      opacity: [0, 1],
      translateY: [16, 0],
      easing: 'easeOutExpo',
      duration: 600
    })
    .add({
      targets: letters,
      opacity: [0, 1],
      translateY: [60, 0],
      easing: 'easeOutExpo',
      duration: 900,
      delay: anime.stagger(35)
    }, '-=200')
    .add({
      targets: '.hero-copy',
      opacity: [0, 1],
      translateY: [28, 0],
      easing: 'easeOutExpo',
      duration: 700
    }, '-=400')
    .add({
      targets: '.hero-actions .cta',
      opacity: [0, 1],
      translateY: [24, 0],
      easing: 'easeOutExpo',
      duration: 700,
      delay: anime.stagger(120)
    }, '-=500')
    .add({
      targets: '.meta-card',
      opacity: [0, 1],
      translateY: [30, 0],
      easing: 'easeOutExpo',
      duration: 800,
      delay: anime.stagger(120)
    }, '-=400');
};

const animateBackground = () => {
  anime({
    targets: '.orb-1',
    translateX: [0, 60],
    translateY: [0, -60],
    scale: [1, 1.1],
    easing: 'easeInOutSine',
    duration: 9000,
    direction: 'alternate',
    loop: true
  });

  anime({
    targets: '.orb-2',
    translateX: [0, -80],
    translateY: [0, 70],
    scale: [1, 1.08],
    easing: 'easeInOutQuad',
    duration: 12000,
    direction: 'alternate',
    loop: true
  });

  anime({
    targets: '.orb-3',
    translateX: [0, 40],
    translateY: [0, -40],
    scale: [1, 1.15],
    easing: 'easeInOutSine',
    duration: 10000,
    direction: 'alternate',
    loop: true
  });

  anime({
    targets: '.grid-overlay',
    opacity: [0.15, 0.25],
    easing: 'easeInOutSine',
    duration: 6000,
    direction: 'alternate',
    loop: true
  });
};

const animateSlots = () => {
  const slots = document.querySelectorAll('.slot');
  if (!slots.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          anime({
            targets: entry.target,
            opacity: [0, 1],
            translateY: [40, 0],
            duration: 700,
            easing: 'easeOutExpo'
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  slots.forEach((slot) => {
    slot.style.opacity = 0;
    observer.observe(slot);
  });
};

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

document.addEventListener('DOMContentLoaded', () => {
  if (typeof anime === 'undefined') return;

  if (!prefersReducedMotion.matches) {
    initializeHeroAnimation();
    animateBackground();
    animateSlots();
  }
});
