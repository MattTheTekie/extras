<?php
if(php_uname('s') == 'Windows NT'){
$dirname = explode("\\", getcwd());
$dirname = $dirname[count(explode('\\', getcwd()))-1];
$d = $_SERVER["DOCUMENT_ROOT"].'/';
}else{
$dirname = explode("/", getcwd());
$dirname = $dirname[count(explode("/", getcwd()))-1];
$d = $_SERVER["DOCUMENT_ROOT"].'/';
}


include_once $d.'top.php';
include_once 'get-api.php';

echo <<<e
div id="form" class="wrapperL">

<form  style="margin-top: 3px;" method="GET" action="index.php" autocomplete="off">

<input id="input2" class="padding" type="search" style="text-align: center;" name="q" autofocus="" placeholder="" list="hint2" autocomplete="off" value="$q">

<input class="xSamll" style="padding: 0; min-height: 1px; height: 24px;" type="submit">

</form>





</div>
e;


include_once $d.'bottom.php';

?>
