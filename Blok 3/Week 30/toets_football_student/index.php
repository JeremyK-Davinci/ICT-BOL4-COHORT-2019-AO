<?php 
    require ("SQL/Functions.php");
    $DA1 = getClubs();
    $DA2 = clubcount();
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
        <h1>Bekijk hier alle voetbalclubs</h1>
        <h2>Aantal clubs: <?= count($DA2)?></h2>
        <a class="btn-lg btn-primary text-white align-self-center" href="createClub.php">Nieuwe voetbalclub</a>
    </div>
    <?php foreach($DA1 as $DB1){?>
    <div class="mt-2 col-lg-5 col-sm-12 d-flex d-lg-inline-flex ">
        <div class="card">
            <img class="card-img-top img-fluid" src="img/<?=$DB1['img']?>" alt="Card image cap">
            <div class="card-body">
                <h4 class="card-title"><?= $DB1['name']?></h4>
                <p class="card-text d-none d-lg-block">
                    <?=$DB1['description']?>
                </p>
                <a href="club.php?club=<?=$DB1['id']?>" class="btn btn-primary">Meer details</a>
            </div>
        </div>
    </div>
    <?php }?>
</div>
<?php include ("includes/Footer.php")?>