import express from "express";
import Order from "../models/Order.js";
import Product from "../models/Product.js";
import isAuthenticated from "../middlewares/authMiddleware.js";
import optionalAuthMiddleware from "../middlewares/optionalAuthMiddleware.js";
import isAdmin from "../middlewares/isAdminMiddleware.js";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

router.post("/", optionalAuthMiddleware, async (req, res) => {
    const { products, name, email, phone } = req.body;

    if (!products || products.length === 0) {
        return res.status(400).json({ message: "No products in order" });
    }

    if (products.length > 50) {
        return res
            .status(400)
            .json({ message: "Too many products in one order" });
    }

    try {
        const orderData = {};

        if (req.user?.id) {
            orderData.userId = req.user.id;
            const user = await User.findById(req.user.id);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            orderData.customerName = user.username;
            orderData.customerEmail = user.email;
            orderData.customerPhone = user.phone;
        } else {
            if (!name || !phone) {
                return res
                    .status(400)
                    .json({ message: "Guest name and phone are required" });
            }
            orderData.customerName = name;
            orderData.customerEmail = email || "";
            orderData.customerPhone = phone;
        }

        const productPromises = products.map(async (item) => {
            const product = await Product.findById(item.product);

            if (!product) {
                throw new Error(`Product with ID: ${item.product} not found!`);
            }
            return product.price * (Number(item.quantity) || 1);
        });
        const prices = await Promise.all(productPromises);
        const totalPrice = prices.reduce((sum, price) => sum + price, 0);

        orderData.products = products.map((item) => ({
            productId: item.product,
            quantity: item.quantity,
        }));
        orderData.totalPrice = totalPrice;

        const newOrder = await Order.create(orderData);

        return res.status(201).json(newOrder);
    } catch (error) {
        return res.status(500).json({
            message: "Server error",
            error,
        });
    }
});

router.get("/me", isAuthenticated, async (req, res) => {
    const { id } = req.user.id;

    const orders = Order.findMany({ _id });
});

/* Заказы (/api/orders)


🔹 POST / – создать заказ
🔹 GET /my-orders – получить заказы авторизованного пользователя
🔹 GET /:id – получить заказ по ID
🔹 PUT /:id/status – обновить статус заказа (админ) */
export default router;
