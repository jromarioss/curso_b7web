import { Request, Response } from 'express';
import nodemailer  from 'nodemailer';

export const contato = (req: Request, res: Response) => {
  var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "111df745d2dcd8",
      pass: "6fd3e820c59838"
    }
  });

  res.json({ pong: true });
}