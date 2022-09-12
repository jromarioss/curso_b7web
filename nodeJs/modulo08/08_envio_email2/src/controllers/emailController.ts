import { Request, Response } from 'express';
import nodemailer  from 'nodemailer';

export const contato = async (req: Request, res: Response) => {
  var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "111df745d2dcd8",
      pass: "6fd3e820c59838"
    }
  });

  let message = {
    from: req.body.from,
    to: 'jromario2014@gmail.com',
    subject: req.body.subject,
    html: req.body.email,
    text: req.body.email
  };

  let info = await transport.sendMail(message);
  console.log("INFO", info);

  res.json({ success: true });
}