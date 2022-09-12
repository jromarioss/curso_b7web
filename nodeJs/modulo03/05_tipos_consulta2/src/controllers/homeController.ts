import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { Product } from '../models/Products';
import { User } from '../models/User';

export const home = async (req: Request, res: Response) => 
{
  let searchName: string = 'gio';
  let users = await User.findAll({
    where: {
      name: {
        [Op.like]: `%${searchName}%`
        //[Op.like]: 'jo%' // começa com jo é caseSensitive
        /* [Op.like]: '%o%' onde tem a em todos os lugar*/
        /* [Op.between]: [30, 70] Todos que estão entre 30 e 70*/
        /* [Op.in]: [ 30, 55 ] Todos que tem 30 e 55*/
        /* [Op.NotIn]: [ 30, 55 ] Todos que não tem 30 e 55*/
       /*  [Op.gt]: 40, // >
        [Op.gte]: 40, // >=
        [Op.lt]: 40,  // <
        [Op.lte]: 40, // <= */
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