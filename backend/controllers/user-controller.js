const {
  getProductById,
  getAllProducts,
} = require("../data-services/product-service");
const userService = require("../data-services/user-service");

async function updateCart(req, res) {
  try {
    const cart = await userService.replaceCart(req.params.userId, req.body);
    res.json(cart);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
async function createUser(req, res) {
  try {
    const user = await userService.createUser(req.body);
    res.json(user);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
async function getCart(req, res) {
  try {
    const cart = [...(await userService.getUserCart(req.user.uid))];

    res.json(cart);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e.message });
  }
}

async function isAdmin(req, res) {
  const user = await userService.getUser({ userId: req.user.uid });
  return res.json({ isAdmin: user?.type === "admin" });
}

module.exports = { updateCart, createUser, getCart, isAdmin };
