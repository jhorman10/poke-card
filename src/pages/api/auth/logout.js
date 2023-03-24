import { verify } from 'jsonwebtoken';
import { serialize } from 'cookie';
import { TOKEN_SECRET, TOKEN_NAME } from '@/constants';

export default function logoutHandler(req, res) {
  const { MyToken } = req.cookies;

  if (!MyToken) {
    return res.status(401).json({ error: 'No token' });
  }

  try {
    verify(MyToken, TOKEN_SECRET);
    const serialized = serialize(TOKEN_NAME, null, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'production',
      sameSite: 'strict',
      maxAge: 0,
      path: '/',
    });
    res.setHeader('Set-Cookie', serialized);
    res.status(200).json('Logout successfully');
  } catch (error) {
    res.status(401).json({ error: 'invalid token' });
  }
}
