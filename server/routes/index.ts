import express, { Router } from 'express';

import deviceRouter from './deviceRouter';
import userRouter from './userRouter';
import typeRouter from './typeRouter';
import brandRouter from './brandRouter';

const router: Router = Router();

router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/brand', brandRouter);
router.use('/device', deviceRouter);

export default router;