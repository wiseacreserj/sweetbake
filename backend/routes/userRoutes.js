import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

const router = express.Router();

console.log(User);
router.get("/test", (req, res) => {
    res.json({ message: "user/test route!" });
});
router.post("/register", async (req, res) => {
    const { username, email, password, phone } = req.body;
    try {
        const newUser = new User({ username, email, password, phone });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({
            message: "Error in registration process",
            error,
        });
    }
});

export default router;
