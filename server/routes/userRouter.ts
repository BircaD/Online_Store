import { Router } from 'express';

import UserController from '../controllers/userController';
import authMiddleware from '../middleware/authMiddleware';

const router = Router();
const userController = new UserController();

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', authMiddleware, userController.check);
router.put('/:id', userController.change);
router.delete('/:id', userController.delete);


export default router;