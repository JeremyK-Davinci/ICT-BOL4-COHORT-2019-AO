<?php 
    require ("SQL/Functions.php");
    $DA1 = getCountries();
    $DA2 = countrycount();
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

    <div class="d-lg-flex flex-lg-row flex-sm-column justify-content-between">
        <h1>Bekijk hier alle landen</h1>
        <h2>Aantal landen: <?= count($DA2)?></h2>
    </div>
    <?php foreach($DA1 as $DB1){ ?>
    <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <a href="country.php?country=<?=$DB1['id']?>"><?=$DB1['name'];?></a>
        </li>
    </ul>
    <?php } ?>
</div>

<?php include ("includes/Footer.php")?>