import { Request, Response } from 'express';
import { Phrases } from '../models/Phrase';

export const ping = (req: Request, res: Response) => {
  res.json({ pong: true });
};

export const rand = (req: Request, res: Response) => {
  let nRand: number = Math.floor(Math.random() * 11);

  res.json({ numero: nRand });
};

export const nome = (req: Request, res: Response) => {
  let nome: string = req.params.nome;

  res.json({ nome });
};

export const createPhrase = async (req: Request, res: Response) => {
  let { author, txt } = req.body;
  let newPhrase = await Phrases.create({ author, txt });

  res.json({ id: newPhrase.id, author, txt });
  // res.json({ corpo: req.body }); confirma que conseguiu receber
}