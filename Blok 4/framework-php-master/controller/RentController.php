<?php
	require(ROOT . "model/RentModel.php");

function index()
{
	render("rent/index", array(
		'horse' => getAllHorses(),
		'user' => getAllStudents()
	));	
}

function create()
{
	$RT = $_POST['rentTime'];
	$RN = $_POST['rentName'];
	$RH = $_POST['rentHorse'];
    newReservation($RT, $RN, $RH);

    $horse = getAllHorses();
    render("home/index", ["horse" => $horse]);
}