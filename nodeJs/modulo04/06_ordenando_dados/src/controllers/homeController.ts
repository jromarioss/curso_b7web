import { Request, Response } from 'express';
import User from '../models/User';
import { Product } from '../models/Product';

export const home = async (req: Request, res: Response) => {
  let usuarios = await User.find({
    age: { $gt: 18 }
  }).sort({ age: 1 }); 
  /* 1 ascendente aumente / -1 descrecente diminui */
  /* 
    gt = Greater then = Maior
    gte = Greater or Equal = Maior ou Igual
    lt = Lower then = Menor
    lte = Lower then or Equal = Menor ou igual
  */

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