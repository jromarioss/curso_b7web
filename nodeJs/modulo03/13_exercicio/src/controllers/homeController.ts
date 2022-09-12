import { Request, Response } from 'express';
import { Product } from '../models/Product';
import { User } from '../models/User';
import { Op } from 'sequelize';

export const home = async (req: Request, res: Response) => {
  let results = await User.findAll({where: {name: 'Ciclano' }});
  if (results.length > 0) {
    let usuario = results[0];
    await usuario.destroy();
  }

  let users = await User.findAll();
  
  let age: number = 90;
  let showOld: boolean = false;

  if (age > 50) {
    showOld = true;
  }

  let list = Product.getAll();
  let expensiveList = Product.getFromPriceAfter(12);

  res.render('pages/home', {
    name: 'José',
    lastname: 'Santos',
    showOld,
    products: list,
    expensives: expensiveList,
    frasesDoDia: [],
    users
  });
};

export const novoUsuario = async (req: Request, res: Response) => {
  let { name, age } = req.body;

  if (name) {
    const newUser = User.build({ name });
    if (age) {
      newUser.age = parseInt(age);
    }
    await newUser.save();
  }

  res.redirect('/');
};