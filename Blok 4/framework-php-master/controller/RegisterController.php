<?php

    require(ROOT . "model/RegisterModel.php");
    require(ROOT . "model/StudentModel.php");

function index()
{
	render("register/index");
}

function create()
{
    $name = $_POST['name'];
    newStudent($name);

    $students = getAllStudents();
    render("student/index", ["students" => $students]);
}
