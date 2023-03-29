import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import { TOKEN_NAME, TOKEN_SECRET } from '@/constants';

export async function middleware(request) {
  const jwt = request.cookies.get(TOKEN_NAME);

  if (!jwt) return NextResponse.redirect(new URL('/login', request.url));

  try {
    const { payload } = await jwtVerify(
      jwt.value,
      new TextEncoder().encode(TOKEN_SECRET)
    );
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/dashboard/:path*', '/'],
};
