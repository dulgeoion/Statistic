(function () {
//SETTING UP DATA
//----------------------------------------------------------------------------------------------------------------------
    var x = [];
    var n = [];
    var w = [];
    var m = [];
    var M = [];
    var array = [];
    var nc = [];
    var wc = [];
    var interval = [];
    var newn = [];
    var neww = [];
    var newx = [];
    var newwcum = [];
    var r = 0;
    var uniqx = [];
    var _avg =0;
    var _n = 0;



    var draw_matrix_button=$("input[name='draw_table_button']").click(function () {
        $("#add_matrix").html("");
        createTable($("input[name='rows']").val(), $("input[name='columns']").val(),"add_matrix");
        $("input[name='apply_matrix_button']").css("display","block");
    });


    var apply_matrix_button = $("input[name='apply_matrix_button']").click(function () {
        readTable(array,$("input[name='rows']").val(),$("input[name='columns']").val());
        setStatisticFrequencyFromMatrix(array,x,n,$("input[name='rows']").val(),$("input[name='columns']").val());
        console.log('x= '+x);
        arraysToFrequency(x,n, true);
        console.log('n= '+n);
        Labs();
    });

    var create_frequency_button = $("#create_frequency_button").click(function () {
        createTable(2, $("input[name='frequency_length']").val(), "add_frequency");
        $("input[name='0,0']").parent().html("x<sub>i</sub>");
        $("input[name='1,0']").parent().html("n<sub>i</sub>");
        $("input[name='apply_frequency_button']").css("display","block");
    });

    var apply_frequency_button = $("input[name='apply_frequency_button']").click(function () {
        setStatisticFrequency(parseFloat($("input[name='frequency_length']").val()),x,n);

        arraysToFrequency(x,n, false);
        Labs();

    });

    var fill = $("#yesButton").click(function () {
        x.push(parseFloat(-2.0));
        x.push(parseFloat(-1.0));
        x.push(parseFloat(0.0));
        x.push(parseFloat(1.0));
        x.push(parseFloat(1.5));
        x.push(parseFloat(2.0));
        x.push(parseFloat(3.0));
        x.push(parseFloat(4.0));
        x.push(parseFloat(5.0));
        x.push(parseFloat(7.0));
        x.push(parseFloat(8.0));
        x.push(parseFloat(10.0));
        x.push(parseFloat(11.0));
        x.push(parseFloat(12.0));
        x.push(parseFloat(13.0));
        x.push(parseFloat(15.0));
        x.push(parseFloat(17.0));
        x.push(parseFloat(19.0));
        x.push(parseFloat(21.0));
        x.push(parseFloat(22.0));
        n.push(parseFloat(2.0));
        n.push(parseFloat(2.0));
        n.push(parseFloat(3.0));
        n.push(parseFloat(2.0));
        n.push(parseFloat(1.0));
        n.push(parseFloat(3.0));
        n.push(parseFloat(3.0));
        n.push(parseFloat(3.0));
        n.push(parseFloat(3.0));
        n.push(parseFloat(1.0));
        n.push(parseFloat(2.0));
        n.push(parseFloat(1.0));
        n.push(parseFloat(1.0));
        n.push(parseFloat(2.0));
        n.push(parseFloat(2.0));
        n.push(parseFloat(1.0));
        n.push(parseFloat(3.0));
        n.push(parseFloat(1.0));
        n.push(parseFloat(2.0));
        n.push(parseFloat(2.0));
        $("#header").fadeOut();
        arraysToFrequency(x,n, false);
        Labs();
    });

    var no_button = $("#noButton").click(function () {
        $("#askvars").fadeOut();
    });

//----------------------------------------------------------------------------------------------------------------------

    function Labs() {

        var b = false;
        Lab1();
        $("input[name='r_button']").click(function (r, b) {
            r = parseFloat($('input[name="r"]').val());
            $("#second_lab").css("display", "block");
            $("#third_lab").css("display", "block");
            Lab2(r);
            this.b = true;
        });
        Lab3();
        console.log(_avg + " " + _n);
    }
    function Lab1() {
        $("#header").fadeOut();
        $("#labs").fadeIn(4000);
        var count = countAll(n);
        console.log(count);
        relativeFrequencyArray(n,w, countAll(n));
        arraysToTables(x,w,"w", "relative_frequency",3);
        cumulativeFrequency(n,nc);
        arraysToTables(x,nc,"n<sub>нак.</sub>", "cumulative_frequency",0);
        relativeCumulativeFrequency(w,wc);
        arraysToTables(x,wc,"w<sub>нак.</sub>", "relative_cumulative_frequency",3);
        frequencyPoligon(x,n);
        relativeFrequencyPoligon(x,w)
        emperical(x,wc);
       // empericalChart(x,wc);
    }

    function Lab2(r) {
        createNewX(newx, x);
        intervalFrequency(x,n,interval, w, newn, neww, newx, r, uniqx);
        histogram1(interval, newn);
        histogram2(interval, neww);
        divisionFunction(x,newx,neww,r, newwcum);
        divisionChart(uniqx,newwcum);
        modAndMediana(newn,x,r,uniqx, newwcum);
    }

    function Lab3() {
        $("#avg").append(avg(n,x));
        $("#sample_dispersion").append(sampleDispersion(x,n,countAll(n),avg(n,x)));
        $("#avg_quad_deviation").append(avgQuadDeviation(sampleDispersion(x,n,countAll(n),avg (n,x))));
        $("#corrected_dispersion").append(sampleDispersion(x,n,countAll(n)-1,avg(n,x)));
        $("#corrected_avg_quad").append(avgQuadDeviation(sampleDispersion(x,n,countAll(n)-1,avg (n,x))));
        empericalStartMoments(x,n,countAll(n), M);
        empericalCenterMoments(x,n,countAll(n), m, avg(n,x));
        $("#assymetry").append(assymetry(m,avgQuadDeviation(sampleDispersion(x,n,countAll(n),avg (n,x)))));
        $("#exces").append(exces(m,avgQuadDeviation(sampleDispersion(x,n,countAll(n),avg (n,x)))));
        modEtc(x,n,avg(n,x),avgQuadDeviation(sampleDispersion(x,n,countAll(n),avg (n,x))));
    }

})();

