<!DOCTYPE html>
<html>
    <head>
        <title>Rolland Consulting Engineers - {$page}</title>
		
		<link rel="stylesheet" href="css/blueprint/screen.css" type="text/css" media="screen, projection">
		<link rel="stylesheet" href="css/blueprint/print.css" type="text/css" media="print"> 
		<!--[if lt IE 8]>
		<link rel="stylesheet" href="css/blueprint/ie.css" type="text/css" media="screen, projection">
		<![endif]-->
		
		<!-- Page styles --> 
		<link rel="stylesheet" href="css/styles.css" type="text/css" media="screen" /> 
                <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
                <script type="text/javascript">
                    function initializeMap() {
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
                </script>

	
    </head>
    <body onload="initializeMap()">
        <div class="container">
            <div class="span-6 header">
                    <div id="logo" class="header">
                    <img src="img/logo.png" />
                    </div>
            </div>
            <div class="span-6 header">
                    <img src="img/header1.jpg" />
            </div>
            <div class="span-6 header">
                    <img src="img/header2.jpg" />
            </div>
            <div class="span-6 header last">
                    <img src="img/header3.jpg" />
            </div>
            <div class="span-6">
                <div id="menu" class="span-6 last">	
                        <ul>
                                <li><a href="index.php">About</a></li>
                                <li><a href="staff.php">Staff</a></li>
                                <li><a href="projects.php">Projects</a></li>
                        </ul>
                </div>
                <div class="span-6 last">
                    <div id="colorBlock"></div>
                </div>
                <div id="sidebarImg" class="span-6 last">
                    <img src="img/sidebar.jpg" />
                </div>
            </div>
            <div id="content" class="span-18 last">
                    {block name=content}{/block}
            </div>
        </div>
    </body>
</html>
