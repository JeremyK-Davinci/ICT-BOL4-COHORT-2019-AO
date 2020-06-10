<?php foreach($rent as $edit){?>
<div class="col-8 offset-2 pt-5 text-center">
    <form action="<?= URL ?>details/update/<?= $edit['rent_horse']?>" method="post">
        <label for="horse">Renter Horse</label>
            <input type="text" name="horse" value="<?= $edit['rent_horse']?>" readonly class="form-control col-8 offset-2">
        <label for="user">Renter Name</label>
            <input list="user" name="user" onfocus="this.value=''" value="<?= $edit['rent_name']?>" class="form-control col-8 offset-2">
        <label for="time">Rent Time</label>
            <input type="text" name="time" value="<?= $edit['rent_time']?>" class="form-control col-8 offset-2">
        <input type="submit" value="Update" class="submit">
    </form>
</div>
<?php }?>
<datalist id="user">
    <select name="user">
        <?php foreach($user as $data2){?>
            <option value="<?= $data2['student_name']?>"><?= $data2['student_name']?></option>
        <?php }?>
    </select>
</datalist>