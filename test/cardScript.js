//link toggle block Card
//sublink btn toggle card
const cardViewBtn = document.getElementById('cardBtn');
const cardFormViewBtn = document.getElementById('cardFormBtn');
//sublink content toggle card
const cardView = document.getElementById('card-content');
const cardFormView =  document.getElementById('cardForm-content');
//sublink function toggle card
//anchor toggle view card
function togglecardView(){
    cardViewBtn.classList.toggle('active');
    if(cardFormViewBtn.classList.contains('active')){
        cardFormViewBtn.classList.toggle('active');
        if(cardFormViewBtn.classList.contains('active')){
            cardFormView.classList.add('w-0','h-0','scale-0');
            cardFormView.classList.remove('w-3/6');
            card.classList.add('justify-center');
        }else{
            cardFormView.classList.remove('w-0','h-0','scale-0');
            cardFormView.classList.add('w-3/6');
            card.classList.remove('justify-center');
        }
    }

    if(cardViewBtn.classList.contains('active')){
        cardView.classList.add('w-0','h-0','scale-0');
        cardView.classList.remove('w-3/6');
        cardFormView.classList.add('w-10/12');
        cardFormView.classList.remove('w-3/6');
        card.classList.add('justify-center');
    }else{
        cardView.classList.remove('w-0','h-0','scale-0');
        cardView.classList.add('w-3/6');
        cardFormView.classList.remove('w-10/12');
        cardFormView.classList.add('w-3/6');
        card.classList.remove('justify-center');
    }
}
//anchor toggle view form card
function togglecardFomView(){
    cardFormViewBtn.classList.toggle('active');
    if(cardViewBtn.classList.contains('active')){
        cardViewBtn.classList.toggle('active');
        if(cardViewBtn.classList.contains('active')){
            cardView.classList.add('w-0','h-0','scale-0');
            cardView.classList.remove('w-3/6');
            cardFormView.classList.add('w-10/12');
            cardFormView.classList.remove('w-3/6');
            card.classList.add('justify-center');
        }else{
            cardView.classList.remove('w-0','h-0','scale-0');
            cardView.classList.add('w-3/6');
            cardFormView.classList.remove('w-10/12');
            cardFormView.classList.add('w-3/6');
            card.classList.remove('justify-center');
        }
    }

    if(cardFormViewBtn.classList.contains('active')){
        cardFormView.classList.add('w-0','h-0','scale-0');
        cardFormView.classList.remove('w-3/6');
        card.classList.add('justify-center');
    }else{
        cardFormView.classList.remove('w-0','h-0','scale-0');
        cardFormView.classList.add('w-3/6');
        card.classList.remove('justify-center');
    }
}
//sublink attibute function toggle card
cardViewBtn.addEventListener('click',togglecardView);
cardFormViewBtn.addEventListener('click',togglecardFomView);
//link search button Card
//sublink button search
const searchBtnCard = document.getElementById('search-button-card');
//sublink search content
const searchBarCard = document.getElementById('search-card');
//sublink function toggle search
function toggleSearch(){
    searchBarCard.classList.toggle('active');
}
//sublink attibute function search button
searchBtnCard.addEventListener('click',toggleSearch);
//link toggle form Card
//sublink btn form
const addCardBtn = document.getElementById('add-card-btn');
const updateCardBtn = document.getElementById('update-card-btn');
//sublink content form
const addCardForm = document.getElementById('add-card');
const updateCardForm = document.getElementById('update-card');
//sublink defautl class
//anchor btn
addCardBtn.classList.add('active');
updateCardBtn.classList.add('active');
//anchor form
addCardForm.classList.add('w-full','h-1/2','scale-100');
updateCardForm.classList.add('w-full','h-1/2','scale-100');
//sublink function
//anchor toggle add
function toggleAddCard(){
    addCardBtn.classList.toggle('active');
    if (addCardBtn.classList.contains('active')){
        addCardForm.classList.add('w-full','h-1/2','scale-100');
        addCardForm.classList.remove('w-0','h-0','scale-0');
    }else{
        addCardForm.classList.add('w-0','h-0','scale-0');
        addCardForm.classList.remove('w-full','h-1/2','scale-100');
    }
}
//anchor toggle update
function toggleUpdateCard(){
    updateCardBtn.classList.toggle('active');
    if (updateCardBtn.classList.contains('active')){
        updateCardForm.classList.add('w-full','h-1/2','scale-100');
        updateCardForm.classList.remove('w-0','h-0','scale-0');
    }else{
        updateCardForm.classList.add('w-0','h-0','scale-0');
        updateCardForm.classList.remove('w-full','h-1/2','scale-100');
    }
}
//sublink attribute function toggle form Card
addCardBtn.addEventListener('click',toggleAddCard);
updateCardBtn.addEventListener('click',toggleUpdateCard);
//link preview
//sublink preview add
//subanchor input
const bgColorAdd = document.getElementById('color-bg-add');
const txtColorAdd = document.getElementById('color-text-add');
//subanchor content
const bgAddValue = document.getElementById('bg-value-add');
const txtAddValue = document.getElementById('text-value-add');
const previewAdd = document.getElementById('preview-add');
const previewTitleAdd = document.getElementById('preview-title-add');
//anchor function preview add
function loadPreviews(){
    const bgVal = bgColorAdd.value;
    const txtVal = txtColorAdd.value;
    bgAddValue.textContent = bgVal;
    txtAddValue.textContent = txtVal;
    previewAdd.style.background = bgVal;
    previewAdd.style.color = txtVal;
    previewAdd.style.fill = txtVal;
    previewAdd.style.stroke = txtVal;
}
function changeBackgroundAdd(){
    const bgVal = bgColorAdd.value;
    bgVal.textContent = bgVal;
    previewAdd.style.background = bgVal;
}
function changeTextColorAdd(){
    const txtVal = txtColorAdd.value;
    textVal.textContent = txtVal;
    previewAdd.style.color = txtVal;
    previewAdd.style.fill = txtVal;
    previewAdd.style.stroke = txtVal;
}
function changeTextAdd(name){
    previewTitleAdd.textContent = name.value;
}
//anchor attribute function preview add
window.addEventListener('load', loadPreviews);
bgColorAdd.addEventListener('change', changeBackgroundAdd);
txtColorAdd.addEventListener('change', changeTextColorAdd);
//sublink preview update
//subanchor input
const bgColorUpdate = document.getElementById('color-bg-update');
const txtColorUpdate = document.getElementById('color-text-update');
//subanchor content
const bgUpdateValue = document.getElementById('bg-value-update');
const txtUpdateValue = document.getElementById('text-value-update');
const previewUpdate = document.getElementById('new-card');
const previewTitleUpdate = document.getElementById('preview-title-update-new');
//anchor function preview update
function changeBackgroundUpdate(){
    const bgVal = bgColorUpdate.value;
    bgUpdateValue.textContent = bgVal;
    previewUpdate.style.background = bgVal;
}
function changeTextColorUpdate(){
    const txtVal = txtColorUpdate.value;
    txtUpdateValue.textContent = txtVal;
    previewUpdate.style.color = txtVal;
    previewUpdate.style.fill = txtVal;
    previewUpdate.style.stroke = txtVal;
}
function changeTextUpdate(name){
    previewTitleUpdate.textContent = name.value;
}
//anchor attribute function preview update
bgColorUpdate.addEventListener('change', changeBackgroundUpdate);
txtColorUpdate.addEventListener('change', changeTextColorUpdate);
//link select icon card
//sublink icon card add
const selectIconAdd = document.getElementById("select-icon-add");
const optionsContainerIconAdd = document.getElementById("options-container-icon-add");

const optionsListIconAdd = document.querySelectorAll(".option-icon-add");
const iconCardAdd = document.getElementById("preview-icon-add");

selectIconAdd.addEventListener("click", () => {
    optionsContainerIconAdd.classList.toggle("active");
});

optionsListIconAdd.forEach(o => {
    o.addEventListener("click", () => {
        selectIconAdd.textContent = o.querySelector("input[type='radio']").value;
        optionsContainerIconAdd.classList.remove("active");
        iconCardAdd.innerHTML = o.querySelector("label").innerHTML;
    });
});

//sublink icon card update
const selectIconUpdate = document.getElementById("select-icon-update");
const optionsContainerIconUpdate = document.getElementById("options-container-icon-update");

const optionsListIconUpdate = document.querySelectorAll(".option-icon-update");
const iconCardUpdate = document.getElementById("preview-icon-updqte");

selectIconUpdate.addEventListener("click", () => {
    optionsContainerIconUpdate.classList.toggle("active");
});

optionsListIconUpdate.forEach(o => {
    o.addEventListener("click", () => {
        selectIconUpdate.textContent = o.querySelector("input[type='radio']").value;
        optionsContainerIconUpdate.classList.remove("active");
        iconCardUpdate.innerHTML = o.querySelector("label").innerHTML;
    });
});
