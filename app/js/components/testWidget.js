/**
 * Created by aflament on 13/10/2015.
 */
var React = require('react');

var TestWidget = React.createClass({
    render:function(){
        return (
            <div>
                <input type="text" onChange={this.props.update} />
                <br/>
                <b>{this.props.txt}</b>
            </div>
        );
    }
});

module.exports = TestWidget;