/**
 * Created by dulge on 19.05.2017.
 */
var table1 = [];

// var func = $("#yesButton").click(function () {
//     var msg = loadURL("table1.txt");
//     table1 = msg.split(' ');
//
//     alert(table1);
//
// });

loadURL = function(url) {
    var oRequest = new XMLHttpRequest();
    oRequest.open('GET', url, false);
    oRequest.setRequestHeader("User-Agent", navigator.userAgent);
    oRequest.send(null);

    return oRequest.responseText;
};