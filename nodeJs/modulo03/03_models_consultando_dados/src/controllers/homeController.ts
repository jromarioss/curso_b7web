import { Request, Response } from 'express';
import { Product } from '../models/Products';
import { User } from '../models/User';

export const home = async (req: Request, res: Response) => 
{
  let users = await User.findAll();

  let age: number = 28;
  let showOld: boolean = false;

  if (age > 18) {
    showOld = true;
  }

  let list = Product.getAll();
  let expensiveList = Product.getFromPriceAfter(20);
  
  res.render('pages/home', {
    name: 'José',
    lastname: 'Santos',
    age,
    showOld,
    produts: list,
    expensiveList,
    frasesDoDia: [
      "Bom dia luz do Dia",
      "Boa noite que escuro hoje!"
    ],
    users
  });
}