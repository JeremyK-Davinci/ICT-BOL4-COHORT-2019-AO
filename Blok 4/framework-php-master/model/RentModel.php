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

    function getAllStudents() 
    {
        $db = openDatabaseConnection();
    
        $sql = "SELECT * FROM student";
        $query = $db->prepare($sql);
        $query->execute();
    
        $db = null;
    
        return $query->fetchAll();
    }

    function newReservation($data1, $data2, $data3){
        $conn = openDatabaseConnection();

        $query = $conn->prepare("INSERT INTO rent (rent_time, rent_name, rent_horse) VALUES (:RT, :RN, :RH)");
        $query->bindParam(":RT", $data1);
        $query->bindParam(":RN", $data2);
        $query->bindParam(":RH", $data3);
        $query->execute();

        $sql = $conn->prepare("UPDATE horse SET rent_id = (SELECT id FROM rent WHERE rent_horse = :RH) WHERE name=:RH");
        $sql->bindParam(":RH", $data3);
        $sql->execute();

        $conn = NULL;
    }