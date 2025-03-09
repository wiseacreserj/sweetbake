import jwt from "jsonwebtoken";
import User from "../models/User.js";

export default isAuthenticated = async (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) return res.status(401).json({ message: "Нет доступа" });

    try {
        const decoded = jwt.verify(
            token.replace("Bearer ", ""),
            "your_secret_key"
        );
        req.user = await User.findById(decoded.userId);
        if (!req.user)
            return res.status(401).json({ message: "Пользователь не найден" });
        next();
    } catch (error) {
        res.status(401).json({ message: "Неверный токен" });
    }
};
