import { Router } from 'express';

import DeviceBrandController from '../controllers/brandController';

const router = Router();
const deviceBrandController = new DeviceBrandController();

router.post('/', deviceBrandController.create);
router.get('/', deviceBrandController.getAll);
router.put('/', deviceBrandController.change);
router.delete('/', deviceBrandController.delete);

export default router;