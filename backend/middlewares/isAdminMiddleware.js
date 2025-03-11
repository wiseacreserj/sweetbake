import jwt from "jsonwebtoken";
import User from "../models/User.js";

export default async (req, res, next) => {
    try {
        const { role } = await User.findById(req.user.id).select("role");
        if (role !== "admin") {
            return res.status(403).json({ message: "Acces Denied!" });
        }

        next();
    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
};
