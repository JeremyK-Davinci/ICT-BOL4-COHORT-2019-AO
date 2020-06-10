<?php 
    require ("SQL/Functions.php");
    $DA1 = getCountries();
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
    <h1>Voeg een nieuwe voetbalclub toe</h1>
    <div id="Add-Container" class="col-6 mx-auto">
    <form action="SQL/Add.php" method="post">
        <div class="row">
            <label for="name">Club Name</label>
            <input list="text" name="name" class="ml-4">
        </div>
        <div class="row">
            <label for="Country">Country</label>
            <input list="countries" name="Country" class="ml-4">
        </div>
        <div class="row">
            <label for="image">Logo</label>
            <input type="text" name="image" class="ml-4">
        </div>
        <div class="row">
            <label for="established">Established</label>
            <input type="text" name="established" class="ml-4">
        </div>
        <div class="row">
            <label for="place">City</label>
            <input type="text" name="place" class="ml-4">
        </div>
        <div class="row">
            <label for="stadium">Stadium</label>
            <input type="text" name="stadium" class="ml-4">
        </div>
        <div class="row">
            <label for="description">Description</label>
            <input type="text" name="description" class="ml-4">
        </div>
        <input class="submit" type="submit" value="submit">
    </form>
    </div>
    <datalist id="countries">
        <?php foreach ($DA1 as $DB1){?>
            <select name="country">
                <option value="<?= $DB1['id']?>"><?=$DB1['name']?></option>
            </select>
        <?php } ?>
    </datalist>
</div>

<?php include ("includes/Footer.php")?>