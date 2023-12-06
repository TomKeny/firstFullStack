const Todo = require("../Models/todo")

async function createTodo (req,res) {
    const { text } = req.body
    const todoObject = new Todo({
        text
    })

    const newTodo = await todoObject.save()
    res.status(200).json(newTodo)
}

async function getTodos (req,res) {
    const items = await Todo.find({})
    
    res.status(200).json(items)
}

async function updateTodo(req,res) {
    const{ condition , update} = req.body

    await Todo.findOneAndUpdate(condition, update)
    res.status(200).json(update)
}

async function deleteTodo(req,res) {
    const { condition } = req.body

    await Todo.findOneAndDelete(condition)
    res.status(200).json(condition)
}

module.exports = {
    createTodo,
    getTodos,
    updateTodo,
    deleteTodo
}