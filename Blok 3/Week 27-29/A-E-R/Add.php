<?php include ("../Includes/DB_Connect.php");
    openConnection();
    $results = GetAll();
    $secondary = GetGuides();
?>

<?php include ("../Includes/Header2.php");?>

    <div id="Add-Container">
    <form action="Functions/AddFunctions.php" method="post">
        <div class="row">
            <label for="games" class="Add-Text">Choose The Game</label>
            <input list="games" name="gameID" class="input">
        </div>
        <div class="row">
            <label for="guides" class="Add-Text">Choose The guide</label>
            <input list="guides" name="guide" class="input">
        </div>
        <div class="row">
            <label for="players" class="Add-Text">Name All Players</label>
            <input type="text" name="players" class="input">
        </div>
        <div class="row">
            <label for="times" class="Add-Text">What Time Is The Event</label>
            <input type="time" name="times" class="input">
        </div>
        <input class="submit" type="submit" value="submit">
    </form>
    </div>
    <datalist id="games">
        <?php foreach ($results as $game){?>
            <select name="game">
                <option value="<?= $game['id'];?>"><?=$game['name']?></option>
            </select>
        <?php } ?>
    </datalist>
    <datalist id="guides">
        <?php foreach ($secondary as $guide){?>
            <select name="guide">
                <option value="<?= $guide['id']?>"><?=$guide['name']?></option>
            </select>
        <?php } ?>
    </datalist>

<?php include ("../Includes/Footer.php");?>