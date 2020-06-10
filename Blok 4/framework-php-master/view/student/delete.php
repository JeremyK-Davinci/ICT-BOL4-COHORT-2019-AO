<div class="col-8 offset-2 pt-5 text-center">
    <?php foreach($details as $person){?>
        <p>Weet u zeker dat u deze student wilt verwijderen</p>
        <a href="<?= URL ?>student/destroy/<?= $person['student_id']?>">Ja</a>
        <a href="<?= URL ?>student/index/<?= $person['student_id']?>">Nee</a>
    <?php }?>
</div>