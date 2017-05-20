//GENETAL FUNCTIONS-----------------------------------------------------------------------------------------------------

function createTable(rows, columns, name){
if (name=="add_frequency" ){
	columns++;
}
var content = "<table>";
for (i = 0; i< rows; i++){
	content += "<tr>";
	for (j = 0; j< columns; j++){
		content += '<td><input type="text" name="'+i+','+j+'"></td>';
	}
	content += "</tr>";
}
content += "</table>";

//content += "<input type='button' name='button_apply' value='Продовжити'>"

$('#'+name).append(content);
}

function readTable(arr, rows, columns){
	for (var i = 0; i<rows; i++){
		arr[i] = [];
		for (var j = 0; j<columns; j++){

                arr[i][j] = parseFloat($("#add_matrix").find('input[name="'+i+','+j+'"]').val());
                //if (arr[i][j].equals(NaN)){delete arr[i][j];}

            console.log("arr "+i+" "+j +" = "+ arr[i][j]);
		}
	}
}

function setStatisticFrequency(columns, arrx, arrn){
    for(var i = 0; i<columns; i++){
        arrx[i] = parseInt($("#add_frequency").find('input[name="0,'+(i+1)+'"]').val());
        arrn[i] = parseInt($("#add_frequency").find('input[name="1,'+(i+1)+'"]').val());
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
    count = sortOnKeys(count);
    for (key in count){
        if (parseInt(key)!=NaN || parseInt(key)!= undefined){
            arrx.push(parseInt(key));
            arrn.push(parseInt(count[key]));
        }

       // console.log(key+" "+count[key]);
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



//LAB 1 FUNCTIONS-------------------------------------------------------------------------------------------------------

function relativeFrequencyArray(n,w, count){
    //console.log("Count = "+count);
    for (var i = 0; i<n.length;i++){
        w[i] = n[i]/count;
       // console.log("n["+i+"]= "+n[i]);
       // console.log("w["+i+"]= "+w[i]);
    }
}

function arraysToTables(arrx,arr, sign, name, fixedNumber) {
    var content = "<table>";
    var length = arrx.length;
    for (i = 0; i < 2; i++) {
        content += "<tr>";
        if (i == 0) {
            content += "<td class='some_margin'>x<sub>i</sub></td>";
        }
        for (j = 0; j < length; j++) {
            if (i == 1 && j == 0) {
                content += "<td class='some_margin'>"+sign+"<sub>i</sub></td>";
            }
            if (i == 0) {
                content += '<td class="some_margin">' + arrx[j] + '</td>';
            }
            if (i == 1) {
                content += '<td class="some_margin">' + arr[j].toFixed(fixedNumber) + '</td>';
            }
        }
        content += "</tr>";
    }
    content += "</table>";
    $('#'+name).append(content);

}

function cumulativeFrequency(n,nc) {
    nc[0] = 0;
    for (var i = 1; i<n.length; i++){
        nc[i] = nc[i-1]+ n[i-1];
    }
}

function relativeCumulativeFrequency(w,wc) {
    wc[0] = 0;
    for (var i = 1; i<w.length; i++){
        wc[i] = wc[i-1]+w[i-1];
    }
}

function emperical(x,wc){
    var s = "0, x<="+x[0]+"<br/>";
    for (var i = 1; i<x.length; i++){
        s+= wc[i].toFixed(3)+", "+x[i-1]+" < x <= "+x[i]+"<br/>";
    }
    s+="1, x>"+x[x.length-1]+"<br/>";
    $("#ef2").append(s);
}

//LAB 2 FUNCTIONS-------------------------------------------------------------------------------------------------------

function  createNewX(newx, x) {
    var i = x[0];
    while (i!=x[x.length-1]+1){
        newx.push(parseFloat(i));
        i++;
    }
   // console.log(newx[newx.length-1]);
}
function intervalFrequency(x, n, interval, w, newn, neww, newx, r, uniqx){

    var h = Math.floor( (x[x.length-1]-x[0] )/r);
    var s = "h = "+h+"<br>";
    $("#interval_frequency").append(s);

    var content = "<table>";
    var c = 0;
    for (var j = 0; j<6; j++){

        if (countIntervalN(x, newx[c], newx[c+h], newx, n)!=0){
            if (j>=1){
                uniqx.push(newx[c]);
                interval.push('(' + newx[c]+' ; '+ newx[c+h]+']');
            }else{
                uniqx.push(newx[c]);
                interval.push('[' + newx[c]+' ; '+ newx[c+h]+']');
            }
            newn.push(countIntervalN(x, newx[c], newx[c+h], newx, n));
            neww.push(countIntervalW(x, newx[c], newx[c+h], newx, w).toFixed(3));
        }

        c += h;
    }
    uniqx.push(newx[c]);

    for (var i = 0; i < 3; i++) {
        c = 0;
        content += "<tr>";
        if (i == 0) {
            c = 0;
            content += "<td class='some_margin'>I</td>";
        }
        for (var j = 0; j < 6; j++) {
            if (i == 1 && j == 0) {
                content += "<td class='some_margin'>n<sub>i</sub></td>";
            }
            if (i == 2 && j == 0) {
                content += "<td class='some_margin'>W<sub>i</sub></td>";
            }
            if ( i == 0 && interval[j]!=undefined){


                content += '<td class="some_margin"> '+interval[j]+' </td>';
            }
            if (i == 1 && newn[j]!=undefined) {

                content += '<td class="some_margin">' + newn[j] + '</td>';
            }
            if (i == 2 && neww[j]!=undefined) {

                content += '<td class="some_margin">' + neww[j] + '</td>';
            }

        }
        content += "</tr>";
    }
    content += "</table>";
    $('#interval_frequency').append(content);
}
function divisionFunction(x,newx,neww,r, newwcum) {

    newwcum[0] = 0.0;
    for (var i = 1; i<neww.length; i++){
        newwcum[i] = parseFloat(newwcum[i-1]+parseFloat(neww[i-1]));
       // console.log("newwcum["+i+"]= "+newwcum[i]);
       // console.log("neww["+i+"]= "+neww[i]);
    }
    newwcum.push(1);

    var s = "<h2>F*(x)=</h2>";
    s += "0, x <= 0</br>";
    var c = 0;
    var h = Math.floor( (x[x.length-1]-x[0] )/r);
    for (var i=1; i<newwcum.length; i++){
        s+= newwcum[i]+", "+newx[c]+ " < x <= "+newx[c+h]+" </br>";
        c +=h;
    }

    $("#division_function").append(s);
}
function modAndMediana(newn,x, r, uniqx, newwcum) {
    var index = 0;
    var nm_1 = 0;
    var nm1 = 0;
    var val = 0;
    var nm0 = 0;
    for (var i = 0; i<newn.length; i++ ){
        if (newn[i]>nm0){
            nm0 = newn[i];
        }
    }
    for (var i = 0; i<newn.length; i++){
        if (newn[i] == nm0){
            index = i;
        }
    }
    if (index == 0){
        nm_1=0;
        val = uniqx[index];
    }
    else{
        nm_1 = newn[index-1];
        val = uniqx[index+1];
    }
    if (index == newn.length-1){
        nm1 = 0;
        val = uniqx[index];
    }
    else{
        nm1 = newn[index+1];
    }
    var h = Math.floor( (x[x.length-1]-x[0] )/r);
    console.log("index = "+index);
    var fx, fx_1, fxindex;
    for (var i = 0; i<newwcum.length; i++ ){
        if (newwcum[i]>0.5){
            fx = newwcum[i];
            fx_1 = newwcum[i-1];
            fxindex = i;
            break;
        }
    }
    var M0 = (val * (nm0-nm_1)/(2*(nm0)-nm_1-nm1)*h).toFixed(3);

    var Me =(uniqx[fxindex-1]*(0.5-fx_1)/(fx-fx_1)*h).toFixed(3);

    //console.log(uniqx[fxindex-1]+"*(0.5-"+fx_1+")/("+fx+"-"+fx_1+")*"+h+"\n");
    for (var i = 0; i<uniqx.length; i++){
        //console.log("uniqx["+i+"]= "+uniqx[i]);
    }

    $("#mod_and_mediana").append("<h2>Мода:</h2> M0*= "+M0+" <h2>Медіана: </h2>Me*= "+Me);
}

//LAB 3 FUNCTIONS-------------------------------------------------------------------------------------------------------

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

function avgQuadDeviation(d) {
    return Math.pow(d, 1/2);
}

function empericalStartMoments(x,n,_n, M) {
    var k = 5;
    var Ms = "";
    for (var i = 1; i<k; i++){
        M[i] = 0;
        for (var j = 0; j<x.length; j++){
            M[i] += n[j]*parseFloat(Math.pow(x[j], i));
        }
        M[i] /= _n;
        Ms += "M["+i+"] = "+M[i]+"<br>";
    }
    $("#emperical_start_moments").append(Ms);
}

function empericalCenterMoments(x,n,_n, m, avg) {
    var k = 5;
    var ms = "";
    for (var i = 1; i<k; i++){
        m[i] = 0;
        for (var j = 0; j<x.length; j++){
            m[i] += n[j]*parseFloat(Math.pow(x[j]-avg, i));
        }
        m[i] /= _n;
        ms += "m["+i+"] = "+m[i]+"<br>";
    }
    $("#emperical_center_moments").append(ms);
}

function assymetry(m, sigma) {
    return m[3]/Math.pow(sigma,3);
}

function exces(m,sigma) {
    return m[4]/Math.pow(sigma,4)-3;
}

function modEtc(x,n, _avg, _sigma) {
    var Mo = [];
    var n_max = 0;
    for (var i = 0; i<n.length; i++ ){
        if (n[i]>n_max){
            n_max = n[i];
        }
    }
    for (var i = 0; i<n.length; i++){
        if (n[i]==n_max){
            Mo.push(x[i]);
        }
    }
    var Me = x[x.length/2-1];
    var R = x[x.length-1] - x[0];
    var V = Math.round(_sigma/_avg*100);
    var s = "M0 = "+Mo+"<br> Me = "+Me+"<br> R = "+R+ "<br> V="+V;
    $("#mod_mediana_scope_koef").append(s);
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

function countIntervalN (x, x1, x2, newx, n){
    var sum = 0;
    if (x1==newx[0]) {sum = n[0];}
            for (var m = 0; m<x.length; m++){
                if (x[m]>x1 && x[m]<=x2){
                    sum += n[m];
                }
            }
    return sum;
}
function countIntervalW(x, x1, x2, newx, w){
    var sum = 0;
    if (x1==newx[0]) {sum = w[0];}
    for (var m = 0; m<x.length; m++){
        if (x[m]>x1 && x[m]<=x2){
            sum += w[m];
        }
    }
    return sum;
}

Array.max = function( array ){
    return Math.max.apply( Math, array );
};

Array.min = function( array ){
    return Math.min.apply( Math, array );

};

//----------------------------------------------------------------------------------------------------------------------