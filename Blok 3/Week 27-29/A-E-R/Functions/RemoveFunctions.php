<?php include ("../../Includes/DB_Connect.php");
    openConnection();
?>

<?php
    $gameID = $_GET['game'];
    try{
        $conn = openConnection();
        $query = $conn->prepare("DELETE FROM planning WHERE id=:id");
        $query->bindParam(":id", $gameID);
        $query->execute();
        close($conn);
        header('Location:../../Index.php');
    }
    catch(exception $e){
        echo "Error: " . $e->getMessage();
    }
?>
  