const { ProductModel } = require("../models/product-model");

async function getAllProducts(filter, limit) {
  const products = await ProductModel.find(filter).limit(limit);
  return products;
}
async function getProductById(id) {
  console.log("getting id", id);
  const product = await ProductModel.findById(id);
  console.log("found product", product);
  return product;
}

async function getProductCountPerCategory() {
  const products = await ProductModel.aggregate([
    {
      $group: {
        _id: "$category",
        count: { $sum: 1 },
      },
    },
  ]);
  return products;
}

async function addProduct(productData) {
  const product = await ProductModel.create(productData);
  return product;
}

async function deleteProductById(productId) {
  const product = await ProductModel.deleteOne({ _id: productId });
  return product;
}

async function editProduct(productData) {
  const updatedProduct = await ProductModel.findOneAndReplace(
    { _id: productData._id },
    productData,
    { returnDocument: "after" }
  );
  return updatedProduct;
}

module.exports = {
  getAllProducts,
  addProduct,
  deleteProductById,
  editProduct,
  getProductCountPerCategory,
  getProductById,
};
