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
    $queryA = $conn->prepare("SELECT * FROM characters");
    $queryA->execute();
    $data = $queryA->fetchAll();

    $queryB = $conn->prepare("SELECT * FROM characters WHERE health = (SELECT MAX(health) FROM characters)");
    $queryB->execute();
    $data2 = $queryB->fetchAll();

    $queryC = $conn->prepare("SELECT COUNT(id) FROM characters AS charCount");
    $queryC->execute();
    $data3 = $queryC->fetchAll(\PDO::FETCH_ASSOC);
?>
    <table id='Character_Table' cellpadding='15' cellspacing='5'><tr>
                <th>name</th>
                <th>health</th>
                <th>attack</th>
                <th>defense</th>
                <th>bio page</th>
            </tr>
<?php
    foreach($data as $row){
    ?>
        <tr>
            <td><?=$row['name']?></td>
            <td><?=$row['health']?></td>
            <td><?=$row['attack']?></td>
            <td><?=$row['defense']?></td>
            <td><a href="character.php?Character=<?=$row['id']?>">Check Bio</a></td>
        </tr>
    <?php } ?>
</table>
<p id='CharacterCount'>There are: <?php print_r($data3)?> characters in your database</p>
<div id='Copyright'><p id='Copyright_Text'>copyright © Overnight Productions ™</p></div>\
    <?php foreach($data2 as $top){?>
        <p id='StrongestCharacter'>The strongest character is: <br><img id='StrongestCharacterImage' src=CSS/Images/<?=$top['avatar']?>><h1 id='StrongestCharacterName'><?=$top['name']?></h1></p>
    <?php }?>
</body>
</html>