import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { Product } from '../models/Products';
import { User } from '../models/User';

export const home = async (req: Request, res: Response) => 
{
  const user = User.build({
    name: 'Beltrano'
  });
  let idade: number = 47;
  user.age = idade;
  // await user.save();

  /* const user = await User.create({
    name: 'Ciclano',
    age: 39
  }); */

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