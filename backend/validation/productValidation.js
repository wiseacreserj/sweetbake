import { body, param } from "express-validator";

export const productIdValidation = [
    param("id").isMongoId().withMessage("Product must have a valid ID"),
];

const validCategories = ["Breads", "Pastries", "Desserts", "Snacks", "Drinks"];

export const productDataValidation = [
    body("name")
        .exists()
        .withMessage("name is required")
        .bail()
        .isString()
        .notEmpty()
        .isLength({ min: 3, max: 300 })
        .withMessage(
            "Name must be a string min. length 3, max. length 300 symbols"
        ),
    body("description")
        .exists()
        .withMessage("Description is required")
        .bail()
        .isString()
        .notEmpty()
        .isLength({ min: 3, max: 300 })
        .withMessage(
            "Description must be a string min. length 3, max. length 300 symbols"
        ),
    body("price")
        .exists()
        .withMessage("Price is required")
        .bail()
        .notEmpty()
        .isFloat({ min: 0.1, max: 1000 })
        .withMessage("Price must be a number min. value 0.1, max. value 1000"),
    body("image")
        .exists()
        .withMessage("Image URL is required")
        .bail()
        .notEmpty()
        .isURL()
        .withMessage("Image must be a valid URL"),
    body("category")
        .exists()
        .withMessage("Category is required")
        .bail()
        .notEmpty()
        .isString()
        .isIn(validCategories)
        .withMessage(`Category must be one of ${validCategories.join(", ")}`),
];
