import { Request, Response } from 'express';
import User from '../models/User';
import { Product } from '../models/Product';

export const home = async (req: Request, res: Response) => {

  // let usuarios = await User.find({}); pegar todos
  // let usuarios = await User.findOne({ email: "jromario@gmail.com" }); pegar um pelo email
  // let usuarios = await User.findById('62e7c8e0bc08ef32a72ca64f');
 /*  let usuarios = await User.find({
    "name.firstName": "Giovana" para pegar o first name dentro do obj name
  });
 */
  /* let usuarios = await User.find({
    interests: "skate" para pegar item dentro da array
  }); */
  let usuarios = await User.find({
    age: { $gt: 18 } // para pegar maior que 18 anos
  }); 

  /* 
    gt = Greater then = Maior
    gte = Greater or Equal = Maior ou Igual
    lt = Lower then = Menor
    lte = Lower then or Equal = Menor ou igual
  */

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
    frasesDoDia: [],
    usuarios
  });
};