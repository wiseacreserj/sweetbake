import { body, param } from "express-validator";

export const productIdValidation = [
    param("id").isMongoId().withMessage("Each product must have a valid ID"),
];
