import passport from 'passport';
import dotenv from 'dotenv';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import { User } from '../models/User';

dotenv.config();

const notAuthorizedJson = { status: 401, message: "Não autorizado!" };

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET_KEY as string
}

passport.use(new JWTStrategy(options, async (payload, done) => {
  const user = await User.findByPk(payload.id);

  if (user) {
    return done(null, user);
  } else {
    return done(notAuthorizedJson, false);
  }

  /* return done(null, user); quando deu certo*/
  /* return done(notAuthorizedJson, false); quando da errado */
}));


export default passport;