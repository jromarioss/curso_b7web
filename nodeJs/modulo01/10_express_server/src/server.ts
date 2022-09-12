import express, { Request, Response } from 'express';

const server = express();

server.get('/', (req: Request, res: Response) => {
  res.send("Olá mundo!");
});

server.listen(3000);