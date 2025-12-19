const jwt = require("jsonwebtoken");

// special key
const SECRET_KEY = "wdai123";

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Auth: Bearer <token>

  if (!token) return res.status(401).json({ error: "No token" });

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ error: "Invalid token" });
    req.user = user; // info about user
    next();
  });
}

module.exports = { authenticateToken, SECRET_KEY };
