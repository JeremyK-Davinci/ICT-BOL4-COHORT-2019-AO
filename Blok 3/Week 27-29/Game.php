<?php include ("Includes/DB_Connect.php");
    openConnection();
    $results = GameData();
    $plan = PlanningDetails();
?>
<?php include ("Includes/Header.php");?>
<div id="game-Container">
    <?php foreach ($results as $data){?>
        <?php foreach ($plan as $info){?>
        <div id="game-Image">
            <img id="Image" src="CSS/Images/<?=$data['image']?>" alt="<?= $data['name']?>"></img>
            <div id="additional-Info">
                <p id="players">Players: <?=$info['players']?></p>
                <p id="Start-Time">Time: <?=$info['start_time']?></p>
                <p id="game-Guide">Guide: <?=$info['name']?></p>
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
            <a class="Website" href="<?= $data['url']?>" target="_blank">More Info</a>
        </div>
        <?php } ?>
    <?php } ?>
</div>
<?php include ("Includes/Footer.php");?>