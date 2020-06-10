<?php foreach($horse as $data){?>
    <h1 class="horseName"><?= $data['name']?></h1>
    <p class="horseAge">
        <?php if($data['age'] <= '2'){?>
            <?= "Pony age: ", $data['age']?>
        <?php } else{?>
            <?= "Horse age: ", $data['age']?>
        <?php }?>
    </p>
    <?php foreach($rent as $user){?>
    <p class="renter">Gehuurd door: <?= $user['rent_name']?></p>
    <p class="time">Gehuurd voor: <?= $user['rent_time']?> Minuten</p>
    <?php }?>
    <?php foreach($cost as $price){?>
    <p class="rentCost">Totaal Prijs: €<?= $price['cost']?></p>
    <?php }?>
    <p><a class="edit" href="<?= URL ?>details/edit/<?= $data['name']?>">Bewerken</a></p>
    <p><a class="remove" href="<?= URL ?>details/delete/<?= $data['name']?>">Verwijderen</a></p>
<?php }?>

