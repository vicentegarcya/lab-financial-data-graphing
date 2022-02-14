axios.get('http://api.coindesk.com/v1/bpi/historical/close.json')
    .then((data) => {
        console.log(data.data.bpi);
        const dates = Object.keys(data.data.bpi);
        const bpi = Object.values(data.data.bpi);
        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: dates,
                datasets: [{
                    label: 'Bitcoin Price Index',
                    data: bpi,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.5)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 2
                }]
            },  
        });
        console.log(myChart);
    })
    .catch(err => next(err));
