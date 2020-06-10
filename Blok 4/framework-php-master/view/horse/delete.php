<div class="col-8 offset-2 pt-5 text-center">
    <?php foreach($details as $horse){?>
        <p>Weet u zeker dat u dit paard wilt verwijderen</p>
        <a href="<?= URL ?>horse/destroy/<?= $horse['id']?>">Ja</a>
        <a href="<?= URL ?>horse/index/<?= $horse['id']?>">Nee</a>
    <?php }?>
</div>