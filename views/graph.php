<!--Update penser a depalcer les require-->
<?php require './controller/function/table.php';?>
<?php require './controller/function/select.php';?>

<!--Graph main-->
<main class="w-screen" id="Graph">
    <!--link content graph & table data and btn container select-->
    <section class="w-3/6 h-full flex items-center justify-center" id="graph-content">
        <!--sublink container graph & table-->
        <div class="graph-container w-11/12 h-full ">
            <!--anchor graphique content bar/pie-->
            <div id="graphique">
                <!--subanchor bar graph content-->
                <div id="bar-content">
                    <canvas id="bar"></canvas>
                </div>
                <!--subanchor pie graph content -->
                <div id="pie-content">
                    <canvas id="pie"></canvas>
                </div>
            </div>
            <!--anchor tableSelect content -->
            <div id="tableSelect-content" class="overflow-scroll table-content">
                <?php
                  echo tableSelect();
                ?>
            </div>
        </div>
        <!--sublink btn container graph-->
        <div class="btn-container ml-2.5">
            <ul>
                <li id="bar-btn"><i class="fa-solid fa-chart-column"></i></li>
                <li id="pie-btn"><i class="fa-solid fa-chart-pie"></i></li>
                <li id="table-btn"><i class="fa-solid fa-table-list"></i></li>
            </ul>
        </div>
    </section>
    
    <!--link content form and btn container for graph-->
    <section class="w-3/6 h-full flex items-center justify-between" id="graphForm-content">
        <!--sublink form & tableToday-->
        <div class="form-container w-11/12 h-full flex flex-col items-center justify-center content-around">
            <!--anchor form content-->
            <div class="h-1/2 w-full mt-5 flex items-center justify-center" id="form-content">
              <div class="flex">
                  <!--subanchor add form add data in models/form -->
	              <?php include_once "models/form/add_data.php"; ?>

                  <!--subanchor add form update data in models/form -->
                  <?php include_once "models/form/modify_data.php"; ?>
              </div>
                <!--subanchor add form select data in models/form -->
                <?php include_once "models/form/select-data.php"; ?>
            </div>
            
            <!--anchor tableToday content-->
            <div id="data-today" class="w-10/12 table-content mt-16 overflow-scroll flex">
	            <?php
                  echo tableDay();
                ?>
            </div>
        </div>
        
        <!--sublink btn container graphForm-->
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