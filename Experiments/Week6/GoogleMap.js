
      var myCenter = new google.maps.LatLng(42.342, -71.12085);
function initialize() {
    var mapOptions = {
        center: { lat: 42.347, lng: -71.124 },
        zoom: 10
    };
         
    var map = new google.maps.Map(document.getElementById('map-api'),
        mapOptions);

    var marker = new google.maps.Marker({
        position: myCenter,

    });

    marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);
