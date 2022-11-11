import { Request, Response } from 'express';

import models from '../models/models';
import apiError from '../error/apiError';
export default class DeviceTypeController {
    async create(req: Request, res: Response) {
        const { name } = req.body;
        const type = await models.DeviceType.create({ name });
        return res.json({type});
    }

    async getAll(req: Request, res: Response) {
        const type = await models.DeviceType.findAll();
        return res.json({type});
    }
    
    async change(req: Request, res: Response) {
        const { name, id } = req.body;
        const type = await models.DeviceType.update({ name }, { where: {id}});
        return res.json({type});
    }

    async delete(req: Request, res: Response) {
        const { id } = req.body;
        const type = await models.DeviceType.destroy({ where: {id}});
        return res.json({type});
    }
}