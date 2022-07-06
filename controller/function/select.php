<?php
  $act=10;
    function selectAdd(){
        global $act;
        for ($i = 0; $i < $act; $i++) { ?>
            <div class="option option-add">
                <input type="radio" class="radio" name="" id="act<?php echo $i ?>">
                <label for="act<?php echo $i ?>">Activity <?php echo $i ?></label>
            </div>
        <?php }
    }
    
    function selectUpdate(){
        global $act;
        for ($i = 0; $i < $act; $i++) { ?>
            <div class="option option-update">
                <input type="radio" class="radio" name="" id="act<?php echo $i ?>">
                <label for="act<?php echo $i ?>">Activity <?php echo $i ?></label>
            </div>
        <?php }
    }
    
    function selectSel(){
        global $act;
        for ($i = 0; $i < $act; $i++) { ?>
            <div class="option option-sel">
                <input type="radio" class="radio" name="" id="act<?php echo $i ?>">
                <label for="act<?php echo $i ?>">Activity <?php echo $i ?></label>
            </div>
        <?php }
    }?>