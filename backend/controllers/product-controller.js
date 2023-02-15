const productService = require("../data-services/product-service");

async function getAllProducts(req, res) {
  const { amount, category, maxPrice, minPrice, color, rating } = req.query;
  const filter = {
    ...(category ? { category } : {}),
    ...(rating ? { rating } : {}),
    ...(color ? { color } : {}),
    ...(minPrice || maxPrice
      ? {
          price: {
            $gte: minPrice ? minPrice : 0,
            $lte: maxPrice ? maxPrice : Infinity,
          },
        }
      : {}),
  };

  console.log(filter);
  try {
    const products = await productService.getAllProducts(filter, amount);
    res.json(products);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

async function getProductCountPerCategory(_req, res) {
  try {
    const count = await productService.getProductCountPerCategory();
    res.json(count);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

async function addProduct(req, res) {
  const productData = req.body;
  try {
    const product = await productService.addProduct(productData);
    res.json(product);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

async function editProduct(req, res) {
  const productData = req.body;
  try {
    const updatedProduct = await productService.editProduct(productData);
    res.json(updatedProduct);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

async function deleteProduct(req, res) {
  const { productId } = req.params;
  try {
    const product = await productService.deleteProductById(productId);
    res.json(product);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

module.exports = {
  getAllProducts,
  addProduct,
  deleteProduct,
  editProduct,
  getProductCountPerCategory,
};
