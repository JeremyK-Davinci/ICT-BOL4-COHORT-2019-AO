<?php
    require(ROOT . "model/DetailsModel.php");
    $id = $_GET['id'];

function index($id)
{
	render("details/index", array(
        'horse' => details($id),
        'rent' => rentDetails($id),
        'cost' => rentCost($id)
    ));
}
function edit($id)
{
    render("details/edit", array(
        'rent' => rentDetails($id),
        'user' => getAllStudents(),
        'horse' => getAllHorses()
    ));
}

function update($id)
{
    $RT = $_POST['time'];
    $RN = $_POST['user'];
    $RH = $_POST['horse'];
    rentDetailUpdate($RT, $RN, $RH);

    index($id);
}

function delete($id)
{
    render("details/delete", array(
        'horse' => details($id),
    ));
}

function destroy($id)
{
    removeRent($id);
    render("home/index", array(
		'horse' => getAllHorses()
	));
}