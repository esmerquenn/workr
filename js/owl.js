$(".carousel-1").owlCarousel({
  loop: true,
  margin: 50,
  dots: false,
  nav: true,
  navText: [
    '<span class=" absolute top-[45%] -translate-y-[45%] -left-16 bg-[#fb3d27] text-white py-4 px-5   hidden md:flex justify-center items-center rounded-full text-xl font-bold"><i class="fa-solid fa-chevron-left"></i></span>',
    '<span class=" absolute top-[45%] -translate-y-[45%] -right-16 bg-[#fb3d27] text-white py-4 px-5  hidden md:flex justify-center items-center rounded-full text-xl font-bold"><i class="fa-solid fa-chevron-right"></i></span>',
  ],
  autoplay: false, // Enable autoplay
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
// $(".image-slider").owlCarousel({
//   loop: true,
//   margin: 50,
//   dots:false,
//   nav: true,
//   autoplay: true, // Enable autoplay
//   autoplayTimeout: 2000, // Time in milliseconds (2000ms = 2 seconds)
//   responsive: {
//     0: {
//       items: 1,
//     },
//     600: {
//       items: 2,
//     },
//     900: {
//       items: 3,
//     },
//     1000: {
//       items: 4,
//     },
//   },
// });
