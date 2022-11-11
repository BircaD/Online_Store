import { Router } from 'express';

import DeviceTypeController from '../controllers/typeController';

const router = Router();
const deviceTypeController = new DeviceTypeController();

router.post('/', deviceTypeController.create);
router.get('/', deviceTypeController.getAll);
router.put('/', deviceTypeController.change);
router.delete('/', deviceTypeController.delete);

export default router;