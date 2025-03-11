import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

mongoose
    .connect(
        process.env.MONGO_URI /* , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    } */
    )
    .then(() => console.log("MongoDB conected!"))
    .catch((err) => console.log("Connection error:", err));

app.get("/", (req, res) => {
    res.send("Server working!");
});

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
