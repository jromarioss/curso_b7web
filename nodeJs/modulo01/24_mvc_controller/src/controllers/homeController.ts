import { Request, Response } from 'express';

export const home = (req: Request, res: Response) => {
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
}