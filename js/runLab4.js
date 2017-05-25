/**
 * Created by dulishkovich1 on 20.05.2017.
 */
(function () {
    var array = [];
    var x1 = [];
    var x2 = [];
    var n1 = [];
    var n2 = [];

    $("#yesButton").click(function () {

        x1.push(parseFloat(-2.0));
        x1.push(parseFloat(-1.0));
        x1.push(parseFloat(0.0));
        x1.push(parseFloat(1.0));
        x1.push(parseFloat(1.5));
        x1.push(parseFloat(2.0));
        x1.push(parseFloat(3.0));
        x1.push(parseFloat(4.0));
        x1.push(parseFloat(5.0));
        x1.push(parseFloat(7.0));
        x1.push(parseFloat(8.0));
        x1.push(parseFloat(10.0));
        x1.push(parseFloat(11.0));
        x1.push(parseFloat(12.0));
        x1.push(parseFloat(13.0));
        x1.push(parseFloat(15.0));
        x1.push(parseFloat(17.0));
        x1.push(parseFloat(19.0));
        x1.push(parseFloat(21.0));
        x1.push(parseFloat(22.0));
        n1.push(parseFloat(2.0));
        n1.push(parseFloat(2.0));
        n1.push(parseFloat(3.0));
        n1.push(parseFloat(2.0));
        n1.push(parseFloat(1.0));
        n1.push(parseFloat(3.0));
        n1.push(parseFloat(3.0));
        n1.push(parseFloat(3.0));
        n1.push(parseFloat(3.0));
        n1.push(parseFloat(1.0));
        n1.push(parseFloat(2.0));
        n1.push(parseFloat(1.0));
        n1.push(parseFloat(1.0));
        n1.push(parseFloat(2.0));
        n1.push(parseFloat(2.0));
        n1.push(parseFloat(1.0));
        n1.push(parseFloat(3.0));
        n1.push(parseFloat(1.0));
        n1.push(parseFloat(2.0));
        n1.push(parseFloat(2.0));

        x2.push(parseFloat(-2.0));
        x2.push(parseFloat(-1.0));
        x2.push(parseFloat(0.0));
        x2.push(parseFloat(1.0));
        x2.push(parseFloat(1.5));
        x2.push(parseFloat(2.0));
        x2.push(parseFloat(3.0));
        x2.push(parseFloat(4.0));
        x2.push(parseFloat(5.0));
        x2.push(parseFloat(6.0));
        x2.push(parseFloat(7.0));
        x2.push(parseFloat(8.0));
        x2.push(parseFloat(9.0));
        x2.push(parseFloat(10.0));
        x2.push(parseFloat(11.0));
        x2.push(parseFloat(12.0));
        x2.push(parseFloat(13.0));
        x2.push(parseFloat(15.0));
        x2.push(parseFloat(17.0));
        x2.push(parseFloat(19.0));
        x2.push(parseFloat(21.0));
        x2.push(parseFloat(22.0));
        n2.push(parseFloat(2.0));
        n2.push(parseFloat(2.0));
        n2.push(parseFloat(2.0));
        n2.push(parseFloat(1.0));
        n2.push(parseFloat(1.0));
        n2.push(parseFloat(2.0));
        n2.push(parseFloat(4.0));
        n2.push(parseFloat(3.0));
        n2.push(parseFloat(3.0));
        n2.push(parseFloat(1.0));
        n2.push(parseFloat(1.0));
        n2.push(parseFloat(2.0));
        n2.push(parseFloat(1.0));
        n2.push(parseFloat(1.0));
        n2.push(parseFloat(1.0));
        n2.push(parseFloat(2.0));
        n2.push(parseFloat(2.0));
        n2.push(parseFloat(2.0));
        n2.push(parseFloat(2.0));
        n2.push(parseFloat(1.0));
        n2.push(parseFloat(2.0));
        n2.push(parseFloat(2.0));

        // fromFile(x1,n1, "table1.txt");
        // fromFile(x2,n2,"table2.txt");
        
        $("#header").fadeOut();
        //arraysToFrequency(x1,n1, x2, n2, false);

        Labs();
    });

    var no_button = $("#noButton").click(function () {
        $("#askvars").fadeOut();
    });

    var draw_matrix_button=$("input[name='draw_table_button']").click(function () {
        $("#add_matrix").html("");
        createTable($("input[name='rows']").val(), $("input[name='columns']").val(),"add_matrix", 1);
        createTable($("input[name='rows']").val(), $("input[name='columns']").val(),"add_matrix", 2);
        $("input[name='apply_matrix_button']").css("display","block");
    });

    var apply_matrix_button = $("input[name='apply_matrix_button']").click(function () {
        readTable(array,$("input[name='rows']").val(),$("input[name='columns']").val(), 1);
        setStatisticFrequencyFromMatrix(array,x1,n1,$("input[name='rows']").val(),$("input[name='columns']").val());
        console.log('x= '+x1);
        //arraysToFrequency(x1,n1, true);
        console.log('n= '+n1);

        readTable(array,$("input[name='rows']").val(),$("input[name='columns']").val(), 2);
        setStatisticFrequencyFromMatrix(array,x2,n2,$("input[name='rows']").val(),$("input[name='columns']").val());
        console.log('x= '+x2);
       // arraysToFrequency(x2,n2, true);
        console.log('n= '+n2);
        Labs();
    });

    var create_frequency_button = $("#create_frequency_button").click(function () {
        createTable(2, $("input[name='frequency_length']").val(), "add_frequency", 1);
        $("input[name='1,0,0']").parent().html("x<sub>i</sub>");
        $("input[name='1,1,0']").parent().html("n<sub>i</sub>");

        createTable(2, $("input[name='frequency_length']").val(), "add_frequency", 2);
        $("input[name='2,0,0']").parent().html("x2<sub>i</sub>");
        $("input[name='2,1,0']").parent().html("n2<sub>i</sub>");

        $("input[name='apply_frequency_button']").css("display","block");
    });

    var apply_frequency_button = $("input[name='apply_frequency_button']").click(function () {
        setStatisticFrequency(parseFloat($("input[name='frequency_length']").val()),x1,n1,1);
        setStatisticFrequency(parseFloat($("input[name='frequency_length']").val()),x2,n2,2);

        Labs();

    });

//-------------------------------------------------------------------------
    function Labs() {

        Lab1();
    }

    function Lab1() {
        var N1 = countAll(n1);
        var N2 = countAll(n2);
        var X1 = avg(n1,x1);
        var X2 = avg(n2,x2);
        var D1 = sampleDispersion(x1, n1, N1, X1);
        var D2 = sampleDispersion(x2, n2, N2, X2);
        var g_avg = (N1*X1 + N2*X2)/(N1+N2);


        $("#header").fadeOut();
        $("#labs").fadeIn(4000);
        arraysToFrequency(x1,n1, false);
        $("#labs_frequency").append("x = "+X1+"<br>");
        $("#labs_frequency").append("D = "+ D1 +"<br>");
        $("#labs_frequency").append("N<sub>1</sub> = "+N1+"<br>");
        $("#labs_frequency").append("σ = "+Math.pow(D1, 0.5)+"<br>");

        arraysToFrequency(x2,n2, false);
        $("#labs_frequency").append("x = "+X2+"<br>");
        $("#labs_frequency").append("D = "+ D2 +"<br>");
        $("#labs_frequency").append("N<sub>2</sub> = "+N2+"<br>");
        $("#labs_frequency").append("σ = "+Math.pow(D2, 0.5)+"<br>");

        group_avg(X1, X2, N1, N2);

        $('#group_dispersion').append('D<sub>груп.1</sub> = '+D1+'<br>');
        $('#group_dispersion').append('D<sub>груп.2</sub> = '+D2);

        $("#inside_group_dispresion").append("D<sub>внтр</sub> = "+ (N1*D1+N2*D2)/(N1+N2));

        $("#beetween_group_dispersion").append("D<sub>міжгр</sub> = "+((N1*Math.pow((X1 - g_avg),2) + N2*Math.pow((X2 - g_avg),2))/(N1+N2)) );

        general_dispersion(x1,x2,n1,n2, g_avg, N1, N2);


    }
})();