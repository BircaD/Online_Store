import { NextFunction, Request, Response } from "express";
import fileUpload from "express-fileupload";
import path from "path";
import {v4} from "uuid";

import models from "../models/models";
import apiError from "../error/apiError";
import UserController from "./userController";

export default class DeviceController {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { name, price, brandId, typeId, info } = req.body;
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

    }

    async getOne(req: Request, res: Response) {

    }

    async change(req: Request, res: Response) {

    }

    async delete(req: Request, res: Response) {

    }
}
