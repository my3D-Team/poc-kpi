/**
 * Created by ndamie on 13/10/2015.
 */

"use strict";

var React = require('react');

var TestWidget = require('./testWidget')

var App = React.createClass({


    render: function () {
        return (
            <div>
                <h1>Hello Al</h1>
                <img src="http://cimg.tvgcdn.net/i/r/2012/08/09/a45fb16a-e10c-452d-8eb4-e7fe001df6e8/crop/660x494+0+0/thumbnail/350x262/c27ced3499ab418ef64ab9dbc8481368/120809alf1.jpg"></img>
                <TestWidget/>
            </div>
            );
    }
});

module.exports = App;