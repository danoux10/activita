<?php
$dataSelects ='20';

function tableSelect(){
	global $dataSelects;
	for ($i = 0; $i < $dataSelects; $i++){?>
		<div class="table-line table-line-select" id="tableSelect<?php echo $i ?>">
			<label for="act<?php echo $i ?>" class="element-body">
				<p>12/12/2022</p>
			</label>
			
			<label for="act<?php echo $i ?>" class="element-body">
				<p>coding</p>
			</label>
			
			<label for="act<?php echo $i ?>" class="element-body">
				<p>10:00</p>
			</label>
			
			<label for="act<?php echo $i ?>" class="element-body">
				<p>11:00</p>
			</label>
			
			<label for="act<?php echo $i ?>" class="element-body">
				<p>01:00</p>
			</label>
			
			<label for="act<?php echo $i ?>" class="element-body">
				<p>activiter <?php echo $i ?></p>
			</label>
			
			<label for="act<?php echo $i ?>" class="element-body">
				<input type="radio" name="tableSelect" class="radio-select-data" value="<?php echo $i ?>" id="act<?php echo $i ?>">
				<span class="radio"></span>
			</label>
		</div>
	<?php }
}

function tableDay(){
	global $dataSelects;
	for ($i = 0; $i < $dataSelects; $i++){?>
		<div class="table-line table-line-day" id="tableDay<?php echo $i ?>">
			<label for="ac<?php echo $i ?>" class="element-body">
				<p>12/12/2022</p>
			</label>
			
			<label for="ac<?php echo $i ?>" class="element-body">
				<p>coding</p>
			</label>
			
			<label for="ac<?php echo $i ?>" class="element-body">
				<p>10:00</p>
			</label>
			
			<label for="ac<?php echo $i ?>" class="element-body">
				<p>11:00</p>
			</label>
			
			<label for="ac<?php echo $i ?>" class="element-body">
				<p>01:00</p>
			</label>
			
			<label for="ac<?php echo $i ?>" class="element-body">
				<p>activiter <?php echo $i ?></p>
			</label>
			
			<label for="ac<?php echo $i ?>" class="element-body">
				<input type="radio" name="tableDay" class="radio-day-data" value="<?php echo $i ?>" id="ac<?php echo $i ?>">
				<span class="radio"></span>
			</label>
		</div>
	<?php }
}