<?php 
    require ("SQL/Functions.php");
    $DA1 = getCountryClub();
    $DA2 = getClub();
    $clubID = $_GET['club'];
?>
<?php include ("Includes/Header.php")?>

<nav class="navbar navbar-expand navbar-light bg-light sticky-top">
    <a class="navbar-brand" href="index.php"><img class="img-fluid img-thumbnail" style="width:100px;" src="img/logo.gif"/></a>

    <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" href="index.php">Voetbalclubs</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="countries.php">Landen</a>
            </li>
        </ul>
    </div>
</nav>

<div class="mb-5 mt-2">
    <?php foreach($DA2 as $DB2){?>
    <div class="d-lg-flex flex-lg-row flex-sm-column justify-content-between">
        <h1>Bekijk hier <?=$DB2['name']?></h1>
        <div class="align-self-center">
            <a class="btn-lg btn-info text-white" href="updateClub.php?club=<?=$DB2['id']?>">update club</a>
            <a class="btn-lg btn-danger text-white" href="confirmDelete.php?club=<?=$DB2['id']?>">delete club</a>
        </div>
    </div>

    <div class="content mt-2">
        <div>
            <div>
                <div class="text-center border">
                    <img class="img-fluid p-1 col-2" src="img/<?=$DB2['img']?>"/>

                    <div class="border-bottom">
                        <strong>Naam: <?=$DB2['name']?></strong>
                    </div>
                    <div class="border-bottom">
                        <strong>Opgericht: <?=$DB2['established']?></strong>
                    </div>
                    <div class="border-bottom">
                        <strong>Stadion: <?=$DB2['stadium']?></strong>
                    </div>
                    <div class="border-bottom">
                        <strong>Plaats: <?=$DB2['place']?></strong>
                    </div>
                    <?php foreach($DA1 as $DB1){?>
                    <div>
                        <strong>Land: <?=$DB1['name']?></strong>
                    </div>
                    <?php }?>
                </div>
            </div>
            <p class="card-text">
                <?=$DB2['description']?>
            </p>
        </div>
    </div>
    <hr>
    <?php }?>
</div>

<?php include ("includes/Footer.php")?>