<div class="col-8 offset-2 pt-5 text-center">
    <?php foreach($horse as $paard){?>
        <p>Weet u zeker dat u de details van deze huur wilt verwijderen</p>
        <a href="<?= URL ?>details/destroy/<?= $paard['name']?>">Ja</a>
        <a href="<?= URL ?>details/index/<?= $paard['name']?>">Nee</a>
    <?php }?>
</div>