const jwt = require("jsonwebtoken");
const { userdb } = require("../controller/database");

const authmiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ msg: "Token missing" });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decoded.userId;

    req.user = await userdb.findById(decoded.userId).select("-password");

    next();
  } catch (error) {
    console.error("Auth middleware error:", error);
    return res.status(401).json({ msg: "Unauthorized" });
  }
};

module.exports = authmiddleware;
