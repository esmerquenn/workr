const menu = document.querySelector(".hidden_dropdown");
const nav_icon = document.querySelector(".nav_icon");
const toggleDarkMode = () => {
  document.documentElement.classList.toggle("dark");
};

function closeDropdown() {
  if (window.innerWidth < 992) {
    menu.classList.toggle("dropdown");
    nav_icon.classList.toggle("open");
  }
}
