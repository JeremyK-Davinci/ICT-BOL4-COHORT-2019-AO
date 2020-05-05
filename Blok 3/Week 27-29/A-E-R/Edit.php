<?php include ("../Includes/DB_Connect.php");
    openConnection();
    $secondary = GetGuides();
    $plan = Editor();
?>
<?php $gameID = $_GET['game'];?>
<?php include ("../Includes/Header2.php");?>
    <?php foreach($plan as $info){?>
    <div id="edit-Container">
        <form action="Functions/EditFunctions.php?game=<?= $gameID;?>" method="post">
        <div class="row">
            <label for="times">Change time</label>
            <input type="time" name="times" class="input" Value=<?=$info['start_time']?>>
        </div>
        <div class="row">
            <label for="guide">Change guide</label>
            <input list="guides" name="guide" class="input" Value=<?=$info['guide_id']?>>
        </div>
        <div class="row">
            <label for="players">Change Players</label>
            <input type="text" name="players" class="input" Value="<?=$info['players']?>">
        </div>
        <div class="row">
            <input class="submit" type="submit" value="submit">
        </div>
        </form>
        <datalist id="guides">
        <?php foreach ($secondary as $guide){?>
            <select name="guide">
                <option value="<?= $guide['id']?>"><?= $guide['name']?></option>
            </select>
        <?php } ?>
    </datalist>
    </div>
    <?php } ?>
<?php include ("../Includes/Footer.php");?>