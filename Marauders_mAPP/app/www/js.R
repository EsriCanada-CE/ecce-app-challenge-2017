#########################################################################
########################## Javascript URLs ##############################
#########################################################################
jsUrl <- "https://unpkg.com/leaflet@1.0.1/dist/leaflet-src.js"
jsUrl2 <- "https://unpkg.com/esri-leaflet@2.0.7"
jsUrl3 <- "js/routing/dist/leaflet-routing-machine.js"
jsUrl4 <- "js/geocode/dist/Control.Geocoder.js"
jsUrl5 <- "js/routing/examples/index.js"
jsUrl6 <- "js/routing/examples/config.js"
jsUrl7 <- "js/userID.js"

#########################################################################
########################## Javascript Functions #########################
#########################################################################
jsCode <- "var map = L.map('map').setView([43.651, -79.381], 13);
          L.esri.basemapLayer('DarkGray').addTo(map);
          map.setMaxBounds([[43.872019, -79.785570],[43.606608, -78.952669]]);
"

geo1 <- "var geocoder = L.Control.Geocoder.nominatim(),
             waypoints = [],
              routeControl = L.Routing.control({
                plan: L.Routing.plan(waypoints, {
                  createMarker: function(i, wp) {
                    return L.marker(wp.latLng, {
                      draggable: true 
                    }).bindPopup('Some data'); 
                  },
                geocoder: geocoder, 
                showAlternatives: true,
                reverseWaypoints: true,
                routeWhileDragging: true, 
                show: true
              })
            }).addTo(map);"

geo <- "var e = L.Control.geocoder().addTo(map);
        "