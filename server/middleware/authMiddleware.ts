import { NextFunction, Request, Response } from "express";
import jwt  from "jsonwebtoken";

export default function (req: Request, res: Response, next: NextFunction) {
    if (req.method === 'OPTIONS') {
        next();
    }
    try {
        const token = req.headers.authorization!.split('')[1];
        if (!token) {
            return res.status(401).json({message: "Not authorized"})
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY || '');
        //req.user = decoded;
        next();
    } catch (err) {
        if (err instanceof Error) {
            res.status(401).json({message: "Not authorized"})
        } else {
            console.log('Unexpected error', err);
        }
    }
}