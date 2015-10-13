/**
 * Created by aflament on 13/10/2015.
 */
var React = require('react');

var TestWidget = React.createClass({
    getInitialState:function(){
        return {
            txt: ''
        }
    },
    update: function(e){
        this.setState({txt: e.target.value});
    },
    render:function(){
        return (
            <div>
                <input type="text" onChange={this.update} />
                <br/>
                <b>{this.state.txt}</b>
            </div>
        );
    }
});

module.exports = TestWidget;