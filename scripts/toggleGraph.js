const graphContent = document.getElementById('graphique');

const barContent= document.getElementById('bar-content');
const bar = document.getElementById('bar');

const pieContent = document.getElementById('pie-content');
const pie = document.getElementById('pie');

const tableContent = document.getElementById('tableSelect-content');
const table = document.getElementById('tableSelect');

const btnBar = document.getElementById('bar-btn');
const btnPie = document.getElementById('pie-btn');
const btnTable = document.getElementById('table-btn');

btnPie.classList.add('active');
btnBar.classList.add('active');
btnTable.classList.add('active');

graphContent.classList.add('w-full', 'h-1/2', 'scale-100','flex','items-center','flex-row','justify-center');

pieContent.classList.add('w-1/2','h-full', 'scale-100');
pie.classList.add('w-full','h-full');

barContent.classList.add('w-1/2','h-full', 'scale-100','flex','items-center');
bar.classList.add('w-full','h-full');

tableContent.classList.add('w-full', 'h-1/2', 'scale-100');
table.classList.add('w-full', 'h-full','scale-100');

//link pie
function togglePie() {
    btnPie.classList.toggle('active');
    //link remove class
    graphContent.classList.remove('w-0', 'w-1/2', 'w-full', 'h-0', 'h-1/2', 'h-full', 'scale-0', 'scale-100', 'flex-row', 'flex-col');
    pieContent.classList.remove('w-0', 'w-1/2', 'w-full', 'h-0', 'h-1/2', 'h-full', 'scale-0', 'scale-100');
    pie.classList.remove('w-full','h-full');
    barContent.classList.remove('w-0', 'w-1/2', 'w-full', 'h-0', 'h-1/2', 'h-full', 'scale-0', 'scale-100');
    pie.classList.remove('w-full','h-full');
    tableContent.classList.remove('w-0', 'w-1/2', 'w-full', 'h-0', 'h-1/2', 'h-full', 'scale-0', 'scale-100');
    table.classList.remove('w-0', 'w-1/2', 'w-full', 'h-0', 'h-1/2', 'h-full', 'scale-0', 'scale-100');
    //sublink (!pie active && bar active && table active)
    if (!btnPie.classList.contains('active') && btnBar.classList.contains('active') && btnTable.classList.contains('active')) {
        graphContent.classList.add('w-full', 'h-1/2', 'scale-100','flex-row');

        pieContent.classList.add('w-0', 'h-0', 'scale-0');
        pie.classList.add('w-0','h-0');

        barContent.classList.add('w-full', 'h-full', 'scale-100');
        bar.classList.add('w-full','h-full');

        tableContent.classList.add('w-full', 'h-1/2', 'scale-100');
        table.classList.add('w-full', 'h-full', 'scale-100');
    }
    //sublink (!pie active && !bar active && table active)
    if (!btnPie.classList.contains('active') && !btnBar.classList.contains('active') && btnTable.classList.contains('active')) {
        graphContent.classList.add('w-0', 'h-0', 'scale-0','flex-col');

        pieContent.classList.add('w-0', 'h-0', 'scale-0');
        pie.classList.add('w-0','h-0');

        barContent.classList.add('w-0', 'h-0', 'scale-0');
        bar.classList.add('w-0','h-0');

        tableContent.classList.add('w-full', 'h-full', 'scale-100');
        table.classList.add('w-full', 'h-full', 'scale-100');
    }
    //sublink (!pie active && bar active && !table active)
    if (!btnPie.classList.contains('active') && btnBar.classList.contains('active') && !btnTable.classList.contains('active')) {
        graphContent.classList.add('w-full', 'h-full', 'scale-100', 'flex-row');

        pieContent.classList.add('w-0', 'h-0', 'scale-0');
        pie.classList.add('w-0','h-0');

        barContent.classList.add('w-full', 'h-full', 'scale-100');
        pie.classList.add('w-full','h-full');

        tableContent.classList.add('w-0', 'h-0', 'scale-0');
        table.classList.add('w-0', 'h-0', 'scale-0');
    }
    //sublink (pie active && bar active && table active)
    if (btnPie.classList.contains('active') && btnBar.classList.contains('active') && btnTable.classList.contains('active')) {
        graphContent.classList.add('w-full', 'h-1/2', 'scale-100','flex-row');

        pieContent.classList.add('w-1/2', 'h-full', 'scale-100');
        pie.classList.add('w-full','h-full');

        barContent.classList.add('w-1/2', 'h-full', 'scale-100');
        bar.classList.add('w-full','h-full');

        tableContent.classList.add('w-full', 'h-1/2', 'scale-100');
        table.classList.add('w-full', 'h-full', 'scale-100');
    }
    //sublink (pie active && !bar active && table active)
    if (btnPie.classList.contains('active') && !btnBar.classList.contains('active') && btnTable.classList.contains('active')) {
        graphContent.classList.add('w-full', 'h-1/2', 'scale-100','flex-row');

        pieContent.classList.add('w-1/2', 'h-full', 'scale-100');
        pie.classList.add('w-full','h-full');

        barContent.classList.add('w-0', 'h-0', 'scale-0');
        bar.classList.add('w-0','h-0');

        tableContent.classList.add('w-full', 'h-1/2', 'scale-100');
        table.classList.add('w-full', 'h-full', 'scale-100');
    }
    //sublink (pie active && bar active && !table active)
    if (btnPie.classList.contains('active') && btnBar.classList.contains('active') && !btnTable.classList.contains('active')) {
        graphContent.classList.add('w-full', 'h-full', 'scale-100','flex-col');

        pieContent.classList.add('w-1/2', 'h-full', 'scale-100');
        pie.classList.add('w-full','h-full');

        barContent.classList.add('w-1/2', 'h-full', 'scale-100');
        bar.classList.add('w-full','h-full');

        tableContent.classList.add('w-0', 'h-0', 'scale-0');
        table.classList.add('w-0', 'h-0', 'scale-0');
    }
    //sublink (pie active && !bar active && !table active)
    if (btnPie.classList.contains('active') && !btnBar.classList.contains('active') && !btnTable.classList.contains('active')) {
        graphContent.classList.add('w-full', 'h-full', 'scale-100','flex-row');

        pieContent.classList.add('w-full', 'h-full', 'scale-100');
        pie.classList.add('w-full','h-full');

        barContent.classList.add('w-0', 'h-0', 'scale-0');
        pie.classList.add('w-0','h-0');

        tableContent.classList.add('w-0', 'h-0', 'scale-0');
        table.classList.add('w-0', 'h-0', 'scale-0');
    }
}

//link bar
function toggleBar() {
    btnBar.classList.toggle('active');
    //link remove class
    graphContent.classList.remove('w-0', 'w-1/2', 'w-full', 'h-0', 'h-1/2', 'h-full', 'scale-0', 'scale-100', 'flex-row', 'flex-col');
    pieContent.classList.remove('w-0', 'w-1/2', 'w-full', 'h-0', 'h-1/2', 'h-full', 'scale-0', 'scale-100');
    pie.classList.remove('w-full','h-full');
    barContent.classList.remove('w-0', 'w-1/2', 'w-full', 'h-0', 'h-1/2', 'h-full', 'scale-0', 'scale-100');
    pie.classList.remove('w-full','h-full');
    tableContent.classList.remove('w-0', 'w-1/2', 'w-full', 'h-0', 'h-1/2', 'h-full', 'scale-0', 'scale-100');
    table.classList.remove('w-0', 'w-1/2', 'w-full', 'h-0', 'h-1/2', 'h-full', 'scale-0', 'scale-100');
    //sublink (!pie active && bar active && table active)
    if (!btnPie.classList.contains('active') && btnBar.classList.contains('active') && btnTable.classList.contains('active')) {
        graphContent.classList.add('w-full', 'h-1/2', 'scale-100','flex-row');

        pieContent.classList.add('w-0', 'h-0', 'scale-0');
        pie.classList.add('w-0','h-0');

        barContent.classList.add('w-full', 'h-full', 'scale-100');
        bar.classList.add('w-full','h-full');

        tableContent.classList.add('w-full', 'h-1/2', 'scale-100');
        table.classList.add('w-full', 'h-full', 'scale-100');
    }
    //sublink (!pie active && !bar active && table active)
    if (!btnPie.classList.contains('active') && !btnBar.classList.contains('active') && btnTable.classList.contains('active')) {
        graphContent.classList.add('w-0', 'h-0', 'scale-0','flex-col');

        pieContent.classList.add('w-0', 'h-0', 'scale-0');
        pie.classList.add('w-0','h-0');

        barContent.classList.add('w-0', 'h-0', 'scale-0');
        bar.classList.add('w-0','h-0');

        tableContent.classList.add('w-full', 'h-full', 'scale-100');
        table.classList.add('w-full', 'h-full', 'scale-100');
    }
    //sublink (!pie active && bar active && !table active)
    if (!btnPie.classList.contains('active') && btnBar.classList.contains('active') && !btnTable.classList.contains('active')) {
        graphContent.classList.add('w-full', 'h-full', 'scale-100', 'flex-row');

        pieContent.classList.add('w-0', 'h-0', 'scale-0');
        pie.classList.add('w-0','h-0');

        barContent.classList.add('w-full', 'h-full', 'scale-100');
        pie.classList.add('w-full','h-full');

        tableContent.classList.add('w-0', 'h-0', 'scale-0');
        table.classList.add('w-0', 'h-0', 'scale-0');
    }
    //sublink (pie active && bar active && table active)
    if (btnPie.classList.contains('active') && btnBar.classList.contains('active') && btnTable.classList.contains('active')) {
        graphContent.classList.add('w-full', 'h-1/2', 'scale-100','flex-row');

        pieContent.classList.add('w-1/2', 'h-full', 'scale-100');
        pie.classList.add('w-full','h-full');

        barContent.classList.add('w-1/2', 'h-full', 'scale-100');
        bar.classList.add('w-full','h-full');

        tableContent.classList.add('w-full', 'h-1/2', 'scale-100');
        table.classList.add('w-full', 'h-full', 'scale-100');
    }
    //sublink (pie active && !bar active && table active)
    if (btnPie.classList.contains('active') && !btnBar.classList.contains('active') && btnTable.classList.contains('active')) {
        graphContent.classList.add('w-full', 'h-1/2', 'scale-100','flex-row');

        pieContent.classList.add('w-1/2', 'h-full', 'scale-100');
        pie.classList.add('w-full','h-full');

        barContent.classList.add('w-0', 'h-0', 'scale-0');
        bar.classList.add('w-0','h-0');

        tableContent.classList.add('w-full', 'h-1/2', 'scale-100');
        table.classList.add('w-full', 'h-full', 'scale-100');
    }
    //sublink (pie active && bar active && !table active)
    if (btnPie.classList.contains('active') && btnBar.classList.contains('active') && !btnTable.classList.contains('active')) {
        graphContent.classList.add('w-full', 'h-full', 'scale-100','flex-col');

        pieContent.classList.add('w-1/2', 'h-full', 'scale-100');
        pie.classList.add('w-full','h-full');

        barContent.classList.add('w-1/2', 'h-full', 'scale-100');
        bar.classList.add('w-full','h-full');

        tableContent.classList.add('w-0', 'h-0', 'scale-0');
        table.classList.add('w-0', 'h-0', 'scale-0');
    }
    //sublink (pie active && !bar active && !table active)
    if (btnPie.classList.contains('active') && !btnBar.classList.contains('active') && !btnTable.classList.contains('active')) {
        graphContent.classList.add('w-full', 'h-full', 'scale-100','flex-row');

        pieContent.classList.add('w-full', 'h-full', 'scale-100');
        pie.classList.add('w-full','h-full');

        barContent.classList.add('w-0', 'h-0', 'scale-0');
        pie.classList.add('w-0','h-0');

        tableContent.classList.add('w-0', 'h-0', 'scale-0');
        table.classList.add('w-0', 'h-0', 'scale-0');
    }
}

//link table
function toggleTable() {
    btnTable.classList.toggle('active');
    //link remove class
    graphContent.classList.remove('w-0', 'w-1/2', 'w-full', 'h-0', 'h-1/2', 'h-full', 'scale-0', 'scale-100', 'flex-row', 'flex-col');
    pieContent.classList.remove('w-0', 'w-1/2', 'w-full', 'h-0', 'h-1/2', 'h-full', 'scale-0', 'scale-100');
    pie.classList.remove('w-full','h-full');
    barContent.classList.remove('w-0', 'w-1/2', 'w-full', 'h-0', 'h-1/2', 'h-full', 'scale-0', 'scale-100');
    pie.classList.remove('w-full','h-full');
    tableContent.classList.remove('w-0', 'w-1/2', 'w-full', 'h-0', 'h-1/2', 'h-full', 'scale-0', 'scale-100');
    table.classList.remove('w-0', 'w-1/2', 'w-full', 'h-0', 'h-1/2', 'h-full', 'scale-0', 'scale-100');
    //sublink (!pie active && bar active && table active)
    if (!btnPie.classList.contains('active') && btnBar.classList.contains('active') && btnTable.classList.contains('active')) {
        graphContent.classList.add('w-full', 'h-1/2', 'scale-100','flex-row');

        pieContent.classList.add('w-0', 'h-0', 'scale-0');
        pie.classList.add('w-0','h-0');

        barContent.classList.add('w-full', 'h-full', 'scale-100');
        bar.classList.add('w-full','h-full');

        tableContent.classList.add('w-full', 'h-1/2', 'scale-100');
        table.classList.add('w-full', 'h-full', 'scale-100');
    }
    //sublink (!pie active && !bar active && table active)
    if (!btnPie.classList.contains('active') && !btnBar.classList.contains('active') && btnTable.classList.contains('active')) {
        graphContent.classList.add('w-0', 'h-0', 'scale-0','flex-col');

        pieContent.classList.add('w-0', 'h-0', 'scale-0');
        pie.classList.add('w-0','h-0');

        barContent.classList.add('w-0', 'h-0', 'scale-0');
        bar.classList.add('w-0','h-0');

        tableContent.classList.add('w-full', 'h-full', 'scale-100');
        table.classList.add('w-full', 'h-full', 'scale-100');
    }
    //sublink (!pie active && bar active && !table active)
    if (!btnPie.classList.contains('active') && btnBar.classList.contains('active') && !btnTable.classList.contains('active')) {
        graphContent.classList.add('w-full', 'h-full', 'scale-100', 'flex-row');

        pieContent.classList.add('w-0', 'h-0', 'scale-0');
        pie.classList.add('w-0','h-0');

        barContent.classList.add('w-full', 'h-full', 'scale-100');
        pie.classList.add('w-full','h-full');

        tableContent.classList.add('w-0', 'h-0', 'scale-0');
        table.classList.add('w-0', 'h-0', 'scale-0');
    }
    //sublink (pie active && bar active && table active)
    if (btnPie.classList.contains('active') && btnBar.classList.contains('active') && btnTable.classList.contains('active')) {
        graphContent.classList.add('w-full', 'h-1/2', 'scale-100','flex-row');

        pieContent.classList.add('w-1/2', 'h-full', 'scale-100');
        pie.classList.add('w-full','h-full');

        barContent.classList.add('w-1/2', 'h-full', 'scale-100');
        bar.classList.add('w-full','h-full');

        tableContent.classList.add('w-full', 'h-1/2', 'scale-100');
        table.classList.add('w-full', 'h-full', 'scale-100');
    }
    //sublink (pie active && !bar active && table active)
    if (btnPie.classList.contains('active') && !btnBar.classList.contains('active') && btnTable.classList.contains('active')) {
        graphContent.classList.add('w-full', 'h-1/2', 'scale-100','flex-row');

        pieContent.classList.add('w-1/2', 'h-full', 'scale-100');
        pie.classList.add('w-full','h-full');

        barContent.classList.add('w-0', 'h-0', 'scale-0');
        bar.classList.add('w-0','h-0');

        tableContent.classList.add('w-full', 'h-1/2', 'scale-100');
        table.classList.add('w-full', 'h-full', 'scale-100');
    }
    //sublink (pie active && bar active && !table active)
    if (btnPie.classList.contains('active') && btnBar.classList.contains('active') && !btnTable.classList.contains('active')) {
        graphContent.classList.add('w-full', 'h-full', 'scale-100','flex-col');

        pieContent.classList.add('w-1/2', 'h-full', 'scale-100');
        pie.classList.add('w-full','h-full');

        barContent.classList.add('w-1/2', 'h-full', 'scale-100');
        bar.classList.add('w-full','h-full');

        tableContent.classList.add('w-0', 'h-0', 'scale-0');
        table.classList.add('w-0', 'h-0', 'scale-0');
    }
    //sublink (pie active && !bar active && !table active)
    if (btnPie.classList.contains('active') && !btnBar.classList.contains('active') && !btnTable.classList.contains('active')) {
        graphContent.classList.add('w-full', 'h-full', 'scale-100','flex-row');

        pieContent.classList.add('w-full', 'h-full', 'scale-100');
        pie.classList.add('w-full','h-full');

        barContent.classList.add('w-0', 'h-0', 'scale-0');
        pie.classList.add('w-0','h-0');

        tableContent.classList.add('w-0', 'h-0', 'scale-0');
        table.classList.add('w-0', 'h-0', 'scale-0');
    }
}

btnPie.addEventListener('click', togglePie);
btnBar.addEventListener('click', toggleBar);
btnTable.addEventListener('click', toggleTable);