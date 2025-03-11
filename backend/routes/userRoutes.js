import express from "express";
import User from "../models/User.js";
import isAuthenticated from "../middlewares/authMiddleware.js";
import jwt from "jsonwebtoken";

const router = express.Router();

/* router.get("/test", (req, res) => {
    res.json({ message: "user/test route!" });
});
 */

const generateToken = (user) => {
    const payload = {
        user: {
            id: user._id,
        },
    };
    return jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
        expiresIn: "10m",
    });
};

router.post("/register", async (req, res) => {
    const { username, email, password, phone } = req.body;

    const user = await User.findOne({
        $or: [({ username }, { email }, { phone })],
    });

    if (user) {
        return res.status(400).json({
            message:
                "User with this username, email or phone number already exists!",
        });
    }

    try {
        const newUser = new User({ username, email, password, phone });
        await newUser.save();

        const token = generateToken(newUser);
        return res.status(201).json({ token });
    } catch (error) {
        return res.status(500).json({
            message: "Error in registration process",
            error,
        });
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res
            .status(401)
            .json({ message: "Both, email and password required" });
    }
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }
        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            return res
                .status(400)
                .json({ message: "Invalid email or password" });
        }

        const token = generateToken(user);
        return res.status(201).json({ token });
    } catch (error) {
        return res.status(500).json({
            message: "Server error",
            error,
        });
    }
});

router.get("/profile", isAuthenticated, async (req, res) => {
    const { id } = req.user;

    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }
        console.log(user);
        console.log(user.toJSON());
        return res.status(200).json({ profile: user });
    } catch (error) {
        return res.status(500).json({
            message: "Server error",
            error,
        });
    }
});

export default router;
