<?php
    require(ROOT . "model/HorseModel.php");
    $id = $_GET['id'];

function index()
{
	render("horse/index", array(
        'horse' => getAllHorses()
    ));
}

function edit($id)
{
    render("horse/edit", array(
        'horse' => details($id)
    ));
}
function update($id)
{
    $HN = $_POST['name'];
    $HA = $_POST['age'];
    horseUpdate($HN, $HA, $id);

    index();
}

function delete($id)
{
    render("horse/delete", array(
        'details' => details($id)
    ));
}
function destroy($id)
{
    removeHorse($id);
    index();
}

function add()
{
    render("horse/add");
}
function create()
{
    $HN = $_POST['name'];
    $HA = $_POST['age'];
    newHorse($HN, $HA);
    index();
}
