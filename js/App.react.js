var React = require("react");
var Header = require("./Header.react");
var Center = require("./Center.react");
var Footer = require("./Footer.react");
var Store = requrie("./Store");

var App = React.createClass({
    render : function() {
        var todos = this.getStates();
        return (
            <Header/>
            <Center todos={todos} />
            <Footer/>
        );
    }
});
module.exports = App;