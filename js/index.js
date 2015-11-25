require('todomvc-app-css/index.css');
var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./App.react');
ReactDOM.render(
    <App />,
    document.getElementById('todo')
);