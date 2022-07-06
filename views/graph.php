<?php require './controller/function/table.php';?>
<?php require './controller/function/select.php';?>

<main class="w-screen" id="Graph">
    <section class="w-3/6 h-full flex items-center justify-center" id="graph-content">
        <div class="graph-container w-11/12 h-full ">
            <div id="graphique">
                <div id="bar-content">
                    <canvas id="bar"></canvas>
                </div>
                <div id="pie-content">
                    <canvas id="pie"></canvas>
                </div>
            </div>
            
            <div id="tableSelect-content" class="overflow-scroll table-content">
                <?php
                  echo tableSelect();
                ?>
            </div>
        </div>
        
        <div class="btn-container ml-2.5">
            <ul>
                <li id="bar-btn"><i class="fa-solid fa-chart-column"></i></li>
                <li id="pie-btn"><i class="fa-solid fa-chart-pie"></i></li>
                <li id="table-btn"><i class="fa-solid fa-table-list"></i></li>
            </ul>
        </div>
    </section>
    <section class="w-3/6 h-full flex items-center justify-between" id="graphForm-content">
        <div class="form-container w-11/12 h-full flex flex-col items-center justify-center content-around">
            <div class="h-1/2 w-full mt-5 flex items-center justify-center" id="form-content">
              <div class="flex">
	              <?php include_once "models/form/add_data.php"; ?>
                  <?php include_once "models/form/modify_data.php"; ?>
              </div>
                  <?php include_once "models/form/select-data.php"; ?>
            </div>
            <div id="data-today" class="w-10/12 table-content mt-16 overflow-scroll flex">
	            <?php
                  echo tableDay();
                ?>
            </div>
        </div>
        
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