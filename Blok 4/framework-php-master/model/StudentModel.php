<?php

function getAllStudents() 
{
	$db = openDatabaseConnection();

	$sql = "SELECT * FROM student";
	$query = $db->prepare($sql);
	$query->execute();

	$db = null;

	return $query->fetchAll();
}

function oneStudent($data)
    {
        $conn = openDatabaseConnection();

        $sql = $conn->prepare("SELECT * FROM student WHERE student_id=:id");
        $sql->bindParam(":id", $data);
        $sql->execute();

        $conn = NULL;

        return $sql->fetchAll();
    }

function studentUpdate($data1, $data2)
{
	$conn = openDatabaseConnection();

	$query = $conn->prepare("UPDATE student SET student_name=:new WHERE student_id=:id");
	$query->bindParam(":new", $data1);
	$query->bindParam(":id", $data2);
	$query->execute();

	$conn = NULL;
}

function removeStudent($data)
{
	$conn = openDatabaseConnection();

	$query = $conn->prepare("DELETE FROM student WHERE student_id=:id");
	$query->bindParam(":id", $data);
	$query->execute();

	$conn = NULL;
}
