document.addEventListener("DOMContentLoaded", () => {
  let carousel_1 = document.querySelector(".carousel-1");

  cars.forEach((item) => {
    carousel_1.innerHTML += `
      <div class="card p-5 bg-[#f9fafb] border rounded-md">
        <img
          src="./assets/img/vito.jpg"
          alt="Mercedes Vito"
          class="w-full h-auto mb-4 border shadow-md border-[#dddfe1] rounded-sm"
        />
        <h3 class="text-2xl tt font-semibold">${item.vehicle_name}</h3>
        <p class="text-xl tt font-medium text-gray-500">Minivan</p>
      </div>`;
  });

  $(".carousel-1").owlCarousel({
    loop: true,
    margin: 50,
    dots: false,
    nav: true,
    navText: [
      '<span class=" absolute top-[45%] -translate-y-[45%] -left-16 bg-[#fb3d27] text-white py-4 px-5 hidden md:flex justify-center items-center rounded-full text-xl font-bold"><i class="fa-solid fa-chevron-left"></i></span>',
      '<span class=" absolute top-[45%] -translate-y-[45%] -right-16 bg-[#fb3d27] text-white py-4 px-5 hidden md:flex justify-center items-center rounded-full text-xl font-bold"><i class="fa-solid fa-chevron-right"></i></span>',
    ],
    autoplay: false,
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
});
