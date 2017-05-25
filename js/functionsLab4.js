/**
 * Created by dulishkovich1 on 20.05.2017.
 */
//ADDING DATA ------------------------------------------

function createTable(rows, columns, name, count){
    if (name=="add_frequency" ){
        columns++;
    }
    var content = "<table>";
    for (i = 0; i< rows; i++){
        content += "<tr>";
        for (j = 0; j< columns; j++){
            content += '<td><input type="text" name="'+count+','+i+','+j+'"></td>';
        }
        content += "</tr>";
    }
    content += "</table>";

//content += "<input type='button' name='button_apply' value='Продовжити'>"

    $('#'+name).append(content);
}

function setStatisticFrequency(columns, arrx, arrn, count){
    for(var i = 0; i<columns; i++){
        arrx[i] = parseInt($("#add_frequency").find('input[name="'+count +',0,'+(i+1)+'"]').val());
        arrn[i] = parseInt($("#add_frequency").find('input[name="'+count+ ',1,'+(i+1)+'"]').val());
    }
}

function readTable(arr, rows, columns, count){
    for (var i = 0; i<rows; i++){
        arr[i] = [];
        for (var j = 0; j<columns; j++){

            arr[i][j] = parseFloat($("#add_matrix").find('input[name="'+count+','+i+','+j+'"]').val());
            //if (arr[i][j].equals(NaN)){delete arr[i][j];}

            console.log("arr "+i+" "+j +" = "+ arr[i][j]);
        }
    }
}

function setStatisticFrequencyFromMatrix(array, arrx, arrn, rows, columns) {
    var count = [];
    var usedValues = [];
    for (var i = 0; i<rows; i++){
        for (var j=0; j<columns; j++){
            if (usedValues.contains(array[i][j])){
                count[array[i][j]] += 1;
            }else{
                if (!isNaN(array[i][j])){
                    usedValues.push(array[i][j]);
                    count[array[i][j]] = 1;
                }

            }
        }
    }
    var keys = Object.keys(count);
    keys.sort();
    for (var i=0; i<keys.length; i++) { // now lets iterate in sort order
        arrx.push(keys[i]);
        arrn.push(count[keys[i]]);
        /* do something with key & value here */
    }
    if (arrx[arrx.length-1] == NaN){
        delete arrx[arrx.length-1];
        delete arrn[arrn.length-1];
    }
}

function arraysToFrequency(arrx,arrn, b){
    var content = "<table>";
    if (b){
        var length = arrx.length;
    }else{
        var length = arrx.length;
    }
    for (i = 0; i< 2; i++){
        content += "<tr>";
        if (i==0){
            content += "<td class='some_margin'>x<sub>i</sub></td>";
        }
        for (j = 0; j< length; j++){
            if (i==1 && j==0){
                content+= "<td class='some_margin'>n<sub>i</sub></td>";
            }
            if (i==0){
                content += '<td class="some_margin">'+arrx[j]+'</td>';
            }
            if (i==1) {
                content += '<td class="some_margin">' + arrn[j] + '</td>';
            }
        }
        content += "</tr>";
    }
    content += "</table>";


    $('#labs_frequency').append(content);
}
//LAB 1 FUNCTIONS ------------------------------------------------------------------------------------------------------

function avg(n,x) {
    var _avg = 0;
    for (var i = 0; i<x.length; i++){
        _avg+= n[i]*x[i];

    }
    _avg/= countAll(n);
    return _avg;
}

function sampleDispersion(x,n,_n,_avg) {
    var d = 0;
    for (var i = 0; i<x.length; i++){
        d+= n[i]*Math.pow((x[i] - _avg),2);
        //console.log(n[i]+" " +x[i]+" "+_avg+" "+Math.pow((x[i] - _avg),2));
    }
    //console.log("d" + d);
    d/=_n;

    return d;
}

function group_avg(x1,x2, n1, n2) {
    var content ="";
    var x = (n1*x1 + n2*x2)/(n1+n2);
    content = "x <sub>гр.сер</sub> = "+x;
    $("#general_avg").append(content);
}

function inside_group_dispresion(N1, N2, D1, D2) {
    $("#inside_group_dispresion").append("D<sub>внтр</sub> = "+ (N1*D1+N2*D2)/(N1+N2));
}

function  general_dispersion(x1, x2, n1, n2, avg, N1, N2 ) {
    var x = x1;
    var n = n1;

    for (var i = 0; i<x2.length; i++){
        if (x.includes(x2[i])){
            n[i] += n2[i];
        }else{
            x.push(x2[i]);
            n.push(n2[i]);
        }

    }
    var res = 0;
    for (var i = 0; i<x.length; i++){
        res += n[i]*Math.pow((x[i] - avg), 2);

    }

    res /= N1+N2;

    $("#general_dispersion").append("D<sub>заг</sub> = "+res);

}

//HELP FUNCTIONS--------------------------------------------------------------------------------------------------------

Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] == obj) {
            return true;
        }
    }
    return false;
}

function sortOnKeys(dict) {

    var sorted = [];
    for(var key in dict) {
        sorted[sorted.length] = key;
    }
    sorted.sort();

    var tempDict = {};
    for(var i = 0; i < sorted.length-1; i++) {
        tempDict[sorted[i]] = dict[sorted[i]];
    }

    return tempDict;
}

function countAll(arr) {
    var count=0;
    for (var i = 0; i<arr.length;i++){
        count += parseInt(arr[i]);
        //  console.log("arr "+i+" = "+arr[i]);
    }
    // console.log("thiscount "+count);
    return count;
}