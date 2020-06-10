<?php 
    require ("SQL/Functions.php");
    $DA1 = getCountry();
    $DA2 = getClubCountry();
    $countryID = $_GET['country'];
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
    <?php foreach($DA1 as $DB1){?>
    <div class="d-lg-flex flex-lg-row flex-sm-column justify-content-between">
        <h1>Bekijk hier alle voetbalclubs uit <?=$DB1['name']?></h1>
    </div>
    <?php }?>
    <?php foreach($DA2 as $DB2){?>
    <div class="mt-2 col-lg-4 col-sm-12 float-left">
        <div class="card">
            <img class="card-img-top img-fluid col-12" src="img/<?=$DB2['img']?>" alt="Card image cap">
            <div class="card-body">
                <h4 class="card-title"><?=$DB2['name']?></h4>
                <a href="club.php?club=<?= $DB2['id']?>" class="btn btn-primary">Meer details</a>
            </div>
        </div>
    </div>
    <?php }?>
</div>

<?php include ("includes/Footer.php")?>