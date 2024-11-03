// const translations = {
//   az: {},
//   en: {},
//   ru: {},
// };

// function changeLanguage(language) {
//   localStorage.setItem("selectedLanguage", language);

//   document.querySelectorAll("[data-key]").forEach((element) => {
//     const key = element.getAttribute("data-key");
//     element.innerHTML = translations[language][key];
//   });
// }

// document.addEventListener("DOMContentLoaded", function () {
//   const selectedLanguage = localStorage.getItem("selectedLanguage") || "AZ";

//   document.querySelectorAll("[data-key]").forEach((element) => {
//     const key = element.getAttribute("data-key");
//     element.innerHTML = translations[selectedLanguage][key];
//   });
//   const selectedElement = document.querySelector("[x-text='selected === '' ? 'AZ' : selected']");
//   if (selectedElement) {
//     selectedElement.textContent = selectedLanguage.toUpperCase();
//   }
// });

// const translations = {
//   az: {
//     location: "Baku Azərbaycan",
//     home: "Əsas səhifə",
//     about: "Haqqımızda",
//     services: "Xidmətlərimiz",
//     gallery: "Qalereya",
//     tours: "Turlar",
//     contact: "Əlaqə",
//   },
//   en: {
//     location: "Baku, Azerbaijan",
//     home: "Home",
//     about: "About Us",
//     services: "Our Services",
//     gallery: "Gallery",
//     tours: "Tours",
//     contact: "Contact",
//   },
//   ru: {
//     location: "Баку, Азербайджан",
//     home: "Главная",
//     about: "О нас",
//     services: "Наши услуги",
//     gallery: "Галерея",
//     tours: "Туры",
//     contact: "Контакт",
//   },
// };

// function changeLanguage(language) {
//   localStorage.setItem("selectedLanguage", language);

//   document.querySelectorAll("[data-key]").forEach((element) => {
//     const key = element.getAttribute("data-key");
//     element.innerHTML = translations[language][key];
//   });

//   // Dil seçimini göstermek için öğeyi güncelle
//   const selectedElement = document.querySelector("[x-text='selected === '' ? 'AZ' : selected']");
//   if (selectedElement) {
//     selectedElement.textContent = language.toUpperCase();
//   }
// }

// document.addEventListener("DOMContentLoaded", function () {
//   const selectedLanguage = localStorage.getItem("selectedLanguage") || "az";

//   document.querySelectorAll("[data-key]").forEach((element) => {
//     const key = element.getAttribute("data-key");
//     element.innerHTML = translations[selectedLanguage][key];
//   });

//   // Dil seçimini göstermek için öğeyi güncelle
//   const selectedElement = document.querySelector("[x-text='selected === '' ? 'AZ' : selected']");
//   if (selectedElement) {
//     selectedElement.textContent = selectedLanguage.toUpperCase();
//   }
// });
const translations = {
  az: {
    home: "Əsas səhifə",
    about: "Haqqımızda",
    services: "Xidmətlərimiz",
    gallery: "Qalereya",
    tours: "Turlar",
    contact: "Əlaqə",
    language_az: "AZ",
    language_ru: "RU",
    language_en: "EN",
    currency_azn: "AZN",
    currency_usd: "USD",
    currency_eur: "EUR",
  },
  en: {
    home: "Home",
    about: "About Us",
    services: "Our Services",
    gallery: "Gallery",
    tours: "Tours",
    contact: "Contact",
    language_az: "AZ",
    language_ru: "RU",
    language_en: "EN",
    currency_azn: "AZN",
    currency_usd: "USD",
    currency_eur: "EUR",
  },
  ru: {
    home: "Главная",
    about: "О нас",
    services: "Наши услуги",
    gallery: "Галерея",
    tours: "Туры",
    contact: "Контакт",
    language_az: "АЗ",
    language_ru: "РУ",
    language_en: "АН",
    currency_azn: "AZН",
    currency_usd: "USD",
    currency_eur: "ЕВР",
  },
};

function changeLanguage(language) {
  localStorage.setItem("selectedLanguage", language);

  document.querySelectorAll("[data-key]").forEach((element) => {
    const key = element.getAttribute("data-key");
    element.innerHTML = translations[language][key];
  });

  // Dil seçimi göstermek için `x-text` güncelleniyor.
  document.querySelectorAll("[x-text]").forEach((element) => {
    const selectedLang = localStorage.getItem("selectedLanguage") || "AZ";
    if (element.getAttribute("x-text") === "selected === '' ? 'AZ' : selected") {
      element.textContent = selectedLang.toUpperCase();
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const selectedLanguage = localStorage.getItem("selectedLanguage") || "az";

  document.querySelectorAll("[data-key]").forEach((element) => {
    const key = element.getAttribute("data-key");
    element.innerHTML = translations[selectedLanguage][key];
  });

  document.querySelectorAll("[x-text]").forEach((element) => {
    const selectedLang = localStorage.getItem("selectedLanguage") || "AZ";
    if (element.getAttribute("x-text") === "selected === '' ? 'AZ' : selected") {
      element.textContent = selectedLang.toUpperCase();
    }
  });
});
