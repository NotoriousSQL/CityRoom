//for map
var map;

//this initalizes the map and renders it
function initMap() {
    map = new google.maps.Map(
        document.getElementById("map"),
        {
            center: {lat: 41.881832, lng: -87.623177},
            zoom: 11
        }
    );
}
