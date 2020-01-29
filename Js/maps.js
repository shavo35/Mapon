
  mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhdm8zNSIsImEiOiJjazVvMnFscGMwYm1hM2hxdnFtb3lodnhpIn0.oDdilARTjtUnVTAb4TQNDA';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/shavo35/ck5o45bth4oxu1ip5pzv9kj5g',
    center:[-103.4313,25.5771],
    zoom: 14
  });
 
  map.on('mousemove', function (e) {
    document.getElementById('info').innerHTML =
    JSON.stringify(e.lngLat.wrap());
  });

  map.addControl(
    new mapboxgl.NavigationControl()
    );

    map.addControl(new mapboxgl.GeolocateControl({positionOptions: {enableHighAccuracy: true},trackUserLocation: true}));

    map.addControl(new MapboxDirections({accessToken: mapboxgl.accessToken}),'top-left');
    
    map.on('click', function (e) { document.getElementById('info').innerHTML = JSON.stringify(e.lngLat.wrap());

      var marker = new mapboxgl.Marker().setLngLat(e.lngLat.wrap()).addTo(map); 
 });


 







  

    