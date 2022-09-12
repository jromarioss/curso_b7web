import { Router, Request, Response } from "express";

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send("Página do painel!");
});

router.get('/noticia/:slug', (req: Request, res: Response) => {
  let slug = req.params.slug;
  res.send(`Notícia: ${slug}`);
});

export default router;