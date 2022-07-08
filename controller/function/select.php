<?php
  $act=10;
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
    }?>