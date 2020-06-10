<div class="container">
	<table class="table1" border="1">
		<tr>
			<th>#</th>
			<th>Naam</th>
			<th>bewerk</th>
			<th>verwijder</th>
		</tr>
		
	<?php foreach($students as $item){?>
		<tr>
			<td><?= $item['student_id'];?></td>
			<td><?= $item['student_name'];?></td>
			<td><a href="<?= URL ?>student/edit/<?= $item['student_id']?>">Bewerk</a></td>
			<td><a href="<?= URL ?>student/delete/<?= $item['student_id']?>">Verwijder</a></td>
		</tr>
	<?php }?>
	</table>
</div>