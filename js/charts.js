/**
 * Created by dulge on 20.04.2017.
 */

function frequencyPoligon(arrx,arrn) {
    var data = {
        labels: arrx,
        series: [arrn]
    };
    var options = {

        showPoint: true,
        lineSmooth: false,


        height: 300,

        axisX: {
            showGrid: true,
            showLabel: true
        },
        chartPadding: {
            right: 40
        }
    }
    new Chartist.Line("#frequency_poligon", data, options);
}
function relativeFrequencyPoligon(arrx,arrw) {
    var data = {
        labels: arrx,
        series: [arrw]
    };
    var options = {

        showPoint: true,
        lineSmooth: false,
        height: 300,
        axisX: {
            showGrid: true,
            showLabel: true
        },
        chartPadding: {
            right: 40
        }


}
new Chartist.Line("#relative_frequency_poligon", data, options);
}

function histogram1(interval,newn) {

    var data = {
        labels: interval,
        series: [newn]
    };

    var options = {
        height: 300
    };

    new Chartist.Bar('#histograms', data, options);

}

function histogram2(interval, neww){

    var data = {
        labels: interval,
        series: [neww]
    };

    var options = {
        height: 300
    };

    new Chartist.Bar('#histogram2', data, options);

}

function divisionChart(uniqx, newwcum) {
    var data = {
        labels: uniqx,
        series: [newwcum]
    };
    var options = {

        showPoint: true,
        lineSmooth: false,
        height: 300,
        axisX: {
            showGrid: true,
            showLabel: true
        },
        chartPadding: {
            right: 40
        }


    }
    new Chartist.Line("#division_function", data, options);
}

