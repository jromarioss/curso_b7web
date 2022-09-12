import express, { Request, Response, ErrorRequestHandler } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
import apiRoutes from './routes/api';

dotenv.config();

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: true }));

app.use(apiRoutes);
app.use((req: Request, res: Response) => {
  res.status(404);
  res.send("Endpoint não encontrado.");
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(400);
  res.json({ error: 'Ocorreu algum error.'});
}
app.use(errorHandler);

app.listen(process.env.PORT);