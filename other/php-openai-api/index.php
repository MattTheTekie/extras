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

$q = 'Hello';
$text = '';

if(isset($_GET['q'])){ $q = $_GET['q']; }
if(isset($_POST['q'])){ $q = $_POST['q']; }
if(isset($_GET['text'])){ $q .= ' '.$_GET['text']; $text = $_GET['text']; }
if(isset($_POST['text'])){ $q .= ' '.$_POST['text']; $text = $_POST['text']; }

include_once $d.'top.php';

echo <<<e
<div class="center2">
<div class="wrapperL">

<div class="pre" style="padding: 20px 0;">
$q<hr>
e;
include_once "data.php";
echo <<<e
</div>

<div id="form">

<form  style="margin-top: 3px;" method="GET" action="index.php" autocomplete="off">

<label class="xxSmall op" for="input2">q:</label>
<input id="input2" class="padding" type="search" name="q" autofocus="" placeholder="" list="hint2" autocomplete="off" value="$q" onfocus="this.value = this.value;">

<label class="xxSmall op" for="text">text:</label>
<textarea id="text" name="text" rows="4" cols="50">$text</textarea> 

<input class="xxSamll" style="padding: 0; min-height: 1px; height: 24px;" type="submit">


</form>
</div>

</div>
</div>


<script>
if(confDevice != 'mobile'){ document.querySelectorAll('input')[0].focus(); }
</script>
e;


include_once $d.'bottom.php';

?>
