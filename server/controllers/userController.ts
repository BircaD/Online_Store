import { Request, Response, NextFunction } from "express";

import apiError from "../error/apiError";

export default class UserController {
    async registration(req: Request, res: Response) {
    
    }

    async login(req: Request, res: Response) {
        
    }

    async check(req: Request, res: Response, next: NextFunction) {
        const {id} = req.query;
        if(!id){
            return next(apiError.badRequest('lol'));
        }
        res.json(id);
    }

    async modify(req: Request, res: Response) {
        
    }

    async delete(req: Request, res: Response) {
        
    }
}


