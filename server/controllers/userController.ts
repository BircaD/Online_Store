import { Request, Response, NextFunction } from "express";

import apiError from "../error/apiError";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import models from "../models/models";

type userType = {
    email: string
    password: string
    role: string
}

const generateJwt = (id: string, email: string, role: string ) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY as string,
        {expiresIn: '24h'}
    )
}
export default class UserController {
    async registration(req: Request, res: Response, next: NextFunction) {
        const {email, password, role} = req.body;
        if (!email || ! password) {
            return next(apiError.badRequest('Wrong email or password'));
        }
        const candidate = await models.User.findOne({where: {email}});
        if (candidate) {
            return next(apiError.badRequest('User with this email already exists'));
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await models.User.create({email, role, password: hashPassword});
        console.log(user)
        const basket = await models.Basket.create({userId: user.id});
        const token = generateJwt(user.id, user.email, user.role);
            return res.json({token})
    }

    async login(req: Request, res: Response, next: NextFunction) {
        const {email, password} = req.body;
        const user = await models.User.findOne({where: {email}});
        if (!user) {
            return next(apiError.internal('User not found'));
        }
        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(apiError.internal('Wrong password'));
        }
        const token = generateJwt(user.id, user.email, user.role);
            return res.json({token})
    }

    async check(req: Request, res: Response, next: NextFunction) {
        res.json({message: 'Loginizat'});
        // const token = generateJwt(req.id, req.email, req.user.role);
        // return res.json({token});
    }

    async change(req: Request, res: Response) {
        
    }

    async delete(req: Request, res: Response) {
        
    }
}


