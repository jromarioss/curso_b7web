import { Request, Response } from 'express';
import { Product } from '../models/Product';

export const home = (req: Request, res: Response) => {
  let age: number = 28;
  let showOld: boolean = false;

  if (age > 18) {
    showOld = true;
  }

  let list = Product.getAll();
  let expensiveList = Product.getFromPriceAfter(10);

  res.render('pages/home', {
    name: 'José',
    lastname: 'Santos',
    age,
    showOld,
    produts: list,
    expensiveList: expensiveList,
    frasesDoDia: [
      'Bom-dia luz do dia!'
    ]
  });
}