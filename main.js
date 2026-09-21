import connectDB from "./index.js";
import express from "express";
import rt from "./router.js";
import jwt from "jsonwebtoken";

const app = express();


export const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({
                message: "Authentication token is required"
            });
        }

        const token = authHeader.split(" ")[1];

        if (!token) {
            return res.status(401).json({
                message: "Invalid authorization format"
            });
        }

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.user = decoded;

        next();

    } catch (error) {
        return res.status(401).json({
            message: "Invalid or expired token"
        });
    }
};

connectDB().then(()=>{
    app.use(express.json());
    app.user(authMiddleware);
    app.use(rt);
    app.listen(8080);
}).catch(()=>{
    console.log("something went worng");
})

