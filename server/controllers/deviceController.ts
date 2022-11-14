import { NextFunction, Request, Response } from "express";
import path from "path";
import {v4} from "uuid";

import models from "../models/models";
import apiError from "../error/apiError";
import UserController from "./userController";


export default class DeviceController {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            console.log(typeof models.Device)
            let { name, price, brandId, typeId, info } = req.body;
            const img: any = req.files?.img;
            let fileName = v4() + ".jpg";
            img?.mv(path.resolve(__dirname, '..', 'static', fileName));
            const device = await models.Device.create({ name, price, brandId, typeId, img: fileName });

            return res.json(device);
        } catch (err) {
            if (err instanceof Error) {
                next(apiError.badRequest(err.message))
            } else {
                console.log('Unexpected error', err);
            }
        }
    }

    async getAll(req: Request, res: Response) {
        let { brandId, typeId } = req.query;
        let limit = Number(req.query.limit);
        let page = Number(req.query.page);
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit;
        let devices;
        if (!brandId && !typeId){
            devices = await models.Device.findAndCountAll({limit, offset});
        } 
        if (brandId && !typeId){
            devices = await models.Device.findAndCountAll({where: {brandId}, limit, offset});
        } 
        if (!brandId && typeId){
            devices = await models.Device.findAndCountAll({where: {typeId}});
        }
         if (brandId && typeId){
            devices = await models.Device.findAndCountAll({where: {brandId, typeId}});
        }
        return res.json(devices);
    }

    async getOne(req: Request, res: Response) {
        const {id} = req.params;
        const device = await models.Device.findOne(
            {
                where: {id},
            },
        )
        return res.json(device);
    }

    async change(req: Request, res: Response) {

    }

    async delete(req: Request, res: Response) {

    }
}
