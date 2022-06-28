const BarChart = document.getElementById('bar').getContext('2d');
const myBar = new Chart(BarChart, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgb(255, 99, 132)',
            ],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                ticks:{
                    color: 'white'
                },
                beginAtZero: true
            },
            y: {
                ticks:{
                    color: 'white'
                },
                beginAtZero: true
            },
        },
        plugins:{
            legend:{
                labels: {
                    color: 'white'
                }
            },
            title:{
                display:true,
                position: 'bottom',
                color:'white',
                text:'legend never die'

            }
        }
    }
});
