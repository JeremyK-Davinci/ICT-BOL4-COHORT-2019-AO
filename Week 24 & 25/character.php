<?php require('mysql/DB_link.php') ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="CSS/Styling.css">
    <script src="https://kit.fontawesome.com/06ea314d81.js" crossorigin="anonymous"></script>
    <title>Characters</title>
</head>
<body>
    <?php 
        $characterID = $_GET['Character'];
        $query = "SELECT * FROM characters WHERE id=$characterID";
        $data = $conn->query($query);

        foreach($data as $object){
            echo "
            <div id='Character_Content_Box'>
                <div id='Character_Image'><img id='Image'src=CSS/Images/$object[avatar] alt='avatar'></div>
                <div id='Character_Description'><p id='Bio'>$object[bio]</p></div>
                <div id='Character_Name'><h1 id='Name'>$object[name]</h1></div>
                <div class='Character_Attributes' style='background-color: $object[color];'><p class='Attributes'><i class='fas fa-heartbeat'></i> $object[health]</p></div>
                <div class='Character_Attributes' style='background-color: $object[color];'><p class='Attributes'><i class='fas fa-shield-alt'></i> $object[defense]</p></div>
                <div class='Character_Attributes' style='background-color: $object[color];'><p class='Attributes'><i class='fas fa-fist-raised'></i> $object[attack]</p></div>
                <div id='Character_Color' style='background-color: $object[color];'><p id='Color'>Color: $object[color]</p></div>
                <a href='Index.php'><div id='Home'>Home</div></a>
            </div>
            ";
        }
        echo "<div id='Copyright'><p id='Copyright_Text'>copyright © Overnight Productions ™</p></div>";
    ?>
</body>
</html>