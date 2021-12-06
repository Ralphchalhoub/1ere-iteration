const mongoose = require("mongoose");

const Carousel = mongoose.model(
    "Carousel",
    new mongoose.Schema({
        name: String,
        image: String,
        price: String
    })
)

module.exports = Carousel