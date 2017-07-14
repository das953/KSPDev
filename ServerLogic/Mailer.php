<?php
/**
 * Created by PhpStorm.
 * User: Das953
 * Date: 10.07.2017
 * Time: 5:27
 */

    $lang = $_REQUEST['lang'];

    if ( !empty($_POST) ) {
    //POST request
    $email = $_REQUEST['mail'];
    $name = $_REQUEST['name'];
    $text = $_REQUEST['text'];
    $theme = $_REQUEST['theme'];

        $headers = "Content-Type: text/html; charset=UTF-8";
        $header = "MIME-Version: 1.0\nContent-type: text/plain; charset=UTF-8\nFrom: ${email}\n";

        if( mail("info@vmsystem.com.ua", $theme, "{$name} запитує:\n\n\n {$text}" , $header) ){
            //message sended
           header("Location: http://vmsystem.com.ua/#feedback.php?lang={$lang}&type=Feedback&send=1");
        }
        else{
            //message unsend
            header("Location: http://vmsystem.com.ua/#feedback.php?lang={$lang}&type=Feedback&send=2");
        }

        exit;
    }
    else {
        //GET request
        header("Location: http://vmsystem.com.ua/#feedback.php?lang={$lang}&type=Feedback&send=0");
        exit;
    }







