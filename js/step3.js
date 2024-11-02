// STEP 3

const map_little = L.map("map_little").setView([40.4093, 49.8671], 12);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
}).addTo(map_little);

const airport = [40.4672, 50.0463];
const baku = [40.4093, 49.8671];

const aa = L.Routing.control({
  waypoints: [L.latLng(airport), L.latLng(baku)],
  routeWhileDragging: true,
}).addTo(map_little);
