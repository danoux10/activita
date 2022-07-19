<!--link form add data used in graph.php-->
<form action="" method="post" id="data-add">
    <fieldset class="">
        <legend>Add Data</legend>
        
        <!--sublink date-->
        <span>
            <label>Date : </label>
            <input type="date">
        </span>
        
        <!--sublink select-->
        <span class="select">
            <p>activity : </p>
            <!--anchor select-add cf controller function select-->
            <div class="select-box">
                <!--subanchor option container generate in controller/function/select-->
                <div class="options-container" id="options-container-add">
                    <?php echo selectAdd(); ?>
                </div>
                
                <!--subanchor Selected-->
                <div class="selected" id="selected-add">
                    Select Activity
                </div>
            </div>
        </span>
        
        <!--sublink content Heure Debut/Fin-->
        <div class="grid grid-cols-2 gap-4 mt-4">
            <!--anchor heure Debut-->
            <span>
                <label>Heure Début : </label>
                <input type="time">
            </span>
            
            <!--anchor heure Fin-->
            <span>
                <label>Heure Fin : </label>
                <input type="time">
            </span>
        </div>
        
        <!--sublink durée-->
        <span class="my-4">
            <label>Durée : </label>
            <input type="time">
        </span>

        <!--sublink Description-->
        <span class="flex items-center flex-col">
            <label>Description : </label>
            <textarea name="" value="Bonjour je suis la" cols="30" rows="2"></textarea>
        </span>
        
        <!--sublink button container-->
        <span class="w-full my-4 flex justify-around">
            <button type="submit" class="btn-valid"><i class="fa-solid fa-check"></i> Add Data</button>
            <button type="reset" class="btn-cancel"><i class="fa-solid fa-xmark"></i> Cancel</button>
        </span>

    </fieldset>
</form>