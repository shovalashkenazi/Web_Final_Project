const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: [
      "Computers & Laptops",
      "Cameras & Video",
      "Smart TV",
      "Smart Watches",
      "Headphones",
      "Mobile & Tablets",
      "Music & Gaming",
      "Accessories",
    ],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    enum: ["black", "red", "blue", "white", "green"],
    required: true,
  },
  rating: {
    type: Number,
    default: 5,
  },
  imgUrl: {
    type: String,
    required: true,
  },
});

const ProductModel = mongoose.model("products", productSchema);

module.exports = { ProductModel };
