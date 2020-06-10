<?php foreach($horse as $update){?>
<div class="col-8 offset-2 pt-5 text-center">
    <form action="<?= URL ?>horse/update/<?= $update['id']?>" method="post">
        <label for="name">Horse Name</label>
            <input type="text" name="name" onfocus="this.value=''" value="<?= $update['name']?>" class="form-control col-8 offset-2">
        <label for="age">Horse Age</label>
            <input type="text" name="age" onfocus="this.value=''" value="<?= $update['age']?>" class="form-control col-8 offset-2">
        <input type="submit" value="Update" class="submit">
    </form>
</div>
<?php }?>
