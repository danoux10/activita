<?php

	function viewCard(){
		$nbr_cards = 20;
		for ($i = 0; $i < $nbr_cards; $i++){
			?>
			
			<div class="table-cel">
				<input type="radio" name="card" value="<?php echo $i;?>" id="<?php echo $i; ?>">
				<label class="preview-card" id="card<?php echo $i; ?>" style="background: #880000; fill: #fff; stroke: #fff; color: #fff"  for="<?php echo $i; ?>">
					<span class="preview-icon">
                        <?php include '../icon/0.svg';?>
					</span>
					<span class="preview-title">
                        <p>Coding</p>
                    </span>
				</label>
            </div>
<?php }
	}