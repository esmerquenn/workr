function selectOption( button, className) {
  const buttons = document.querySelectorAll(`#${className} button`);

  buttons.forEach((btn) => {

    btn.classList.remove("selected");
  });

  button.classList.add("selected");
}
