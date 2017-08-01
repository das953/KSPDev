
<?php

$url = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
$parts = parse_url($url);
parse_str($parts['query'], $query);

include_once '../ServerLogic/GetContent.php';
$data = GetContent($query['lang'], $query['type']);
$sended = $query['send']  ? $query['send'] : 0;

isset($_COOKIE['lang']) ? null : setcookie('lang', $query['lang'], 0);


?>


<div>

    <div class="FeedBackForm">
        <div style="width: 80%">
        <div class="LogoInput"><?php echo $data['tittle']; ?></div>
        <hr class="LineInput">
        </div>
    </div>

    <div class="FeedBackForm">


    <?php if($sended == 0): ?>
        <form action="../ServerLogic/Mailer.php" method="post"">

            <?php echo  "<input type='hidden' name='lang' value='{$query['lang']}'>"; ?>

            <div class="feedbackRow" >
               <div class="formText flex-item"><?php echo $data['name'] . '*'; ?></div>
               <div class="formText flex-item"><?php echo $data['mail'] . '*'; ?></div>
            </div>

            <div class="feedbackRow" >
                <input name="name"  class="StandartInput marlin" type="text" required="required">
                <input name="mail" class="StandartInput marlin" type="email" required="required">
            </div>

            <div class="feedbackRow" >
                <div class="formText"><?php echo $data['theme'] . '*'; ?></div>
            </div>

            <div class="feedbackRow" >
                <input name="theme" class="BigInput marlin" type="text" required="required">
            </div>


            <div class="feedbackRow" >
                <div class="formText"><?php echo $data['text']; ?></div>
            </div>


            <div class="feedbackRow" >
                <textarea name="text" class="BigInput "  rows="15" cols="50" required="required"></textarea>
            </div>



            <input  class="ButtonINP" type="submit" value="<?php echo $data['send']; ?>">

        </form>
        <?php endif; ?>
        <?php if($sended == 1): ?>
        <form action="../ServerLogic/Mailer.php" method="get">
            <?php echo  "<input type='hidden' name='lang' value='{$query['lang']}'>"; ?>

            <div class="feedbackResult" style="width: 80%">
                <h1><?php echo $data['correctText']; ?></h1>
            </div>
            <input  class="ButtonINP" type="submit" value="<?php echo $data['backBtn']; ?>">
        </form>
        <?php endif; ?>

        <?php if($sended == 2): ?>
            <form action="../ServerLogic/Mailer.php" method="get">
                <?php echo  "<input type='hidden' name='lang' value='{$query['lang']}'>"; ?>

                <div class="feedbackResult" style="width: 80%">
                    <h1><?php echo $data['uncorrectText']; ?></h1>
                </div>
                <input  class="ButtonINP" type="submit" value="<?php echo $data['backBtn']; ?>">
            </form>
        <?php endif; ?>
    </div>
</div>
