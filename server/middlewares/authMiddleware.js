import jwt from "jsonwebtoken";
import User from "../models/User.js";


// 🔐 BASE PROTECTION (JWT CHECK)
export const protect = async (req, res, next) => {
  try {

    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.json({ success: false, message: "Not Authorized" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    req.user = user;

    next();

  } catch (error) {
    return res.json({ success: false, message: "Invalid token" });
  }
};


// 🎓 EDUCATOR ONLY PROTECTION
export const protectEducator = (req, res, next) => {
  try {

    const user = req.user;

    if (!user) {
      return res.json({ success: false, message: "Not Authorized" });
    }

    if (user.role !== "educator") {
      return res.json({ success: false, message: "Unauthorized Access" });
    }

    next();

  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};