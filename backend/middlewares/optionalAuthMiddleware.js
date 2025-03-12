import jwt from "jsonwebtoken";

export default async (req, res, next) => {
    const token = req.header("Authorization");
    if (token) {
        try {
            const decoded = jwt.verify(
                token.replace("Bearer ", ""),
                process.env.JWT_ACCESS_SECRET
            );
            req.user = decoded.user;
            if (!req.user)
                return res.status(401).json({ message: "User not found" });
        } catch (error) {
            return res.status(401).json({ message: "Invalid token" });
        }
    }

    next();
};
