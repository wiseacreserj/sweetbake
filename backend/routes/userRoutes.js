import express from "express";
import User from "../models/User.js";
import isAuthenticated from "../middlewares/authMiddleware.js";
import validateMiddleware from "../middlewares/validateMiddleware.js";
import {
    loginUserValidation,
    newUserValidation,
} from "../validation/userValidation.js";

import jwt from "jsonwebtoken";

const router = express.Router();

export const generateTokens = (user) => {
    if (!process.env.JWT_ACCESS_SECRET || !process.env.JWT_REFRESH_SECRET) {
        throw new Error("JWT secrets are not defined");
    }

    const payload = {
        user: {
            id: user._id,
            role: user.role,
        },
    };
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
        expiresIn: "10m",
    });

    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
        expiresIn: "7d",
    });
    return {
        accessToken,
        refreshToken,
    };
};

router.post(
    "/register",
    [newUserValidation, validateMiddleware],
    async (req, res) => {
        const { username, email, password, phone } = req.body;

        const user = await User.findOne({
            $or: [{ username }, { email }, { phone }],
        });

        if (user) {
            return res.status(400).json({
                message:
                    "User with this username, email or phone number already exists!",
            });
        }

        try {
            const newUser = User.create({ username, email, password, phone });

            const { accessToken, refreshToken } = generateTokens(newUser);
            res.cookie("refreshToken", refreshToken, {
                httpOnly: true,
                secure: false,
                sameSite: "Strict",
                maxAge: 7 * 24 * 60 * 60 * 1000,
            });
            return res.status(201).json({ token: accessToken });
        } catch (error) {
            return res.status(500).json({
                message: "Error in registration process",
                error,
            });
        }
    }
);

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

        const { accessToken, refreshToken } = generateTokens(user);
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: false,
            sameSite: "Strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        return res.status(201).json({ token: accessToken });
    } catch (error) {
        return res.status(500).json({
            message: "Server error",
            error,
        });
    }
});

router.get("/logout", (req, res) => {
    res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: false,
        sameSite: "Strict",
    });
    return res.status(200).json({ message: "Logout success" });
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
