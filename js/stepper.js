const steps = document.querySelectorAll(".step");
const order_step = document.querySelectorAll(".order_step");
const dir_next = document.querySelector(".dir_next");
const dir_prev = document.querySelector(".dir_prev");
const modal = document.getElementById("modal");
const marshrut = document.getElementById("marshrut");
const date_time = document.getElementById("date_time");
const total_distance = document.getElementById("total_distance");
const total_time = document.getElementById("total_time");
const total_amount = document.getElementById("total_amount");
const step_1_div = document.querySelector(".step_1_div");
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
    alert("datalar bosdu");
  } else if (
    currentStep === 1 &&
    (!last_personal_info.vehicle.vehicle_name ||
      !last_personal_info.vehicle_id ||
      !last_personal_info.standart ||
      !last_personal_info.passenger ||
      !last_personal_info.bag ||
      !last_personal_info.type)
  ) {
    alert("datalar bosdu");
  } else if (
    currentStep === 2 &&
    (!last_personal_info.name ||
      !last_personal_info.surname ||
      !last_personal_info.email ||
      !last_personal_info.phone ||
      !last_personal_info.message)
  ) {
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
  order_step.forEach((item) => (item.style.display = "none"));
  order_step.forEach((item, index) => item.classList.toggle("order_active", index === currentStep));
  marshrut.innerHTML = `Bakı - ${last_personal_info.marshrut}`;
  total_distance.innerHTML = last_personal_info.total_distance;
  total_time.innerHTML = formatTime(last_personal_info.total_time);
  total_amount.innerHTML = last_personal_info.total_amount;
  date_time.innerHTML = `${last_personal_info.pickup_date} - ${last_personal_info.pickup_time}`;
}

function formatTime(minutes) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours} saat ${remainingMinutes} dəq`;
}

const select = document.getElementById("time");
const routeSelect = document.getElementById("routeSelect");
const transfer_type = document.getElementById("transfer_type");
times.forEach((item) => {
  select.innerHTML += `<option>${item}</option>`;
});
function getTime() {
  last_personal_info.pickup_time = select.value;
}

transfer_type.onchange = function () {
  last_personal_info.transfer_type = transfer_type.value;
};
