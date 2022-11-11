import { Router } from 'express';

import DeviceController from '../controllers/deviceController';

const router: Router = Router();
const deviceController = new DeviceController();

router.post('/', deviceController.add);
router.get('/', deviceController.getAll);
router.get('/:id', deviceController.getOne);
router.put('/:id', deviceController.change);
router.delete('/:id', deviceController.delete);

export default router;
