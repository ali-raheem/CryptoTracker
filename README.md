# CryptoTracker v0.0.5 GPLv3

Simple HTML5/Javascript cryptoportfolio tracker, pulls data from Poloniex.com public API and charts it.

You can see a [demo here](https://wolfmankurd.github.io/CryptoTracker) however github data will not be dynamically updated like running your own version will be.

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

