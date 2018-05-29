function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", "http://www.statcan.gc.ca/sites/json/ind-econ.json", true); // true for asynchronous 
    xmlHttp.send(null);
}

var obj = JSON.parse(xmlHttp);