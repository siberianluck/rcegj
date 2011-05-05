function aboutMapInit() {
    var latlng = new google.maps.LatLng(39.06365,-108.60902);
    var myOptions = {
        zoom: 15,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        title: "Rolland Consulting Engineers"
    });
}
