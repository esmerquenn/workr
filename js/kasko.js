const buttonsDiv = document.getElementById("alfabe");
const markas = document.getElementById("markas");
const models = document.getElementById("models");
const fran = document.getElementById("fran");
const personal_info = document.querySelector("personal_info");
const buttonGroup = document.getElementById("buttonGroup");
let year = "";
let datam = [];
fetch("https://raw.githubusercontent.com/esmerquenn/jsons/main/test4.json")
  .then((response) => response.json())
  .then((data) => {
    createButtons(data);
  });

function createButtons(data) {
  datam.push(...data);

  let abc = [...new Set(data?.map((item) => item["data-make-id"]))];
  abc.map(
    (btn) =>
      (buttonsDiv.innerHTML += ` <button
          type="button"
          class="py-1 border-2 rounded-[50%] border-blue-700 dark:border-blue-500 dark:text-gray-100"
          onclick="getMarkaOfAbc('${btn}', this)"
        >
          ${btn}
        </button>`)
  );
}
function getMarkaOfAbc(letter, button) {
  selectABC(button, "grid_me2");
  markas.innerHTML = "";

  const filteredData = datam.filter((item) => item["data-make-id"] === letter);
  console.log(letter, datam, filteredData);

  filteredData.forEach(
    (item) =>
      (markas.innerHTML += ` <button
      type="button"
      class="py-2 px-4 min-h-[70px] border-2 border-blue-700 dark:border-blue-500 dark:text-gray-100"
      onclick="getModelForABC('${item["data-make"]}',this)"
    >
      ${item.name}
    </button>`)
  );
}
function getModelForABC(markaId, marka) {
  buttonsDiv.innerHTML = "";
  buttonGroup.innerHTML = `<p class=" p-4 bg-blue-500 text-white font-bold" > <span data-key="release_year">Buraxılış ili </span>: ${year} </p>`;
  markas.style.display = "block";
  markas.innerHTML = `<p class=" p-4 w-full bg-blue-500 text-white font-bold"><span data-key="brand">Marka</span> : ${marka.textContent}</p>`;
  selectABC(marka, "grid_me3");
  models.innerHTML = "";
  const filteredData = datam.find((item) => item["data-make"] === markaId);

  filteredData.models.forEach(
    (item) =>
      (models.innerHTML += ` <button
      type="button"
      class="py-2 px-4 min-h-[70px] border-2 border-blue-700 dark:border-blue-500 dark:text-gray-100"
     onclick="getFransizaForABC(this)"

    >
      ${item.model}
    </button>`)
  );
}

let arr_fransizka = ["100", "200", "300", "400", "500"];
function getFransizaForABC(fransiza) {
  models.style.display = "block";
  models.innerHTML = `<p class=" p-4 w-full bg-blue-500 text-white font-bold"><span data-key="model"> Model</span> : ${fransiza.textContent}</p>`;
  selectABC(fransiza, "grid_me4");
  arr_fransizka.forEach(
    (item) =>
      (fran.innerHTML += ` <button
          type="button"
          class="py-2 px-4 min-h-[70px] border-2 border-blue-700 dark:border-blue-500 dark:text-gray-100"
         onclick="getPersonalInfo(this)"
    
        >
          ${item} AZN
        </button>`)
  );
}
function getPersonalInfo(fransiza) {
  fran.style.display = "block";
  fran.innerHTML = `<p class=" p-4 w-full bg-blue-500 text-white font-bold"><span data-key="franchise">Franşiza</span> : ${fransiza.textContent}</p>`;
  console.log("salam");
}
// YEARS BUTTONS
const btns = Array.from({ length: 2024 - 2008 + 1 }, (_, i) => 2008 + i);

btns.forEach(
  (btn) =>
    (buttonGroup.innerHTML += ` <button
    type="button"
    class="py-2 px-4 border-2 border-blue-700 dark:border-blue-500 dark:text-gray-100"
    onclick="getYearForABC(this)"
  >
    ${btn}
  </button>`)
);

function getYearForABC(button) {
  buttonsDiv.style.display = "grid";
  year = button.textContent;
  selectOption(button, "buttonGroup");
}

function selectABC(button, gridClass) {
  const buttons = document.querySelectorAll(`.${gridClass} button`);

  buttons.forEach((btn) => {
    btn.classList.remove("selected");
  });

  button.classList.add("selected");
}
