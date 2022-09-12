import { Request, Response } from 'express';
import User from '../models/User';
import { Product } from '../models/Product';

export const home = async (req: Request, res: Response) => {
  let usuarios = await User.find({});
  console.log("Usuarios: ", usuarios);

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
    frasesDoDia: []
  });
};