<?php
    require ("DB_Link.php");

    function getCountries(){
        try
        {
            $conn = openConnection();
            $query = $conn->prepare("SELECT * FROM countries");
            $query->execute();
            return $query->fetchall();
        }
        catch(PDOException $e)
        {
            echo "Connection failed: " . $e->getMessage();
        }
    }

    function getCountry(){
        $country = $_GET['country'];
        try
        {
            $conn = openConnection();
            $query = $conn->prepare("SELECT * FROM countries WHERE id=:id");
            $query->bindParam(":id", $country);
            $query->execute();
            return $query->fetchall();
        }
        catch(PDOException $e)
        {
            echo "Connection failed: " . $e->getMessage();
        }
    }

    function getClubCountry(){
        $country = $_GET['country'];
        try
        {
            $conn = openConnection();
            $query = $conn->prepare("SELECT * FROM football WHERE countryID=:id");
            $query->bindParam(":id", $country);
            $query->execute();
            return $query->fetchall();
        }
        catch(PDOException $e)
        {
            echo "Connection failed: " . $e->getMessage();
        }
    }

    function getClubs(){
        try
        {
            $conn = openConnection();
            $query = $conn->prepare("SELECT * FROM football");
            $query->execute();
            return $query->fetchall();
        }
        catch(PDOException $e)
        {
            echo "Connection failed: " . $e->getMessage();
        }
    }

    function getClub(){
        $club = $_GET['club'];
        try
        {
            $conn = openConnection();
            $query = $conn->prepare("SELECT * FROM football WHERE id=:id");
            $query->bindParam(":id", $club);
            $query->execute();
            return $query->fetchall();
        }
        catch(PDOException $e)
        {
            echo "Connection failed: " . $e->getMessage();
        }
    }

    function getCountryClub(){
        $club = $_GET['club'];
        try
        {
            $conn = openConnection();
            $query = $conn->prepare("SELECT * FROM countries WHERE id=(SELECT `countryID` FROM football WHERE id=:id)");
            $query->bindParam(":id", $club);
            $query->execute();
            return $query->fetchall();
        }
        catch(PDOException $e)
        {
            echo "Connection failed: " . $e->getMessage();
        }
    }

    function clubcount(){
        try
        {
            $conn = openConnection();
            $query = $conn->prepare("SELECT id From football");
            $query->execute();
            return $query->fetchall();
        }
        catch(PDOException $e)
        {
            echo "Connection failed: " . $e->getMessage();
        }
    }

    function countrycount(){
        try
        {
            $conn = openConnection();
            $query = $conn->prepare("SELECT id From countries");
            $query->execute();
            return $query->fetchall();
        }
        catch(PDOException $e)
        {
            echo "Connection failed: " . $e->getMessage();
        }
    }

    function removeClub(){
        $clubID = $_GET['club'];
        try
        {
            $conn = openConnection();
            $query = $conn->prepare("DELETE FROM football WHERE id=:id");
            $query->bindParam(":id", $clubID);
            $query->execute();
            close($conn);
            header('Location:../index.php');
        }
        catch(PDOException $e)
        {
            echo "Connection failed: " . $e->getMessage();
        }
    }

    function editClub(){
        $clubID = $_GET['club'];
        $name = sanitize($_POST['name']);
        $country = sanitize($_POST['country']);
        $image = sanitize($_POST['image']);
        $place = sanitize($_POST['place']);
        $stadium = sanitize($_POST['stadium']);
        try{
            $conn = openConnection();
            $query = $conn->prepare("UPDATE football SET name=:named, countryID=:lived, img=:picture, place=:home, stadium=:played WHERE id=:id");
            $query->bindParam(":named", $name);
            $query->bindParam(":lived", $country);
            $query->bindParam(":id", $clubID);
            $query->bindParam(":picture", $image);
            $query->bindParam(":home", $place);
            $query->bindParam(":played", $stadium);
            $query->execute();
            close($conn);
            header('Location:../index.php');
        }
        catch(exception $e){
            echo "Connection failed: " . $e->getMessage();
        }
    }

    function newClub(){
        $name = sanitize($_POST['name']);
        $country = sanitize($_POST['Country']);
        $image = sanitize($_POST['image']);
        $establish = sanitize($_POST['established']);
        $place = sanitize($_POST['place']);
        $stadium = sanitize($_POST['stadium']);
        $description = sanitize($_POST['description']);
        try
        {
            $conn = openConnection();
            $query = $conn->prepare("INSERT INTO football (`name`, countryID, img, established, place, stadium, `description`) VALUES (:named, :lived, :picture, :establish, :home, :played, :described)");
            $query->bindParam(":named", $name);
            $query->bindParam(":lived", $country);
            $query->bindParam(":picture", $image);
            $query->bindParam(":establish", $establish);
            $query->bindParam(":home", $place);
            $query->bindParam(":played", $stadium);
            $query->bindParam(":described", $description);
            $query->execute();
            close($conn);
            header('Location:../index.php');
        }
        catch(PDOException $e)
        {
            echo "Connection failed: " . $e->getMessage();
        }
    }

    function sanitize($data) {
        $data = trim($data);
        $data = htmlspecialchars($data);
        $data = stripcslashes($data);
        return $data;
    }