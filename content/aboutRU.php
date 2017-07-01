<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>AboutVMS</title>
    <link rel="stylesheet" href="../styles/Style.css">
</head>
<body>

<?php


include '../ServerLogic/GetContent.php';
$data = GetData('RU', 'About');

    foreach ($data as &$value){
    echo $value;
    }

?>

</body>
</html>