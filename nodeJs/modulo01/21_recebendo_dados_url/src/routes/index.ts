import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  let age: number = 28;
  let showOld: boolean = false;

  if (age > 18) {
    showOld = true;
  }

  res.render('pages/home', {
    name: 'José',
    lastname: 'Santos',
    age,
    showOld,
    produts: [
      {title: 'Produto X', price: 10},
      {title: 'Produto Y', price: 20},
      {title: 'Produto Q', price: 30}
    ],
    frasesDoDia: [
      'Bom-dia luz do dia!'
    ]
  });
});

router.get('/contato', (req: Request, res: Response) => {
  res.render('pages/contato');
});

router.get('/sobre', (req: Request, res: Response) => {
  res.render('pages/sobre');
});

router.get('/nome', (req: Request, res: Response) => {
  let nome: string = req.query.nome as string;

  res.render('pages/nome', {
    nome
  });
});

export default router;