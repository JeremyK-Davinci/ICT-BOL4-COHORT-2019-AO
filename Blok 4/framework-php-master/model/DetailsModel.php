<?php


    function details($data)
    {
        $conn = openDatabaseConnection();

        $sql = $conn->prepare("SELECT * FROM horse WHERE name=:paard");
        $sql->bindParam(":paard", $data);
        $sql->execute();

        $conn = NULL;

        return $sql->fetchAll();
    }

    function rentDetailUpdate($data1, $data2, $data3)
    {
        $conn = openDatabaseConnection();

        $query = $conn->prepare("UPDATE rent SET rent_time=:RT, rent_name=:RN WHERE rent_horse=:RH");
        $query->bindParam(":RT", $data1);
        $query->bindParam(":RN", $data2);
        $query->bindParam(":RH", $data3);
        $query->execute();

        $conn = NULL;

    }

    function rentDetails($data)
    {
        $conn = openDatabaseConnection();

        $sql = $conn->prepare("SELECT * FROM rent WHERE rent_horse=:paard");
        $sql->bindParam(":paard", $data);
        $sql->execute();

        $conn = NULL;

        return $sql->fetchAll();
    }

    function rentCost($data)
    {
        $conn = openDatabaseConnection();

        $sql = $conn->prepare("SELECT (rent_time / 60 * 55) as cost FROM rent WHERE rent_horse=:paard");
        $sql->bindParam(":paard", $data);
        $sql->execute();

        $conn = NULL;

        return $sql->fetchAll();
    }

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

    function removeRent($data)
    {
        $db = openDatabaseConnection();
    
        $query = $db->prepare("DELETE FROM rent WHERE rent_horse=:id");
        $query->bindParam(":id", $data);
        $query->execute();

        $sql = $db->prepare("UPDATE horse SET rent_id=NULL WHERE name=:id");
        $sql->bindParam(":id", $data);
        $sql->execute();

    
        $db = null;
    }