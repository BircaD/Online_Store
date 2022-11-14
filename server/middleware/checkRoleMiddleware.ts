import { NextFunction, Request, Response } from "express";
import jwt  from "jsonwebtoken";

export default function (role: string) {
    return function (req: Request, res: Response, next: NextFunction) {
    if (req.method === 'OPTIONS') {
        next();
    }
    try {
        const {authorization} = req.headers;
        console.log(authorization, role)
        if (!authorization) {
            return res.status(401).json({message: "Not authorized"})
        }
        const token = authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.SECRET_KEY as string);
        console.log(decoded)
        return res.json(decoded);
    //    if (decoded.role !== role) {
    //         res.status(403).json({message: "Forbidden"})
    //     }
    //     req.user = decoded;
        next();
    } catch (err) {
        if (err instanceof Error) {
            res.status(401).json({message: "Not authorized"})
        } else {
            console.log('Unexpected error', err);
        }
    }
}
}