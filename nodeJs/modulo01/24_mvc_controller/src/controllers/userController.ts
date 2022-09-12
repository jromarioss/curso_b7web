import { Request, Response } from 'express';

export const nome = (req: Request, res: Response) => {
  let nome: string = req.query.nome as string;
  let idade: string = req.query.idade as string;

  res.render('pages/nome', { nome, idade });
}

export const idade = (req: Request, res: Response) => {
  res.render('pages/idade');
}

export const idadeAction = (req: Request, res: Response) => {
  let idade: number = 0;
  let mostrarIdade: boolean = false;

  if (req.body.ano) {
    let anoNsc: number = parseInt(req.body.ano as string);
    let anoAtual: number = new Date().getFullYear();
    idade = anoAtual - anoNsc;
    mostrarIdade = true;
  }

  res.render('pages/idade', { idade, mostrarIdade });
}