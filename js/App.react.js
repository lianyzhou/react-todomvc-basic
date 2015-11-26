var React = require("react");
var Header = require("./Header.react");
var Center = require("./Center.react");
var Footer = require("./Footer.react");
var Store = require("./Store");
var App = React.createClass({
    getStateData : function() {
        return {
            type : Store.getType(),
            todos : Store.get_todos(),
            uncompleted : Store.get_uncomplete()
        };
    } ,
    getInitialState : function() {
        return this.getStateData();
    } ,
    componentDidMount : function() {
        Store.addChangeListener((function() {
            this.setState(this.getStateData());
        }).bind(this));
    },
    render : function() {
        return (
            <div>
                <Header></Header>
                <Center todos={this.state.todos}></Center>
                <Footer todos={this.state.todos} uncompleted={this.state.uncompleted} type={this.state.type}></Footer>
            </div>
        );
    }
});


module.exports = App;