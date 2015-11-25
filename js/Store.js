//list是要显示的数据
/**
 * {
 *    id : 1
 *    todo: ReactJS
 *    completed : false
 * }
 */
var todoList = [];
var idx = new Date().getTime();
var store = {
    add_todo : function(text) {
        list.unshift({
            id : idx++,
            todo : text,
            completed : false
        });
    },
    remove_todo : function(id) {
        list = list.filter(function(obj) {
            if(obj.id != id) {
                return true;
            }
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
            if(todo.id == id) {
                obj.completed = !obj.completed;
                return true;
            }
        });
    },
    filter : function(type) {
        var fn ;
        switch(type) {
            case 'all':
                fn = function() {
                    return true;
                };
                break;
            case 'active':
                fn = function(obj) {
                    return obj.completed;
                };
                break;
            case 'completed':
                fn = function(obj) {
                    return !obj.completed;
                };
                break;
        }
        todoList = todoList.filter(fn);
    },
    get_todos : function() {
        return todoList;
    }
};
module.exports = store;