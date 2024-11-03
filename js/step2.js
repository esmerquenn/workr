const vehicle_box = document.querySelector(".vehicle_box");

function updateInfo(key, value) {
  last_personal_info[key] = value;
  console.log(`${key} güncellendi:`, value, last_personal_info);
}
cars.forEach((car) => {
  const cardHTML = `
    <div class="card p-5 bg-[#f9fafb] border rounded-md">
      <img
        src=${car.img}
        alt="Mercedes Vito"
        class="w-full h-auto mb-4 border shadow-md border-[#dddfe1] rounded-sm"
      />
      <h3 class="text-2xl tt font-semibold">${car.vehicle_name}</h3>
      <div class="flex justify-between items-center my-3">
        <span>
          <span class="text-base text-[#84909A] font-medium pr-4 border-r border-[#84909a]"
            ><i class="fa-solid fa-user-group text-xl mr-1"></i> 3
          </span>
          <span class="text-base text-[#84909A] font-medium px-4"
            ><i class="fa-solid fa-briefcase text-xl mr-1"></i> 3
          </span>
        </span>
        <span class="text-xl font-medium tt text-[#84909a]">${car.price} ₼ </span>
      </div>
      <button
        onclick="getCarInfo('${car.vehicle_id}')"
        id="${car.vehicle_id}"
        
        class=" btn_card py-2 w-full lg:py-3 px-6 border-2 border-[#FB3D27] hover:bg-[#FB3D27] duration-300 transition text-base hover:text-white rounded-full"
      >
       <b data-key="select"> Seçim et</b>
      </button>
    </div>`;
  vehicle_box.innerHTML += cardHTML;
});

function getCarInfo(id) {
  const selectedLanguage = localStorage.getItem("selectedLanguage") || "az";
  let selected = translations[selectedLanguage][`selected`] || "";

  document.querySelectorAll(".btn_card").forEach((button) => {
    let data = translations[selectedLanguage][`select`] || "";
    button.innerHTML = `<b data-key='select'>${data}</b>`;
    button.classList.remove("btn_active");
  });

  let selectedButton = document.getElementById(id);
  selectedButton.innerHTML = `<b data-key="selected">${selected}</b> <i class="fa-regular fa-circle-check"></i>`;
  selectedButton.classList.add("btn_active");

  let find_data = cars.find((item) => item.vehicle_id == id);

  last_personal_info.vehicle = find_data;
  last_personal_info.vehicle_id = find_data.vehicle_id;
  last_personal_info.total_amount = find_data.price * +last_personal_info.passenger;
}

function updatePersonalInfo(field, value) {
  const isValid = validateInput(field, value);

  if (isValid) {
    last_personal_info[field] = value;
    console.log(`${field} güncellendi: ${value}`);
  }
}

function validateInput(field, value) {
  let isValid = false;
  let errorMessage = "";

  switch (field) {
    case "name":
    case "surname":
      isValid = /^[A-Za-z]+$/.test(value);
      errorMessage = isValid ? "" : "x";
      break;
    case "email":
      isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      errorMessage = isValid ? "" : "x";
      break;
    case "phone":
      isValid = /^\d{10}$/.test(value);
      errorMessage = isValid ? "" : "x";
      break;
    case "message":
      isValid = true;
      break;
  }

  const errorElement = document.getElementById(`${field}-error`);
  if (errorElement) {
    errorElement.textContent = errorMessage;
  }
  return isValid;
}
