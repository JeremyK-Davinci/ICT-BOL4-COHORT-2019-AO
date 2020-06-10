<div class="col-8 offset-2 text-center">
    <form action="create" method="post">
        <label for="rentHorse">Choose your horse</label><br>
            <input list="horse" name="rentHorse" class="form-control col-8 offset-2"><br>
        <label for="rentName">Who is renting</label><br>
            <input list="user" name="rentName" class="form-control col-8 offset-2"><br>
        <label for="rentTime">How long</label><br>
            <input type="number" name="rentTime" placeholder="minutes" class="form-control col-8 offset-2"><br>
        <input type="submit" value="submit">
    </form>
</div>
<datalist id="horse">
    <select name="horse">
        <?php foreach($horse as $data1){?>
            <option value="<?= $data1['name']?>"><?= $data1['name']?></option>
        <?php }?>
    </select>
</datalist>
<datalist id="user">
    <select name="user">
        <?php foreach($user as $data2){?>
            <option value="<?= $data2['student_name']?>"><?= $data2['student_name']?></option>
        <?php }?>
    </select>
</datalist>