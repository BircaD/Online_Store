import { NextFunction, Request, Response } from "express";
import fileUpload from "express-fileupload";
//import multer from "multer";
import path from "path";
import uuid from "uuid";

import models from "../models/models";
import apiError from "../error/apiError";
import UserController from "./userController";
export default class DeviceController {
    async add(req: Request, res: Response, next: NextFunction) {
        try {
            const { name, price, brandid, typeid, info } = req.body;
            const { img }: any = req.files as unknown as fileUpload.UploadedFile;
            let fileName = uuid.v4() + '.jpg';
            img.mv(path.resolve(__dirname, '..', 'static', fileName));

            const device = await models.Device.create({ name, price, brandid, typeid, img: fileName });

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
