/**
 * Created by dulishkovich1 on 20.05.2017.
 */
//INPUT DATA -----------------------------------

    var array = [];
    var x = [];
    var y = [];

    $("input[name='xy_button']").click(function () {
        createTable(1, parseInt($("input[name='x_count']").val())+1, "x_row");
        $("#x_row").find('input[name="0,0"]').parent().html("x");
        createTable(1, parseInt($("input[name='y_count']").val())+1, "y_row");
        $("#y_row").find('input[name="0,0"]').parent().html("y");
        $("input[name='full_table_button']").css("display","block");
    });

    $("input[name='full_table_button']").click(function () {
        createTable(parseInt($("input[name='x_count']").val())+1,  parseInt($("input[name='y_count']").val())+1, "full_table");
        $("#full_table").find('input[name="0,0"]').parent().html("x/y");
        for (var i = 1; i < parseInt($("input[name='x_count']").val())+1; i++){
            $("#full_table").find('input[name="'+i+',0"]').parent().html($("#x_row").find('input[name="0,'+i+'"]').val());
            x.push($("#x_row").find('input[name="0,'+i+'"]').val());

        }

        for (var i = 1; i < parseInt($("input[name='y_count']").val())+1; i++){
            $("#full_table").find('input[name="0,'+i+'"]').parent().html($("#y_row").find('input[name="0,'+i+'"]').val());
            y.push($("#y_row").find('input[name="0,'+i+'"]').val());
        }

        $("input[name='main_continue_button']").css("display","block");
    });
    $("input[name='main_continue_button']").click(function () {
        readTable(array,parseInt($("input[name='x_count']").val())+1, parseInt($("input[name='y_count']").val())+1, x,y)
    });
    $("#main_continue_button").click(function () {
        Lab();
    });

    $("#yesButton").click(function () {
        x.push(-1);
        x.push(1);
        x.push(5);
        x.push(10);
        x.push(25);
        x.push(26);
        x.push(28);
        x.push(30);
        y.push(2);
        y.push(4);
        y.push(7);
        y.push(9);
        y.push(10);
        y.push(14);
        y.push(16);
        y.push(20);

        array[1] = [];
        array[1][1] = 2;
        array[1][2] = 4;
        array[1][3] = 5;
        array[1][4] = 6;
        array[1][5] = 1;
        array[1][6] = 1;

        array[2] = [];
        array[2][1] = 7;
        array[2][2] = 15;
        array[2][3] = 6;
        array[2][4] = 7;
        array[2][5] = 4;
        array[2][6] = 3;
        array[2][7] = 1;

        array[3] = [];
        array[3][2] = 7;
        array[3][3] = 11;
        array[3][4] = 1;
        array[3][5] = 3;
        array[3][6] = 1;
        array[3][7] = 1;
        array[3][8] = 2;

        array[4] = [];
        array[4][2] = 2;
        array[4][3] = 2;
        array[4][4] = 7;
        array[4][5] = 8;
        array[4][6] = 2;
        array[4][7] = 2;
        array[4][8] = 3;

        array[5] = [];
        array[5][1] = 2;
        array[5][2] = 3;
        array[5][3] = 3;
        array[5][4] = 3;
        array[5][5] = 1;
        array[5][6] = 1;
        array[5][7] = 1;

        array[6] = [];
        array[6][1] = 5;
        array[6][2] = 3;
        array[6][3] = 4;
        array[6][4] = 1;
        array[6][5] = 1;
        array[6][6] = 1;
        array[6][7] = 2;
        array[6][8] = 1;

        array[7] = [];
        array[7][1] = 2;
        array[7][2] = 6;
        array[7][3] = 5;
        array[7][4] = 2;
        array[7][5] = 2;
        array[7][6] = 2;
        array[7][7] = 1;

        array[8] = [];
        array[8][1] = 3;
        array[8][2] = 1;
        array[8][3] = 1;
        array[8][4] = 5;
        array[8][5] = 4;
        array[8][6] = 3;
        array[8][7] = 1;
        array[8][8] = 3;

        $("#header").fadeOut();

        Lab();

    });

//LAB ---------------------------------------

    function Lab() {
        $("#header").fadeOut();
        $("#lab").fadeIn(4000);


    }