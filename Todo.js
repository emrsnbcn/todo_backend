const mongoose = require('mongoose')

let TodoSchema = new mongoose.Schema({
    name: { type: String }
})

module.exports = mongoose.model("Todo", TodoSchema)