import express, { Request, Response} from 'express';
import path from 'path';
import mustache from 'mustache-express';
import mainRouter from './routes/index';
import painelRoutes from './routes/painel';

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

server.use('/', mainRouter);
server.use('/painel', painelRoutes);

server.use((req: Request, res: Response) => {
  res.status(404).send("Página não encontrada!");
});

server.listen(3000);