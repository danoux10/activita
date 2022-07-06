const graphViewBtn = document.getElementById('graphBtn');
const graphFormViewBtn = document.getElementById('graphFormBtn');

const graphView = document.getElementById('graph-content');
const graphFormView =  document.getElementById('graphForm-content');

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

graphViewBtn.addEventListener('click',toggleGraphView);
graphFormViewBtn.addEventListener('click',toggleGraphFomView);