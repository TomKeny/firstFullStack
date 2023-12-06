const express = require("express")

const router = express.Router()

const itemControllers = require("../Controllers/items")

//localhost:4000/todos/items
router.post("/item", itemControllers.createTodo)

router.get("/items", itemControllers.getTodos)

router.put("/items", itemControllers.updateTodo)

router.delete("/items", itemControllers.deleteTodo)

module.exports = router