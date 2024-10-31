const travelGroup = document.getElementById("travelGroup");
const travelGroup2 = document.getElementById("travelGroup2");
const buttonGroup = document.getElementById("buttonGroup");

let travel_arr = [
  {
    i: "fa-person-walking-luggage",
    text: "Səyahət",
  },
  {
    i: "fa-person-swimming",
    text: "İdman",
  },
  {
    i: "fa-person-snowboarding",
    text: "Extrem",
  },
  {
    i: "fa-user-graduate",
    text: "Təhsil",
  },
  {
    i: "fa-hospital-user",
    text: "Müalicə",
  },
  {
    i: "fa-circle-radiation",
    text: "Təhlükəli",
  },
];
let map_arr = ["country-mdb.png", "country-shengen.png", "country-world.png", "country-world.png"];
let btns = ["365/365", "365/180", "180/90", "90/30", "30/15"];

travel_arr.map(
  ({ i, text }, index) =>
    (travelGroup2.innerHTML += `<div
    class="border-2 travel_div py-5 flex justify-center flex-col items-center border-blue-700 dark:border-blue-500 dark:text-gray-100"
    onclick="selectOption( this, 'travelGroup2')"
  >
    <i class="fa-solid ${i} text-[2.4rem] sm:text-[4rem] text-gray-400 "></i>
    <h6 class=" font-bold text-gray-400">${text}</h6>
  </div>`)
);

map_arr.forEach(
  (img) =>
    (travelGroup.innerHTML += ` <div
    class="border-2 travel_div flex p-4 justify-center items-center border-blue-700 dark:border-blue-500 dark:text-gray-100"
    onclick="selectOption( this, 'travelGroup')"
  >
    <img class="w-1/2" src="./assets/img/${img}" alt="mdb" />
  </div>`)
);

btns.forEach(
  (btn) =>
    (buttonGroup.innerHTML += ` <button
    type="button"
    class="py-2 px-4 border-2 border-blue-700 dark:border-blue-500 dark:text-gray-100"
    onclick="selectOption(this, 'buttonGroup')"
  >
    ${btn}
  </button>`)
);
