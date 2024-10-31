let flag = true;
function showAbout(button) {
  flag = !flag;
  button.textContent = !flag ? "Daha az" : " Ətraflı oxu";
  document.querySelector(".show_about").classList.toggle("show");
}
function selectOption(e, button) {
  event.preventDefault();
  const buttons = document.querySelectorAll("#buttonGroup button");
  buttons.forEach((btn) => btn.classList.remove("selected"));
  button.classList.add("selected");
}
function validateForm() {
  const inputs = document.querySelectorAll("input");
  let isValid = true;

  inputs.forEach((input) => {
    if (!input.value) {
      input.classList.add("border-red-500");
      isValid = false;
    } else {
      input.classList.remove("border-red-500");
    }
  });

  if (isValid) {
    alert("Form başarılı bir şekilde gönderildi!");
  } else {
    alert("Lütfen tüm alanları doldurun.");
  }
}

let img_vesiqe = document.querySelector("#img_vesiqe");
let changeReturnValue = "AZE";
function change(event, deyer) {
  event.preventDefault();

  console.log(deyer, img_vesiqe.src);
  img_vesiqe.src = deyer == "AZE" ? "assets/img/sexsiyyet.png" : "assets/img/sexsiyyet-old.png";
  changeReturnValue = deyer;
}
function changeInput(event, deyer) {
  event.preventDefault();
  console.log(deyer, changeReturnValue);
  if (deyer == "vesiqe") {
    img_vesiqe.src = changeReturnValue == "AZE" ? "assets/img/sexsiyyet.png" : "assets/img/sexsiyyet-old.png";
  } else if (deyer == "fincode") {
    img_vesiqe.src =
      changeReturnValue == "AZE" ? "assets/img/sexsiyyet-fincode.png" : "assets/img/sexsiyyet-old-fincode.png";
  }
}
