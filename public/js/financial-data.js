let fromDate = "2021-11-03";
let toDate = "2022-02-03";
let currency = 'EUR';
let myChart;

const loadData = () => {
    axios.get(`http://api.coindesk.com/v1/bpi/historical/close.json?start=${fromDate}&end=${toDate}&currency=${currency}`)
        .then((data) => {
            const dates = Object.keys(data.data.bpi);
            const bpi = Object.values(data.data.bpi);
            const ctx = document.getElementById('myChart').getContext('2d');
            myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: dates,
                    datasets: [{
                        label: 'Bitcoin Price Index',
                        data: bpi,
                        backgroundColor: [
                            'rgb(152, 251, 152, 0.5)',
                        ],
                        borderColor: [
                            'rgba(152, 251, 152, 1)',
                        ],
                        borderWidth: 2,
                        fill: true
                    }]
                },  
            });
        })
        .catch(err => console.log(err));
}

loadData();

document.getElementById('from-date').addEventListener('change', (event) => {
    myChart.destroy();
    fromDate = event.target.value;
    loadData();
})

document.getElementById('to-date').addEventListener('change', (event) => {
    myChart.destroy();
    toDate = event.target.value;
    loadData();
})
document.getElementById('currencies').addEventListener('change', (event) => {
    myChart.destroy();
    currency = event.target.value;
    loadData();
})
