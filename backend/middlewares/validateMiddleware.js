import { validationResult } from "express-validator";

export default (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors[0]);
        const messages = errors.array().map((error) => error.msg);
        return res.status(400).json({ message: messages.join(", ") });
    }
    next();
};
