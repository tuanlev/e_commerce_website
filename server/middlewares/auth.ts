import { NextFunction, request, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const authMiddleware = (req:Request, res:Response, next:NextFunction) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
        if (err) {
            next(err);
        }
        req.body.userId = (decoded as any).userId;
        req.body.role = (decoded as any).role;
        next();
    });
}