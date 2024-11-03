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
const teferruat3 = document.querySelector(".teferruat-3");
const teferruat2 = document.querySelector(".teferruat-2");
const teferruat1 = document.querySelector(".teferruat-1");
const last_card = document.querySelector(".last_card");
const amount1 = document.getElementById("total_amount-1");
const amount2 = document.getElementById("total_amount-2");
const amount3 = document.getElementById("total_amount-3");
const surname = document.getElementById("surname_detail");
const name = document.getElementById("name_detail");
const email = document.getElementById("email_detail");
const tel = document.getElementById("tel_detail");

function tefe(marshrut, date, time, distance, total_time) {
  let teferruat = `<h2 class="text-xl tt font-medium" data-key="details_title">Təfərrüatlar</h2>
              <div class="space-y-3 text-sm">
                <div class="border-b-2 border-[#84909A] py-2">
                  <p class="font-medium text-base tt" data-key="service_type">Servis tipi</p>
                  <p class="font-normal text-sm" data-key="standard_price">Standart qiymət</p>
                </div>
                <div class="border-b-2 border-[#84909A] py-2">
                  <p class="font-medium text-base tt" data-key="transfer_type">Transfer tipi</p>
                  <p data-key="one_way">Bir istiqamət</p>
                </div>
                <div class="border-b-2 border-[#84909A] py-2">
                  <p class="font-medium text-base tt" data-key="route">Marşrut</p>
                  <p id="marshrut">Bakı - ${marshrut ? marshrut : "Şəhər mərkəzi"}</p>
                </div>
                <div class="border-b-2 border-[#84909A] py-2">
                  <p class="font-medium text-base tt" data-key="pickup_date_time">Götürmə tarixi və zamanı</p>
                  <p id="date_time">${date ? date : "15/10/2024"} - ${time ? time : "20:00"}</p>
                </div>
                <div class="border-b-2 border-[#84909A] py-2">
                  <p class="font-medium text-base tt" data-key="total_distance">Ümumi məsafə</p>
                  <p id="total_distance">${distance ? distance : "25.5 km"}</p>
                </div>
                <div class="border-b-2 border-[#84909A] py-2">
                  <p class="font-medium text-base tt" data-key="total_time">Ümumi vaxt</p>
                  <p id="total_time">${total_time ? formatTime(total_time) : "0 saat 32 dəq"}</p>
                </div>
              </div>
              `;

  teferruat3.innerHTML = `<div class="p-6 bg-[#f9fafb] border">
  <div class="space-y-3 text-sm">
    <div class="py-1">
      <div id="map_little" class="w-full h-32 z-10 mb-0 pb-0"></div>
    </div>
    <h2 class="text-xl tt font-medium" data-key="ride_details_title">Sürüş detalları</h2>

    <div class="border-b-2 border-[#84909A] pb-2 m-0">
      <p class="font-medium text-base tt" data-key="service_type">Servis tipi</p>
      <p class="font-normal text-sm" data-key="standard_price">Standart qiymət</p>
    </div>
    <div class="border-b-2 border-[#84909A] py-1 m-0">
      <p class="font-medium text-base tt" data-key="transfer_type">Transfer tipi</p>
      <p data-key="one_way">Bir istiqamət</p>
    </div>
    <div class="border-b-2 border-[#84909A] py-1">
      <p class="font-medium text-base tt" data-key="route">Marşrut</p>
      <p id="marshrut">Bakı - ${marshrut ? marshrut : "Şəhər mərkəzi"}</p>
    </div>
    <div class="border-b-2 border-[#84909A] py-41">
      <p class="font-medium text-base tt" data-key="pickup_date_time">Götürmə tarixi və zamanı</p>
      <p id="date_time">${date ? date : "15/10/2024"} - ${time ? time : "20:00"}</p>
    </div>
    <div class="border-b-2 border-[#84909A] py-1">
      <p class="font-medium text-base tt" data-key="total_distance">Ümumi məsafə</p>
      <p id="total_distance">${distance ? distance : "25.5 km"}</p>
    </div>
    <div class="border-b-2 border-[#84909A] py-1">
      <p class="font-medium text-base tt" data-key="total_time">Ümumi vaxt</p>
      <p id="total_time">${total_time ? formatTime(total_time) : "0 saat 32 dəq"}</p>
    </div>
  </div>
</div>`;
  teferruat2.innerHTML = teferruat;
  teferruat1.innerHTML = teferruat;
  // applyTranslations();
}
tefe();
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
  const selectedLanguage = localStorage.getItem("selectedLanguage") || "az";

  dir_prev.style.opacity = currentStep === 0 ? "0" : "1";
  dir_prev.innerHTML = translations[selectedLanguage][`step_${currentStep}_button_prev`] || "";
  dir_next.innerHTML = translations[selectedLanguage][`step_${currentStep}_button_next`] || "";

  steps.forEach((item, index) => item.classList.toggle("step_active", index === currentStep));
  order_step.forEach((item) => (item.style.display = "none"));
  order_step.forEach((item, index) => item.classList.toggle("order_active", index === currentStep));

  setInfo();
}

function setInfo() {
  tefe(
    last_personal_info.marshrut,
    last_personal_info.pickup_date,
    last_personal_info.pickup_time,
    last_personal_info.total_distance,
    last_personal_info.total_time
  );
  let amount = `${last_personal_info.total_amount} ₼`;
  amount1.innerHTML = amount;
  amount2.innerHTML = amount;
  amount3.innerHTML = amount;
  name.innerHTML = last_personal_info.name;
  surname.innerHTML = last_personal_info.surname;
  email.innerHTML = last_personal_info.email;
  tel.innerHTML = last_personal_info.phone;
  lastCardChoose(last_personal_info.vehicle);
}

function lastCardChoose(car) {
  last_card.innerHTML = `
      <img
      src=${car.img}
      alt="Mercedes Vito"
      class="w-full h-auto mb-4 border shadow-md border-[#dddfe1] rounded-sm"
    />
    <h3 class="text-2xl tt font-semibold">${car.vehicle_name}</h3>
    <div class="flex justify-between items-center my-3">
      <span>
        <span class="text-base text-[#84909A] font-medium pr-4 border-r border-[#84909a]"
          ><i class="fa-solid fa-user-group text-xl mr-1"></i> ${last_personal_info.passenger}
        </span>
        <span class="text-base text-[#84909A] font-medium px-4"
          ><i class="fa-solid fa-briefcase text-xl mr-1"></i> ${last_personal_info.bag}
        </span>
      </span>
      <span class="text-xl font-medium tt text-[#84909a]">${car.price} ₼ </span>
    </div>`;
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

function goToOrder() {
  console.log(last_personal_info, "last");

  localStorage.setItem("info", JSON.stringify(last_personal_info));
  window.location.href = "order.html";
}
