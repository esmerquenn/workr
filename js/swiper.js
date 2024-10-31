var swiper = new Swiper(".mySwiper", {
    speed: 500,
    parallax: true,
    loop: true,
    autoplay: {
      delay: 3000, // Time in milliseconds
      disableOnInteraction: false, // Continue autoplay after user interactions
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      slideChangeTransitionStart: function () {
        let slides = document.querySelectorAll(".swiper-slide-active .title");
        slides.forEach((slide) => {
          slide.style.animation = "none";
          slide.offsetHeight; /* trigger reflow */
          setTimeout(function () {
            slide.style.animation = "slideIn 1s ease-out forwards";
          }, 100); // Adjust delay as needed
        });
      },
    },
  });