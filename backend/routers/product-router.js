const { Router } = require("express");
const productController = require("../controllers/product-controller");
const { requireAdmin } = require("../middleware/require-admin");
const { requireLogin } = require("../middleware/require-login");
const productRouter = new Router();

productRouter.get("/", productController.getAllProducts);
productRouter.get(
  "/product-count-per-category",
  productController.getProductCountPerCategory
);
productRouter.post(
  "/",
  [requireLogin, requireAdmin],
  productController.addProduct
);
productRouter.delete(
  "/:productId",
  [requireLogin, requireAdmin],
  productController.deleteProduct
);
productRouter.put(
  "/:productId",
  [requireLogin, requireAdmin],
  productController.editProduct
);

module.exports = { productRouter };
