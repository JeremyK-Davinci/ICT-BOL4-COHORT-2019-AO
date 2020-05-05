<?php include ("../Includes/DB_Connect.php");
    openConnection();
?>

<?php $gameID = $_GET['game']?>
<?php include ("../Includes/Header2.php");?>
    <div id="remove-Container">
        <h1 class="remove-Text">Are you sure you want to remove this game from the events list</h1>
        <a class="Confirm" href="Functions/RemoveFunctions.php?game=<?=$gameID?>">Remove</a>
        <a class="Cancel" href="../Index.php">Don't Remove</a>
    </div>
<?php include ("../Includes/Footer.php");?>