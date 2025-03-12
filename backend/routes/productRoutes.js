import express from "express";
import Product from "../models/Product.js";
import isAuthenticated from "../middlewares/authMiddleware.js";
import isAdmin from "../middlewares/isAdminMiddleware.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.get("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({
                message: "Product not found",
            });
        }
        return res.status(200).json(product);
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
        return res.status(200).json(allProducts);
    } catch (error) {
        return res.status(500).json({
            message: "Server error",
            error,
        });
    }
});

router.post("/", [isAuthenticated, isAdmin], async (req, res) => {
    const { name, description, price, image, category } = req.body;

    try {
        const product = await Product.findOne({ name });

        if (product) {
            return res.status(400).json({
                message: "Product with this name already exists!",
            });
        }

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

router.put("/:id", [isAuthenticated, isAdmin], async (req, res) => {
    const options = { new: true, runValidators: true };

    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            options
        );
        if (!product) {
            return res.status(404).json({
                message: "Product not found",
            });
        }
        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({
            message: "Server error",
            error,
        });
    }
});

router.delete("/:id", [isAuthenticated, isAdmin], async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({
                message: "Product not found",
            });
        }
        return res.status(200).json({
            message: `Product '${product.name}' was deleted successfully`,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Server error",
            error,
        });
    }
});

export default router;
