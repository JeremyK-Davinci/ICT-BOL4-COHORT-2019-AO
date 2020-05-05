<?php
function openConnection(){
    $servername = "localhost";
    $username = "Admin";
    $password = "CkN21p3m";

    try 
    {
        $conn = new PDO("mysql:host=$servername;dbname=week27-29", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $conn;
    }
    catch(PDOException $e)
    {
        echo "Connection failed: " . $e->getMessage();
    }
}
function close($pdo){
    $conn = NULL;
}

function GetAll(){
    $conn = openConnection();
    $query = $conn->prepare("SELECT * FROM games");
    $query->execute();
    return $query->fetchall();
}

function GetGame(){
    $gameID = $_GET['game'];
    $conn = openConnection();
    $query = $conn->prepare("SELECT * FROM games WHERE id=:gameID");
    $query->bindParam(":gameID", $gameID);
    $query->execute();
    return $query->fetchall();
}

function GetGuides(){
    $conn = openConnection();
    $query = $conn->prepare("SELECT * FROM begeleiders");
    $query->execute();
    return $query->fetchall();
}
function Editor(){
    $gameID= $_GET['game'];
    $conn = openConnection();
    $query = $conn->prepare("SELECT planning.start_time, planning.players, planning.guide_id FROM planning WHERE planning.id=:id");
    $query->bindParam(":id", $gameID);
    $query->execute();
    return $query->fetchall();
}

function GameData(){
    $gameID = $_GET['game'];
    $conn = openConnection();
    $query = $conn->prepare("SELECT * FROM games WHERE id=(SELECT game_id FROM planning WHERE id=:gameID)");
    $query->bindParam(":gameID", $gameID);
    $query->execute();
    return $query->fetchall();
}

function PlanningCheck(){
    $conn = openConnection();
    $query = $conn->prepare("SELECT planning.id, games.name AS Naam, begeleiders.name AS Begeleider, planning.start_time AS 'Start Time', planning.duration AS Duration FROM games, begeleiders, planning WHERE games.id = planning.game_id AND begeleiders.id = planning.guide_id ORDER BY planning.start_time ASC");
    $query->execute();
    return $query->fetchall();
}
function PlanningDetails(){
    $gameID = $_GET['game'];
    $conn = openConnection();
    $query = $conn->prepare("SELECT planning.start_time, planning.players, begeleiders.name FROM planning, begeleiders WHERE planning.id=:gameID AND begeleiders.id = planning.guide_id ");
    $query->bindParam(":gameID", $gameID);
    $query->execute();
    return $query->fetchall();
}