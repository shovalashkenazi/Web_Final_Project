const { Router } = require("express");
const userController = require("../controllers/user-controller");
const { requireLogin } = require("../middleware/require-login");
const userRouter = new Router();

userRouter.post("/", userController.createUser);
userRouter.get("/cart", requireLogin, userController.getCart);
userRouter.post("/cart/:userId", requireLogin, userController.updateCart);
userRouter.get("/is-admin", requireLogin, userController.isAdmin);

module.exports = { userRouter };
