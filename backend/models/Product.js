import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: String,
    price: {
        type: Number,
        required: true,
    },
    image: String,
    category: String,
    createdAt: { type: Date, default: Date.now },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
