export function initMobileNav() {
  const menuBtn = document.querySelector('.mobile-nav-toggle');
  const nav = document.querySelector('.nav__menu');
  
  menuBtn.addEventListener('click', () => {
    const isOpen = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', !isOpen);
    nav.classList.toggle('nav__menu--visible');
    menuBtn.classList.toggle('mobile-nav-toggle--active');
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav__menu--visible');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.classList.remove('mobile-nav-toggle--active');
    });
  });
}