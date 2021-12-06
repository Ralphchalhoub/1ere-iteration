const mongoose = require("mongoose");

const DressesProducts = mongoose.model(
    "DressesProducts",
    new mongoose.Schema({
        name: String,
        image: String,
        price: String
    })
)

module.exports = DressesProducts