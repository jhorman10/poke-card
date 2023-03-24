import { verify } from 'jsonwebtoken';
import { TOKEN_SECRET } from '../../../constants';

export default function profileHandler(req, res) {
  const { MyToken } = req.cookies;

  if (!MyToken) {
    return res.status(401).json({ error: 'No token' });
  }

  try {
    const user = verify(MyToken, TOKEN_SECRET);
    return res.json({ email: user.email, username: user.username });
  } catch (error) {
    return res.status(401).json({ error: 'invalid token' });
  }
}
