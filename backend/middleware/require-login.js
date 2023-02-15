const { getAuth } = require("firebase-admin/auth");

function requireLogin(req, res, next) {
  const idToken = req.headers.authorization;

  if (!idToken) {
    console.log("got invalid token :" + idToken);
    return res.status(403).json({ message: `id token is invalid: ${idToken}` });
  }

  getAuth()
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      req.user = decodedToken;
      next();
    })
    .catch((error) => {
      return res.status(403).json({ message: error.message });
    });
}

module.exports = { requireLogin };
