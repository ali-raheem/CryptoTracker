dojichart = new DojiChart.core.Chart(document.getElementById('my-chart'), {
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
// Price
var price_chart_panel = new DojiChart.panel.TimeValuePanel({
  primaryLayer: new DojiChart.layer.CandleLayer({}),
  height: 200,
  grid: true
});

dojichart.addComponent("price", price_chart_panel);

// SMA 200
var sma200_layer = new DojiChart.layer.indicator.SimpleMovingAverageLayer({
  period: 200,
  color: "blue"
});
price_chart_panel.addLayer(sma200_layer);

// SMA 50
var sma50_layer = new DojiChart.layer.indicator.SimpleMovingAverageLayer({
  period: 50,
  color: "orange"
});
price_chart_panel.addLayer(sma50_layer);

// EMA 10
var ema10_layer = new DojiChart.layer.indicator.ExponentialMovingAverageLayer({
  period: 10,
  color: "fuchsia"
});
price_chart_panel.addLayer(ema10_layer);

// Bollinger Bands
var bb_layer = new DojiChart.layer.indicator.BollingerBandsLayer({
  midColor: "rgba(0, 128, 0, 0.4)",
  bandColor: "rgba(0, 0, 0, 0.3)" 
});
price_chart_panel.addLayer(bb_layer);

// Volume profile
var volume_profile_layer = new DojiChart.layer.indicator.VolumeProfileLayer({
});
price_chart_panel.addLayer(volume_profile_layer);

// Time labels (at top of chart)
var time_labels_panel = new DojiChart.panel.TimeLabelsPanel();
dojichart.addComponent("timelabels", time_labels_panel);

// Volume panel
var volume_chart_panel = new DojiChart.panel.TimeValuePanel({
  height: 100,
  primaryAtBack: true,
  primaryLayer: new DojiChart.layer.indicator.VolumeLayer({
    layerIndex: 1,
    barColor: "#3377FF",
    barWidth: 5
  })
});

dojichart.addComponent("volume", volume_chart_panel, true);

// Volume EMA 65
var ema65_layer = new DojiChart.layer.indicator.ExponentialMovingAverageLayer({
  layerIndex: 2,
  input: "volume",
  period: 65,
  color: "black"
});
volume_chart_panel.addLayer(ema65_layer);

// Stochastic panel
var stochastic_chart_panel = new DojiChart.panel.TimeValuePanel({
  height: 68,
  grid: {
    value: {
      lines: [20, 50, 80]
    }
  },
  primaryLayer: new DojiChart.layer.indicator.StochasticLayer({
  })
});

dojichart.addComponent("stochastic", stochastic_chart_panel, true);

// RSI panel
var rsi_chart_panel = new DojiChart.panel.TimeValuePanel({
  height: 68,
  grid: {
    value: {
      lines: [30, 70]
    }
  },
  primaryLayer: new DojiChart.layer.indicator.RSILayer({
  })
});

dojichart.addComponent("rsi", rsi_chart_panel, true);

function updateChart(){
    var i;
    for(i = 0; i < poloData.length; i++){
    }
    dojichart.loadData(poloData, "Poloniex.com", 'M5');    
}

updateChart();
setInterval(updateChart, 1*60*1000);

$("#btn-bak").click(function(){
    dojichart.scroll(dojichart.getOffset() - 10, "false");
})
$("#btn-fwd").click(function(){
    dojichart.scroll(dojichart.getOffset() + 10, "false");
})
