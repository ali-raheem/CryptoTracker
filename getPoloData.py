import urllib2, json, datetime
from time import time

def time2ISO(time):
	return datetime.datetime.utcfromtimestamp(time).strftime('%Y-%m-%dT%H:%M:%SZ')

currencyPair = "BTC_XMR"
endTime = int(time())
startTime = endTime - 24*60*60

poloApi = "https://poloniex.com/public?command=returnChartData&currencyPair={}&start={}&end={}&period=300".format(currencyPair, startTime, endTime)
print(poloApi)
data = json.loads(urllib2.urlopen(poloApi).read())

for point in data:
	point["time"] = time2ISO(point["date"])

output = open("polo.{}.js".format(currencyPair), "w")
output.write("var poloData;\npoloData = ")
output.write(json.dumps(data))
output.close()
