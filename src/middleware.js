import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import { TOKEN_NAME, TOKEN_SECRET } from '@/constants';

export async function middleware(request) {
  const jwt = request.cookies.get(TOKEN_NAME);

  if (request.nextUrl.pathname.includes('/dashboard')) {
    if (jwt === undefined) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    try {
      const { payload } = await jwtVerify(jwt, TOKEN_SECRET);
      console.log(payload);
    } catch (error) {
      console.error(error);
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}
