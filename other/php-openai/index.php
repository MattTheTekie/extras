<?php

$q = 'Hello';
if(isset($_GET['q'])){ $q = $_GET['q']; }



/*
curl https://api.openai.com/v1/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d '{
  "model": "text-davinci-003",
  "prompt": "",
  "temperature": 0.7,
  "max_tokens": 256,
  "top_p": 1,
  "frequency_penalty": 0,
  "presence_penalty": 0
}'

*/



include_once $d.'config2.php';
//include_once $d.'top.php';

// openai php query using Curl

// https://stackoverflow.com/questions/8115683/php-curl-custom-headers
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,"https://api.openai.com/v1/completions");
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json",
    "Authorization: Bearer $OPENAI_API_KEY"
]);
//https://stackoverflow.com/questions/11079135/how-to-post-json-data-with-php-curl
$arr = json_encode(array(
"model" => "text-davinci-003",
"prompt" => "$q",
"temperature"=> 0.7,
"max_tokens" => 256,
"top_p" => 1,
"frequency_penalty" => 0,
"presence_penalty" => 0,
));
curl_setopt($ch, CURLOPT_POSTFIELDS, $arr );
//https://stackoverflow.com/questions/16338174/saving-a-curl-response-into-a-php-variable
curl_setopt($ch, CURLOPT_HEADER, 0);  
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);  

$server_output = curl_exec($ch);
curl_close ($ch);


// full response
//print_r($server_output);


// print
$text = explode('[{"text":"', $server_output);
$text = rawurldecode(strtok($text[1], '"'));
//https://stackoverflow.com/questions/3264270/replace-n-with-actual-new-line-character-code
echo str_replace(array('\r\n', '\n\r', '\n', '\r'), '<br>', $text);




















?>
