/**
 * Created by aflament on 13/10/2015.
 */
var React = require('react');

function initChart(id, data) {
     var chart;
    AmCharts.ready(function () {
        // SERIAL CHART
        chart = new AmCharts.AmSerialChart();
        chart.dataProvider = data;
        chart.categoryField = "country";
        chart.startDuration = 1;

        // AXES
        // category
        var categoryAxis = chart.categoryAxis;
        categoryAxis.labelRotation = 90;
        categoryAxis.gridPosition = "start";

        // value
        // in case you don't want to change default settings of value axis,
        // you don't need to create it, as one value axis is created automatically.

        // GRAPH
        var graph = new AmCharts.AmGraph();
        graph.valueField = "visits";
        graph.balloonText = "[[category]]: <b>[[value]]</b>";
        graph.type = "column";
        graph.lineAlpha = 0;
        graph.fillAlphas = 0.8;
        chart.addGraph(graph);

        // CURSOR
        var chartCursor = new AmCharts.ChartCursor();
        chartCursor.cursorAlpha = 0;
        chartCursor.zoomable = false;
        chartCursor.categoryBalloonEnabled = false;
        chart.addChartCursor(chartCursor);

        chart.creditsPosition = "top-right";

        chart.write(id);
    });
}


var SimpleColumnChart = React.createClass({
    getInitialState:function(){
        return {
            chart: {},
            chartData: [
                {
                    "country": "USA",
                    "visits": 4025
                },
                {
                    "country": "China",
                    "visits": 1882
                }
            ]
        }
    },
    componentWillMount: function() {
        initChart(this.props.id, this.state.chartData);
    },

    render:function(){
        return (
            <div id={this.props.id} style={{width: "100%", height: "400px"}} onLoad={this.initialize}></div>
        );
    }
});

module.exports = SimpleColumnChart;