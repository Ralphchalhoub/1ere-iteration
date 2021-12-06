const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.carousel = require("./carousel.model");
db.categories = require("./categories.model");
db.unListedItems = require("./unListemItem.model");
db.shoes = require("./shoesProducts.model");
db.shirts = require("./shirtsProducts.model");
db.dresses = require("./dressesProducts");
db.order = require("./order.model");

db.ROLES = ["user", "admin"];

module.exports = db;