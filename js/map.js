const map = L.map("map").setView([40.4093, 49.8671], 12);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 6,
}).addTo(map);

const cityCenter = [40.4093, 49.8671];
let routeControl;
function createRouteControl() {
  routeControl = L.Routing.control({
    waypoints: [L.latLng(cityCenter), L.latLng(cityCenter)],
    routeWhileDragging: true,
    show: false,
  }).addTo(map);
}

function calculateAndDisplayRoute() {
  const selectedValue = routeSelect.value;
  const selectedCity = JSON.parse(selectedValue);
  console.log(selectedCity);

  last_personal_info.marshrut = selectedCity.name;
  last_personal_info.marshrut_cordinant = `${selectedCity.lat},${selectedCity.lng}`;

  if (routeControl) {
    routeControl.setWaypoints([L.latLng(cityCenter), L.latLng(selectedCity.lat, selectedCity.lng)]);
  }

  routeControl.on("routesfound", function (e) {
    const distance = (e.routes[0].summary.totalDistance / 1000).toFixed(1) + " km";
    const duration = Math.round(e.routes[0].summary.totalTime / 60) + " dəq";
    document.getElementById("distance").textContent = distance;
    document.getElementById("duration").textContent = duration;

    last_personal_info.total_distance = distance;
    last_personal_info.total_time = Math.round(e.routes[0].summary.totalTime / 60);
  });
}

createRouteControl();