import express, { Request, Response } from 'express';
import path from 'path';
import mustache from 'mustache-express';
import mainRouter from './routes/index';

const app = express();

app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views'));
app.engine('mustache', mustache());

app.use(express.static(path.join(__dirname, '../public')));

app.use('/', mainRouter);

app.use((req: Request, res: Response) => {
  res.status(404).send("Página não encontrada!");
});

app.listen(3000);