//link toggle block graph
//sublink btn toggle graph block
const graphViewBtn = document.getElementById('graphBtn');
const graphFormViewBtn = document.getElementById('graphFormBtn');
//sublink content toggle graph block
const graphView = document.getElementById('graph-content');
const graphFormView =  document.getElementById('graphForm-content');
//sublink function
function toggleGraphView(){
    graphViewBtn.classList.toggle('active');
    if(graphFormViewBtn.classList.contains('active')){
        graphFormViewBtn.classList.toggle('active');
        if(graphFormViewBtn.classList.contains('active')){
            graphFormView.classList.add('w-0','h-0','scale-0');
            graphFormView.classList.remove('w-3/6');
            graph.classList.add('justify-center');
        }else{
            graphFormView.classList.remove('w-0','h-0','scale-0');
            graphFormView.classList.add('w-3/6');
            graph.classList.remove('justify-center');
        }
    }

    if(graphViewBtn.classList.contains('active')){
        graphView.classList.add('w-0','h-0','scale-0');
        graphView.classList.remove('w-3/6');
        graphFormView.classList.add('w-10/12');
        graphFormView.classList.remove('w-3/6');
        graph.classList.add('justify-center');
    }else{
        graphView.classList.remove('w-0','h-0','scale-0');
        graphView.classList.add('w-3/6');
        graphFormView.classList.remove('w-10/12');
        graphFormView.classList.add('w-3/6');
        graph.classList.remove('justify-center');
    }
}
function toggleGraphFomView(){
    graphFormViewBtn.classList.toggle('active');
    if(graphViewBtn.classList.contains('active')){
        graphViewBtn.classList.toggle('active');
        if(graphViewBtn.classList.contains('active')){
            graphView.classList.add('w-0','h-0','scale-0');
            graphView.classList.remove('w-3/6');
            graphFormView.classList.add('w-10/12');
            graphFormView.classList.remove('w-3/6');
            graph.classList.add('justify-center');
        }else{
            graphView.classList.remove('w-0','h-0','scale-0');
            graphView.classList.add('w-3/6');
            graphFormView.classList.remove('w-10/12');
            graphFormView.classList.add('w-3/6');
            graph.classList.remove('justify-center');
        }
    }

    if(graphFormViewBtn.classList.contains('active')){
        graphFormView.classList.add('w-0','h-0','scale-0');
        graphFormView.classList.remove('w-3/6');
        graph.classList.add('justify-center');
    }else{
        graphFormView.classList.remove('w-0','h-0','scale-0');
        graphFormView.classList.add('w-3/6');
        graph.classList.remove('justify-center');
    }
}
//sublink attibute function toggle block
graphViewBtn.addEventListener('click',toggleGraphView);
graphFormViewBtn.addEventListener('click',toggleGraphFomView);
//link toggle graph & table content
const graphContent = document.getElementById('graphique');
const barContent= document.getElementById('bar-content');
const bar = document.getElementById('bar');
const pieContent = document.getElementById('pie-content');
const pie = document.getElementById('pie');
const tableContent = document.getElementById('tableSelect-content');
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

//sublink pie
function togglePie() {
    btnPie.classList.toggle('active');
    //anchor remove class
    graphContent.classList.remove('w-0', 'w-1/2', 'w-full', 'h-0', 'h-1/2', 'h-full', 'scale-0', 'scale-100', 'flex-row', 'flex-col');
    pieContent.classList.remove('w-0', 'w-1/2', 'w-full', 'h-0', 'h-1/2', 'h-full', 'scale-0', 'scale-100');
    pie.classList.remove('w-full','h-full');
    barContent.classList.remove('w-0', 'w-1/2', 'w-full', 'h-0', 'h-1/2', 'h-full', 'scale-0', 'scale-100');
    pie.classList.remove('w-full','h-full');
    tableContent.classList.remove('w-0', 'w-1/2', 'w-full', 'h-0', 'h-1/2', 'h-full', 'scale-0', 'scale-100');
    //anchor (!pie active && bar active && table active)
    if (!btnPie.classList.contains('active') && btnBar.classList.contains('active') && btnTable.classList.contains('active')) {
        graphContent.classList.add('w-full', 'h-1/2', 'scale-100','flex-row');

        pieContent.classList.add('w-0', 'h-0', 'scale-0');
        pie.classList.add('w-0','h-0');

        barContent.classList.add('w-full', 'h-full', 'scale-100');
        bar.classList.add('w-full','h-full');

        tableContent.classList.add('w-full', 'h-1/2', 'scale-100');
    }
    //anchor (!pie active && !bar active && table active)
    if (!btnPie.classList.contains('active') && !btnBar.classList.contains('active') && btnTable.classList.contains('active')) {
        graphContent.classList.add('w-0', 'h-0', 'scale-0','flex-col');

        pieContent.classList.add('w-0', 'h-0', 'scale-0');
        pie.classList.add('w-0','h-0');

        barContent.classList.add('w-0', 'h-0', 'scale-0');
        bar.classList.add('w-0','h-0');

        tableContent.classList.add('w-full', 'h-full', 'scale-100');
    }
    //anchor (!pie active && bar active && !table active)
    if (!btnPie.classList.contains('active') && btnBar.classList.contains('active') && !btnTable.classList.contains('active')) {
        graphContent.classList.add('w-full', 'h-full', 'scale-100', 'flex-row');

        pieContent.classList.add('w-0', 'h-0', 'scale-0');
        pie.classList.add('w-0','h-0');

        barContent.classList.add('w-full', 'h-full', 'scale-100');
        pie.classList.add('w-full','h-full');

        tableContent.classList.add('w-0', 'h-0', 'scale-0');
    }
    //anchor (pie active && bar active && table active)
    if (btnPie.classList.contains('active') && btnBar.classList.contains('active') && btnTable.classList.contains('active')) {
        graphContent.classList.add('w-full', 'h-1/2', 'scale-100','flex-row');

        pieContent.classList.add('w-1/2', 'h-full', 'scale-100');
        pie.classList.add('w-full','h-full');

        barContent.classList.add('w-1/2', 'h-full', 'scale-100');
        bar.classList.add('w-full','h-full');

        tableContent.classList.add('w-full', 'h-1/2', 'scale-100');
    }
    //anchor (pie active && !bar active && table active)
    if (btnPie.classList.contains('active') && !btnBar.classList.contains('active') && btnTable.classList.contains('active')) {
        graphContent.classList.add('w-full', 'h-1/2', 'scale-100','flex-row');

        pieContent.classList.add('w-1/2', 'h-full', 'scale-100');
        pie.classList.add('w-full','h-full');

        barContent.classList.add('w-0', 'h-0', 'scale-0');
        bar.classList.add('w-0','h-0');

        tableContent.classList.add('w-full', 'h-1/2', 'scale-100');
    }
    //anchor (pie active && bar active && !table active)
    if (btnPie.classList.contains('active') && btnBar.classList.contains('active') && !btnTable.classList.contains('active')) {
        graphContent.classList.add('w-full', 'h-full', 'scale-100','flex-col');

        pieContent.classList.add('w-1/2', 'h-full', 'scale-100');
        pie.classList.add('w-full','h-full');

        barContent.classList.add('w-1/2', 'h-full', 'scale-100');
        bar.classList.add('w-full','h-full');

        tableContent.classList.add('w-0', 'h-0', 'scale-0');
    }
    //anchor (pie active && !bar active && !table active)
    if (btnPie.classList.contains('active') && !btnBar.classList.contains('active') && !btnTable.classList.contains('active')) {
        graphContent.classList.add('w-full', 'h-full', 'scale-100','flex-row');

        pieContent.classList.add('w-full', 'h-full', 'scale-100');
        pie.classList.add('w-full','h-full');

        barContent.classList.add('w-0', 'h-0', 'scale-0');
        pie.classList.add('w-0','h-0');

        tableContent.classList.add('w-0', 'h-0', 'scale-0');
    }
}
//sublink bar
function toggleBar() {
    btnBar.classList.toggle('active');
    //anchor remove class
    graphContent.classList.remove('w-0', 'w-1/2', 'w-full', 'h-0', 'h-1/2', 'h-full', 'scale-0', 'scale-100', 'flex-row', 'flex-col');
    pieContent.classList.remove('w-0', 'w-1/2', 'w-full', 'h-0', 'h-1/2', 'h-full', 'scale-0', 'scale-100');
    pie.classList.remove('w-full','h-full');
    barContent.classList.remove('w-0', 'w-1/2', 'w-full', 'h-0', 'h-1/2', 'h-full', 'scale-0', 'scale-100');
    pie.classList.remove('w-full','h-full');
    tableContent.classList.remove('w-0', 'w-1/2', 'w-full', 'h-0', 'h-1/2', 'h-full', 'scale-0', 'scale-100');
    //anchor (!pie active && bar active && table active)
    if (!btnPie.classList.contains('active') && btnBar.classList.contains('active') && btnTable.classList.contains('active')) {
        graphContent.classList.add('w-full', 'h-1/2', 'scale-100','flex-row');

        pieContent.classList.add('w-0', 'h-0', 'scale-0');
        pie.classList.add('w-0','h-0');

        barContent.classList.add('w-full', 'h-full', 'scale-100');
        bar.classList.add('w-full','h-full');

        tableContent.classList.add('w-full', 'h-1/2', 'scale-100');
    }
    //anchor (!pie active && !bar active && table active)
    if (!btnPie.classList.contains('active') && !btnBar.classList.contains('active') && btnTable.classList.contains('active')) {
        graphContent.classList.add('w-0', 'h-0', 'scale-0','flex-col');

        pieContent.classList.add('w-0', 'h-0', 'scale-0');
        pie.classList.add('w-0','h-0');

        barContent.classList.add('w-0', 'h-0', 'scale-0');
        bar.classList.add('w-0','h-0');

        tableContent.classList.add('w-full', 'h-full', 'scale-100');
    }
    //anchor (!pie active && bar active && !table active)
    if (!btnPie.classList.contains('active') && btnBar.classList.contains('active') && !btnTable.classList.contains('active')) {
        graphContent.classList.add('w-full', 'h-full', 'scale-100', 'flex-row');

        pieContent.classList.add('w-0', 'h-0', 'scale-0');
        pie.classList.add('w-0','h-0');

        barContent.classList.add('w-full', 'h-full', 'scale-100');
        pie.classList.add('w-full','h-full');

        tableContent.classList.add('w-0', 'h-0', 'scale-0');
    }
    //anchor (pie active && bar active && table active)
    if (btnPie.classList.contains('active') && btnBar.classList.contains('active') && btnTable.classList.contains('active')) {
        graphContent.classList.add('w-full', 'h-1/2', 'scale-100','flex-row');

        pieContent.classList.add('w-1/2', 'h-full', 'scale-100');
        pie.classList.add('w-full','h-full');

        barContent.classList.add('w-1/2', 'h-full', 'scale-100');
        bar.classList.add('w-full','h-full');

        tableContent.classList.add('w-full', 'h-1/2', 'scale-100');
    }
    //anchor (pie active && !bar active && table active)
    if (btnPie.classList.contains('active') && !btnBar.classList.contains('active') && btnTable.classList.contains('active')) {
        graphContent.classList.add('w-full', 'h-1/2', 'scale-100','flex-row');

        pieContent.classList.add('w-1/2', 'h-full', 'scale-100');
        pie.classList.add('w-full','h-full');

        barContent.classList.add('w-0', 'h-0', 'scale-0');
        bar.classList.add('w-0','h-0');

        tableContent.classList.add('w-full', 'h-1/2', 'scale-100');
    }
    //anchor (pie active && bar active && !table active)
    if (btnPie.classList.contains('active') && btnBar.classList.contains('active') && !btnTable.classList.contains('active')) {
        graphContent.classList.add('w-full', 'h-full', 'scale-100','flex-col');

        pieContent.classList.add('w-1/2', 'h-full', 'scale-100');
        pie.classList.add('w-full','h-full');

        barContent.classList.add('w-1/2', 'h-full', 'scale-100');
        bar.classList.add('w-full','h-full');

        tableContent.classList.add('w-0', 'h-0', 'scale-0');
    }
    //anchor (pie active && !bar active && !table active)
    if (btnPie.classList.contains('active') && !btnBar.classList.contains('active') && !btnTable.classList.contains('active')) {
        graphContent.classList.add('w-full', 'h-full', 'scale-100','flex-row');

        pieContent.classList.add('w-full', 'h-full', 'scale-100');
        pie.classList.add('w-full','h-full');

        barContent.classList.add('w-0', 'h-0', 'scale-0');
        pie.classList.add('w-0','h-0');

        tableContent.classList.add('w-0', 'h-0', 'scale-0');
    }
}
//sublink table
function toggleTable() {
    btnTable.classList.toggle('active');
    //anchor remove class
    graphContent.classList.remove('w-0', 'w-1/2', 'w-full', 'h-0', 'h-1/2', 'h-full', 'scale-0', 'scale-100', 'flex-row', 'flex-col');
    pieContent.classList.remove('w-0', 'w-1/2', 'w-full', 'h-0', 'h-1/2', 'h-full', 'scale-0', 'scale-100');
    pie.classList.remove('w-full','h-full');
    barContent.classList.remove('w-0', 'w-1/2', 'w-full', 'h-0', 'h-1/2', 'h-full', 'scale-0', 'scale-100');
    pie.classList.remove('w-full','h-full');
    tableContent.classList.remove('w-0', 'w-1/2', 'w-full', 'h-0', 'h-1/2', 'h-full', 'scale-0', 'scale-100');
    //anchor (!pie active && bar active && table active)
    if (!btnPie.classList.contains('active') && btnBar.classList.contains('active') && btnTable.classList.contains('active')) {
        graphContent.classList.add('w-full', 'h-1/2', 'scale-100','flex-row');

        pieContent.classList.add('w-0', 'h-0', 'scale-0');
        pie.classList.add('w-0','h-0');

        barContent.classList.add('w-full', 'h-full', 'scale-100');
        bar.classList.add('w-full','h-full');

        tableContent.classList.add('w-full', 'h-1/2', 'scale-100');
    }
    //anchor (!pie active && !bar active && table active)
    if (!btnPie.classList.contains('active') && !btnBar.classList.contains('active') && btnTable.classList.contains('active')) {
        graphContent.classList.add('w-0', 'h-0', 'scale-0','flex-col');

        pieContent.classList.add('w-0', 'h-0', 'scale-0');
        pie.classList.add('w-0','h-0');

        barContent.classList.add('w-0', 'h-0', 'scale-0');
        bar.classList.add('w-0','h-0');

        tableContent.classList.add('w-full', 'h-full', 'scale-100');
    }
    //anchor (!pie active && bar active && !table active)
    if (!btnPie.classList.contains('active') && btnBar.classList.contains('active') && !btnTable.classList.contains('active')) {
        graphContent.classList.add('w-full', 'h-full', 'scale-100', 'flex-row');

        pieContent.classList.add('w-0', 'h-0', 'scale-0');
        pie.classList.add('w-0','h-0');

        barContent.classList.add('w-full', 'h-full', 'scale-100');
        pie.classList.add('w-full','h-full');

        tableContent.classList.add('w-0', 'h-0', 'scale-0');
    }
    //anchor (pie active && bar active && table active)
    if (btnPie.classList.contains('active') && btnBar.classList.contains('active') && btnTable.classList.contains('active')) {
        graphContent.classList.add('w-full', 'h-1/2', 'scale-100','flex-row');

        pieContent.classList.add('w-1/2', 'h-full', 'scale-100');
        pie.classList.add('w-full','h-full');

        barContent.classList.add('w-1/2', 'h-full', 'scale-100');
        bar.classList.add('w-full','h-full');

        tableContent.classList.add('w-full', 'h-1/2', 'scale-100');
    }
    //anchor (pie active && !bar active && table active)
    if (btnPie.classList.contains('active') && !btnBar.classList.contains('active') && btnTable.classList.contains('active')) {
        graphContent.classList.add('w-full', 'h-1/2', 'scale-100','flex-row');

        pieContent.classList.add('w-1/2', 'h-full', 'scale-100');
        pie.classList.add('w-full','h-full');

        barContent.classList.add('w-0', 'h-0', 'scale-0');
        bar.classList.add('w-0','h-0');

        tableContent.classList.add('w-full', 'h-1/2', 'scale-100');
    }
    //anchor (pie active && bar active && !table active)
    if (btnPie.classList.contains('active') && btnBar.classList.contains('active') && !btnTable.classList.contains('active')) {
        graphContent.classList.add('w-full', 'h-full', 'scale-100','flex-col');

        pieContent.classList.add('w-1/2', 'h-full', 'scale-100');
        pie.classList.add('w-full','h-full');

        barContent.classList.add('w-1/2', 'h-full', 'scale-100');
        bar.classList.add('w-full','h-full');

        tableContent.classList.add('w-0', 'h-0', 'scale-0');
    }
    //anchor (pie active && !bar active && !table active)
    if (btnPie.classList.contains('active') && !btnBar.classList.contains('active') && !btnTable.classList.contains('active')) {
        graphContent.classList.add('w-full', 'h-full', 'scale-100','flex-row');

        pieContent.classList.add('w-full', 'h-full', 'scale-100');
        pie.classList.add('w-full','h-full');

        barContent.classList.add('w-0', 'h-0', 'scale-0');
        pie.classList.add('w-0','h-0');

        tableContent.classList.add('w-0', 'h-0', 'scale-0');
    }
}

btnPie.addEventListener('click', togglePie);
btnBar.addEventListener('click', toggleBar);
btnTable.addEventListener('click', toggleTable);
//link toggle form graph
const formData = document.getElementById('form-content');
const addData = document.getElementById('data-add');
const updateData = document.getElementById('data-update');
const selectData = document.getElementById('data-select');
const tableData = document.getElementById('data-today');
const addDataBtn = document.getElementById('add-data-btn');
const updateDataBtn = document.getElementById('update-data-btn');
const selectDataBtn = document.getElementById('select-data-btn');
const tableDataBtn = document.getElementById('table-today-btn');

addDataBtn.classList.add('active');
selectDataBtn.classList.add('active');
tableDataBtn.classList.add('active');
formData.classList.add('justify-around','h-full');
addData.classList.add('w-96','h-full','scale-100');
updateData.classList.add('w-0','h-0','scale-0');
selectData.classList.add('w-auto','h-full','scale-100');
tableData.classList.add('w-full','h-1/2','scale-100');

function toggleAddData(){
    addDataBtn.classList.toggle('active');
    updateDataBtn.classList.toggle('active');
    if(addDataBtn.classList.contains('active')){
        addData.classList.add('w-96','h-full','scale-100');
        addData.classList.remove('w-0','h-0','scale-0');

        updateData.classList.add('w-0','h-0','scale-0');
        updateData.classList.remove('w-96','h-full','scale-100');

        formData.classList.add('justify-around');
        formData.classList.remove('justify-center');
    }else{
        addData.classList.add('w-0','h-0','scale-0');
        addData.classList.remove('w-96','h-full','scale-100');

        updateData.classList.add('w-96','h-full','scale-100');
        updateData.classList.remove('w-0','h-0','scale-0');

        formData.classList.add('justify-around');
        formData.classList.remove('justify-center');
    }

}
function toggleUpdateData(){
    updateDataBtn.classList.toggle('active');
    addDataBtn.classList.toggle('active');
    if(updateDataBtn.classList.contains('active')){
        addData.classList.add('w-0','h-0','scale-0');
        addData.classList.remove('w-96','h-full','scale-100');

        updateData.classList.add('w-96','h-full','scale-100');
        updateData.classList.remove('w-0','h-0','scale-0');

        formData.classList.add('justify-around');
        formData.classList.remove('justify-center');
    }else{
        addData.classList.add('w-96','h-full','scale-100');
        addData.classList.remove('w-0','h-0','scale-0');

        updateData.classList.add('w-0','h-0','scale-0');
        updateData.classList.remove('w-96','h-full','scale-100');

        formData.classList.add('justify-around');
        formData.classList.remove('justify-center');
    }
}
function toggleSelectData(){
    selectDataBtn.classList.toggle('active');
    if (selectDataBtn.classList.contains('active')){
        selectData.classList.add('w-auto','h-full','scale-100');
        selectData.classList.remove('w-0','h-0','scale-0');
    }else{
        selectData.classList.add('w-0','h-0','scale-0');
        selectData.classList.remove('w-auto','h-full','scale-100');
    }
}
function toggleTableData(){
    tableDataBtn.classList.toggle('active');
    if(tableDataBtn.classList.contains('active')){
        tableData.classList.add('w-full','h-1/2','scale-100');
        tableData.classList.remove('w-0','h-0','scale-0');

        formData.classList.add('flex-row','h-1/2');
        formData.classList.remove('flex-col','h-full');

        selectData.classList.remove('mt-28');
    }else{
        tableData.classList.add('w-0','h-0','scale-0');
        tableData.classList.remove('w-full','h-1/2','scale-100');

        formData.classList.add('flex-col','h-full');
        formData.classList.remove('flex-row','h-1/2');

        selectData.classList.add('mt-28');
    }
}
function hideAddData(){
    addDataBtn.classList.toggle('active');
    addData.classList.add('w-0','h-0','scale-0');
    addData.classList.remove('w-96','h-full','scale-100');

    formData.classList.add('justify-center');
    formData.classList.remove('justify-around');

    if(!addDataBtn.classList.contains('active')&&!updateDataBtn.classList.contains('active')&&!selectData.classList.contains('active')){
        tableData.classList.add('h-full');
        tableData.classList.remove('h-1/2');
    }else{
        tableData.classList.add('h-1/2');
        tableData.classList.remove('h-full');
    }
}
function hideUpdateData(){
    updateDataBtn.classList.toggle('active');
    updateData.classList.add('w-0','h-0','scale-0');
    updateData.classList.remove('w-96','h-full','scale-100');

    formData.classList.add('justify-center');
    formData.classList.remove('justify-around');

    if(!addDataBtn.classList.contains('active')&&!updateDataBtn.classList.contains('active')&&!selectData.classList.contains('active')){
        tableData.classList.add('h-full');
        tableData.classList.remove('h-1/2');
    }else{
        tableData.classList.add('h-1/2');
        tableData.classList.remove('h-full');
    }
}

addDataBtn.addEventListener('click',toggleAddData);
addDataBtn.addEventListener('dblclick',hideAddData);
updateDataBtn.addEventListener('click',toggleUpdateData);
updateDataBtn.addEventListener('dblclick',hideUpdateData);
selectDataBtn.addEventListener('click',toggleSelectData);
tableDataBtn.addEventListener('click',toggleTableData);
//link select graph
//sublink select add data
const selectedAdd = document.getElementById("selected-add");
const optionsContainerAdd = document.getElementById("options-container-add");
const optionsListAdd = document.querySelectorAll(".option-add");

selectedAdd.addEventListener("click", () => {
    optionsContainerAdd.classList.toggle("active");
});
optionsListAdd.forEach(o => {
    o.addEventListener("click", () => {
        selectedAdd.innerHTML = o.querySelector("label").innerHTML;
        optionsContainerAdd.classList.remove("active");
    });
});

//sublink select update data
const selectedUpdate = document.getElementById("selected-update");
const optionsContainerUpdate = document.getElementById("options-container-update");
const optionsListUpdate = document.querySelectorAll(".option-update");

selectedUpdate.addEventListener("click", () => {
    optionsContainerUpdate.classList.toggle("active");
});
optionsListUpdate.forEach(o => {
    o.addEventListener("click", () => {
        selectedUpdate.innerHTML = o.querySelector("label").innerHTML;
        optionsContainerUpdate.classList.remove("active");
    });
});

//sublink select select data
const selectedSel = document.getElementById("selected-sel");
const optionsContainerSel = document.getElementById("options-container-sel");
const optionsListSel = document.querySelectorAll(".option-sel");

selectedSel.addEventListener("click", () => {
    optionsContainerSel.classList.toggle("active");
});
optionsListSel.forEach(o => {
    o.addEventListener("click", () => {
        selectedSel.innerHTML = o.querySelector("label").innerHTML;
        optionsContainerSel.classList.remove("active");
    });
});

//link select table
const radioTableSelect = document.querySelectorAll("input[name='tableSelect']");

let findSelectedTableSelect = () => {
    let otherTableSelect = document.querySelectorAll(".table-line")
    otherTableSelect.forEach(otherTableSelect=>{
        otherTableSelect.classList.remove('active');
    })
    let selectedTableSelect = document.querySelector("input[name='tableSelect']:checked").value;
    let lineTableSelect = document.getElementById("tableSelect"+selectedTableSelect);
    lineTableSelect.classList.add('active')
}

radioTableSelect.forEach(radioTableSelect =>{
    radioTableSelect.addEventListener("change",findSelectedTableSelect);
})

const radioTableDay = document.querySelectorAll("input[name='tableDay']");

let findSelectedTableDay = () => {
    let otherTableDay = document.querySelectorAll(".table-line-day");
    otherTableDay.forEach(otherTableDay=>{
        otherTableDay.classList.remove('active');
    })
    let selectedTableDay = document.querySelector("input[name='tableDay']:checked").value;
    let lineTableSelectDay = document.getElementById("tableDay"+selectedTableDay);
    lineTableSelectDay.classList.add('active');
}

radioTableDay.forEach(radioTableDay =>{
    radioTableDay.addEventListener("change",findSelectedTableDay);
})

findSelectedTableSelect();
findSelectedTableDay();


