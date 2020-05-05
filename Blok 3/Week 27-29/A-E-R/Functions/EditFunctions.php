<?php
    include ("../../Includes/DB_Connect.php");
    openConnection();
?>

<?php
    $gameID = $_GET['game'];
    $time = sanitize($_POST['times']);
    $guide = sanitize($_POST['guide']);
    $player = sanitize($_POST['players']);
    try{
        $conn = openConnection();
        $query = $conn->prepare("UPDATE planning SET start_time=:timed, guide_id=:guided, players=:gamer WHERE id=:id");
        $query->bindParam(":timed", $time);
        $query->bindParam(":guided", $guide);
        $query->bindParam(":id", $gameID);
        $query->bindParam(":gamer", $player);
        $query->execute();
        close($conn);

        header('Location:../../Index.php');
    }
    catch(exception $e){
        echo "Error: " . $e->getMessage();
    }
    function sanitize($data) {
        $data = trim($data);
        $data = htmlspecialchars($data);
        $data = stripcslashes($data);
        return $data;
    }
?>