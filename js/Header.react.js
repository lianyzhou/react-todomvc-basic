var React = require("react");
var Store = require("./Store");
var Header = React.createClass({
    getInitialState : function() {
        return {value : ''};
    },
    handleChange : function(event) {
        this.setState({
            value : event.target.value
        });
    },
    onKeyDown : function(event) {
        var keyCode = event.keyCode;
        var text = event.target.value.trim();
        if(keyCode === 13 && text) {
            this.addTodo(text);
        }
    },
    addTodo : function(text) {
        Store.add_todo(text);
        Store.emitChange();
        this.setState({value : ''});
    },
    componentDidMount : function() {
        this.refs.input.focus();
    },
    render : function() {
        return (
            <header className="header">
            <h1>todos</h1>
            <input className="new-todo" type="text" placeholder="What needs to be done?"
                    ref="input" onKeyDown={this.onKeyDown}
                    onChange={this.handleChange} value={this.state.value}/>
            </header>
        );
    }
});

module.exports = Header;