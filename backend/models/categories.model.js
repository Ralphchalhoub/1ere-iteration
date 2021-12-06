const mongoose = require("mongoose");

const Categories = mongoose.model(
    "Categories",
    new mongoose.Schema({
        name: String,
        image: String
    })
)

module.exports = Categories