import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const accessGranted = request.cookies.get('access_granted')?.value;

  if (!accessGranted && request.nextUrl.pathname.startsWith('/relax')) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/relax/:path*'],
};
