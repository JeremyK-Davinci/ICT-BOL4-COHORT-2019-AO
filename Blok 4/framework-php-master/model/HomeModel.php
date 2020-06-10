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