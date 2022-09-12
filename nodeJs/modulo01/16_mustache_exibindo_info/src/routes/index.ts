import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  let user = {
    name: 'José',
    lastname: 'Santos',
    age: 28
  };

  res.render('home', { user });
});

export default router;