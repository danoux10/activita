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
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <?php include_once '../controller/function/select.php'; ?>
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
                <span class="search" id="search">
                    <label for="search-card" id="search-button">
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

            <div class="grid grid-cols-6 p-3 gap-3 table-body">
							<?php for ($i = 1; $i < 50; $i++) { ?>
                  <div class="table-cel">
                      <input type="radio" name="card" value="<?php echo $i;?>" id="<?php echo $i; ?>">
                      <label class="preview" id="card<?php echo $i; ?>" style="background: #880000; fill: #fff; stroke: #fff; color: #fff"  for="<?php echo $i; ?>">
                          <span class="preview-icon">
                              <?php include '../icon/0.svg';?>
                          </span>
                          <span class="preview-tilte">
                              <p>Coding</p>
                          </span>
                      </label>
                  </div>
                            <?php } ?>
            </div>
        </form>
    </section>
    <!--work now-->
    <section class="w-3/6 h-full flex items-center justify-between" id="cardForm-content">
    <!--sublink btn container graphForm-->
    <div class="form-content flex justify-center items-center flex-col">
        <form action="" id="add-card">
            <fieldset class="">
                <legend>New Card</legend>
                
                <div class="color-containt">
                    <span class="">
                        <label for="color-bg">Background</label>
                        <input type="color" name="color-bg" id="color-bg" value="#880000">
                        <label for="color-bg" id="bg-value"></label>
                    </span>

                    <span class="">
                        <label for="color-text">Color</label>
                        <input type="color" name="color-text" id="color-text" value="#ffffff">
                        <label for="color-text" id="text-value"></label>
                    </span>
                </div>
                
                <div class="flex w-full justify-around items-center">
                    <span>
                        <label for="card-title">Title Card :</label>
                        <input type="text" oninput="bis(this)" id="card-title" name="card-title" placeholder="Coding">
                    </span>

                    <span class="flex items-center justify-around select">
                        <p>Icon</p>
                        <div class="select-box">
                        <!--subanchor option container generate in controller/function/select-->
                            <div class="options-container" id="options-container-icon">
                                <?php echo selectIcon()?>
                            </div>

                            <!--subanchor Selected-->
                            <div class="selected" id="select-icon">
                                <div id="selected-icon">
                                    0.svg
                                </div>
                            </div>
                        </div>
                    </span>
                </div>
                
                
                <div class="flex w-full justify-around">
                    <button type="submit" class="btn-valid">
                        <i class="fa-solid fa-check"></i>
                        Add Card
                    </button>
                </div>
                
                <fieldset class="preview-content">
                    <legend>preview</legend>
                    <div class="preview" id="preview-add">
                        <span id="preview-icon-add" class="preview-icon">
                            <?php include '../icon/0.svg'?>
                        </span>
                        <span id="preview-title-add" class="preview-title">
                            <p>Coding</p>
                        </span>
                    </div>
                </fieldset>
            </fieldset>
        </form>
        <form action="" id="update-card">
            <fieldset class="">
                <legend>Update Card</legend>
                
                <div class="color-containt">
                    <span class="">
                        <label for="color-bg">Background</label>
                        <input type="color" name="color-bg" id="color-bg-update">
                        <label for="color-bg" id="bg-value-update"></label>
                    </span>

                    <span class="">
                        <label for="color-text">Color</label>
                        <input type="color" name="color-text" id="color-text-update">
                        <label for="color-text" id="text-value-update"></label>
                    </span>
                </div>
                
                <div class="flex w-full justify-around items-center">
                    <span>
                        <label for="card-title">Title Card :</label>
                        <input type="text" oninput="" id="card-title-update" name="card-title">
                    </span>

                    <span class="flex items-center justify-around select">
                        <p>Icon</p>
                        <div class="select-box">
                        <!--subanchor option container generate in controller/function/select-->
                            <div class="options-container" id="options-container-icon-update">
                                <?php echo selectIcon()?>
                            </div>

                            <!--subanchor Selected-->
                            <div class="selected" id="select-icon">
                                <div id="selected-icon-update">
                                    0.svg
                                </div>
                            </div>
                        </div>
                    </span>
                </div>
                
                
                <div class="flex w-full justify-around">
                    <button type="submit" class="btn-update">
                        <i class="fa-solid fa-pen-clip"></i>
                        update
                    </button>
                </div>
                
                <fieldset class="preview-content preview-update">
                    <legend>preview</legend>
                    <div class="flex justify-around" id="preview-update">
                        <div id="old-card" class="preview">
                        
                        </div>
                        <div id="new-card" class="preview">
                            <span id="preview-icon-update-new" class="preview-icon">
                                <?php include '../icon/0.svg'?>
                            </span>
                            <span id="preview-title-update-new" class="preview-tilte">
                                <p>Coding</p>
                            </span>
                        </div>
                        
                    </div>
                </fieldset>
            </fieldset>
        </form>
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
<script src="search.js"></script>
<script src="toggleBloc.js"></script>
<script src="select.js"></script>
<script src="preview.js"></script>

<script src="selectCard.js"></script>

</body>
</html>