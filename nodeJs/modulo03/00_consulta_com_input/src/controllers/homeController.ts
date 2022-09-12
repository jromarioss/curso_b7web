import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { Product } from '../models/Products';
import { User } from '../models/User';

export const home = async (req: Request, res: Response) => 
{
  let find: string = req.query.q as string;
  let users = await User.findAll({
    where: {
      name: {
        [Op.like]: `%${find}%`
      }
    }
  });

  let age: number = 28;
  let showOld: boolean = false;

  if (age > 18) {
    showOld = true;
  }

  let list = Product.getAll();
  let expensiveList = Product.getFromPriceAfter(20);
  
  res.render('pages/home', { users });
}