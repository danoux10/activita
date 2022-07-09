const radio = document.querySelectorAll("input[name='tableSelect']")

let findSelected = () => {
    let other = document.querySelectorAll(".table-line")
    other.forEach(other=>{
        other.classList.remove('active');
    })
    let selected = document.querySelector("input[type='radio']:checked").value
    let line = document.getElementById(selected)
    line.classList.add('active')
}

radio.forEach(radio =>{
    radio.addEventListener("change",findSelected);
})

findSelected();
