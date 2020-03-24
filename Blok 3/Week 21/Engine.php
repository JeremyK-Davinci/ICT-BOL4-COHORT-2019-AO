<?php
    date_default_timezone_set("Europe/Amsterdam");
    $time = date("H:i a");
    $hour = date("H");
    $message = "goedemorgen";
?>   
<!DOCTYPE html>
<html lang="nl">
<head>
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="CSS/Style.css">
    <link href="https://fonts.googleapis.com/css?family=Grand+Hotel&display=swap" rel="stylesheet">
    <title>Clock</title>
</head>
<body>
    <div id="txt1"><?php echo "<h1 id='time'>$time</h1>" ?></div>
</body> 
</html>

<?php 
    if($hour >="6" && $hour <"12"){
        echo "<body class='morning'></body>";
        echo "<div id='dayMessage'>Goede Morgen</div>";
    }
    elseif($hour >= "12" && $hour <"18"){
        echo "<body class='afternoon'></body>";
        echo "<div id='dayMessage'>Goede Middag</div>";
    }
    elseif($hour >= "18" && $hour <"0"){
        echo "<body class='evening'></body>";
        echo "<div id='dayMessage'>Goede Avond</div>";
    }
    elseif($hour >= "0" && $hour <"6"){
        echo "<body class='night'></body>";
        echo "<div id='dayMessage'>Goede Nacht</div>";
    }
?>   