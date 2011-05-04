<?php

require('../libs/Smarty/Smarty.class.php');
$smarty = new Smarty();

$smarty->setTemplateDir('../smarty/templates');
$smarty->setCompileDir('../smarty/templates_c');
$smarty->setCacheDir('../smarty/cache');
$smarty->setConfigDir('../smarty/configs');

$smarty->assign('phone', '243-8300');
$smarty->assign('email', 'rce@rcegj.com');
$smarty->assign('address', '405 Ridges Blvd #A  Grand Junction, CO 81507');
$smarty->assign('page', 'About Us');
$smarty->display('index.tpl');

?>
