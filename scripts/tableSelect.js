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
