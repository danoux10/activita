const cardViewBtn = document.getElementById('cardBtn');
const cardFormViewBtn = document.getElementById('cardFormBtn');

const cardView = document.getElementById('card-content');
const cardFormView =  document.getElementById('cardForm-content');

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

cardViewBtn.addEventListener('click',togglecardView);
cardFormViewBtn.addEventListener('click',togglecardFomView);