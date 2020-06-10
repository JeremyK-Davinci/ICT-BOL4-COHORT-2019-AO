<div class="container">
	<table class="table1" border="1">
		<tr>
			<th>#</th>
			<th>Naam</th>
            <th>Age</th>
			<th>Bewerk</th>
			<th>Verwijder</th>
		</tr>
		
	<?php foreach($horse as $paard){?>
		<tr>
			<td><?= $paard['id'];?></td>
			<td><?= $paard['name'];?></td>
            <td><?= $paard['age'];?></td>
			<td><a href="<?= URL ?>horse/edit/<?= $paard['id']?>">Bewerk</a></td>
			<td><a href="<?= URL ?>horse/delete/<?= $paard['id']?>">Verwijder</a></td>
		</tr>
	<?php }?>
	</table>
    <div class="text-center">
        <a href="<?= URL ?>horse/add">Toevoegen</a>
    </div>
</div>