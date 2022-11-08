import express, { Router, Request, Response } from 'express';

import UserController from '../controllers/userController';

export default Router();
const router = Router();
const userController = new UserController();

router.post('/registration', (req, res) => userController.registration);
router.post('/login', (req, res) => userController.login);
router.get('/auth', (req: Request, res: Response) => userController.check);
router.put('/:id', (req, res) => userController.modify);
router.delete('/:id', (req, res) => userController.delete);

module.exports = Router();