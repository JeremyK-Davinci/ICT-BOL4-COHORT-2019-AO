<?php

require(ROOT . "model/StudentModel.php");

$id = $_GET['id'];

function index()
{
	render("student/index", array(
		'students' => getAllStudents()
	));
}

function edit($id)
{
	render("student/edit", array(
		'details' => oneStudent($id),
		'students' => getAllStudents()
	));
}
function update($id)
{
	$name = $_POST['user'];
	studentUpdate($name, $id);
	index();
}

function delete($id)
{
    render("student/delete", array(
        'details' => oneStudent($id)
    ));
}

function destroy($id)
{
    removeStudent($id);
    index();
}