(function () {
    "use strict";

    document.addEventListener("DOMContentLoaded", function () {

        // Google Map
        if (document.getElementById('map')) {
            initMap();
        }

        function initMap() {
            var map;
            var panorama;
            var infoWindow = new google.maps.InfoWindow();
            var marker;
            var markers;
            var markerCluster;

            var park_marker;
            var park = {lat: 40.7024946, lng: -74.01672357937616};
            var ny_city = {lat: 40.72332237562719, lng: -73.9986886068238};
            var pagman =  {lat: 40.77429043781964, lng: -73.97936164146427};
            var locationsHardcoded = [
                ['New York City Hall, New York, NY 10007, USA', 40.712784, -74.005941],
                ['202 5th Ave, New York, NY 10010, USA', 40.742970, -73.988685],
                //['211 Park Ave S, New York, NY 10003, USA', 40.736779, -73.988685],
                //['64-86 Suffolk St, New York, NY 10002, USA', 40.717553291668246, -73.98657555004877],
                //['640 Broadway, New York, NY 10012, USA', 40.72640005344088, -73.99584526440435],
                //['1400 6th Ave, New York, NY 10019, USA', 40.764474, -73.977086],
                //['427 Main St, New York, NY 10044, USA', 40.758808, -73.952302],
                //['Pulaski Bridge, Long Island City, NY 11101, USA', 40.743092, -73.951261]
            ];

            var parkMarker = {
                url: 'media/googleMap/markerclusterer/location-icon-green32.png',
                size: new google.maps.Size(32, 32),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(16, 32)
            };
            var blueMarker = {
                url: 'media/googleMap/markerclusterer/location-icon-blue-1-s.png',
                size: new google.maps.Size(20, 32),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(10, 32)
            };

            /* Controls */
            var mapControl = document.getElementById('map-control');
            var hide_poi = document.getElementById('hide-poi');
            var show_poi = document.getElementById('show-poi');
            var mylocation = document.getElementById('mylocation');
            var google_map_sidebar = document.getElementById('google-map-sidebar');
            var searchbox_directions_open = document.getElementById('searchbox-directions-open');
            var searchbox_directions_close = document.getElementById('searchbox-directions-close');
            /* Controls */

            var styles = {
                default: null,
                hide: [
                    {
                        featureType: 'road',
                        elementType: 'labels.icon',
                        stylers: [{visibility: 'off'}]
                    },
                    {
                        featureType: 'poi.business',
                        stylers: [{visibility: 'off'}]
                    },
                    {
                        featureType: 'poi.medical',
                        stylers: [{visibility: 'off'}]
                    },
                    {
                        featureType: 'poi.attraction',
                        stylers: [{visibility: 'off'}]
                    },
                    {
                        featureType: 'poi.place_of_worship',
                        stylers: [{visibility: 'off'}]
                    },
                    {
                        featureType: 'poi.school',
                        stylers: [{visibility: 'off'}]
                    },
                    {
                        featureType: 'transit',
                        elementType: 'labels.icon',
                        stylers: [{visibility: 'off'}]
                    },
                    {
                        featureType: 'administrative',
                        stylers: [{visibility: 'off'}]
                    }
                ]
            };
            var gutterH;



            /** Map */
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 12,
                center: ny_city,
                fullscreenControl: true,
                fullscreenControlOptions: {
                    position: google.maps.ControlPosition.RIGHT_BOTTOM
                }
            });
            /** Map */


            /** Hide Layers */
            hide_poi.addEventListener('click', function () {
                map.setOptions({styles: styles['hide']});
            });
            show_poi.addEventListener('click', function () {
                map.setOptions({styles: styles['default']});
            });
            /** Hide Layers */


            /** Controls */
            map.controls[google.maps.ControlPosition.RIGHT_TOP].push(mapControl);
            map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(mylocation);
            map.controls[google.maps.ControlPosition.TOP_LEFT].push(searchbox_directions_open);
            /** Controls */


            /** Markers */
            park_marker = new google.maps.Marker({
                map: map,
                position: park,
                icon: parkMarker
            });

            marker = new google.maps.Marker({
                map: map,
                position: ny_city,
                title: 'Your map center',
                draggable: true
            });

            markers = locationsHardcoded.map(function (location, i) {
                return new google.maps.Marker({
                    map: map,
                    position: {lat: location[1], lng: location[2]},
                    title: location[0],
                    icon: blueMarker,
                    draggable: true
                });
            });
            markerCluster = new MarkerClusterer(map, markers, {imagePath: 'media/googleMap/markerclusterer/m'});
            /** Markers */


            /** Dynamic location markers */
            var geocoder_city = new google.maps.Geocoder();
            var infowindowMarkers = new google.maps.InfoWindow();
            (function () {
                var city_marker;
                var position_point;
                var position_address;
                var position_lat;
                var position_lng;

                function dynamicMarkersLocation() {
                    for (var i = 0; i < markers.length; i++) {
                        city_marker = markers[i];

                        city_marker.addListener('click', function () {
                            position_point = this.getPosition();
                            position_lat = this.getPosition().lat();
                            position_lng = this.getPosition().lng();

                            var this_marker = this;
                            geocoder_city.geocode({'location': this.position}, function (results, status) {
                                position_address = results[0].formatted_address;
                                infowindowMarkers.setContent('<div class="infowindow-custom-inner"><div>' + '<div class="address">' + position_address + '</div>' + '<div class="location">' + position_lat + ', ' + position_lng + '</div></div></div>');
                                infowindowMarkers.open(map, this_marker);
                            });
                        });

                        city_marker.addListener('dragend', function () {
                            infowindowMarkers.close(map, this);
                            position_point = this.getPosition();
                            position_lat = this.getPosition().lat();
                            position_lng = this.getPosition().lng();

                            var this_marker = this;
                            geocoder_city.geocode({'location': this.position}, function (results, status) {
                                position_address = results[0].formatted_address;
                                infowindowMarkers.setContent('<div class="infowindow-custom-inner"><div>' + '<div class="address">' + position_address + '</div>' + '<div class="location">' + position_lat + ', ' + position_lng + '</div></div></div>');
                                infowindowMarkers.open(map, this_marker);
                            });

                            function markerCentered() {
                                var LatLng = new google.maps.LatLng(position_lat, position_lng);
                                map.panTo(LatLng);
                                return false;
                            }
                            markerCentered();
                        });
                    }
                }
                dynamicMarkersLocation();
            })();
            /** Dynamic location markers */


            /** Dynamic location MapCenterMarker */
            (function () {
                var geocoder_centerMarker = new google.maps.Geocoder();
                var infowindowCenterMarker = new google.maps.InfoWindow();
                var centerMarker;
                var position_point_centerMarker;
                var position_address_centerMarker;
                var position_lat_centerMarker;
                var position_lng_centerMarker;

                function dynamicCenterMarkerLocation() {
                    centerMarker = marker;

                    centerMarker.addListener('click', function () {
                        position_point_centerMarker = this.getPosition();
                        position_lat_centerMarker = this.getPosition().lat();
                        position_lng_centerMarker = this.getPosition().lng();

                        var this_centerMarker = this;
                        geocoder_centerMarker.geocode({'location': this.position}, function (results, status) {
                            position_address_centerMarker = results[0].formatted_address;
                            infowindowCenterMarker.setContent('<div class="infowindow-center-marker"><div class="address">' + position_address_centerMarker + '</div>' + '<div class="location">' + position_lat_centerMarker + ', ' + position_lng_centerMarker + '</div></div>');
                            infowindowCenterMarker.open(map, this_centerMarker);
                        });
                    });

                    centerMarker.addListener('dragend', function () {
                        infowindowCenterMarker.close(map, this);
                        position_point_centerMarker = this.getPosition();
                        position_lat_centerMarker = this.getPosition().lat();
                        position_lng_centerMarker = this.getPosition().lng();

                        var this_centerMarker = this;
                        geocoder_centerMarker.geocode({'location': this.position}, function (results, status) {
                            position_address_centerMarker = results[0].formatted_address;
                            infowindowCenterMarker.setContent('<div class="infowindow-center-marker"><div class="address">' + position_address_centerMarker + '</div>' + '<div class="location">' + position_lat_centerMarker + ', ' + position_lng_centerMarker + '</div></div>');
                            infowindowCenterMarker.open(map, this_centerMarker);
                        });

                        function markerCentered() {
                            var LatLng = new google.maps.LatLng(position_lat_centerMarker, position_lng_centerMarker);
                            map.panTo(LatLng);
                            return false;
                        }

                        markerCentered();
                    });
                }
                dynamicCenterMarkerLocation();
            })();
            /** Dynamic location MapCenterMarker */


            /** Current HTML5 geolocation */
            var current_address;
            var current_coordinates;
            var current_position;

            mylocation.addEventListener('click', function() {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function (position) {
                        var pos = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        };

                        infoWindow.setPosition(pos);
                        infoWindow.setContent('Location found.');
                        infoWindow.open(map);
                        map.setCenter(pos);

                    }, function () {
                        handleLocationError(true, infoWindow, map.getCenter());
                    });
                }
                else {
                    handleLocationError(false, infoWindow, map.getCenter());
                }

                function handleLocationError(browserHasGeolocation, infoWindow, pos) {
                    infoWindow.setPosition(pos);
                    infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
                    infoWindow.open(map);
                }
            });

            // updated geo: not working
            /*
             mylocation.addEventListener('click', function() {
             if (navigator.geolocation) {
             navigator.geolocation.getCurrentPosition(function(position) {
             current_position = {
             lat: position.coords.latitude,
             lng: position.coords.longitude
             };

             current_coordinates = position.coords.latitude + ', ' + position.coords.longitude;

             geocoder.geocode({'location': current_position}, function(results, status) {
             current_address = results[0].formatted_address;
             infoWindowLocation.setPosition(current_position);
             infoWindowLocation.setContent('<div class="infowindow-geolocation"><div>Geolocation: <strong>' + current_coordinates + '</strong><br>' + current_address + '</div></div>');
             infoWindowLocation.open(map);
             console.log(map);
             map.setCenter(current_position);
             });
             }, function() {
             handleLocationError(true, infoWindowLocation, map.getCenter());
             });
             }
             else {
             handleLocationError(false, infoWindowLocation, map.getCenter());
             }

             function handleLocationError(browserHasGeolocation, infoWindowLocation, current_position) {
             infoWindowLocation.setPosition(current_position);
             infoWindowLocation.setContent(browserHasGeolocation ?
             'Error: The Geolocation service failed.' :
             'Error: Your browser doesn\'t support geolocation.');
             }
             });
             */
            /** Current HTML5 geolocation. */


            /** Sidebar Routing */
            searchbox_directions_open.addEventListener('click', function() {
                google_map_sidebar.classList.add('searchbox-open-js');
            });
            searchbox_directions_close.addEventListener('click', function() {
                google_map_sidebar.classList.remove('searchbox-open-js');
            });
            /** Sidebar Routing */


            /** Search*/
            var main_input = document.getElementById('main-input');
            var autocomplete = new google.maps.places.Autocomplete(main_input);
            var autocomplete_infowindow = new google.maps.InfoWindow();
            var autocomplete_marker = new google.maps.Marker({
                map: map,
                anchorPoint: new google.maps.Point(0, -29)
            });

            autocomplete.bindTo('bounds', map);

            autocomplete.addListener('place_changed', function() {
                autocomplete_infowindow.close();
                autocomplete_marker.setVisible(false);

                var place = autocomplete.getPlace();
                if (!place.geometry) {
                    window.alert("No results.");
                    return;
                }
                if (place.geometry.viewport) {
                    map.fitBounds(place.geometry.viewport);
                } else {
                    map.setCenter(place.geometry.location);
                    map.setZoom(16);
                }

                /*marker.setIcon(({
                 url: place.icon,
                 size: new google.maps.Size(71, 71),
                 origin: new google.maps.Point(0, 0),
                 anchor: new google.maps.Point(17, 34),
                 scaledSize: new google.maps.Size(35, 35)
                 }));*/
                autocomplete_marker.setPosition(place.geometry.location);
                autocomplete_marker.setVisible(true);

                var address = '';
                if (place.address_components) {
                    address = [
                        (place.address_components[0] && place.address_components[0].short_name || ''),
                        (place.address_components[1] && place.address_components[1].short_name || ''),
                        (place.address_components[2] && place.address_components[2].short_name || '')
                    ].join(' ');
                }
                autocomplete_infowindow.setContent('<div><strong>' + place.geometry.location + '</strong><br>' + '<div>' + address + '</div></div>');
                autocomplete_infowindow.open(map, autocomplete_marker);

            });
            /** Search*/

            /** Destination*/
            var origin_place_id = null;
            var destination_place_id = null;
            //var travel_mode = 'WALKING';
            var travel_mode = 'DRIVING';
            var directionsService = new google.maps.DirectionsService;
            var directionsDisplay = new google.maps.DirectionsRenderer({
                draggable: true,
                map: map,
                panel: document.getElementById('distance-panel')
            });
            var destination_input = document.getElementById('destination-input');
            var destination_autocomplete = new google.maps.places.Autocomplete(destination_input);
            destination_autocomplete.bindTo('bounds', map);

            function expandViewportToFitPlace(map, place) {
                if (place.geometry.viewport) {
                    map.fitBounds(place.geometry.viewport);
                } else {
                    map.setCenter(place.geometry.location);
                }
            }
            function route(origin_place_id, destination_place_id, travel_mode, directionsService, directionsDisplay) {
                if (!origin_place_id || !destination_place_id) {
                    return;
                }
                directionsService.route({
                    origin: {'placeId': origin_place_id},
                    destination: {'placeId': destination_place_id},
                    travelMode: travel_mode,
                    provideRouteAlternatives: true
                }, function(response, status) {
                    if (status === 'OK') {
                        directionsDisplay.setDirections(response);
                        google_map_sidebar.classList.add('css-value-js');
                    } else {
                        window.alert('Directions request failed due to ' + status);
                    }
                });
            }
            autocomplete.addListener('place_changed', function() {
                var place = autocomplete.getPlace();
                if (!place.geometry) {
                    window.alert("Origin_autocomplete's returned place contains no geometry");
                    return;
                }
                expandViewportToFitPlace(map, place);
                origin_place_id = place.place_id;
                route(origin_place_id, destination_place_id, travel_mode, directionsService, directionsDisplay);
            });
            destination_autocomplete.addListener('place_changed', function() {
                var place = destination_autocomplete.getPlace();
                if (!place.geometry) {
                    window.alert("Destination_autocomplete's returned place contains no geometry");
                    return;
                }
                expandViewportToFitPlace(map, place);
                destination_place_id = place.place_id;
                route(origin_place_id, destination_place_id, travel_mode, directionsService, directionsDisplay);
            });
            /** Destination*/


            /** StreetViewPanorama */
            function initializeStreeView() {
                panorama = new google.maps.StreetViewPanorama(document.getElementById('street-view'), {
                    position: pagman,
                    pov: {heading: 300, pitch: 0},
                    zoom: 1,
                    motionTracking: true,
                    motionTrackingControl: true,
                    motionTrackingControlOptions: {
                        position: google.maps.ControlPosition.RIGHT_BOTTOM
                    },
                    addressControlOptions: {
                        position: google.maps.ControlPosition.BOTTOM_CENTER
                    },
                    linksControl: true,
                    panControl: true,
                    enableCloseButton: true
                });
                map.setStreetView(panorama);
            }
            initializeStreeView();
            /** StreetViewPanorama */


            /** Map StreetView Update on screen size change */
            function MapPanoramaUpdate() {
                google.maps.event.trigger(map, "resize");
                google.maps.event.trigger(panorama, 'resize');
            }

            function setCenterPegman() {
                map.setCenter(panorama.getPosition());
            }

            function setCenterMarker() {
                map.setCenter(marker.getPosition());
            }

            google.maps.event.addDomListener(window, 'resize', function () {
                MapPanoramaUpdate();
                setCenterMarker();
            });
            /** Map StreetView Update on screen size change */


            /** Styling Infowindow */
            google.maps.event.addListener(infowindowMarkers, 'domready', function() {
                var customInfoWindow = document.getElementsByClassName('infowindow-custom-inner')[0];
                customInfoWindow.parentNode.parentNode.parentNode.parentNode.className += 'infowindow-custom';
            });
            /** Styling for Infowindow */


            /** Splitter */
            function splitMap() {
                var split_map = document.getElementById('map');
                var split_streetview = document.getElementById('street-view');

                Split([split_map, split_streetview], {
                    sizes: ['60%', '40%'],
                    direction: 'horizontal',
                    minSize: 200,
                    gutterSize: 0
                });
            }
            splitMap();
            /** Splitter */


            /** Gutter events */
            function gutterHorizontal() {
                gutterH = document.getElementsByClassName('gutter-horizontal')[0];

                gutterH.addEventListener('mouseup', function() {
                    MapPanoramaUpdate();
                    setCenterMarker();
                }, true);

                gutterH.addEventListener('touchend', function() {
                    MapPanoramaUpdate();
                    setCenterMarker();
                }, true);
            }
            gutterHorizontal();
            /** Gutter events */


        }
    });
})();
