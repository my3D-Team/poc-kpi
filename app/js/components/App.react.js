/**
 * Created by ndamie on 13/10/2015.
 */

"use strict";

var React = require('react');
var SimpleColumnChart = require('./SimpleColumnChart');

var App = React.createClass({


    render: function () {
        return (
            <div>
                <SimpleColumnChart id="toto" />
            </div>
            );
    }
});

module.exports = App;