var map;
var infoWindow;
var mark;
var projects = {
    project1: {
        latCoord: 38.6904,
        longCoord: -108.9639,
        title: "Gateway Canyon Resort",
        id: 1,
        description: ""
    },
    project2: {
        latCoord: 38.8697,
        longCoord: -106.9836,
        title: "Crested Butte K-12",
        id: 2,
        description: ""
    },
    project3: {
        latCoord: 39.085,
        longCoord: -107.193,
        title: "Marble Charter School",
        id: 3,
        description: ""
    },
    project4: {
        latCoord: 39.0510,
        longCoord: -108.0899,
        title: "Mesa Lakes Landslide",
        id: 4,
        description: ""
    },
    project5: {
        latCoord: 39.10008,
        longCoord: -108.68474,
        title: "Goldstar Bridge",
        id: 5,
        description: ""
    }
}

function projectMapInit() {
  var mapDiv = document.getElementById('p_map_canvas');
  map = new google.maps.Map(mapDiv, {
    center: new google.maps.LatLng(39.0510, -108.0899),
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.TERRAIN
  });

  mark = new google.maps.MarkerImage('img/projects/projmark.png');

  infoWindow = new google.maps.InfoWindow();

  google.maps.event.addListenerOnce(map, 'tilesloaded', addMarkers);
}

function addMarkers() {
  var bounds = map.getBounds();
  var southWest = bounds.getSouthWest();
  var northEast = bounds.getNorthEast();
  var lngSpan = northEast.lng() - southWest.lng();
  var latSpan = northEast.lat() - southWest.lat();

  function createMarker(map, mark, project) {
    position = new google.maps.LatLng(project.latCoord,project.longCoord);
    var marker = new google.maps.Marker({
      icon: mark,
      position: position,
      map: map
    });

    google.maps.event.addListener(marker, 'click', function() {
      var myHtml = '<img src="img/projects/'+project.id+'.jpg" /><p>'+project.title+'</p><p>'+project.description+'</p>'; 
      infoWindow.setContent(myHtml);
      infoWindow.open(map, marker);
    });
  }

  for (project in projects) {
    createMarker(map, mark, projects[project]);
  }
}
