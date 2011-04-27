<!DOCTYPE html>
<html>
    <head>
        <title>Rolland Consulting Engineers - {$page}</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
	
	<!-- 1140px Grid styles for IE --> 
	<!--[if lte IE 9]><link rel="stylesheet" href="css/ie.css" type="text/css" media="screen" /><![endif]--> 
 
	<!-- The 1140px Grid - http://cssgrid.net/ --> 
	<link rel="stylesheet" href="css/1140.css" type="text/css" media="screen" /> 
	
	<!-- Page styles --> 
	<link rel="stylesheet" href="css/styles.css" type="text/css" media="screen" /> 
	
	<!--css3-mediaqueries-js - http://code.google.com/p/css3-mediaqueries-js/ - Enables media queries in some unsupported browsers--> 
	<script type="text/javascript" src="js/css3-mediaqueries.js"></script> 

    </head>
    <body>
        <div id="header" class="container">
			<div class="row">
				<div id="logo" class="threecol">
					<img src="img/logo.png" />
				</div>
				<div id="companyName" class="sixcol">
					<span>Rolland Consulting Engineers</span>
				</div>
				<div id="headerImg" class="threecol last">
					<img src="img/header.jpg" />
				</div>
			</div>
        </div>
        <div class="container">
			<div class="row">
				<div id="menu" class="threecol">	
					<ul>
						<li>About</li>
						<li>Staff</li>
						<li>Projects</li>
					</ul>
				</div>
				{block name=content}{/block}
			</div>
        </div>
        <div id="footer">
            <span>Created by Ben Mason</span>
        </div>
    </body>
</html>
