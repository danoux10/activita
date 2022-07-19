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
