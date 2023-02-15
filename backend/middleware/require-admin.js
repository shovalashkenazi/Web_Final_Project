const { getAuth } = require("firebase-admin/auth");
const { UserModel } = require("../models/user-model");

async function requireAdmin(req, res, next) {
  const user = await UserModel.findOne({ userId: req.user.uid });
  if (user.type === "admin") {
    return next();
  }

  return res.status(403).json({ message: "Not admin" });
}

module.exports = { requireAdmin };
