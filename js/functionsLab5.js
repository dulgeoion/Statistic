/**
 * Created by dulishkovich1 on 20.05.2017.
 */
function createTable(rows, columns, name ){

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



    for (var i =0 ; i<rows; i++){
        arr[i] = [];
        for (var j = 0; j<columns; j++){

            arr[i][j] = parseFloat($("#full_table").find('input[name="'+i+1+','+j+1+'"]').val());



        }

    }

}


// Lab ---------------------------------------------------

    function statistical_distribution(x,y,arr) {

        for (var i = 0; i<x.length; i++ ){
            
        }

    }
