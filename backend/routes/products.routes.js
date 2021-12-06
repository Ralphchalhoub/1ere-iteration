const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/products.controller");

module.exports = function(app) {

  app.get("/api/carousel-products", controller.getCarouselProducts);

  app.get("/api/categories", controller.getProductsCategories);

  app.post("/api/unlisted-items", controller.unListedItems);

  app.get("/api/dresses", controller.getDresses);
  app.get("/api/shoes", controller.getShoes);
  app.get("/api/shirts", controller.getShirts);

  app.post("/api/checkout", verifyToken, controller.checkout);
};