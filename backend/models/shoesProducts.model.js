const mongoose = require("mongoose");

const ShoesProducts = mongoose.model(
    "ShoesProducts",
    new mongoose.Schema({
        name: String,
        image: String,
        price: String
    })
)

module.exports = ShoesProducts