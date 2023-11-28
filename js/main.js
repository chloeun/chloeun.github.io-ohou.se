const SECOND_TO_MS = 1000;

new Swiper ('.__rightBanner .swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5 * SECOND_TO_MS
  },
  navigation: {
    prevEl: '.__rightBanner .swiper-prev',
    nextEl: '.__rightBanner .swiper-next'
  }
});  
new Swiper ('.main-menu .swiper-container', {
  direction: 'vertical',
  loop: true,
  autoplay: {
    delay: 2 * SECOND_TO_MS
  },
});  
new Swiper(".category .category-swiper", {
  // slidesPerView: 5,
  // centeredSlides: false,
  // slidesPerGroupSkip: 3,
  // grabCursor: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    769: {
      slidesPerView: 16
    },
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});