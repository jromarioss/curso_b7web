import { Router, Request, Response } from "express";

const router = Router();

router.get('/', (req: Request, res: Response) => {
  let age: number = 15;
  let showOld: boolean = false;

  if (age > 18) {
    showOld = true;
  }

  res.render('home', { 
    name: 'José',
    lastname: 'Santos',
    showOld
  });
});

export default router;