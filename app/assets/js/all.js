const swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  
  
breakpoints: {
 
  768: {
    slidesPerView: 6,
    spaceBetween: 15,
  },

  1200: {
    slidesPerView: 10,
    spaceBetween: 10,
  },
  
},
});

const studentSwiper = new Swiper(".studentSwiper", {
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

const classSwiper = new Swiper(".classSwiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  
  
breakpoints: {
 
  768: {
    slidesPerView: 3,
    spaceBetween: 15,
  },

  1200: {
    slidesPerView: 6,
    spaceBetween: 10,
  },
  
},
});