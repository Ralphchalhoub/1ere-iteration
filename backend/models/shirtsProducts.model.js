const mongoose = require("mongoose");

const ShritsProducts = mongoose.model(
    "ShritsProducts",
    new mongoose.Schema({
        name: String,
        image: String,
        price: String
    })
)

module.exports = ShritsProducts