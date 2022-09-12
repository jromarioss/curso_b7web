import { Router, Request, Response } from "express";

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send("Página inicial do painel!");
});

router.get('/noticia', (req: Request, res: Response) => {
  res.send("Notícia do painel!");
});

export default router;