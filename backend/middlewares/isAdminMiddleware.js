import jwt from "jsonwebtoken";
import User from "../models/User.js";

export default isAdmin = (req, res, next) => {
    if (!req.user || req.user.role !== "admin") {
        return res.status(403).json({ message: "Acces Denied!" });
    }
    next();
};
