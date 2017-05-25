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

function fromFile(arrx, arrn, str) {

    var text = loadURL(str);
    var tmpSpace = text.split(" ");
    var tmpNewLine = text.split(/\n| /);
    var usedValues = [];
    var count = [];
    for (var i = 0; i < tmpNewLine.length; i++) {

        if (usedValues.contains(parseFloat(tmpNewLine[i]))) {
            count[parseFloat(tmpNewLine[i])] += 1;
        } else {
            if (!isNaN(parseFloat(tmpNewLine[i]))) {
                usedValues.push(parseFloat(tmpNewLine[i]));
                count[parseFloat(tmpNewLine[i])] = 1;
            }

        }

    }
    count = sortOnKeys(count);
    for ( var key in count) {
        if (!isNaN(parseFloat(key))) {
            arrx.push(parseFloat(key));
            arrn.push(parseFloat(count[key]));
        }

    }
    if (arrx[arrx.length-1] == NaN){
        delete arrx[arrx.length-1];
        delete arrn[arrn.length-1];
    }
    console.log(arrx);
}


var z = [];
var tmp = [];
var t = loadURL("table1.txt");
z = t.split(/\n| /);
///(?:\n| )+/
console.log(z);
for (var item in z){
    item = parseFloat(item);
}
console.log(z);

Array.prototype.sortOn = function(key){
    this.sort(function(a, b){
        if(a[key] < b[key]){
            return -1;
        }else if(a[key] > b[key]){
            return 1;
        }
        return 0;
    });
}