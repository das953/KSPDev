
<?php

$url = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
$parts = parse_url($url);
parse_str($parts['query'], $query);

include '../ServerLogic/GetContent.php';
$data = GetData($query['lang'], $query['type']);

foreach ($data as &$value){
    echo $value;
}

?>
