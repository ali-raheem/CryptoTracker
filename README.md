# CryptoTracker v0.0.2 GPLv3

Simple HTML5/Javascript cryptoportfolio tracker, pulls data from Poloniex.com public API and charts it.

# Running

Run getPoloData.py to update data. Perhaps add it to cron to run 5mins?
Simply host this directory or even open index.htm in your browser.

```
$ git clone git@github.com:wolfmankurd/CryptoTracker.git
$ cd CryptoTracker
$ python -m SimpleHTTPServer
```

# Dependencies

* Python
* [JQuery](http://jquery.com/) using 3.2.1 hosted via Googleapis.com
* [DojiChart](http://dojichart.com/)
