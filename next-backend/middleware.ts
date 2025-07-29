// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

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
    pathname.startsWith('/admin/fonts') || // optional: allow fonts folder
    pathname.startsWith('/admin/img')     // optional: allow image folder
  );

  const isAuthenticated = req.cookies.get('admin_auth')?.value === 'true';

  // Allow all static assets and login page without auth
  if (isStaticAsset || isLoginPage) {
    return NextResponse.next();
  }

  // Redirect to login if not authenticated and accessing protected /admin route
  if (isAdminRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL('/admin/login.html', req.url));
  }

  return NextResponse.next();
}

// ✅ Apply middleware to all admin-related routes
export const config = {
  matcher: ['/admin/:path*'],
};
