<?php $clubID= $_GET['club']?>
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
    <h1>Weet je zeker dat je deze club wilt verwijderen?</h1>
    <a class="btn-lg btn-info text-white" href="index.php">Undo</a>
    <a class="btn-lg btn-danger text-white" href="SQL/Delete.php?club=<?=$clubID?>">Delete</a>
</div>

<?php include ("includes/Footer.php")?>