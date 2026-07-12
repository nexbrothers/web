import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  
  // Get hostname of request (e.g. scanvo.nexbrothers.com, scanvo.localhost:3000)
  const hostname = req.headers.get('host') || '';

  // Define the root domains
  // In production it will be nexbrothers.com, locally it will be localhost:3000
  const rootDomain = process.env.NODE_ENV === 'production' ? 'nexbrothers.com' : 'localhost:3000';
  
  // Extract subdomain if it exists
  const currentHost = hostname
    .replace(`.${rootDomain}`, '');

  // If we're not on the main domain and not just localhost
  if (
    currentHost !== hostname &&
    currentHost !== rootDomain &&
    currentHost !== 'www' &&
    currentHost !== 'localhost:3000'
  ) {
    // Rewrite the URL to the products directory under the hood
    url.pathname = `/products/${currentHost}${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
