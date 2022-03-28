//Инициализация слайдера
new Swiper('.swiper', {
  breakpoints: {
    //when window width is 0<x<768px
    0: {
      simulateTouch: true,
      slidesPerView: 1,
      grid: {
        rows: 1,
      },
    },
    //When window width is >768px
    768: {
      simulateTouch: true,
      spaceBetween: 10,
      slidesPerView: 2,
      grid: {
        rows: 2,
      },
    },
    //When window width is >1024px
    1024: {
      allowTouchMove: false,
      slidesPerView: 3,
      grid: {
        rows: 3,
      },
    },
    //When window width is >1200px
    1200: {
      slidesPerView: 4,
      spaceBetween: 50,
      grid: {
        fill: 'row',
        rows: 3,
      },
    }
  }
});