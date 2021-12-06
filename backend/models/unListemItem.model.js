const mongoose = require("mongoose");

const UnListedItem = mongoose.model(
    "UnListedItem",
    new mongoose.Schema({
        name: String,
        color: String,
        description: String
    })
)

module.exports = UnListedItem