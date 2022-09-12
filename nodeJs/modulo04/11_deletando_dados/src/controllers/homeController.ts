import { Request, Response } from 'express';
import User from '../models/User';

export const home = async (req: Request, res: Response) => {
  // await User.findOneAndDelete({ email: "paulo@gmail.com" });

  let user = await User.findOne({ email: "andre@hotmail.com" });

  if (user) {
    await user.remove();
  }

  let users = await User.find({}).sort({"name.firstName": 1});

  res.render('pages/home', { users });
};

export const addUserAction = async (req: Request, res: Response) => {
  const { firstName, lastName, email, age, interests } = req.body;
  
  const newUser = new User();

  newUser.name = { firstName, lastName };
  newUser.email = email;
  newUser.age = age;
  newUser.age = parseInt(age);
  newUser.interests = interests.split(',');

  try {
    await newUser.save();
    let users = await User.find({}).sort({"name.firstName": 1});
    res.render('pages/home', { users });
  } catch(err) {
    console.log("Error", err);
  }
};

export const incrementAgeAction = async (req: Request, res: Response) => {
  let id: string = req.params.id;
  let results = await User.findById({ _id: id });

  if (results) {
    results.age++;
    await results.save();
  }
  res.redirect('/');
}