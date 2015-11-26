var React = require("react");
var classNames = require("classnames");
var Store = require("./Store");
var Center = React.createClass({
    toggleComplete : function(id) {
        Store.complete(id);
        Store.emitChange();
    },
    removeTodo : function(id) {
        Store.remove_todo(id);
        Store.emitChange();
    },
    render : function() {
        var toggleComplete = this.toggleComplete;
        var removeTodo = this.removeTodo;

        return (
            <section className="main">
                <ul className="todo-list" style={{display:this.props.todos.length ? 'block' : 'none'}}>
                    {
                        this.props.todos.map(function(todo) {

                            var checkbox;
                            if(todo.completed) {
                                checkbox = (
                                    <input className="toggle" type="checkbox" checked="checked" onClick={toggleComplete.bind(null , todo.id)}/>
                                );
                            } else {
                                checkbox = (
                                    <input className="toggle" type="checkbox" onClick={toggleComplete.bind(null , todo.id)}/>
                                );
                            }

                            return <li className={classNames({completed : todo.completed})}>
                                    <div className="view">
                                        {checkbox}
                                        <label>{todo.todo}</label>
                                        <button className="destroy" style={{cursor:'pointer'}} onClick={removeTodo.bind(null , todo.id)}></button>
                                    </div>
                                </li>
                        })
                    }
                </ul>
            </section>
        );
    }
});

module.exports = Center;