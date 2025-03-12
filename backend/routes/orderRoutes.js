import express from "express";
import Order from "../models/Order.js";
import isAuthenticated from "../middlewares/authMiddleware.js";
import optionalAuthMiddleware from "../middlewares/optionalAuthMiddleware.js";
import isAdmin from "../middlewares/isAdminMiddleware.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/", optionalAuthMiddleware, (req, res) => {
    return res.status(200).json(req.user);
});

/* Заказы (/api/orders)

🔹 POST / – создать заказ
🔹 GET /my-orders – получить заказы авторизованного пользователя
🔹 GET /:id – получить заказ по ID
🔹 PUT /:id/status – обновить статус заказа (админ) */
export default router;
