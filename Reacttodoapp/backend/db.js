const mongoose = require("mongoose");
require("dotenv").config()

console.log("before connect");
console.log(process.env.MONGO_URL);
mongoose.connect(process.env.MONGO_URL);
console.log("after connect");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todos = mongoose.model('todos', todoSchema);

module.exports = {
    todos
}