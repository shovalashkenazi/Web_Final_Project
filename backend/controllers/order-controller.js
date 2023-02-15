const orderService = require("../data-services/order-service");

async function createOrder(req, res) {
  try {
    const order = await orderService.createOrder(req.user.uid, req.body);
    res.json(order);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

async function getOrders(req, res) {
  return res.json(await orderService.getOrders());
}

module.exports = { createOrder, getOrders };
