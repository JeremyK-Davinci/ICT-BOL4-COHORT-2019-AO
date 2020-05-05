<?php include ("Includes/DB_Connect.php");
    openConnection();
    $results = PlanningCheck();
?>
<?php include ("Includes/Header.php");?>

    <table>
        <tr>
            <th colspan="7">Gepland</th>
        </tr>
        <tr>
            <th>Naam</th>
            <th>Start</th>
            <th>Duur</th>
            <th>Begeleider</th>
            <th>View</th>
            <th>Edit</th>
            <th>Remove</th>
        </tr>
        <?php foreach ($results as $row){?>
        <tr>
            <td><?= $row['Naam'] ?></td>
            <td><?= $row['Start Time'] ?></td>
            <td><?= $row['Duration'] ?> Min.</td>
            <td><?= $row['Begeleider']?></td>
            <td><a class="View" href="Game.php?game=<?= $row['id']?>">View</a></td>
            <td><a class="Edit" href="A-E-R/Edit.php?game=<?= $row['id']?>">Edit</a></td>
            <td><a class="Remove" href="A-E-R/Remove.php?game=<?= $row['id']?>">Remove</a></td>
        </tr>
        <?php } ?>
    </table>
    <div id="button-Container">
        <a class="Add" href="A-E-R/Add.php">Add<span></span><span></span><span></span><span></span></a>
    </div>

<?php include ("Includes/Footer.php");?>