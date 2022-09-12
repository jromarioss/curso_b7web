import { Router } from 'express';
import multer from 'multer';
import * as ApiController from '../controllers/apiController';

const upload = multer({
  dest: './tmp'
});

const router = Router();

router.get('/ping', ApiController.ping);
router.get('/random', ApiController.random);
router.get('/nome/:nome', ApiController.nome);

router.post('/frases', ApiController.createPhrase);
router.get('/frases', ApiController.listPhrases);
router.get('/frase/aleatoria', ApiController.randomPhrase);
router.get('/frase/:id', ApiController.getPhrase);
router.put('/frase/:id', ApiController.updatePhrase);
router.delete('/frase/:id', ApiController.deletePhrase);

router.post('/upload', upload.array('avatars', 2), ApiController.uploadFile);
/* 
  fields para enviar arquivo diferentes
  upload.fields([
    { name: 'avatar', maxCount: 1 } recebe um arquivo com nome avatar,
    { name: 'gallery', maxCount: 3 } recebe até 3 arquivos com nome gallery
  ])
*/

export default router;