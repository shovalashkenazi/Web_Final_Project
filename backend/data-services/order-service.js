const { OrderModel } = require("../models/order-model");

async function createOrder(userId, order) {
  const newOrder = await OrderModel.create({
    userId,
    order,
  });

  console.log("order created", newOrder);
  return newOrder;
}

async function getOrders() {
  const orders = await OrderModel.find();
  return orders;
}

module.exports = { createOrder, getOrders };
