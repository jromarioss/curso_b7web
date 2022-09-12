import { Request, Response } from 'express';
import { Op } from 'sequelize'
import { User } from '../models/User';

export const home = async (req: Request, res: Response) => {
  let results = await User.findAll({ where: { id: 7 } });

  if (results.length > 0) {
    let usuario = results[0];
    usuario.age = 19
    await usuario.save();
  }

  let users = await User.findAll();

  res.render('pages/home', { users });
}

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
}