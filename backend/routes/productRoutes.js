import express from "express";
import Product from "../models/Product.js";
import isAuthenticated from "../middlewares/authMiddleware.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.get("/:id", async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({
            message: "ID parametr is required!",
        });
    }

    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(400).json({
                message: "Product not found",
            });
        }
        return res.status(201).json(product);
    } catch (error) {
        return res.status(500).json({
            message: "Server error",
            error,
        });
    }
});

router.get("/", async (req, res) => {
    try {
        const allProducts = await Product.find({});
        return res.status(201).json(allProducts);
    } catch (error) {
        return res.status(500).json({
            message: "Server error",
            error,
        });
    }
});

router.post("/", async (req, res) => {
    const { name, description, price, image, category } = req.body;

    const product = await Product.findOne({ name });

    if (product) {
        return res.status(400).json({
            message: "Product with this name already exists!",
        });
    }

    try {
        const newProduct = await Product.create({
            name,
            description,
            price,
            image,
            category,
        });
        return res.status(201).json(newProduct);
    } catch (error) {
        return res.status(500).json({
            message: "Server error",
            error,
        });
    }
});

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { name, description, price, image, category } = req.body;

    if (!id) {
        return res.status(400).json({
            message: "ID parameter is required!",
        });
    }

    const options = { new: true, runValidators: true };

    try {
        const product = await Product.findByIdAndUpdate(
            id,
            { name, description, price, image, category },
            options
        );
        if (!product) {
            return res.status(400).json({
                message: "Product not found",
            });
        }
        return res.status(201).json(product);
    } catch (error) {
        return res.status(500).json({
            message: "Server error",
            error,
        });
    }
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({
            message: "ID parameter is required!",
        });
    }

    const options = { new: true, runValidators: true };

    try {
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(400).json({
                message: "Product not found",
            });
        }
        return res.status(201).json({ message: "Product delete successfull" });
    } catch (error) {
        return res.status(500).json({
            message: "Server error",
            error,
        });
    }
});

/* 🔹 GET / – получить все товары
🔹 GET /:id – получить товар по ID
🔹 POST / – добавить товар (админ)
🔹 PUT /:id – обновить товар (админ)
🔹 DELETE /:id – удалить товар (админ) */

export default router;
