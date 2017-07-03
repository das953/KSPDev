<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>AboutVMS</title>
    <link rel="stylesheet" href="../styles/Style.css">
</head>
<body>

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

</body>
</html>