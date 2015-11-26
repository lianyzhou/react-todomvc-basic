//list是要显示的数据
/**
 * {
 *    id : 1
 *    todo: ReactJS
 *    completed : false
 * }
 */
var todoList = [];
var type = "all";
var idx = new Date().getTime();
var listeners = {};
var EventEmitter = require("events").EventEmitter;
var objectAssign = require("object-assign");

var store = objectAssign({}, EventEmitter.prototype , {
    add_todo : function(text) {
        todoList.unshift({
            id : idx++,
            todo : text,
            completed : false
        });
    },
    remove_todo : function(id) {
        todoList = todoList.filter(function(obj) {
            if(obj.id != id) {
                return true;
            }
        });
        console.log(todoList);
    },
    clearSelected : function() {
        var completed = this.get_todos("completed");
        var idArr = [];
        completed.forEach(function(obj) {
            idArr.push(obj.id + '');
        });
        todoList = todoList.filter(function(obj){
            return idArr.indexOf(obj.id + '') < 0
        });
    },
    edit_todo : function(todo) {
        todoList.find(function(obj) {
            if(todo.id == obj.id) {
                obj.todo = todo.todo;
                return true;
            }
        });
    },
    complete : function(id) {
        todoList.find(function(obj) {
            if(obj.id == id) {
                obj.completed = !obj.completed;
                return true;
            }
        });
    },
    get_todos : function(forceType) {
        var fn ;
        switch(forceType || type) {
            case 'all':
                fn = function() {
                    return true;
                };
                break;
            case 'active':
                fn = function(obj) {
                    return !obj.completed;
                };
                break;
            case 'completed':
                fn = function(obj) {
                    return obj.completed;
                };
                break;
        }
        var list = todoList.filter(fn);
        return list;
    },
    get_uncomplete : function() {
        var list = store.get_todos("all");
        list = list.filter(function(obj) {
            return !obj.completed;
        });
        return list;
    },
    getType : function() {
        return type;
    },
    setType : function(t) {
        type = t;
    },
    addChangeListener : function(fn) {
        this.on("change" , fn);
    },
    emitChange : function() {
        this.emit("change");
    }
});

module.exports = store;