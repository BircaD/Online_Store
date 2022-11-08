import { NextFunction, Request, Response } from "express";
import apiError from "../error/apiError";

export default function (err: apiError, req: Request, res: Response, next: NextFunction) {
    if (err instanceof apiError){
        return res.status(err.status).json({message: err.message})
    }
}