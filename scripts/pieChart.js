const PieChart = document.getElementById('pie').getContext('2d');
const myPie = new Chart(PieChart, {
    type: 'pie',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                'rgb(75, 192, 192)',
                'rgb(153, 102, 255)',
                'rgb(255, 159, 64)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        plugins:{
            legend:{
                position: 'bottom',
                labels: {
                    color: 'white'
                }
            },
            title:{
                display:true,
                color: 'white',
                text:'legend never die'
            },
        }
    }
});
