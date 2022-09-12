import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send("Olá mundo!");
});

router.get('/contato', (req: Request, res: Response) => {
  res.send("Formulário de contatos!");
});

router.get('/noticia/:slug', (req: Request, res: Response) => {
  let slug = req.params.slug;
  res.send(`Notícias: ${slug}`);
});

router.get('/voo/:origem-:destino', (req: Request, res: Response) => {
  let { origem, destino } = req.params;
  res.send(`Procurando voos de ${origem.toUpperCase()} até ${destino.toUpperCase()}`);
});

export default router;