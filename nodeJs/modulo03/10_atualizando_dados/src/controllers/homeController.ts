import { Request, Response } from 'express';
import { Op } from 'sequelize'
import { User } from '../models/User';

export const home = async (req: Request, res: Response) => {
  await User.update({ name: "Seu Chicho" }, {
    where: {
      /* age: {
        [Op.lt]: 18
      } */
      id: 4
    }
  });

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