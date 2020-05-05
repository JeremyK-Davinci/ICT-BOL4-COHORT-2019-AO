<?php include ("Includes/DB_Connect.php");
    openConnection();
    $results = GetGame();
?>
<?php include ("Includes/Header.php");?>
<div id="game-Container">
    <?php foreach ($results as $data){?>
        <div id="game-Image">
            <img id="Image" src="CSS/Images/<?=$data['image']?>" alt="<?= $data['name']?>"></img>
            <div id="additional-Info">
                <p id="expansions">Expansions: <?=$data['expansions']?></p>
                <p id="skills">Skills: <?=$data['skills']?></p>
                <p id="players">Players: <?=$data['min_players']?>-<?=$data['max_players']?></p>
            </div>
        </div>
        <div id="game-Name">
            <h1 id="Name"><?=$data['name']?></h1>
            <p id="description"><?= $data['description']?></p>
            <div id="game-Video">
                <?= $data['youtube']?>
            </div>
        </div>
        <div id="game-Site">
            <a class="Website" href="<?= $data['url']?>" target="_blank">More Info</a><br>
            <a class="Add" href="A-E-R/Add.php">Add<span></span><span></span><span></span><span></span></a>
        </div>
    <?php } ?>
</div>
<?php include ("Includes/Footer.php");?>