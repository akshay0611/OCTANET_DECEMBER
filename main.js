import './src/styles/main.css';
import './src/styles/menu.css';
import './src/styles/mobile-nav.css';
import { initNavigation } from './src/js/navigation.js';
import { initAnimations } from './src/js/animations.js';
import { renderMenu } from './src/js/menu.js';
import { initMobileNav } from './src/js/mobile-nav.js';
import { initSmoothScroll } from './src/js/smooth-scroll.js';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

document.querySelector('#app').innerHTML = `
  <header class="header">
    <nav class="nav">
      <div class="nav__logo">Brew Haven</div>
      <button class="mobile-nav-toggle" aria-expanded="false">
        <span></span>
      </button>
      <ul class="nav__menu">
        <li><a href="#home" class="nav__link">Home</a></li>
        <li><a href="#menu" class="nav__link">Menu</a></li>
        <li><a href="#about" class="nav__link">About</a></li>
        <li><a href="#contact" class="nav__link">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section id="home" class="hero">
      <div class="hero__content">
        <h1 class="hero__title">Welcome to Brew Haven</h1>
        <p class="hero__subtitle">Where every cup tells a story</p>
        <a href="#menu" class="btn">Explore Our Menu</a>
      </div>
    </section>

    <section id="menu" class="menu">
      <div class="menu__container">
        <h2 class="menu__title">Our Menu</h2>
        <div class="menu__grid"></div>
      </div>
    </section>

    <section class="features">
      <div class="features__grid">
        <div class="feature-card">
          <div class="feature-card__icon">☕</div>
          <h3 class="feature-card__title">Premium Coffee</h3>
          <p>Sourced from the finest beans around the world</p>
        </div>
        <div class="feature-card">
          <div class="feature-card__icon">🌱</div>
          <h3 class="feature-card__title">Organic</h3>
          <p>100% organic ingredients in every cup</p>
        </div>
        <div class="feature-card">
          <div class="feature-card__icon">🤝</div>
          <h3 class="feature-card__title">Community</h3>
          <p>A warm and welcoming space for everyone</p>
        </div>
      </div>
    </section>

    <section class="testimonials">
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="testimonial">
              <p>"Best coffee I've ever had! The atmosphere is amazing."</p>
              <cite>- Ram Kumar</cite>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="testimonial">
              <p>"A perfect spot for both work and relaxation."</p>
              <cite>- Manisha Singh</cite>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="footer__content">
      <p>&copy; 2024 Brew Haven. All rights reserved.</p>
    </div>
  </footer>
`;

// Initialize all features
initNavigation();
initAnimations();
renderMenu();
initMobileNav();
initSmoothScroll();

// Initialize Swiper
new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});