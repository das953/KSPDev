<?php
/**
 * Created by PhpStorm.
 * User: Das953
 * Date: 01.07.2017
 * Time: 3:34
 */
function GetData($lang, $type){


    $servername = "localhost";
    $username = "u_vmsystem";
    $password = "CDMlVzMf";
    $dbname = "vmsystem";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }


    $sql =              "SELECT Content_Blocks.Header, Content_Blocks.Content, Localizations.Lang_Name
                         FROM Content_Blocks
                         INNER JOIN Localizations ON Content_Blocks.LocalizationID = Localizations.ID 
                         INNER JOIN Types ON Content_Blocks.TypeID = Types.ID
                         WHERE  Localizations.Lang_Name = " . '"' . $lang . '"' .
                        "AND Types.Description = " . '"' . $type . '"';

    $result = $conn->query($sql);
    $res = array();

    if ($result->num_rows > 0) {
    //  data of each row


        while($row = $result->fetch_assoc()) {
            array_push($res,

                '<div style="display: inline-flex; flex-direction: column; min-width: 80%; max-width: 80%; margin: 0">
            <!--Header-->
            <div class="themeLine flex-content" style="margin-left: 0;">'
                .
                $row["Header"]
                .

                '</div>
            <!--Content-->
            <div><pre style="font-size: 15px; white-space: pre-line; text-align: left">'
                .
                $row["Content"]
                .

                '</pre></div></div>'

            );


        }

    } else {
        array_push($res, "Error. 0 rows at DB");
    }
    $conn->close();

    return $res;
}



?>