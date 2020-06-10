<?php 
    require ("SQL/Functions.php");
    $DA1 = getClub();
    $DA2 = getCountries();
    $clubID = $_GET['club'];
?>
<?php include ("Includes/Header.php")?>

<nav class="navbar navbar-expand navbar-light bg-light sticky-top">
    <a class="navbar-brand" href="#"><img class="img-fluid img-thumbnail" style="width:100px;" src="img/logo.gif"/></a>

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
    <div id="edit-Container" class="col-6 mx-auto">
    <h1>Wijzig de clubgegevens</h1>
        <form action="SQL/Edit.php?club=<?= $clubID?>" method="post">
        <div class="row">
            <label for="name">Change name</label>
            <input type="text" name="name" class="ml-4" Value=<?=$DB1['name']?> required>
        </div>
        <div class="row">
            <label for="country">Change country</label>
            <input list="countries" name="country" class="ml-2" Value=<?=$DB1['countryID']?> required>
        </div>
        <div class="row">
            <label for="image">Change image</label>
            <input type="text" name="image" class="ml-3" Value="<?=$DB1['img']?>" required>
        </div>
        <div class="row">
            <label for="place">Change place</label>
            <input type="text" name="place" class="ml-4" Value=<?=$DB1['place']?> required>
        </div>
        <div class="row">
            <label for="stadium">Change stadium</label>
            <input type="text" name="stadium" class="ml-2" Value="<?=$DB1['stadium']?>" required>
        </div>
        <div class="row">
            <input class="submit" type="submit" value="submit">
        </div>
        </form>
        <datalist id="countries">
        <?php foreach ($DA2 as $DB2){?>
            <select name="country">
                <option value="<?= $DB2['id']?>"><?= $DB2['name']?></option>
            </select>
        <?php } ?>
    </datalist>
    </div>
    <?php }?>
</div>

<?php include ("includes/Footer.php")?>