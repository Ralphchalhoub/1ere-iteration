const mongoose = require("mongoose");

const Order = mongoose.model(
    "Order",
    new mongoose.Schema({
        user_id: Number,
        products_id: [Number],
        address: String,
        payment_method: String
    })
)

module.exports = Order