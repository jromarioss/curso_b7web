import { Request, Response } from 'express';
import User from '../models/User';
import { Product } from '../models/Product';

export const home = async (req: Request, res: Response) => {
 /*  let newUser = await User.create({
    name: { firstName: "Julio", lastName: "Pereira" },
    email: "julio@gmail.com",
    age: 21,
    interests: ['arte', 'pizza']
  }); */

  let newUser = new User();
  newUser.name = { firstName: "André", lastName: "Soares" };
  newUser.email = "andre@hotmail.com";
  newUser.age = 35;
  newUser.interests = ["Comer", "pizza", "programação"];
  let resultado = await newUser.save();

  let usuarios = await User.find();

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