const express = require('express')
const router = express.Router()
const Todo = require('../Todo')



// app.get('/', (req, res) => {
//     Todo.find({}, (err, data) => {
//         if(err) return res.send("No todos found")
//         return res.json(data)
//     })
// })

router.get("/", (req, res) => {
    return res.send("hosted")
})

// app.get("/", async (req, res) => {
//     try {
//         let todos = await Todo.find({})
//         return res.json(todos)
//     }catch(e) {
//         return res.json(e)
//     }
// })

// app.get("/:id", (req, res) => {
//     Todo.findById(req.params.id, (err, data) => {
//         if(err) return res.send("Todo doesn't exist")
//         return res.json(data)
//     })
// })

// app.get("/:id", async (req, res) => {
//     try {
//         let todo = await Todo.findById(req.params.id)
//         return res.json(todo)
//     }catch(e) {
//         return res.json(e)
//     }
// })


// app.post("/", (req, res) => {
//     // return res.send("This is add todo")
//     let todo = new Todo(req.body)
//     // todo.name = req.body.name
//     todo.save()
//     return res.json({todo, message: "Todo added successfully"})
// })

// app.post("/", async (req, res) => {
//     try {
//         let todo = new Todo(req.body)
//         todo.save()
//         return res.json({todo, message: "Todo added successfully"})
//     }catch(e) {
//         return res.json(e)
//     }
// })

// app.delete("/:id", (req, res) => {
//     Todo.findByIdAndDelete(req.params.id, (err, data) => {
//         if(err) return res.send("Cannot delete this todo")
//         return res.send("Todo successfully deleted")
//     })
// })

// app.delete("/:id", async (req, res) => {
//     try {

//     }catch(e) {
//         return res.json(e)
//     }
// })

// app.put("/:id", (req, res) => {
//     Todo.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
//         if(err) return res.send("Cannot update this todo")
//         return res.json({data, message: "Todo updated successfully"})
//     })
// })

module.exports = router