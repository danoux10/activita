<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="../dist/tailwind.css">
    <link rel="stylesheet" href="../css/style.css" type="text/css">
<!--    <link rel="stylesheet" href="styleBis.css">-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
	<?php require '../controller/function/table.php'; ?>
	<?php require '../controller/function/select.php'; ?>
</head>
<body class="dark">
<?php include_once '../controller/navbar.php'; ?>
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
            <form id="tableSelect-content" class="table-content flex justify-center flex-col">
                <div class="table-title flex flex-row justify-around">
                    <button type="submit" class="btn-update"><i class="fa-solid fa-pen-clip"></i> Update data</button>
                    <p class="font-bold uppercase">De date au date</p>
                    <button type="submit" class="btn-delete"><i class="fa-solid fa-trash-can"></i> Delete data</button>
                </div>
                <div class="table-head">
                    <span class="element-title">
                        <p>Date</p>
                    </span>
                    <span class="element-title">
                        <p>Activiter</p>
                    </span>
                    <span class="element-title">
                        <p>Hours Start</p>
                    </span>
                    <span class="element-title">
                        <p>Hours End</p>
                    </span>
                    <span class="element-title">
                        <p>Duration</p>
                    </span>
                    <span class="element-title">
                        <p>Description</p>
                    </span>
                    <span class="element-title">
                        <p>Select</p>
                    </span>
                </div>
                <div class="table-body overflow-scroll w-full">
                    <?php echo tableSelect();?>
                </div>
            </form>
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
									<?php include_once "../models/form/add_data.php"; ?>

                    <!--subanchor add form update data in models/form -->
									<?php include_once "../models/form/modify_data.php"; ?>
                </div>
                <!--subanchor add form select data in models/form -->
							<?php include_once "../models/form/select_data.php"; ?>
            </div>

            <!--anchor tableToday content-->
            <form id="data-today" class="table-content mt-16 h-1/2">
                <div class="table-title flex flex-row justify-around">
                    <button type="submit" class="btn-update"><i class="fa-solid fa-pen-clip"></i> Update data</button>
                    <p class="font-bold uppercase">Today</p>
                    <button type="submit" class="btn-delete"><i class="fa-solid fa-trash-can"></i> Delete data</button>
                </div>
                <div class="table-head">
                    <span class="element-title">
                        <p>Date</p>
                    </span>
                    <span class="element-title">
                        <p>Activiter</p>
                    </span>
                    <span class="element-title">
                        <p>Hours Start</p>
                    </span>
                    <span class="element-title">
                        <p>Hours End</p>
                    </span>
                    <span class="element-title">
                        <p>Duration</p>
                    </span>
                    <span class="element-title">
                        <p>Description</p>
                    </span>
                    <span class="element-title">
                        <p>Select</p>
                    </span>
                </div>
                <div class="table-body overflow-scroll">
			            <?php echo tableDay(); ?>
                </div>
            </form>
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
<script src="script.js"></script>
<script src="../scripts/day&night.js"></script>

<script src="../scripts/pieChart.js"></script>
<script src="../scripts/barChart.js"></script>

<script src="../scripts/toggleFormData.js"></script>
<script src="../scripts/toggleGraph.js"></script>

<script src="../scripts/select.js"></script>
<script src="../scripts/toggleBloc.js"></script>
</body>
</html>