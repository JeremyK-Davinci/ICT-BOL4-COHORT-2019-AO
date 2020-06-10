<?php
    function getAllHorses() 
    {
        $db = openDatabaseConnection();
    
        $sql = "SELECT * FROM horse";
        $query = $db->prepare($sql);
        $query->execute();
    
        $db = null;
    
        return $query->fetchAll();
    }
    function details($data)
    {
        $conn = openDatabaseConnection();

        $sql = $conn->prepare("SELECT * FROM horse WHERE id=:paard");
        $sql->bindParam(":paard", $data);
        $sql->execute();

        $conn = NULL;

        return $sql->fetchAll();
    }
    function horseUpdate($data1, $data2, $data3)
    {
        $conn = openDatabaseConnection();

        $query = $conn->prepare("UPDATE horse SET name=:HN, age=:HA WHERE id=:id");
        $query->bindParam(":HN", $data1);
        $query->bindParam(":HA", $data2);
        $query->bindParam(":id", $data3);
        $query->execute();

        $conn = NULL;
    }
    function removeHorse($data)
    {
        $conn = openDatabaseConnection();

        $query = $conn->prepare("DELETE FROM horse WHERE id=:id");
        $query->bindParam(":id", $data);
        $query->execute();

        $conn = NULL;
    }
    function newHorse($data1, $data2)
    {
        $conn = openDatabaseConnection();

        $query = $conn->prepare("INSERT INTO horse (name, age) VALUES (:HN, :HA)");
        $query->bindParam(":HN", $data1);
        $query->bindParam(":HA", $data2);
        $query->execute();

        $conn = NULL;
    }