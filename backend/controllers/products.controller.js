const db = require("../models");
const UnListedItem = db.unListedItems;
const Categories = db.categories;
const Carousel = db.carousel;
const Shirts = db.shirts;
const Order = db.order;

exports.getCarouselProducts = (req, res) => {
    Carousel.find().sort().limit(5).exec((err, data) => {
        if(err) {
            res.status(500).send(err);
        }
        res.status(200).send(data);
    });
}

exports.getProductsCategories = (req, res) => {
    Categories.find().exec((err, data) => {
        if(err) {
            res.status(500).send(err);
        }
        res.status(200).send(data);
    })
}

exports.unListedItems = (req, res) => {
    if(typeof req.body.item_name == "undefined") {
        res.status(422).send({
            "message": "Item name is required"
        })
    }
    if(typeof req.body.color == "undefined") {
        res.status(422).send({
            "message": "Item color is required"
        })
    }
    if(typeof req.body.description == "undefined") {
        res.status(422).send({
            "message": "Item description is required"
        })
    }

    const unListeditem = new UnListedItem({
        name: req.body.item_name,
        color: req.body.color,
        description: req.body.description
    })

    unListeditem.save((err, data) => {
        if(err) {
            res.status(500).send(err);
        }

        res.status(200).send(data);
    })
}

exports.getShirts = (req, res) => {
    Shirts.find().exec((err, data) => {
        if(err) {
            res.status(500).send(err);
        }
        res.status(200).send(data);
    })
}

exports.getShoes = (req, res) => {
    Shoes.find().exec((err, data) => {
        if(err) {
            res.status(500).send(err);
        }
        res.status(200).send(data);
    })
}

exports.getDresses = (req, res) => {
    Dresses.find().exec((err, data) => {
        if(err) {
            res.status(500).send(err);
        }
        res.status(200).send(data);
    })
}

exports.checkout = (req, res) => {
    if(typeof req.body.products_id == "undefined") {
        res.status(422).send("item id is required");
    }

    if(typeof req.body.user_id == "undefined") {
        res.status(422).send("user id is required");
    }

    if(typeof req.body.address == "undefined") {
        res.status(422).send("address is required");
    }

    if(typeof req.body.payment_method == "undefined") {
        res.status(422).send("payment method is required");
    }

    const order = new Order({
        user_id: req.body.user_id,
        products_id: req.body.products_id,
        address: req.body.address,
        payment_method: req.body.payment_method
    });

    order.save((err, data) => {
        if(err) {
            res.status(500).send(err);
        }
        res.status(200).send(data);
    })
}