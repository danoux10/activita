const cardSelect = document.querySelectorAll("input[name='card']");
const oldPreview = document.getElementById("old-card");
const bgUpdate = document.getElementById("color-bg-update");
const bgUpdateValue = document.getElementById("bg-value-update");
const colorUpdate = document.getElementById("color-text-update");
const colorUpdateValue = document.getElementById("text-value-update");
const inputTitleCard = document.getElementById("card-title-update");

let testBis = () => {
    let cardValue = document.querySelector("input[name='card']:checked").value;
    console.log(cardValue);
    let cardLabel = document.querySelector("#card"+cardValue);
    oldPreview.innerHTML = cardLabel.innerHTML;
    oldPreview.style.background = cardLabel.style.background;
    oldPreview.style.color = cardLabel.style.color;
    oldPreview.style.fill = cardLabel.style.color;
    oldPreview.style.stroke = cardLabel.style.color;
}

cardSelect.forEach(cardSelect =>{
    cardSelect.addEventListener("change", testBis)
})


