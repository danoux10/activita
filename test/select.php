<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossorigin="anonymous" referrerpolicy="no-referrer"/>
    <link rel="stylesheet" href="../dist/tailwind.css">
    <link rel="stylesheet" href="../css/style.css" type="text/css">
<!--    <link rel="stylesheet" href="style.css">-->
    <link rel="stylesheet" href="styleBis.css">

	<?php require '../controller/function/table.php';?>

    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body class="dark">
<?php //include_once '../controller/navbar.php'; ?>

<main class="w-screen" id="Graph">
<!--link graph-content -->
    <section class="w-3/6 h-full flex items-center justify-center " id="graph-content">
    <!--sublink graph-container-->
        <div class="graph-container w-11/12 h-full ">
        <!--anchor graphique-->
            <div id="graphique">
                <!--subanchor bar-->
                <div id="bar-content">
                    <canvas id="bar"></canvas>
                </div>
                <!--subanchor pie-->
                <div id="pie-content">
                    <canvas id="pie"></canvas>
                </div>
            </div>
            <!--anchor tableSelect-content-->
            <div id="tableSelect-content" class="overflow-scroll table-content">
              <!--subanchor tableSelect in file controller functioh table.php-->
              <?php
				echo tableSelect();
              ?>
            </div>
        </div>
        <!--sublink btn-container graph-->
        <div class="btn-container ml-2.5">
            <ul>
                <li id="bar-btn"><i class="fa-solid fa-chart-column"></i></li>
                <li id="pie-btn"><i class="fa-solid fa-chart-pie"></i></li>
                <li id="table-btn"><i class="fa-solid fa-table-list"></i></li>
            </ul>
        </div>
    </section>
    <!--link graphForm-content-->
    <section class="w-3/6 h-full flex items-center justify-between" id="graphForm-content">
        <!--sublink fomr-container-->
        <div class="form-container w-11/12 h-full flex flex-col items-center justify-center content-around">
            <!--anchor form-content-->
            <div class="h-1/2 w-full mt-5 flex items-center justify-center" id="form-content">
                <div class="flex">
                    <!--subanchor data-add-->
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
                                        Select Video Category
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
                    
                            <span class="w-full my-4">
                                <button type="submit" class="btn-valid">Add Data</button>
                            </span>

                        </fieldset>
                    </form>
                    
                    <!--subanchor update-data-->
                    <form action="" method="post" id="data-update" class="">
                        <fieldset class="">
                            <legend>Update Data</legend>
                            
                                <span>
                                    <label>Date : </label>
                                    <input type="date">
                                </span>

                            <span class="select">
                                <label>activity : </label>
                                <!--subanchor select-add cf controller function select-->
                                <div class="select-box">
                                    <div class="options-container" id="options-container-update">
                                        <?php echo selectUpdate();?>
                                    </div>
                                    
                                    <div class="selected" id="selected-update">
                                        Select Video Category
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
                                <button type="submit" class="btn-update">Update Data</button>
                                <button type="submit" class="btn-delete">Delete Data</button>
                            </span>

                        </fieldset>
                    </form>
                </div>
                <!--subanchor select-data-->
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
                                        Select Video Category
                                    </div>
                                </div>
                            </span>
                        <span class="w-full mb-4">
                            <button type="submit" class="valid-btn">Select Data</button>
                        </span>
                    </fieldset>
                </form>
            </div>
            <!--anchor data-today-->
            <div id="data-today" class="w-full table-content mt-16 overflow-scroll flex">
              <!--subanchor tableToday in file controller functioh table.php -->
              <?php
				echo tableDay();
			  ?>
            </div>
        </div>
        <!--sublink btn-container formGraph-->
        <div class="btn-container mr-2.5">
            <ul>
                <li id="add-data-btn"><i class="fa-solid fa-plus"></i></li>
                <li id="update-data-btn"><i class="fa-solid fa-pen"></i></li>
                <li id="select-data-btn"><i class="fa-solid fa-magnifying-glass"></i></li>
                <li id="table-today-btn"><i class="fa-solid fa-table-list"></i></li>
            </ul>
        </div>
    </section>
</main>

<!--<script src="script.js"></script>-->
<script src="../scripts/select.js"></script>
<script src="../scripts/day&night.js"></script>

<script src="../scripts/pieChart.js"></script>
<script src="../scripts/barChart.js"></script>
<!---->
<script src="../scripts/toggleMain.js"></script>
<!---->
<script src="../scripts/toggleFormData.js"></script>
<script src="../scripts/toggleGraph.js"></script>
</body>
</html>