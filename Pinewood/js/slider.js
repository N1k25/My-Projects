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

/*----------------------------------------------------------------*/

document.addEventListener('DOMContentLoaded', () => {
  const slider = new Swiper('.interior-slider', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 18,
    speed: 650,
    grabCursor: true,
    watchSlidesProgress: true,

    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },

    navigation: {
      prevEl: '.interior-slider__nav--prev',
      nextEl: '.interior-slider__nav--next'
    },

    pagination: {
      el: '.interior-slider__pagination',
      clickable: true
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true
    },

    breakpoints: {
      0: {
        spaceBetween: 10
      },
      601: {
        spaceBetween: 14
      },
      901: {
        spaceBetween: 18
      }
    }
  });

  // Не даём клику по стрелкам/точкам запускать переход браузера
  document.querySelectorAll('.interior-slider__nav').forEach((button) => {
    button.addEventListener('click', (event) => event.stopPropagation());
  });

  // На touch-устройствах autoplay ставится на паузу во время жеста
  slider.on('touchStart', () => slider.autoplay.stop());
  slider.on('touchEnd', () => slider.autoplay.start());
});

/*----------------------------------------------------------------*/

const cardSlider = new Swiper(".card-slider", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  speed: 600,
  pagination: {
    el: ".card-slider__pagination",
    clickable: true,
  },
  keyboard: {
    enabled: true,
  },
  a11y: {
    enabled: true,
  },
});
