var React = require("react");
var Header = require("./Header.react");
var Center = require("./Center.react");
var Footer = require("./Footer.react");
var Store = require("./Store");




var App = React.createClass({
    getStateData : function() {
        return {
            todos : Store.get_todos()
        };
    },
    getInitialState : function() {
        return this.getStateData()
    },
    render : function() {
        return (
            <div>
                <Header></Header>
                <Center todos={this.state.todos}></Center>
                <Footer></Footer>
            </div>
        );
    }
});
module.exports = App;