const { Router } = require("express");
const orderController = require("../controllers/order-controller");
const { requireLogin } = require("../middleware/require-login");
const orderRouter = new Router();

orderRouter.get("/", orderController.getOrders);
orderRouter.post("/", requireLogin, orderController.createOrder);

module.exports = { orderRouter };
