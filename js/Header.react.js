var React = require("react");
var Header = React.createClass({
    render : function() {
        return (
            <header className="header">
            <h1>todos</h1>
            <input className="new-todo" type="text" placeholder="What needs to be done?" value=""/>
            </header>
        );
    }
});

module.exports = Header;