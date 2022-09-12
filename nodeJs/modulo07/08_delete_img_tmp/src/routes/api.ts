import { Router } from 'express';
import multer from 'multer';
import * as ApiController from '../controllers/apiController';

const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './tmp');
  },
  filename: (req, file, cb) => {
    let randomName = Math.floor(Math.random() * 99999);
    cb(null, `${randomName}.jpg`);
  }
});

const upload = multer({
  dest: './tmp',
  fileFilter: (req, file, cb) => {
    const allowed: string[] = ['image/jpg', 'image/jpeg', 'image/png'];

    cb(null, allowed.includes( file.mimetype ));
  },
  storage: storageConfig,
  limits: { fieldNameSize: 100 } // limitar o tamanho do arquivo
});

/* const upload = multer({
  dest: './tmp',
  fileFilter: (req, file, cb) => {
    const allowed: string[] = ['image/jpg', 'image/jpeg', 'image/png'];

    cb(null, allowed.includes( file.mimetype ));
  }
}); */

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

router.post('/upload', upload.single('avatar'), ApiController.uploadFile);

export default router;