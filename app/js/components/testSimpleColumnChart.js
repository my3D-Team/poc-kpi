/**
 * Created by aflament on 13/10/2015.
 */
var React = require('react');

var TestSimpleColumnChart = React.createClass({
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
        var chart;

        var chartData = [
            {
                "country": "USA",
                "visits": 4025
            },
            {
                "country": "China",
                "visits": 1882
            }
        ];


        AmCharts.ready(function () {
            // SERIAL CHART
            chart = new AmCharts.AmSerialChart();
            chart.dataProvider = chartData;
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

            chart.write("chartdiv");
        });
    },

/**    initialize: function() {
        // SERIAL CHART
        this.state.chart = new AmCharts.AmSerialChart();
        this.state.chart.dataProvider = chartData;
        this.state.chart.categoryField = "country";
        this.state.chart.startDuration = 1;

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
        this.state.chart.addGraph(graph);

        // CURSOR
        var chartCursor = new AmCharts.ChartCursor();
        chartCursor.cursorAlpha = 0;
        chartCursor.zoomable = false;
        chartCursor.categoryBalloonEnabled = false;
        this.state.chart.addChartCursor(chartCursor);

        this.state.chart.creditsPosition = "top-right";

        this.state.chart.write("chartdiv");
    },**/

    render:function(){
        return (
            <div id="chartdiv" style={{width: "100%", height: "400px"}} onLoad={this.initialize}></div>
        );
    }
});

module.exports = TestSimpleColumnChart;