<?php foreach($details as $input){?>
<div class="col-8 offset-2 pt-5 text-center">
    <form action="<?= URL ?>student/update/<?= $input['student_id']?>" method="post">
        <label for="user">Student Name</label>
            <input type="text" name="user" onfocus="this.value=''" value="<?= $input['student_name']?>" class="form-control col-8 offset-2">
        <input type="submit" value="Update" class="submit">
    </form>
</div>
<?php }?>
