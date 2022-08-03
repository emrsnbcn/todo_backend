const { application } = require('express')
const express = require('express')
const app = express()
const PORT = 3000

// const mongoose = require('mongoose')
// mongoose.connect("mongodb://127.0.0.1:27017/b5b6") //change it to an online mongodb url
app.use(express.json())
app.use("/todos", require('./api/todos.js'))

// mongoose.connection.once("open", () => console.log("Connected to MongoDB"))
app.listen(PORT, () => console.log("App is running on PORT " + PORT))