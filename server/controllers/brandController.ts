import { Request, Response } from 'express';

import models from '../models/models';
import apiError from '../error/apiError';

export default class DeviceBrandController {
    async create(req: Request, res: Response) {
        const { name } = req.body;
        const brand = await models.DeviceBrand.create({ name });
        return res.json({brand});
    }

    async getAll(res: Response) {       
        const brand = await models.DeviceBrand.findAll();
        return res.json({brand});
    }
    
    async change(req: Request, res: Response) {
        const { name, id } = req.body;
        const brand = await models.DeviceBrand.update({ name }, { where: {id}});
        return res.json({brand});
    }

    async delete(req: Request, res: Response) {
        const { id } = req.body;
        const brand = await models.DeviceBrand.destroy({ where: {id}});
        return res.json({brand});
    }
}