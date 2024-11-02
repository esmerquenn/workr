function openModal() {
    modal.classList.remove("hidden");
  }
  
  function closeModal() {
    modal.classList.add("hidden");
  }
  
  window.onclick = function (event) {
    if (event.target === modal) {
      closeModal();
    }
  };