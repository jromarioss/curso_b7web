import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

export const contato = async (req: Request, res: Response) => {
  let transport = nodemailer.createTransport({
    service: 'Hotmail',
    auth: {
      user: 'email',
      pass: 'senha'
    }
  });

  let message = {
    from: "José Romário <romario.cabulozo@hotmail.com>",
    to: "jromario2014@gmail.com",
    subject: "Assunto legal",
    html: "Opa <string>teste Bom dia</strong>",
    text: "Opa Romario blz"
  }

  let info = await transport.sendMail(message);

  console.log("Info", info);
  
  res.json({ success: true });
}