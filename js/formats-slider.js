const swiper = new Swiper('.swiper-container', {
    loop: true,
     slidesPerView: 1,
    spaceBetween: 20,
     slidesPerView: 1,
    spaceBetween: 10,
   breakpoints: {
    
    768: {
      slidesPerView: 2,
      
    },
    
    1200: {
      slidesPerView: 3,
      
    }
  },
    
  pagination: {
      el: '.pagination',
      bulletClass: 'pagination___button',
      bulletActiveClass: 'pagination___button-active',
  },

  navigation: {
    nextEl: '.carousel-buttom-next',
    prevEl: '.carousel-buttom-prev',
  },
});