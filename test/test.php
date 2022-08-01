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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
    <link rel="stylesheet" href="styleTest.css">
    <?php require '../controller/function/select.php'; ?>
    <?php require '../controller/function/view-card.php'; ?>
</head>
<body class="dark">
<!--link navbar-->
<header id="navbar">
    <nav>
        <ul>
            <!--sublink navbar elements-->
            <li id="graph-btn"><i class="fa-solid fa-chart-pie"></i> Graph & Data</li>
            <li id="card-btn"><i class="fa-solid fa-address-card"></i> Card</li>
            <li id="icon-btn"><i class="fa-solid fa-icons"></i> Icon</li>
            <li id="night"><i class="fa fa-solid fa-moon"></i> Dark Mode</li>
            <li id="day"><i class="fa-solid fa-sun"></i> Light Mode</li>
        </ul>
    </nav>
</header>
<!--link buttonCard for switch view in graph-->
<nav id="buttonCard" class="nav-button">
    <!--sublink left button card-->
    <div class="flex items-center justify-around absolute" id="cardBtn">
        <i class="fa-solid fa-angle-left"></i>
        <p class="w-full">Card View</p>
    </div>

    <!--sublink right button card-->
    <div class="flex items-center justify-around absolute" id="cardFormBtn">
        <i class="fa-solid fa-angle-right"></i>
        <p class="w-full">Form View</p>
    </div>
</nav>
<!--link main-->
<main class="w-screen" id="Cards">
    <section class="w-3/6 h-full" id="card-content">
        <form action="" class="h-full relative">
            <div class="head-form">
                <button type="submit" class="btn-update">
                    <i class="fa-solid fa-pen-clip"></i> Update data
                </button>
                <span class="search" id="search-card">
                    <label for="search-card" id="search-button-card">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </label>
                    <span class="input-content">
                        <input type="text" id="search-card" placeholder="Search...">
                    </span>
                </span>
                <button type="submit" class="btn-delete">
                    <i class="fa-solid fa-trash-can"></i> Delete data
                </button>
            </div>

            <div class="p-3 flex flex-wrap justify-around items-start table-body">
                <?php echo viewCard() ?>
            </div>
        </form>
    </section>
  
    <section class="w-3/6 h-full flex items-center justify-between" id="cardForm-content">
    <!--sublink btn container graphForm-->
    <div class="form-content flex justify-around items-center flex-col">
        <?php
            include_once '../models/form/add_card.php';
            include_once '../models/form/update_card.php';
        ?>
    </div>
    <div class="btn-container mr-2.5">
        <ul>
            <li id="add-card-btn"><i class="fa-solid fa-plus"></i></li>
            <li id="update-card-btn"><i class="fa-solid fa-pen"></i></li>
        </ul>
    </div>
    </section>
</main>

<script src="../scripts/day&night.js"></script>


<script src="../scripts/pieChart.js"></script>
<script src="../scripts/barChart.js"></script>

<script src="toggleMain.js"></script>

<script src="../scripts/select.js"></script>

<!--test-->
<script src="cardScript.js"></script>
<!--<script src="search.js"></script>-->
<!--<script src="toggleBloc.js"></script>-->
<!--<script src="select.js"></script>-->
<!--<script src="preview.js"></script>-->

<!--<script src="selectCard.js"></script>-->
<!--<script src="toggleForm.js"></script>-->
</body>
</html>