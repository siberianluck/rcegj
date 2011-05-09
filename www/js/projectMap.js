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
    },
    projectA1204: {
        latCoord: 39.088639,
        longCoord: -108.559028,
        title: "St Mary's Hospital",
        id: 'A1204',
        description: "St Mary's Hospital: Proj No. A1204:  RCE and staff have been participating in the growth of this major regional hospital since before 1977. Established on the present site in the 1950's, St. Mary's is the largest regional hospital between Salt Lake City and Denver."
    },
    project1023: {
        latCoord: 39.088722,
        longCoord: -108.559028,
        title: "St Mary's Advanced Medical Pavilion",
        id: '1023',
        description: "St. Mary's Advanced Medical Pavilion: Proj. No. 1023:  Rolland Engineering provided all the site engineering, boundary surveys, and final surveys of this state of the art medical center."
    },
    project3046: {
        latCoord: 39.095111,
        longCoord: -108.551861,
        title: "Hospice and Palliative Care",
        id: '3046',
        description: "Hospice and Palliative Care Center: Proj No. 3046: Rolland Engineering was responsible  for all the site engineering, boundary surveys, and final surveys of this hospice facility and adjacent medical center and assisted living centers."
    },
    projectA1220: {
        latCoord: 39.084944,
        longCoord: -108.552194,
        title: "Colorado Mesa University",
        id: 'A1220',
        description: "Colorado Mesa University (AKA Mesa State): Proj. No. A1220: Since 2005, RCE has been an important design team member for this major college campus for western Colorado. RCE has provided timely surveying and site design during an ambitious expansion schedule for the institution."
    },
    projectA5054: {
        latCoord: 39.081972,
        longCoord: -108.510139,
        title: "School District 51",
        id: 'A5053',
        description: "School District 51, Bookcliff Middle School: Proj. No. 5053: One of many school projects RCE/Rolland has participated in since 1999. RCE has been providing surveying and site design for several school districts around western Colorado."
    },
    project2012: {
        latCoord: 39.07875,
        longCoord: -108.505833,
        title: "Mesa County Facilities Management",
        id: '2012',
        description: "Mesa County Facilities Management, Mesa County Community Services Building: Proj. No. 2012: RCE has provided Mesa County design and survey services for many projects since 1990 and before. The Community Services building was a major upgrade and consolidation of aging various County facility sites."
    },
    project5005: {
        latCoord: 39.064972,
        longCoord: -108.560944,
        title: "City of Grand Junction: 7th Street",
        id: '5005',
        description: "City of Grand Junction, 7th Street Remodel: Proj. No. 5005: The 7th Street Remodel and RoundAbout is an example of many street reconstruction designs performed for the City of Grand Junction by RCE/Rolland Engineering. Acting as a gateway to downtown shopping, the remodel design upgraded an old city street to a modern and appealing \"streetscape\"."
    },
    project5067: {
        latCoord: 39.067667,
        longCoord: -108.491917,
        title: "School District 51: Pear Park",
        id: '5067',
        description: "School District 51, Pear Park Elementary School: Proj. No. 5067: One of many school projects RCE/Rolland has participated in since 1999. RCE has been providing surveying and site design for several school districts around western Colorado."
    },
    project3050: {
        latCoord: 39.066417,
        longCoord: -108.597306,
        title: "High Pointe Estates",
        id: '3050',
        description: "High Pointe Estates: Proj. No.3050: This high end subdivision is one of a large number of residential subdivision projects that RCE/Rolland has managed since inception. Residential and commercial subdivision development is our central design experience and we do it well."
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
