function initMap() {
    const soldierFieldLatLng = { lat: 41.862366, lng: -87.617256 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: soldierFieldLatLng,
    });
  
    const contentString =
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      '<h1 id="firstHeading" class="firstHeading">Soldier Field</h1>' +
      '<div id="bodyContent">' +
      "<p><b>Soldier Field</b> is a football stadium located on the Near South Side of Chicago, Illinois. It is home to the Chicago Bears, the city's National Football League (NFL) franchise. The stadium has a seating capacity of 61,500, making it the third-largest stadium in the NFL.</p>" +
      '<p>The Chicago Bears have a rich history, and Soldier Field has witnessed many iconic moments in football history.</p>' +
      "</div>" +
      "</div>";
  
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
  