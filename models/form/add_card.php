<form action="" class="w-full h-1/2" id="add-card">
	<fieldset>
		<legend>New Card</legend>
		
		<div class="flex w-full justify-around items-center color-containt">
                    <span class="flex justify-around">
                        <label for="color-bg-add">Background</label>
                        <input type="color" name="color-bg" id="color-bg-add" value="#880000">
                        <label for="color-bg-add" id="bg-value-add"></label>
                    </span>
			
			<span class="flex justify-around">
                        <label for="color-text-add">Color</label>
                        <input type="color" name="color-text" id="color-text-add" value="#ffffff">
                        <label for="color-text-add" id="text-value-add"></label>
                    </span>
		</div>
		
		<div class="flex w-full justify-around items-center">
                    <span>
                        <label for="card-title-add">Title Card :</label>
                        <input type="text" oninput="changeTextAdd(this)" id="card-title-add" name="card-title" placeholder="Coding">
                    </span>
			
			<span class="flex items-center justify-around select">
                        <p>Icon</p>
                        <div class="select-box">
                        <!--subanchor option container generate in controller/function/select-->
                            <div class="options-container" id="options-container-icon-add">
                                <?php echo selectIconUpdate()?>
                            </div>
	
	                        <!--subanchor Selected-->
                            <div class="selected" id="select-icon-add">
                              0.svg
                            </div>
                        </div>
                    </span>
		</div>
		
		
		<div class="flex w-full justify-around">
			<button type="submit" class="btn-valid">
				<i class="fa-solid fa-check"></i>
				Add Card
			</button>
		</div>
		
		<fieldset class="preview-content">
			<legend>preview</legend>
			<div class="preview-card" id="preview-add">
                        <span id="preview-icon-add" class="preview-icon">
                            <?php include '../icon/0.svg'?>
                        </span>
				<span id="preview-title-add" class="preview-title">
                            <p>coding</p>
                        </span>
			</div>
		</fieldset>
	</fieldset>
</form>
