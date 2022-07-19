const bgColor = document.getElementById('color-bg');
const txtColor = document.getElementById('color-text');
const previewAdd = document.getElementById('preview-add')
const previewTitle = document.getElementById('preview-title-add');

let bgVal = document.getElementById('bg-value');
let txtVal = document.getElementById('text-value');

function test() {
    const bgValue = bgColor.value;
    const txtValue = txtColor.value;

    bgVal.textContent = bgValue;
    txtVal.textContent = txtValue;

    previewAdd.style.color = txtValue;
    previewAdd.style.fill = txtValue;
    previewAdd.style.stroke = txtValue;
    previewAdd.style.background = bgValue;
}

function background(){
    const bgValue = bgColor.value;
    bgVal.textContent = bgValue;
    previewAdd.style.background = bgValue;
}

function texte(){
    const txtValue = txtColor.value;
    txtVal.textContent = txtValue;
    previewAdd.style.color = txtValue;
    previewAdd.style.fill = txtValue;
    previewAdd.style.stroke = txtValue;
}

function bis(name){
    previewTitle.innerHTML = name.value;
}

window.addEventListener('load', test)
bgColor.addEventListener('change',background);

txtColor.addEventListener('change',texte);

