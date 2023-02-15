const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  order: {
    type: Array,
    default: [],
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

const OrderModel = mongoose.model("orders", orderSchema);
module.exports = { OrderModel };
