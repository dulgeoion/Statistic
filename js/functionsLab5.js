/**
 * Created by dulishkovich1 on 20.05.2017.
 */
function createTable(rows, columns, name){

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

function readTable(arr, rows, columns, x, y){



    for (var i =1 ; i<rows; i++){
        arr[i] = [];
        for (var j = 1; j<columns; j++){

            arr[i][j] = parseFloat($("#full_table").find('input[name="'+i+','+j+'"]').val());


        }

    }

}


// Lab ---------------------------------------------------

    function statistical_distribution(x,y,arr) {
        console.log(arr);
        for (var i = 0; i<x.length; i++ ){
            $("#statistical_distribution").append("<div id='sd_x"+i+"'></div>");
            $("#sd_x"+i+"").append("x<sub>"+i+"</sub> = "+x[i]);
            createTable(2, y.length+1, "sd_x"+i+"");
            $("#sd_x"+i+"").find('input[name="0,0"]').parent().html("y");
            $("#sd_x"+i+"").find('input[name="1,0"]').parent().html("m");

            for (var j = 1; j<y.length+1; j++){
                $("#sd_x"+i+"").find('input[name="0,'+j+'"]').parent().html(y[j-1]);

                if (!isNaN(arr[i+1][j]) && arr[i+1][j]!=null){
                    $("#sd_x"+i+"").find('input[name="1,'+j+'"]').parent().html(arr[i+1][j]);
                }else{
                    $("#sd_x"+i+"").find('input[name="1,'+j+'"]').parent().html("");
                }
            }
        }

    }

    function selective_avg(x,y,arr, yAvg) {
        var y_new = y;
        var arr_new = arr;


        createTable(2, x.length+1, "selective_avg");
        $("#selective_avg").find('input[name="0,0"]').parent().html("x");
        $("#selective_avg").find('input[name="1,0"]').parent().html("y<sub>сер.</sub>");

        for (var i = 0; i<x.length; i++){
            $("#selective_avg").find('input[name="0,'+(i+1)+'"]').parent().html(x[i]);

            var sum = 0;
            var sumd = 0;
            for (var k = 0; k<y.length; k++){
                if (!isNaN(arr[i+1][k+1])){
                    sum+= y[k]*arr[i+1][k+1];
                    sumd += arr[i+1][k+1];
                }
            }
            sum /= sumd;
            yAvg.push(sum.toFixed(3));

            $("#selective_avg").find('input[name="1,'+(i+1)+'"]').parent().html(yAvg[i]);
           // $("#selective_avg").find('input[name="1,'+(i+1)+'"]').parent().html(yAvg[i]);
            console.log("x = "+x);
            console.log("yavg = "+yAvg)
        }

    }
    
    function mean_square_deviation(xavg,yavg,nx, ny, x, y, sigmax,sigmay, general_sum) {
        xavg = 0;
        var sum = 0
        for (var i = 0; i<nx.length; i++){
            xavg += nx[i]*y[i];
            sum += nx[i];
        }
        this.general_sum = sum;
        xavg /= sum;
        this.xavg = xavg;


        yavg = 0;
        sum = 0
        for (var i = 0; i<ny.length; i++){
            yavg += ny[i]*y[i];
            sum += ny[i];
        }
        yavg /= sum;
        this.yavg = yavg;

        sum = 0;
        var xavgq = 0;
        var yavgq = 0;

        for (var i = 0; i<nx.length; i++){
            xavgq += nx[i]*nx[i]*y[i];
            sum += nx[i];
        }
        xavgq /= sum;

        for (var i = 0; i<ny.length; i++){
            yavgq += ny[i]*ny[i]*y[i];
            sum += ny[i];
        }
        yavgq /= sum;

        sigmax = Math.pow((xavgq-Math.pow(xavg,2)),1/2);
        this.sigmax = sigmax;
        sigmay = Math.pow((yavgq-Math.pow(yavg,2)),1/2);
        this.sigmay = sigmay;

        $("#mean_square_deviation").append("σ<sub>x</sub> = " + sigmax + " <br>σ<sub>y</sub> = "+sigmay);

    }
    
    function selective_correlation_coefficients(sigmax, sigmay, x,y,array,nx,ny, scc, general_sum, yavg, xavg) {

        var sum = 0;

        for (var i = 0; i < x.length; i++) {
            for (var j = 0; i < y.length; i++) {
                if (!isNaN(array[i + 1][j + 1])) {

                    sum += x[i] * y[j] * array[i + 1][j + 1];

                }

            }
            console.log(xavg + " " + yavg + " " + sigmay + " " + sigmax + " " + general_sum);
            scc = (sum - xavg * yavg) / (general_sum * sigmay * sigmax);
            this.scc = scc;
            $("#selective_correlation_coefficients").append("r<sub>B</sub> = " + scc);

        }
    }

    function selective_equation_regression_line(sigmax, sigmay, x,y,array,nx,ny, scc, general_sum, yavg, xavg, scc) {


        $("#selective_equation_regression_line").append("y<sub>x</sub> = "+((sigmay/sigmax)*scc).toFixed(3)+"*x+"+((sigmay/sigmax)*scc*xavg+yavg).toFixed(3));

    }


// HELP FUNCTIONS ------------------------------------------

    function y_avg(y, array, i){

        return sum;
    }

    function fillNX(nx, x, y, array) {
        for (var i = 0; i<x.length; i++){
            var sum = 0;
            for (var j = 0; j<y.length; j++){
                if(!isNaN(array[i+1][j+1])){

                    sum += array[i+1][j+1];
                }
            }
            nx.push(sum);
        }
    }

    function fillNY(ny, x, y, array) {
        for (var j = 0; j < y.length; j++) {
            var sum = 0;
            for (var i = 0; i < x.length; i++) {
                if (!isNaN(array[i + 1][j + 1])) {

                    sum += array[i + 1][j + 1];
                }
            }
            ny.push(sum);
        }
    }

