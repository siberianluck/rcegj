function projectMapInit() {
    var latlng = new google.maps.LatLng(39.0510,-108.0899);
    var myOptions = {
        zoom: 8,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };
    var map = new google.maps.Map(document.getElementById("p_map_canvas"), myOptions);
    var mark = new google.maps.MarkerImage('img/projects/projmark.png');

    /*Project Markers and Info Panes */
    //Project 1
    //Gateway Canyon Resort
    var latlng1 = new google.maps.LatLng(38.6904,-108.9639);
    var marker1 = new google.maps.Marker({
        icon: mark,
        position: latlng1,
        map: map,
        title: "Gateway Canyon Resort"
    });
    var info1 = new google.maps.InfoWindow({
        content: '<img src="img/projects/1.jpg" /><p>Gateway Canyon Resort</p>'
    });
    google.maps.event.addListener(marker1, 'click', function() {
        info1.open(map,marker1);
    });
    /*Project Markers and Info Panes */
    //Project 2
    //Crested Butte K-12
    var latlng2 = new google.maps.LatLng(38.8697,-106.9836);
    var marker2 = new google.maps.Marker({
        icon: mark,
        position: latlng2,
        map: map,
        title: "Crested Butte K-12"
    });
    var info2 = new google.maps.InfoWindow({
        content: '<img src="img/projects/2.jpg" /><p>Crested Butte K-12</p>'
    });
    google.maps.event.addListener(marker2, 'click', function() {
        info2.open(map,marker2);
    });
    /*Project Markers and Info Panes */
    //Project 3
    //Marble Charter School
    var latlng3 = new google.maps.LatLng(39.085,-107.193);
    var marker3 = new google.maps.Marker({
        icon: mark,
        position: latlng3,
        map: map,
        title: "Marble Charter School"
    });
    var info3 = new google.maps.InfoWindow({
        content: '<img src="img/projects/3.jpg" /><p>Marble Charter School</p>'
    });
    google.maps.event.addListener(marker3, 'click', function() {
        info3.open(map,marker3);
    });
    /*Project Markers and Info Panes */
    //Project 4
    //Mesa Lakes Landslide
    var latlng4 = new google.maps.LatLng(39.0510,-108.0899);
    var marker4 = new google.maps.Marker({
        icon: mark,
        position: latlng4,
        map: map,
        title: "Mesa Lakes Landslide"
    });
    var info4 = new google.maps.InfoWindow({
        content: '<img src="img/projects/4.jpg" /><p>Mesa Lakes Landslide</p>'
    });
    google.maps.event.addListener(marker4, 'click', function() {
        info4.open(map,marker4);
    });
    /*Project Markers and Info Panes */
    //Project 5
    //Goldstar Bridge
    var latlng5 = new google.maps.LatLng(39.10008,-108.68474);
    var marker5 = new google.maps.Marker({
        icon: mark,
        position: latlng5,
        map: map,
        title: "Goldstar Bridge"
    });
    var info5 = new google.maps.InfoWindow({
        content: '<img src="img/projects/5.jpg" /><p>Goldstar Bridge</p>'
    });
    google.maps.event.addListener(marker5, 'click', function() {
        info5.open(map,marker5);
    });
}
