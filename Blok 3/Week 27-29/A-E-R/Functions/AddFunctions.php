<?php Include ("../../Includes/DB_Connect.php"); 
    openConnection();
?>
<?php
    function Add(){
        $name = sanitize($_POST['gameID']);
        $time = sanitize($_POST['times']);
        $guide = sanitize($_POST['guide']);
        $players = sanitize($_POST['players']);
        try {
            $conn = openConnection();
            $query = $conn->prepare("INSERT INTO planning (game_id, guide_id, start_time, duration, players) VALUES (:gameID, :guideID, :start_time, (SELECT (play_minutes + explain_minutes) AS 'duration' FROM games WHERE id=:gameID), :playername)");
            $query->bindParam(":gameID", $name);
            $query->bindParam(":guideID", $guide);
            $query->bindParam(":start_time", $time);
            $query->bindParam(":playername", $players);
            $query->execute();
            close($conn);

            header("Location:../../Index.php");
        }
        catch (exception $e){
            echo "Error Occured: " . $e->getMessage();
        }
    }
    Add();
    function sanitize($data) {
        $data = trim($data);
        $data = htmlspecialchars($data);
        $data = stripcslashes($data);
        return $data;
    }
?>
