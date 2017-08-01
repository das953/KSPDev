
<?php

$url = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
$parts = parse_url($url);
parse_str($parts['query'], $query);

include '../ServerLogic/GetContent.php';
$data = GetTeam($query['lang'], $query['type']);

?>

<div style="display: inline-flex; flex-direction: column; min-width: 80%;max-width: 80%; margin: 0">
    <div class="flex-content">

        <?php foreach ($data as $man): ?>

        <div class="aboutUsBlock">

            <?php echo $man; ?>

        </div>

        <?php endforeach; ?>

    </div>
</div>
