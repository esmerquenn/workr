

document.addEventListener("DOMContentLoaded", function () {
  const cardsData = [
    {
      id: 1,
      icon: "fa-hand-holding-heart",
      title: "Həyat Sığortası",
      description: "Həyat sığortası ilə gələcəyinizi təhlükəsiz hala gətirin.",
      href: "heyat_sigorta.html",
      dataKeyTitle: "life_insurance",
      dataKeyDescription: "life_insurance_description",
    },
    {
      id: 2,
      icon: "fa-house-chimney",
      title: "Daşınmaz əmlakın icbari sığortası",
      description: "Daşınmaz əmlakınızı icbari sığorta ilə qoruyun.",
      href: "emlak.html",
      dataKeyTitle: "property_insurance_mandatory",
      dataKeyDescription: "property_insurance_description",
    },
    {
      id: 3,
      icon: "fa-car",
      title: "İcbari Nəqliyyat sığortası",
      description: "Nəqliyyat vasitələrinizi icbari sığorta ilə təmin edin.",
      href: "avto.html",
      dataKeyTitle: "car_insurance_mandatory",
      dataKeyDescription: "car_insurance_description",
    },
    {
      id: 4,
      icon: "fa-map",
      title: "Səyahət Sığortası",
      description: "Səyahət sığortası ilə rahat bir səfər planlayın.",
      href: "seyahət.html",
      dataKeyTitle: "travel_insurance",
      dataKeyDescription: "travel_insurance_description",
    },
    {
      id: 6,
      icon: "fa-car",
      title: "KASKO Sığorta",
      description: "KASKO sığorta ilə avtomobilinizi təhlükələrdən qoruyun.",
      href: "kasko.html",
      dataKeyTitle: "casco_insurance",
      dataKeyDescription: "casco_insurance_description",
    },
    {
      id: 5,
      icon: "fa-briefcase-medical",
      title: "Könüllü Tibbi Sığorta",
      description: "Könüllü Tibbi Sığorta haqqında məlumat",
      dataKeyTitle: "voluntary_health_insurance",
      dataKeyDescription: "voluntary_health_insurance_description",
    },
    {
      id: 7,
      icon: "fa-truck",
      title: "Yük sığortası",
      description: "Yük sığortası haqqında məlumat",
      dataKeyTitle: "cargo_insurance",
      dataKeyDescription: "cargo_insurance_description",
    },
    {
      id: 8,
      icon: "fa-id-card",
      title: "Yaşıl Kart Sistemi",
      description: "Yaşıl Kart Sistemi haqqında məlumat",
      dataKeyTitle: "green_card_system",
      dataKeyDescription: "green_card_system_description",
    },
    {
      id: 9,
      icon: "fa-home",
      title: "Daşınmaz Əmlakın Könüllü Sığortası",
      description: "Daşınmaz Əmlakın Könüllü Sığortası haqqında məlumat",
      dataKeyTitle: "voluntary_property_insurance",
      dataKeyDescription: "voluntary_property_insurance_description",
    },
  ];

  const cardsContainer = document.getElementById("cards-container");

  cardsData.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.className = "flip-card shadow-lg rounded-lg";
    cardElement.innerHTML = `
              <div class="flip-card-inner">
                  <div id="card-${card.id}" class="flip-card-front bg-[rgb(2,1,142)] dark:bg-gray-800 text-white dark:text-gray-100 p-6 flex flex-col items-center justify-center rounded-lg">
                      <i class="fa-solid ${card.icon} text-[3rem] mb-5"></i>
                      <p class="text-2xl font-bold" data-key="${card.dataKeyTitle}">${card.title}</p>
                  </div>
                  <div class="flip-card-back bg-[rgb(2,1,142)] dark:bg-gray-800 text-white dark:text-gray-100 p-6 flex flex-col items-center justify-center rounded-lg">
                      <p class="text-2xl font-bold" data-key="${card.dataKeyTitle}">${card.title}</p>
                      <p class="py-4" data-key="${card.dataKeyDescription}">${card.description}</p>
                      <a href='${card.href}' class="mt-4 py-2 px-4 bg-[rgb(2,1,142)] dark:bg-gray-800 text-white dark:text-gray-100 border-2 border-white dark:border-gray-600 rounded" data-key="learn_more">Daha ətraflı</a>
                  </div>
              </div>
          `;
    cardsContainer.appendChild(cardElement);
  });

  const cards = document.querySelectorAll(".flip-card");

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      const inner = card.querySelector(".flip-card-inner");
      inner.style.transform = "rotateY(180deg)";
    });
    card.addEventListener("mouseleave", () => {
      const inner = card.querySelector(".flip-card-inner");
      inner.style.transform = "rotateY(0deg)";
    });
  });
});
