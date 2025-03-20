import { body } from "express-validator";

export const newUserValidation = [
    body("username")
        .exists()
        .withMessage("Username is required")
        .bail()
        .isString()
        .isLength({ min: 3, max: 300 })
        .withMessage(
            "Username must be a string min. length 3, max. length 300 symbols"
        ),
    body("email")
        .exists()
        .withMessage("Email is required")
        .bail()
        .isEmail()
        .withMessage("Email must be valid email address"),
    body("password")
        .exists()
        .withMessage("Password is required")
        .bail()
        .isString()
        .isLength({ min: 8, max: 100 })
        .withMessage(
            "Password must be a string min. length 8, max. length 100 symbols"
        ),
    body("phone")
        .exists()
        .withMessage("Phone number is required")
        .bail()
        .matches(/^\+?[1-9]\d{1,14}$/)
        // .isMobilePhone()
        .withMessage("Phone number must be a valid international number"),
];

export const loginUserValidation = [
    body("email")
        .exists()
        .withMessage("Email is required")
        .bail()
        .isEmail()
        .withMessage("Email must be valid email address"),
    body("password")
        .exists()
        .withMessage("Password is required")
        .bail()
        .isString()
        .isLength({ min: 8, max: 100 })
        .withMessage(
            "Password must be a string min. length 8, max. length 100 symbols"
        ),
];
