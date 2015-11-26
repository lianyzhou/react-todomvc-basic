var React = require("react");
var classNames = require("classnames");
var Store = require("./Store");
var Footer = React.createClass({
    filterByType : function(type) {
        Store.setType(type);
        Store.emitChange();
    },
    emptyHandler : function() {
        Store.clearSelected();
        Store.emitChange();
    },
    render : function() {
        var leftLength = this.props.uncompleted.length;
        var type = this.props.type;
        var filterByType = this.filterByType;
        var allLength = this.props.todos.length;
        var leftSection , clearEmptySection;
        var emptyHandler = this.emptyHandler;
        if(leftLength>0) {
            leftSection = (
                <span>
                    <strong>{leftLength}</strong>
                    <span> {leftLength>1?'items':'item'}</span>
                    <span> left</span>
                </span>
            );
        } else {
            leftSection = (
                <span>No items left</span>
            );
        }
        if(leftLength < allLength) {
            clearEmptySection = (
                <button className="clear-completed" onClick={emptyHandler}>Clear completed</button>
            );
        }
        return (
            <footer className="footer">
                <span className="todo-count">
                    {leftSection}
                </span>
                <ul className="filters">
                    <li>
                        <a style={{cursor: 'pointer'}} className={classNames({selected : type === 'all'})} onClick={filterByType.bind(null , "all")}>All</a>
                    </li>
                    <li>
                        <a style={{cursor: 'pointer'}} className={classNames({selected : type === 'active'})} onClick={filterByType.bind(null , "active")}>Active</a>
                    </li>
                    <li>
                        <a style={{cursor: 'pointer'}} className={classNames({selected : type === 'completed'})} onClick={filterByType.bind(null , "completed")}>Completed</a>
                    </li>
                </ul>
                {clearEmptySection}
            </footer>
        );
    }
});

module.exports = Footer;