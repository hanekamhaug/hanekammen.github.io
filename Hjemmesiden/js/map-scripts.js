(function($){
  "use strict";

    /*
     ----------------------------------------------------------------------
     Map
     ----------------------------------------------------------------------
     */

    function initialize_map() {

    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions

      var myLatLng = new google.maps.LatLng(60.371388, 5.346682);

      var mapOptions = {
          zoom: 15,
          center: myLatLng,
          disableDefaultUI: true,
          scrollwheel: true,
          navigationControl: true,
          mapTypeControl: true,
          scaleControl: false,
          draggable: true,

        // paste styles from snazzy maps here
       styles: [{
           "featureType":"landscape",
           "elementType":"labels",
           "stylers": [
               {
                   "visibility": "simplified"
               },
               {
                   "hue": "#ff0000"
               }
           ]
       }
       ]
               //,{"featureType":"transit","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"stylers":[{"hue":"#00aaff"},{"saturation":-100},{"gamma":2.15},{"lightness":1}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"lightness":-20}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":57}]}]
    };

    var mapElement = document.getElementById('map-canvas');

    var contentString = '<p><b>Home</b></p><p>This is where I currently live, I am however looking towards east. If you know a good place to rent in Oslo center, hook me up =). Job offer in Oslo? Send it over! Someone you think I should meet? Make the connection!</p>';

    var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

    var map = new google.maps.Map(mapElement, mapOptions);


    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(60.371388, 5.346682),
        map: map,
        title: 'Where I currently live',
    icon: 'images/Icons/Map-Marker-Marker-Outside-Azure-icon.png'
    });
        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });

    }

    google.maps.event.addDomListener(window, 'load', initialize_map);

})(jQuery);
