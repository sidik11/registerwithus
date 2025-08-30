// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET!;

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isAdminRoute = pathname.startsWith('/admin');
  const isLoginPage = pathname === '/admin/login.html';

  const isStaticAsset = (
    pathname.endsWith('.css') ||
    pathname.endsWith('.js') ||
    pathname.endsWith('.png') ||
    pathname.endsWith('.jpg') ||
    pathname.endsWith('.jpeg') ||
    pathname.endsWith('.ico') ||
    pathname.endsWith('.svg') ||
    pathname.endsWith('.webp') ||
    pathname.startsWith('/admin/fonts') ||
    pathname.startsWith('/admin/img')
  );

  // Allow static assets and login page without auth
  if (isStaticAsset || isLoginPage) {
    return NextResponse.next();
  }

  // Check JWT cookie
  const token = req.cookies.get('admin_token')?.value;
  if (isAdminRoute) {
    if (!token) {
      return NextResponse.redirect(new URL('/admin/login.html', req.url));
    }

    try {
      jwt.verify(token, JWT_SECRET); // throws if invalid
      return NextResponse.next();      // valid token → allow access
    } catch (err) {
      return NextResponse.redirect(new URL('/admin/login.html', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
