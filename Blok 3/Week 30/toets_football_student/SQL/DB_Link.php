<?php
function openConnection(){
    $servername = "localhost";
    $username = "Admin";
    $password = "CkN21p3m";

    try 
    {
        $conn = new PDO("mysql:host=$servername;dbname=toetsweek30", $username, $password);
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
