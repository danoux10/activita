const dayBtn = document.getElementById('day');
const nightBtn = document.getElementById('night');
const body = document.querySelector('body');

body.classList.add('dark');

if(body.classList.contains('dark')){
    dayBtn.classList.toggle('hidden');
}
function toggleMode(){
    const xBar = myBar.config.options.scales.x;
    const yBar = myBar.config.options.scales.y;
    const labelBar = myBar.config.options.plugins.labels;
    const titleBar = myBar.config.options.plugins.title;
    if (body.classList.contains('dark')){
        body.classList.remove('dark');
        body.classList.add('light');
        dayBtn.classList.toggle('hidden');
        nightBtn.classList.toggle('hidden');
        Chart.defaults.color ='white';
    }else{
        body.classList.remove('light');
        body.classList.add('dark');
        dayBtn.classList.toggle('hidden');
        nightBtn.classList.toggle('hidden');
        xBar.ticks.color='black';
        yBar.ticks.color='black';
        labelBar.color= 'black';
        titleBar.color='black';
    }
}

dayBtn.addEventListener('click', toggleMode);
nightBtn.addEventListener('click', toggleMode);