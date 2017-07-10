
<?php

$url = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
$parts = parse_url($url);
parse_str($parts['query'], $query);

include '../ServerLogic/GetContent.php';
$data = GetContent($query['lang'], $query['type']);


?>


<div>

    <div class="FeedBackForm">
        <div style="width: 80%">
        <div class="LogoInput"><?php echo $data['tittle']; ?></div>
        <hr class="LineInput">
        </div>
    </div>

    <div class="FeedBackForm">



        <form >

            <div class="feedbackRow" >
               <div class="formText flex-item"><?php echo $data['name'] . '*'; ?></div>
               <div class="formText flex-item"><?php echo $data['mail'] . '*'; ?></div>
            </div>

            <div class="feedbackRow" >
                <input class="StandartInput marlin" type="text">
                <input class="StandartInput marlin" type="text">
            </div>

            <div class="feedbackRow" >
                <div class="formText"><?php echo $data['theme'] . '*'; ?></div>
            </div>

            <div class="feedbackRow" >
                <input class="BigInput marlin" type="text">
            </div>


            <div class="feedbackRow" >
                <div class="formText"><?php echo $data['text']; ?></div>
            </div>


            <div class="feedbackRow" >
                <textarea class="BigInput "  rows="15" cols="50"></textarea>
            </div>




            <input  class="ButtonINP" type="button" value="<?php echo $data['send']; ?>">

        </form>
    </div>
</div>
