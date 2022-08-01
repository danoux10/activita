<?php
  $act=10;
  $bdd = new PDO('mysql:host=localhost;dbname=icon;charset=utf8', 'root', 'password');
  
  $iconAll = $bdd->query("SELECT * from picture");
  
	//link select add actvity data
    function selectAdd(){
        //sublink variable
        global $act;
        
        //sublink create option
        for ($i = 0; $i < $act; $i++) { ?>
            <div class="option option-add">
                <input type="radio" class="radio" name="" id="act<?php echo $i ?>">
                <label for="act<?php echo $i ?>">Activity <?php echo $i ?></label>
            </div>
        <?php }
    }
	
	//link select update actvity data
	function selectUpdate(){
        //sublink variable
        global $act;
	
        //sublink create option
        for ($i = 0; $i < $act; $i++) { ?>
            <div class="option option-update">
                <input type="radio" class="radio" name="" id="act<?php echo $i ?>">
                <label for="act<?php echo $i ?>">Activity <?php echo $i ?></label>
            </div>
        <?php }
    }
	
	//link select select actvity data
	function selectSel(){
        //sublink variable
		global $act;
        
        //sublink create option
		for ($i = 0; $i < $act; $i++) { ?>
            <div class="option option-sel">
                <input type="radio" class="radio" name="" id="act<?php echo $i ?>">
                <label for="act<?php echo $i ?>">Activity <?php echo $i ?></label>
            </div>
        <?php }
    }

    //link select Icon add
      function selectIconAdd(){
        global $iconAll;
        foreach ($iconAll as $iconData){
            $iconId = $iconData['id'];
            $iconTag = $iconData['tag'];
            ?>
            <div class="option option-icon">
                <input type="radio" name="" id="icon<?php echo $iconId; ?>" value="<?php echo $iconTag; ?>" class="radio">
                <label for="icon<?php echo $iconId; ?>" title="<?php echo $iconTag; ?>">
                  <?php include "../icon/$iconTag";?>
                </label>
            </div>
          <?php
        }
      }
      
      //link select Icon update
      function selectIconUpdate(){
        global $iconAll;
        foreach ($iconAll as $iconData){
            $iconId = $iconData['id'];
            $iconTag = $iconData['tag'];
            ?>
            <div class="option option-icon">
                <input type="radio" name="" id="icon<?php echo $iconId; ?>" value="<?php echo $iconTag; ?>" class="radio">
                <label for="icon<?php echo $iconId; ?>" title="<?php echo $iconTag; ?>">
                  <?php include "../icon/$iconTag";?>
                </label>
            </div>
          <?php
        }
      }
