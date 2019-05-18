const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo = new Schema ({

    todo_title: {
        type: String
    },
    todo_text: {
        type: String
    },
    todo_checked: {
        type: Boolean
    },
    todo_time: {
        type: String
    }
  
});


module.exports = mongoose.model('Todo', Todo);