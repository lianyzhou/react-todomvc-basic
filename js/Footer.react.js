var React = require("react");
var Footer = React.createClass({
    render : function() {
        return (
            <footer className="footer"><span className="todo-count"><strong>1</strong><span> </span>
                <span>item</span>
                <span> left</span></span>
                <ul className="filters">
                    <li>
                        <a>All</a>
                    </li>
                    <li>
                        <a>Active</a>
                    </li>
                    <li>
                        <a>Completed</a>
                    </li>
                </ul>
            </footer>
        );
    }
});

module.exports = Footer;