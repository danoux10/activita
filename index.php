<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title></title>
<!--    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />-->
    <link rel="stylesheet" href="dist/tailwind.css">
    <link rel="stylesheet" href="css/style.css" type="text/css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <?php include_once 'controller/head.php';?>
</head>
<body>
    <?php include_once 'controller/navbar.php';?>
    <?php include_once 'views/graph.php';?>
    <?php include_once 'views/cards.php';?>
    <?php include_once 'views/icon.php';?>


    <!--link script-->
    <script src="scripts/day&night.js"></script>

    <script src="scripts/pieChart.js"></script>
    <script src="scripts/barChart.js"></script>
    
    <script src="scripts/toggleMain.js"></script>
    
    <script src="scripts/toggleFormData.js"></script>
    <script src="scripts/toggleGraph.js"></script>

    <script src="scripts/select.js"></script>
    <script src="scripts/tableSelect.js"></script>
    <script src="scripts/toggleBloc.js"></script>
</body>
</html>