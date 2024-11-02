document.addEventListener("DOMContentLoaded", function () {
  flatpickr("#datepicker", {
    dateFormat: "d.m.Y",
    defaultDate: "01.01.2024",
    locale: {
      weekdays: {
        shorthand: ["BE", "ÇA", "Çə", "CA", "Cü", "Şə", "Bz"],
        longhand: ["Bazar ertəsi", "Çərşənbə axşamı", "Çərşənbə", "Cümə axşamı", "Cümə", "Şənbə", "Bazar"],
      },
      months: {
        shorthand: ["Yan", "Fev", "Mar", "Apr", "May", "İyn", "İyl", "Avq", "Sen", "Okt", "Noy", "Dek"],
        longhand: [
          "Yanvar",
          "Fevral",
          "Mart",
          "Aprel",
          "May",
          "İyun",
          "İyul",
          "Avqust",
          "Sentyabr",
          "Oktyabr",
          "Noyabr",
          "Dekabr",
        ],
      },
    },
    onChange: function (selectedDates, dateStr) {
      last_personal_info.pickup_date = dateStr;
    },
  });
});
