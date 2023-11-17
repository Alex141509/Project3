function initMap() {
    const soldierFieldLatLng = { lat: 41.862366, lng: -87.617256 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: soldierFieldLatLng,
    });
  
  
    const infowindow = new google.maps.InfoWindow({
      content: contentString,
      ariaLabel: "Soldier Field",
    });
  
    const marker = new google.maps.Marker({
      position: soldierFieldLatLng,
      map: map,
      title: 'Soldier Field',
      icon: 'images/mapmarker.png', 
    });
  
    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
      });
    });
  
    var additionalMarker = new google.maps.Marker({
      position: soldierFieldLatLng,
      map: map,
      title: 'Soldier Field',
      icon: 'images/chicago_bears_logo_primary_19467521.png', 
    });
  
    const trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);
  }
  
  window.initMap = initMap;
  