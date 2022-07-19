const graphBtn = document.getElementById('graph-btn');
const cardBtn = document.getElementById('card-btn');
const iconBtn = document.getElementById('icon-btn');

const title = document.querySelector('title');

const graph = document.getElementById('Graph');
const card = document.getElementById('Cards');
const icon = document.getElementById('Icon');

const buttonGraph = document.getElementById('buttonGraph');
const buttonCard = document.getElementById('buttonCard');
const buttonIcon = document.getElementById('buttonIcon');

cardBtn.classList.add('active');

if(cardBtn.classList.contains('active')){
    graph.classList.add('w-0','h-0','scale-0');
    icon.classList.add('w-0','h-0','scale-0');
    title.innerText="card";
    buttonGraph.classList.add('hidden');
    buttonCard.classList.remove('hidden');
    buttonIcon.classList.add('hidden');
}

function showGraph(){
    graphBtn.classList.add('active');
    cardBtn.classList.remove('active');
    iconBtn.classList.remove('active');
    if(graphBtn.classList.contains('active')){
        graph.classList.remove('w-0','h-0','scale-0');
        card.classList.add('w-0','h-0','scale-0');
        icon.classList.add('w-0','h-0','scale-0');

        buttonGraph.classList.remove('hidden');
        buttonCard.classList.add('hidden');
        buttonIcon.classList.add('hidden');

        title.innerText="graph";
    }
}

function showCard(){
    graphBtn.classList.remove('active');
    cardBtn.classList.add('active');
    iconBtn.classList.remove('active');
    if(cardBtn.classList.contains('active')){
        graph.classList.add('w-0','h-0','scale-0');
        card.classList.remove('w-0','h-0','scale-0');
        icon.classList.add('w-0','h-0','scale-0');

        buttonGraph.classList.add('hidden');
        buttonCard.classList.remove('hidden');
        buttonIcon.classList.add('hidden');

        title.innerText="card";
    }
}

function showIcon(){
    graphBtn.classList.remove('active');
    cardBtn.classList.remove('active');
    iconBtn.classList.add('active');
    if(iconBtn.classList.contains('active')){
        graph.classList.add('w-0','h-0','scale-0');
        card.classList.add('w-0','h-0','scale-0');
        icon.classList.remove('w-0','h-0','scale-0');

        buttonGraph.classList.add('hidden');
        buttonCard.classList.add('hidden');
        buttonIcon.classList.remove('hidden');

        title.innerHTML="icon";
    }
}

graphBtn.addEventListener('click', showGraph);
cardBtn.addEventListener('click', showCard);
iconBtn.addEventListener('click', showIcon);