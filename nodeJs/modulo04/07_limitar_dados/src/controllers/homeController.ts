import { Request, Response } from 'express';
import User from '../models/User';
import { Product } from '../models/Product';

export const home = async (req: Request, res: Response) => {
  let usuarios = await User.find({
    age: { $gt: 18 }
  }).skip(2).limit(2); // skip = pula 2, limit = limita 2

  let age: number = 28;
  let showOld: boolean = false;

  if(age > 50) {
    showOld = true;
  }

  let list = Product.getAll();
  let expensiveList = Product.getFromPriceAfter(12);

  res.render('pages/home', {
    name: 'José',
    lastName: 'Santos',
    showOld,
    products: list,
    expensives: expensiveList,
    frasesDoDia: [],
    usuarios
  });
};