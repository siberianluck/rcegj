<?php

require('../libs/Smarty/Smarty.class.php');
$smarty = new Smarty();

$smarty->setTemplateDir('../smarty/templates');
$smarty->setCompileDir('../smarty/templates_c');
$smarty->setCacheDir('../smarty/cache');
$smarty->setConfigDir('../smarty/configs');

/******************************************************************************
* Staff Array
* Put names of staff in here along with bios and photos.
* Photos should be 149px wide by 177px high
*****************************************************************************/
$staff = array(
            array(
                "name" => "Eric<br />Slivon",
                "bio" => "Having traveled the world, Eric has experienced and come to understand many exotic cultures.  He applies this broad understanding of the world to his trade, enabling him to 'think out of the box' and produce surprising and creative solutions to any problem.",
                "photo" => "eric.jpg"
            ),
            array(
                "name" => "Kent<br />Shaffer",
                "bio" => "A dedicated engineer and family man, Kent is satisfied with nothing less than perfection.  Armed with the experience granted by the completion of hundreds of projects, Kent delivers stunning, rock solid results.",
                "photo" => "kent.jpg"
            ),
            array(
                "name" => "Rick<br />Mason",
                "bio" => "This legendary western slope surveyor has served the region for over 30 years.  He takes immense pride in his craft and even helped found the WCLS.  If you haven't already had Rick survey your land, your neighbor probably has.",
                "photo" => "rick.jpg"
            ),
    );

$smarty->assign('emps', $staff);
$smarty->assign('page', 'Our Staff');
$smarty->display('staff.tpl');

?>
