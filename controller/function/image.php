<style>
    body {
        background: #000;
        color: #fff;
    }
</style>

<form action="" method="post" enctype="multipart/form-data">
    <input type="file" name="iconAdd[]" multiple>
    <button type="submit" name="add" class="valid-btn">add</button>
</form>
<?php
	@ $ajout = $_POST['add'];
	
	$bdd = new PDO('mysql:host=localhost;dbname=icon;charset=utf8', 'root', 'password');
	
	if (isset($ajout)) {
		foreach ($_FILES['iconAdd']['name'] as $key => $val) {
			move_uploaded_file($_FILES['iconAdd']['tmp_name'][$key], '../../icon/' . $val);
			$addIcon = $bdd->prepare('insert into picture set tag=?');
			$addIcon->execute([$val]);
		}
	}
	
