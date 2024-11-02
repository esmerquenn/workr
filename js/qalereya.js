let my_cards = document.getElementById("my_cards");

function showCards() {
  my_cards.innerHTML = "";
  cars.forEach(
    (item) =>
      (my_cards.innerHTML += `<div class="card p-5 bg-[#f9fafb] border rounded-md">
                  <img
                    src=${item.img}
                    alt="Mercedes Vito"
                    class="w-full h-auto mb-4 border shadow-md border-[#dddfe1] rounded-sm"
                  />
                  <h3 class="text-2xl tt font-semibold">${item.vehicle_name}</h3>
                  <p class="text-xl tt font-medium text-gray-500">${item.vehicle_type}</p>
                </div>`)
  );
}
function showvideos() {
  my_cards.innerHTML = "";
  cars.forEach((item) => (my_cards.innerHTML += `<div class="card h-[200px] p-5 bg-[#f9fafb] border rounded-md"></div>`));
}
showCards();

document.getElementById("masin").classList.add("qalereya_active");
function getCards(data) {
  if (data == "masin") {
    document.getElementById("masin").classList.add("qalereya_active");
    document.getElementById("video").classList.remove("qalereya_active");
    showCards();
  }
  if (data == "video") {
    document.getElementById("masin").classList.remove("qalereya_active");
    document.getElementById("video").classList.add("qalereya_active");
    showvideos();
  }
}
