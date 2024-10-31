document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counter");

  const animateCounters = () => {
    counters.forEach((counter) => {
      const number = counter.querySelector("div");
      const target = parseInt(counter.getAttribute("data-target"), 10);
      let count = 0;
      const interval = setInterval(() => {
        number.textContent = count;
        if (count >= target) {
          clearInterval(interval);
        } else {
          count += Math.ceil(target / 100);
        }
      }, 20);
    });
  };

  const handleScroll = () => {
    counters.forEach((counter) => {
      const triggerPoint = counter.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (triggerPoint < windowHeight) {
        animateCounters();
        window.removeEventListener("scroll", handleScroll);
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});
