<?php

require('/var/www/rcegj/libs/Smarty/Smarty.class.php');
$smarty = new Smarty();

$smarty->setTemplateDir('/var/www/rcegj/smarty/templates');
$smarty->setCompileDir('/var/www/rcegj/smarty/templates_c');
$smarty->setCacheDir('/var/www/rcegj/smarty/cache');
$smarty->setConfigDir('/var/www/rcegj/smarty/configs');

$smarty->assign('name', 'Ben');
$smarty->display('index.tpl');

?>
