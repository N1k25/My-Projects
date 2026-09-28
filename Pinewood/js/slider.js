const heroSlider = new Swiper(".hero-slider__media", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  speed: 600,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".hero-slider__pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".hero-slider__arrow--prev",
    nextEl: ".hero-slider__arrow--next",
  },
  keyboard: {
    enabled: true,
  },
  a11y: {
    enabled: true,
  },
});
