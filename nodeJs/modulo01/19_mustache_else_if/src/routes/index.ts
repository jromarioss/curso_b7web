import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  let age: number = 15;
  let showOld: boolean = false;

  if (age > 18) {
    showOld = true;
  }

  res.render('home', {
    name: 'José',
    lastname: 'Santos',
    age,
    showOld,
    produts: [
      {title: 'Produto X', price: 10},
      {title: 'Produto Y', price: 20},
      {title: 'Produto Q', price: 30}
    ],
    frasesDoDia: []
  });
});

export default router;