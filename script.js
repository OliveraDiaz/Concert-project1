
  
  let map;
    function initMap(){
    let tx = {lat:31.0, lng:-100.0};
    let map = new google.maps.Map(document.getElementById('map'), {zoom: 3, center: tx}
    );
    marker =new google.maps.Marker({position: tx, map: map, draggable: true})
    lat = marker.getPosition().lat();
    lng = marker.getPosition().lng();
    console.log(lat)
    console.log(lng)
    marker.addListener('click',markerClick)
  }


initMap()


  function markerClick(){
    lat = marker.getPosition().lat();
    lng = marker.getPosition().lng();
    console.log(lat)
    console.log(lng)
  }

  google.maps.event.addListener(marker, 'dragend', function(evt){
    document.getElementById('current').innerHTML = '<p>Marker dropped: Current Lat: ' + evt.latLng.lat().toFixed(3) + ' Current Lng: ' + evt.latLng.lng().toFixed(3) + '</p>';
});