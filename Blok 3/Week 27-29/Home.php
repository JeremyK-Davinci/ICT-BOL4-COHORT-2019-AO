<?php include ("Includes/DB_Connect.php");
    openConnection();
    $Cell = GetAll();
?>
<?php include ("Includes/Header.php");?>
    <div id="Page-Container">
        <?php foreach($Cell as $data){ ?>
            <a href="Detail.php?game=<?=$data['id']?>"><img class="Link" src="CSS/Images/<?= $data['image']?>" alt="<?=$data['name']?>"></a>
        <?php } ?>
    </div>
<?php include ("Includes/Footer.php");?>