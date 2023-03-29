import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';
import users from '../../../db/users.json';
import { TOKEN_SECRET, TOKEN_NAME, USER_NAME } from '@/constants';

export default function loginHandler(req, res) {
  let { email, password } = req.body;

  const expToken = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30;

  const verifyUsers = (email, password, users) => {
    return users.find(
      (user) => user.email === email && user.password === password
    );
  };

  const verifiedUser = verifyUsers(email, password, users);

  if (!!verifiedUser) {
    const token = jwt.sign(
      {
        exp: expToken,
        email,
        username: verifiedUser.username,
      },
      TOKEN_SECRET
    );

    const serialized = serialize(TOKEN_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 1000 * 60 * 60 * 24 * 30,
      path: '/',
    });

    res.setHeader('Set-Cookie', serialized);
    return res.status(200).json('Login successfully');
  } else {
    return res.status(401).json('Invalid email or password');
  }
}
