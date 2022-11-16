import { Router } from 'express';

import DeviceTypeController from '../controllers/typeController';
import checkRoleMiddleware from '../middleware/checkRoleMiddleware';

const router = Router();
const deviceTypeController = new DeviceTypeController();

router.post('/', /*checkRoleMiddleware('USER'),*/ deviceTypeController.create);
//router.post('/checkAdmin', checkRoleMiddleware('ADMIN'))
router.get('/', deviceTypeController.getAll);
router.put('/', deviceTypeController.change);
router.delete('/', deviceTypeController.delete);

export default router;