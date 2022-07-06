<form action="" method="post" id="data-select" class="">
    <fieldset class="p-4">
        <legend>Select Data</legend>

        <span class="my-4">
            <label >Date Début : </label>
            <input type="date">
        </span>

        <span>
            <label >Date Fin : </label>
            <input type="date">
        </span>

        <span class="select my-4">
            <label>activity : </label>
            <!--subanchor select-add cf controller function select-->
            <div class="select-box">
                <div class="options-container" id="options-container-sel">
                    <div class="option option-sel">
                        <input type="radio" class="radio" name="" id="act">
                        <label for="act">all</label>
                    </div>
                    <?php echo selectSel(); ?>
                </div>
                
                <div class="selected" id="selected-sel">
                    Select Activity
                </div>
            </div>
        </span>
        
        <span class="w-1/2 h-20 mb-4 flex flex-col justify-between">
            <button type="submit" class="btn-valid"><i class="fa-solid fa-check"></i> Select Data</button>
            <button type="submit" class="btn-download"><i class="fa-solid fa-down-long"></i> Download</button>
        </span>
    </fieldset>
</form>
