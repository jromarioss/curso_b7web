import { Router } from 'express';
import * as HomeController from '../controllers/homeController';
import * as InfoContoller from '../controllers/infoController';
import * as UserController from '../controllers/userController';

const router = Router();

router.get('/', HomeController.home);

router.get('/contato', InfoContoller.contato);
router.get('/sobre', InfoContoller.sobre);

router.get('/nome', UserController.nome);
router.get('/idade', UserController.idade);
router.post('/idade-res', UserController.idadeAction);

export default router;