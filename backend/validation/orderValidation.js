import { body } from "express-validator";

export const orderValidation = [
    body("products")
        .isArray({ min: 1 })
        .withMessage("Products must be a non-empty array"),
    body("products.*.product")
        .isMongoId()
        .withMessage("Each product must have a valid ID"),
    body("products.*.quantity")
        .isInt({ min: 1 })
        .withMessage("Quantity must be at least 1"),

    body("name")
        .if(body("userId").not().exists())
        .notEmpty()
        .withMessage("Name is required for guest users"),
    body("phone")
        .if(body("userId").not().exists())
        .notEmpty()
        .withMessage("Phone is required for guest users"),
    body("email").optional().isEmail().withMessage("Invalid email format"),
];
