let my_cards = document.getElementById("my_cards");

function showCards() {
  my_cards.innerHTML = "";
  tours.forEach(
    (item) =>
      (my_cards.innerHTML += `<div class="card p-5 bg-[#f9fafb] border rounded-md">
          <img
          src=${item.img}
          alt="Mercedes Vito"
          class="w-full h-[240px] object-cover mb-4 border shadow-md border-[#dddfe1] rounded-sm"
        />
        <h3 class="text-2xl tt font-semibold">${item.tour_name}</h3>
        <div class="flex justify-between items-center my-3">
          <span>
            <span class="text-base text-[#84909A] font-medium pr-4 border-r border-[#84909a]"
              ><i class="fa-solid fa-user-group text-xl mr-1"></i> 3
            </span>
            <span class="text-base text-[#84909A] font-medium px-4"
              ><i class="fa-solid fa-briefcase text-xl mr-1"></i> 3
            </span>
          </span>
          <span class="text-xl font-medium tt text-[#84909a]">${item.price} ₼ </span>
        </div>
      </div>`)
  );
}
showCards();
