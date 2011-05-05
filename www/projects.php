<?php

require('../libs/Smarty/Smarty.class.php');
$smarty = new Smarty();

$smarty->setTemplateDir('../smarty/templates');
$smarty->setCompileDir('../smarty/templates_c');
$smarty->setCacheDir('../smarty/cache');
$smarty->setConfigDir('../smarty/configs');

$smarty->assign('page', 'Projects');
$smarty->assign('mapScript','<script type="text/javascript" src="/js/projectMap.js"></script>');
$smarty->assign('bodyLoad','onload="projectMapInit()"');

$smarty->display('projects.tpl');

?>
