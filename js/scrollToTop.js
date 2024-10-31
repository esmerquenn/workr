document.addEventListener("DOMContentLoaded", function() {
    setProgress(0); // Sayfa yüklendiğinde mavi çemberi sıfırla
  });

function setProgress(percent) {
    const circle = document.querySelector('.progress-ring__circle');
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
  
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;
  
    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;
  }
  
  window.addEventListener('scroll', function() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
  
    setProgress(scrolled);
  });
  

  document.querySelector('.progress-container').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });