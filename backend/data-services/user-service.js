const { UserModel } = require("../models/user-model");

async function replaceCart(userId, cart) {
  console.log(userId);
  console.log(cart);
  const updatedCart = await UserModel.findOneAndUpdate(
    { userId },
    { cart }
    //{ returnDocument: "after" }
  );
  if (updatedCart === null) {
    throw new Error("user not found");
  }
  return updatedCart;
}

async function getUserCart(uid) {
  console.log(uid);
  const user = await UserModel.findOne({ userId: uid });
  return user.toObject().cart;
}

async function createUser({ uid, email }) {
  const newUser = await UserModel.create({ userId: uid, email });
  return newUser;
}

async function getUser(filter) {
  const user = await UserModel.findOne(filter);
  return user;
}

module.exports = { replaceCart, createUser, getUserCart, getUser };
