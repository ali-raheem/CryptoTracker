myChart = new DojiChart.core.Chart(document.getElementById('my-chart'), {
    width: 700,
    fieldMap: {
        time: 'time',
        open: 'open',
        high: 'high',
        low: 'low',
        close: 'close',
        volume: 'volume'
    }
});
candle_layer = new DojiChart.layer.CandleLayer({});
price_chart_panel = new DojiChart.panel.TimeValuePanel({
    primaryLayer: candle_layer,
    height: 250,
    grid: true    
});
sma_layer = new DojiChart.layer.indicator.SimpleMovingAverageLayer({
    period: 5
});
price_chart_panel.addLayer(sma_layer);

myChart.addComponent("price", price_chart_panel);

time_labels_panel = new DojiChart.panel.TimeLabelsPanel();
myChart.addComponent("timelabels", time_labels_panel);

volume_layer = new DojiChart.layer.indicator.VolumeLayer({
    barColor: "#3377FF",
    barWidth: 5
});
volume_chart_panel = new DojiChart.panel.TimeValuePanel({
    height: 100,
    primaryLayer: volume_layer    
});
myChart.addComponent("volume", volume_chart_panel);

console.log(poloData);
function updateChart(){
    var i;
    for(i = 0; i < poloData.length; i++){
    }
    myChart.loadData(poloData, "Poloniex.com", 'M5');    
}

updateChart();
setInterval(updateChart, 1*60*1000);
