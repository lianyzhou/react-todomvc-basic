var React = require("react");
var Center = React.createClass({
    render : function() {
        return (
            <section class="main">
                <ul class="todo-list">
                    {
                        this.props.todos.map(function(todo) {
                            return
                                <li>
                                    <div className="view">
                                        <input className="toggle" type="checkbox" />
                                        <label>{todo.todo}</label>
                                        <button className="destroy"></button>
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