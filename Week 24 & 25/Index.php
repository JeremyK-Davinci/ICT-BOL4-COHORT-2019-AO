<?php require('mysql/DB_link.php') ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="CSS/Styling.css">
    <title>Index</title>
</head>
<body>
    <?php
    $query = "SELECT * FROM characters";
    $data = $conn->query($query);

    echo "<table id='Character_Table' width='70%' border='1' cellpadding='15' cellspacing='5'><tr>
                <th>name</th>
                <th>health</th>
                <th>attack</th>
                <th>defense</th>
                <th>bio page</th>
            </tr>";

    foreach($data as $row){
        echo "<tr>
            <th>$row[name]</th>
            <th>$row[health]</th>
            <th>$row[attack]</th>
            <th>$row[defense]</th>
            <th><a href=character.php?Character=$row[id]>Check Bio</a></th>
        </tr>";
    }
    echo "</table>";
    echo "<p id='CharacterCount'>There are: $row[id] characters in your database</p>";
    echo "<div id='Copyright'><p id='Copyright_Text'>copyright © Overnight Productions ™</p></div>";
    ?>
    <?php
    $query2 = "SELECT * FROM characters WHERE health = (SELECT MAX(health) FROM characters)";
    $data2 = $conn->query($query2);
    
    foreach($data2 as $newRow){
        echo "<p id='StrongestCharacter'>The strongest character is: <br><img id='StrongestCharacterImage' src=CSS/Images/$newRow[avatar]><h1 id='StrongestCharacterName'>$newRow[name]</h1></p>";
    }
    ?>
</body>
</html>