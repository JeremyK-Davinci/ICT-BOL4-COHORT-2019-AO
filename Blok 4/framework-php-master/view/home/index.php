<div class="container">
	<table class="table2" border="1">
		<tr>
			<th>#</th>
			<th>Naam</th>
            <th>Leeftijd</th>
            <th>Huur</th>
		</tr>
	<?php foreach($horse as $rent){?>	
		<tr>
			<td><?= $rent['id']?></td>
			<td><?= $rent['name']?></td>
            <td><?= $rent['age']?></td>
			<td>
			<?php if($rent['rent_id'] == NULL){?>
				<a href="<?= URL ?>rent/index">Huur</a>
			<?php }else{?>
				<a href="<?= URL ?>details/index/<?= $rent['name']?>">Details</a>
			<?php }?>
			</td>
		</tr>
    <?php }?>
	</table>
</div>