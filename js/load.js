window.addEventListener("load", function () {
  // Sayfa yüklendiğinde yükleme animasyonunu gizle ve içeriği göster
  document.getElementById("loader").style.display = "none";
  document.querySelector(".loader").style.display = "none";
  document.getElementById("content").style.display = "block";
});

// document.addEventListener("DOMContentLoaded", function () {
//   const links = document.querySelectorAll("a"); // Tüm linkleri seç
//   links.forEach((link) => {
//     link.addEventListener("click", function (e) {
//       e.preventDefault();
//       const href = this.getAttribute("href");
//       document.getElementById("loader").style.display = "flex";
//       document.querySelector(".loader").style.display = "block";
//       document.getElementById("content").style.display = "none";

//       setTimeout(function () {
//         window.location.href = href; // Yeni sayfaya yönlendirme
//       }, 1000); // 1 saniye sonra sayfaya yönlendir
//     });
//   });
// });
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a"); // Tüm linkleri seç
    links.forEach((link) => {
      link.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        
        // href değeri "#" değilse devam et
        if (href !== "#" && href !== "" && href !== null && href.includes('about')) {
          e.preventDefault();
          document.getElementById("loader").style.display = "flex";
          document.querySelector(".loader").style.display = "block";
          document.getElementById("content").style.display = "none";
  
          setTimeout(function () {
            window.location.href = href; // Yeni sayfaya yönlendirme
          }, 1000); // 1 saniye sonra sayfaya yönlendir
        }
      });
    });
  });
  
