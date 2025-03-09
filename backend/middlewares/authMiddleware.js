import jwt from "jsonwebtoken";
import User from "../models/User.js";

export default isAuthenticated = async (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) return res.status(401).json({ message: "Not Authorized" });

    try {
        const decoded = jwt.verify(
            token.replace("Bearer ", ""),
            process.env.JWT_ACCESS_SECRET
        );
        req.user = await User.findById(decoded.userId);
        if (!req.user)
            return res.status(401).json({ message: "User not found" });
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
};
