var myChart = new DojiChart.core.Chart(document.getElementById('my-chart'), {
    width: 700,
    fieldMap: {
        time: 'date',
        open: 'open',
        high: 'high',
        low: 'low',
        close: 'close',
    }
    
});

var pricePanel = new DojiChart.panel.TimeValuePanel({
    primaryLayer: new DojiChart.layer.CandleLayer(),
    height: 200
    
});

myChart.addComponent('price', pricePanel);

var priceData = []
currencyPair = "BTC_XMR"
endTime = Math.trunc(Date.now()/1000);
startTime = endTime - 5*60*60;
poloApi = "https://poloniex.com/public?command=returnChartData&currencyPair="+currencyPair+"&start="+startTime+"&end="+endTime+"&period=300"
console.log(poloApi);
function updatePriceData() {
    $.get(poloApi, function (data){
        var i;
        priceData = data;
        for(i = 0; i < priceData.length; i++) {
            priceData[i] = priceData[i];
            var t = new Date(priceData[i].date*1000);
            priceData[i].date = t.toISOString();
        }
        console.log(priceData[i-1].date+": Updated priceData for "+currencyPair);
    })
}

function updateChart(){
    updatePriceData();
    var i;
    for(i = 0; i < priceData.length; i++){
        console.log(priceData[i].date + ": " +
                    currencyPair + " low: " +
                    priceData[i].low + " high:" +
                    priceData[i].high);
    }
    myChart.loadData(priceData, "Poloniex.com: "+currencyPair, 'M5');    
}

$(document).ready(function(){
    setInterval(updateChart, 5*1000);
});
