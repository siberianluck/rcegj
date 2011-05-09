<?php /* Smarty version Smarty-3.0.7, created on 2011-05-09 11:59:05
         compiled from "../smarty/templates/index.tpl" */ ?>
<?php /*%%SmartyHeaderCode:20334333244dc82b69839090-60591326%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '0c04115701025fdf186966beead194600e6e675d' => 
    array (
      0 => '../smarty/templates/index.tpl',
      1 => 1304963525,
      2 => 'file',
    ),
    'e79478cf52ba14fea344c76f0d87e53c7096b9a6' => 
    array (
      0 => '../smarty/templates/layout.tpl',
      1 => 1304963525,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '20334333244dc82b69839090-60591326',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
)); /*/%%SmartyHeaderCode%%*/?>
<!DOCTYPE html>
<html>
    <head>
        <title>Rolland Consulting Engineers - <?php echo $_smarty_tpl->getVariable('page')->value;?>
</title>
		
		<link rel="stylesheet" href="css/blueprint/screen.css" type="text/css" media="screen, projection">
		<link rel="stylesheet" href="css/blueprint/print.css" type="text/css" media="print"> 
		<!--[if lt IE 8]>
		<link rel="stylesheet" href="css/blueprint/ie.css" type="text/css" media="screen, projection">
		<![endif]-->
                <!--[if lt IE 9]>
                <script src="http://ie7-js.googlecode.com/svn/version/2.1(beta4)/IE9.js"></script>
                <![endif]-->
		
		<!-- Page styles --> 
                <link href="http://fonts.googleapis.com/css?family=Dancing+Script" rel="stylesheet" type="text/css">
		<link rel="stylesheet" href="css/styles.css" type="text/css" media="screen" /> 
                <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
                <?php echo $_smarty_tpl->getVariable('mapScript')->value;?>

	
    </head>
    <body <?php echo $_smarty_tpl->getVariable('bodyLoad')->value;?>
>
        <div class="container">
            <div class="span-12 header">
                    <div id="logo" class="header">
                    <img class="layoutImg" src="img/logo.png" />
                    </div>
            </div>
            <!--<div class="span-6 header">
                    <img class="layoutImg" src="img/header1.jpg" />
            </div>-->
            <div class="span-6 header">
                    <img class="layoutImg" src="img/header2.jpg" />
            </div>
            <div class="span-6 header last">
                    <img class="layoutImg" src="img/header3.jpg" />
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
                    <div id="colorBlock">Design - working from the measured breadth</div>
                </div>
                <div id="sidebarImg" class="span-6 last">
                    <img class="layoutImg" src="img/sidebar.jpg" />
                </div>
            </div>
            <div id="content" class="span-18 last">
                    
<div class="span-9">
    <div id="about" class="aboutPage">
    <p>
    <span id="RCE">Rolland Consulting Engineers</span> is a civil engineering and land surveying firm providing efficient engineering solutions to municipalities, property owners, land developers, and contractors in western Colorado.  Formerly known as Rolland Engineering, we changed our name after Tom Rolland's retirement.  We have a small foot-print but we have a great track record for projects of all sizes.  We've been providing quality ideas to Mesa County and western Colorado since 1983.
    </p>
    </div>
</div>
<div onload="initializeMap()" class="span-9 last">
    <div class="aboutPage">
    <div id="map_canvas"></div>
    </div>
</div> 
<div class="span-9">
    <div class="aboutPage">
    <img class="layoutImg" id="aboutImg" src="/img/aboutPage.jpg" />
    </div>
</div>
<div class="span-9 last">
    <div class="aboutPage">
    <div id="contact">
        <span>Contact Us</span><br />
        <span>By Phone: <?php echo $_smarty_tpl->getVariable('phone')->value;?>
</span><br />
        <span>By E-mail: <?php echo $_smarty_tpl->getVariable('email')->value;?>
</span><br />
        <span>In Person: <?php echo $_smarty_tpl->getVariable('address')->value;?>
</span><br />
    </div>
    </div>
</div>

            </div>
        </div>
    </body>
</html>
