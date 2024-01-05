let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  var latitude = parseFloat(document.getElementById("lati").textContent);
  console.log(latitude);
  var longitude = parseFloat(document.getElementById("longi").textContent);

  var customCoordinates = { lat: latitude, lng: longitude };
  map = new Map(document.getElementById("map"), {
    center: customCoordinates,
    zoom: 8,
  });

  var marker = new google.maps.Marker({
    position: customCoordinates,
    map: map,
    title: 'Custom Location'
});
}

initMap();