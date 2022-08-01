<form action="" class="w-full h-1/2" id="update-card">
	<fieldset class="h-full">
		<legend>Update Card</legend>
		
		<div class="flex justify-around w-full color-containt">
                    <span class="flex justify-around">
                        <label for="color-bg">Background</label>
                        <input type="color" name="color-bg" id="color-bg-update">
                        <label for="color-bg" id="bg-value-update"></label>
                    </span>
			
			<span class="flex justify-around">
                        <label for="color-text">Color</label>
                        <input type="color" name="color-text" id="color-text-update">
                        <label for="color-text" id="text-value-update"></label>
                    </span>
		</div>
		
		<div class="flex w-full justify-around items-center">
                    <span>
                        <label for="card-title-update">Title Card :</label>
                        <input type="text" oninput="changeTextUpdate(this)" id="card-title-update" name="card-title">
                    </span>
			
			<span class="flex items-center justify-around select">
                        <p>Icon</p>
                        <div class="select-box">
                        <!--subanchor option container generate in controller/function/select-->
                            <div class="options-container" id="options-container-icon-update">
<!--                                --><?php //echo selectIconUpdate()?>
                            </div>
	
	                        <!--subanchor Selected-->
                            <div class="selected" id="select-icon-update">
                                <div id="selected-icon-update">
                                    0.svg
                                </div>
                            </div>
                        </div>
                    </span>
		</div>
		
		<div class="flex justify-around items-center">
                    
                    <span class="flex items-center justify-center">
                        <input type="checkbox" name="" id="actived-card">
                        <label for="actived-card">Card Active</label>
                    </span>
			
			<button type="submit" class="btn-update">
				<i class="fa-solid fa-pen-clip"></i>
				update
			</button>
		</div>
		
		<fieldset class="preview-update">
			<legend>preview</legend>
			<fieldset class="preview-content">
				<legend>Old Card</legend>
				<div id="old-card" class="preview-card">
                             <span id="preview-icon-update-old" class="preview-icon">
                                <?php include '../icon/0.svg'?>
                            </span>
					<span id="preview-title-update-old" class="preview-title">
                                <p>Coding</p>
                            </span>
				</div>
			</fieldset>
			<fieldset class="preview-content">
				<legend>New Card</legend>
				<div id="new-card" class="preview-card">
                                <span id="preview-icon-update-new" class="preview-icon">
                                    <?php include '../icon/0.svg'?>
                                </span>
					<span id="preview-title-update-new" class="preview-title">
                                    <p>Coding</p>
                               </span>
				</div>
			</fieldset>
		</fieldset>
	</fieldset>
</form>
