<!--link form update data used in graph.php-->
<form action="" method="post" id="data-update" class="">
    <fieldset class="">
        <legend>Update Data</legend>
        
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
                <div class="options-container" id="options-container-update">
                    <?php echo selectUpdate(); ?>
                </div>
                
                <!--subanchor Selected-->
                <div class="selected" id="selected-update">
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
            <button type="submit" class="btn-update"><i class="fa-solid fa-pen-clip"></i> Update Data</button>
            <button type="submit" class="btn-delete"><i class="fa-solid fa-trash-can"></i> Delete Data</button>
        </span>

    </fieldset>
</form>