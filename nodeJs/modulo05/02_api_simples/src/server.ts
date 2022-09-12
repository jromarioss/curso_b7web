import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import apiRoutes from './routes/api';

dotenv.config();

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: true }));

app.use(apiRoutes);

app.use((req: Request, res: Response) => {
  res.status(404);
  res.send("End point não encontrado.");
});

app.listen(process.env.PORT);