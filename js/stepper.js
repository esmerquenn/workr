const steps = document.querySelectorAll(".step");
const order_steps = document.querySelector(".order_steps");
const dir_next = document.querySelector(".dir_next");
const dir_prev = document.querySelector(".dir_prev");
const modal = document.getElementById("modal");
const step_1_div = document.querySelector(".step_1_div");
// const label_1 = step_1_div.querySelector(".label_1");
let currentStep = 0;

dir_next.onclick = function () {
  if (
    currentStep === 0 &&
    (!last_personal_info.marshrut ||
      !last_personal_info.marshrut_cordinant ||
      !last_personal_info.transfer_type ||
      !last_personal_info.pickup_date ||
      !last_personal_info.pickup_time ||
      !last_personal_info.total_distance ||
      !last_personal_info.total_time)
  ) {
    // label_1.style.color = "red";
    alert("datalar bosdu");
  } else {
    if (currentStep < steps.length - 1) {
      currentStep++;
      updateStep();
    } else {
      console.log("Tüm adımlar tamamlandı.");
      openModal();
    }
  }
};
dir_prev.onclick = function () {
  if (currentStep > 0) {
    currentStep--;
    updateStep();
  }
};

order_steps.innerHTML = step_document[currentStep].data;

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
  order_steps.innerHTML = step_document[currentStep].data;
}

const select = document.getElementById("time");
const routeSelect = document.getElementById("routeSelect");
const transfer_type = document.getElementById("transfer_type");
times.forEach((item) => {
  select.innerHTML += `<option>${item}</option>`;
});
function getTime() {
  last_personal_info.pickup_time = select.value;
  console.log(select.value, last_personal_info, "aaaaaaaaaaaaaaa");
}

transfer_type.onchange = function () {
  last_personal_info.transfer_type = transfer_type.value;
};

// MAP
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
  const selectedValue = routeSelect.value;
  const selectedCity = JSON.parse(selectedValue);
  console.log(selectedCity);

  last_personal_info.marshrut = selectedCity.name;
  last_personal_info.marshrut_cordinant = `${selectedCity.lat},${selectedCity.lng}`;

  if (routeControl) {
    routeControl.setWaypoints([L.latLng(cityCenter), L.latLng(selectedCity.lat, selectedCity.lng)]);
  }

  routeControl.on("routesfound", function (e) {
    const distance = (e.routes[0].summary.totalDistance / 1000).toFixed(1) + " km";
    const duration = Math.round(e.routes[0].summary.totalTime / 60) + " dəq";
    document.getElementById("distance").textContent = distance;
    document.getElementById("duration").textContent = duration;

    last_personal_info.total_distance = distance;
    last_personal_info.total_time = duration;
  });
}

createRouteControl();
