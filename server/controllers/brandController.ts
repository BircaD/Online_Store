import { Request, Response } from 'express';

import models from '../models/models';
import apiError from '../error/apiError';

export default class DeviceBrandController {
    async create(req: Request, res: Response) {
        const { name } = req.body;
        const type = await models.DeviceBrand.create({ name });
        return res.json({type});
    }

    async getAll(res: Response) {       
        const type = await models.DeviceBrand.findAll();
        return res.json({type});
    }
    
    async change(req: Request, res: Response) {
        const { name, id } = req.body;
        const type = await models.DeviceBrand.update({ name }, { where: {id}});
        return res.json({type});
    }

    async delete(req: Request, res: Response) {
        const { id } = req.body;
        const type = await models.DeviceBrand.destroy({ where: {id}});
        return res.json({type});
    }
}