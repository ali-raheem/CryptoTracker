var request = require('request');

exports.updateData = function () {
    var currencyPair = "BTC_XMR";
    var endTime = Math.floor(new Date()/1000);
    var startTime = endTime - 24*60*60;
    var apiURL = "https://poloniex.com/public?command=returnChartData&currencyPair="+currencyPair+"&start="+startTime+"&end="+endTime+"&period=300";
    console.log("Getting data from Poloniex.");
    request(apiURL, (err, res, body) => {
	var i;
	data = JSON.parse(body);
	for(i = 0; i < data.length; i++) {
	    data[i].time = new Date(data[i].date).toISOString();
	}
    });
}

exports.getData = function () {
    return data;
}
