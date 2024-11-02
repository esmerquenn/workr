const steps = document.querySelectorAll(".step");
const order_steps = document.querySelector(".order_steps");
const dir_next = document.querySelector(".dir_next");
const dir_prev = document.querySelector(".dir_prev");
let currentStep = 0;
const last_personal_info = {
  name: "",
  surname: "",
  email: "",
  phone: "",
  service_type: "",
  transfer_type: "",
  bus: "",
  pickup_date: "",
  pickup_time: "",
  total_distance: "",
  total_time: "",
  vehicle: "",
  vehicle_id: null,
  total_amount: 0,
};

dir_next.onclick = function () {
  if (currentStep < steps.length - 1) {
    currentStep++;
    updateStep();
  } else {
    console.log("Tüm adımlar tamamlandı.");
  }
};
dir_prev.onclick = function () {
  if (currentStep > 0) {
    currentStep--;
    updateStep();
  }
};

function updateStep() {
  dir_prev.style.opacity = currentStep === 0 ? "0" : "1";
  dir_prev.innerHTML =
    currentStep == 1
      ? `<i class="fa-solid fa-chevron-left"></i> Sürüş detallarını seçin `
      : currentStep == 2
      ? `<i class="fa-solid fa-chevron-left"></i> Avtomobili seçin `
      : `<i class="fa-solid fa-chevron-left"></i> Əlaqə məlumatlarını daxil edin`;
  dir_next.innerHTML =
    currentStep == 0
      ? ` Avtomobili seçin <i class="fa-solid fa-chevron-right"></i>`
      : currentStep == 1
      ? ` Əlaqə məlumatlarını daxil edin <i class="fa-solid fa-chevron-right"></i>`
      : currentStep == 2
      ? `  Sifariş detallatına baxın <i class="fa-solid fa-chevron-right"></i>`
      : `  İndi rezerv edin <i class="fa-solid fa-chevron-right"></i>`;

  steps.forEach((item, index) => item.classList.toggle("step_active", index === currentStep));
}

let times = [
  "0:00",
  "0:30",
  "1:00",
  "1:30",
  "2:00",
  "2:30",
  "3:00",
  "3:30",
  "4:00",
  "4:30",
  "5:00",
  "5:30",
  "6:00",
  "6:30",
  "7:00",
  "7:30",
  "8:00",
  "8:30",
  "9:00",
  "9:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
  "22:30",
  "22:00",
  "23:30",
  "23:00",
  "24:00",
  "24:30",
];

order_steps.innerHTML = `<div class="flex flex-col md:flex-row gap-12 md:gap-5">
  <div class="flex-1">
    <div class="bg-red-500 text-white text-center py-5">
      <h2 class="text-base md:text-xl tt font-medium">SÜRÜŞ DETALLARI</h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div class="bg-white border">
        <label for="name" class="block text-base tt px-4 pt-4 font-medium">
          Götürmə tarixi
        </label>
        <input  id="datepicker" type="text" name="name" class="w-full p-2 focus:outline-none" />
      </div>
      <div class="bg-white border">
        <label for="time" class="block text-base tt px-4 pt-4 font-medium">
          Götürmə vaxtı
        </label>
            <select onchange="getTime()" id="time" class="w-full p-2 focus:outline-none">
                <option value="" >0:00</option>
            </select>      
      </div>
    </div>

    <div class="bg-white border pr-2">
      <label for="routeSelect" class="block text-base tt px-4 pt-4 font-medium">
        Marşrut
      </label>
      <select id="routeSelect" class="w-full p-2 focus:outline-none" onchange="calculateAndDisplayRoute()">
        <option value="">Marşrutu seçin</option>
         <option value="40.6826,46.3606">Gəncə</option>
        <option value="40.5897,49.6682">Sumqayıt</option>
        <option value="40.7644,47.0595">Mingəçevir</option>
      </select>
    </div>
    <div class="bg-white border pr-2">
      <label for="transfer_type" class="block text-base tt px-4 pt-4 font-medium">
        Transfer tipi
      </label>
      <select id="transfer_type" class="w-full p-2 focus:outline-none">
        <option value="one_way">Bir istiqamət</option>
        <option value="round_trip">Gediş-dönüş</option>
      </select>
    </div>
  </div>
  <div class="w-full md:w-1/2">
        <div id="map" class="w-full h-52 md:h-80 rounded-lg border"></div>
        <div class="border flex items-center mt-4">
            <span class="w-1/2 flex gap-2 items-center p-3 md:p-7 border-r">
                <i class="fa-solid fa-route text-xl md:text-3xl mr-1 md:mr-3 text-[#fb3d27]"></i>
                <div>
                    <p class="text-sm font-medium">Ümumi məsafə</p>
                    <p id="distance" class="text-base font-medium">- km</p>
                </div>
            </span>
            <span class="w-1/2 flex gap-2 items-center p-3 md:p-7">
                <i class="fa-regular fa-clock text-xl md:text-3xl mr-1 md:mr-3 text-[#fb3d27]"></i>
                <div>
                    <p class="text-sm font-medium">Ümumi vaxt</p>
                    <p id="duration" class="text-base font-medium">- dəq</p>
                </div>
            </span>
        </div>
  </div>
</div>`;

const select = document.getElementById("time");
times.forEach((item) => {
  select.innerHTML += `<option>${item}</option>`;
});
function getTime() {
    last_personal_info.pickup_time = select.value
    console.log(select.value, last_personal_info, 'aaaaaaaaaaaaaaa');
}

const routeSelect = document.getElementById("routeSelect");
const map = L.map("map").setView([40.4093, 49.8671], 12);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 6,
}).addTo(map);

const cityCenter = [40.4093, 49.8671];
let routeControl;

function createRouteControl() {
  routeControl = L.Routing.control({
    waypoints: [L.latLng(cityCenter), L.latLng(cityCenter)],
    routeWhileDragging: true,
    show: false,
  }).addTo(map);
}

function calculateAndDisplayRoute() {
  const selectedCoordinates = routeSelect.value.split(",").map(Number);

  if (routeControl) {
    routeControl.setWaypoints([L.latLng(cityCenter), L.latLng(selectedCoordinates[0], selectedCoordinates[1])]);
  }

  routeControl.on("routesfound", function (e) {
    const distance = (e.routes[0].summary.totalDistance / 1000).toFixed(1) + " km"; // Metreden km'ye çevir
    const duration = Math.round(e.routes[0].summary.totalTime / 60) + " dəq"; // Saniyeden dakikaya çevir
    document.getElementById("distance").textContent = distance;
    document.getElementById("duration").textContent = duration;
  });
}

createRouteControl();

// routeSelect.addEventListener("change", calculateAndDisplayRoute);

// const routeSelect = document.getElementById("routeSelect");
// const map = L.map("map").setView([40.4093, 49.8671], 12);

// L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   maxZoom: 10,
// }).addTo(map);

// let airport = [];
// const cityCenter = [40.4093, 49.8671];
// function calculateAndDisplayRoute() {
//   airport = [Number(routeSelect.value)];
// }

// const routeControl = L.Routing.control({
//   waypoints: [L.latLng(airport), L.latLng(cityCenter)],
//   routeWhileDragging: true,
// }).addTo(map);

{
  /* <div class="w-full px-6 md:px-14 xl:px-24 mb-12 bg-white rounded-lg z-10 bottom-[30%] absolute">
            <div class="relative flex items-center justify-between py-7 w-full">
              <div class="absolute left-0 top-2/4 h-0.5 w-full -translate-y-2/4 bg-gray-300"></div>
              <div class="absolute left-0 top-2/4 h-0.5 w-full -translate-y-2/4 bg-gray-100 transition-all duration-500"></div>
              <div
                class="relative z-10 grid w-10 h-10 font-bold step step_active transition-all duration-300 rounded-full place-items-center"
              >
                1
                <div class="absolute -bottom-8 pl-8 w-max text-center">
                  <p class="antialiased font-medium text-xl text-[#201D1D]">Sürüş detallarını daxil edin</p>
                </div>
              </div>
              <div
                class="relative z-10 grid w-10 h-10 font-bold step transition-all duration-300 rounded-full place-items-center"
              >
                2
                <div class="absolute -bottom-8 w-max text-center">
                  <p class="antialiased font-medium text-xl text-[#201D1D]">Avtomobil seçin</p>
                </div>
              </div>
              <div
                class="relative z-10 grid w-10 h-10 font-bold step transition-all duration-300 rounded-full place-items-center"
              >
                3
                <div class="absolute -bottom-8 w-max text-center">
                  <p class="antialiased font-medium text-xl text-[#201D1D]">Əlaqə məlumatlarını daxil edin</p>
                </div>
              </div>
              <div
                class="relative z-10 grid w-10 h-10 font-bold step transition-all duration-300 rounded-full place-items-center"
              >
                4
                <div class="absolute -bottom-8 w-max text-center">
                  <p class="antialiased font-medium text-xl text-[#201D1D]">Sifariş detallarına bax</p>
                </div>
              </div>
            </div>
          </div> */
}

{
  /* <div class="w-full md:w-1/2">
        <div id="map" class="w-full h-52 md:h-80 rounded-lg border"></div>
        <div class="border flex items-center mt-4">
            <span class="w-1/2 flex gap-2 items-center p-3 md:p-7 border-r">
                <i class="fa-solid fa-route text-xl md:text-3xl mr-1 md:mr-3 text-[#fb3d27]"></i>
                <div>
                    <p class="text-sm font-medium">Ümumi məsafə</p>
                    <p id="distance" class="text-base font-medium">- km</p>
                </div>
            </span>
            <span class="w-1/2 flex gap-2 items-center p-3 md:p-7">
                <i class="fa-regular fa-clock text-xl md:text-3xl mr-1 md:mr-3 text-[#fb3d27]"></i>
                <div>
                    <p class="text-sm font-medium">Ümumi vaxt</p>
                    <p id="duration" class="text-base font-medium">- dəq</p>
                </div>
            </span>
        </div> */
}
