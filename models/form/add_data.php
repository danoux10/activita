<form action="" method="post" id="data-add">
    <fieldset class="">
        <legend>Add Data</legend>

        <span>
            <label>Date : </label>
            <input type="date">
        </span>

        <span class="select">
            <label>activity : </label>
            <!--subanchor select-add cf controller function select-->
            <div class="select-box">
                <div class="options-container" id="options-container-add">
                    <?php echo selectAdd(); ?>
                </div>
                                    
                <div class="selected" id="selected-add">
                    Select Activity
                </div>
            </div>
        </span>

        <div class="grid grid-cols-2 gap-4 mt-4">
            <span>
                <label>Heure Début : </label>
                <input type="time">
            </span>
            
            <span>
                <label>Heure Fin : </label>
                <input type="time">
            </span>
        </div>

        <span class="my-4">
            <label>Durée : </label>
            <input type="time">
        </span>

        <span class="flex items-center flex-col">
            <label>Description : </label>
            <textarea name="" value="Bonjour je suis la" cols="30" rows="2"></textarea>
        </span>

        <span class="w-full my-4 flex justify-around">
            <button type="submit" class="btn-valid"><i class="fa-solid fa-check"></i> Add Data</button>
            <button type="reset" class="btn-cancel"><i class="fa-solid fa-xmark"></i> Cancel</button>
        </span>

    </fieldset>
</form>
