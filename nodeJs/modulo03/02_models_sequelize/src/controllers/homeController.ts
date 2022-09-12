import { Request, Response } from 'express';
import { sequelize } from '../instances/mysql';
import { Product } from '../models/Products';

export const home = async (req: Request, res: Response) => {
  try {
    await sequelize.authenticate();
    console.log("Conexão feita com sucesso!");
  } catch(error) {
    console.log("Deu error: ", error)
  }

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
    ]
  });
}