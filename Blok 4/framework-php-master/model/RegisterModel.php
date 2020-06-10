<?php

    function newStudent($data){
        $conn = openDatabaseConnection();

        $query = $conn->prepare("INSERT INTO student (student_name) VALUES (:UN)");
        $query->bindParam(":UN", $data);
        $query->execute();

        $conn = NULL;
    }