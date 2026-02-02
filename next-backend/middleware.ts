import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  const isLoginPage = pathname === "/admin/login.html";

  const isStaticAsset =
    pathname.startsWith("/admin/css") ||
    pathname.startsWith("/admin/js") ||
    pathname.startsWith("/admin/img") ||
    pathname.startsWith("/admin/fonts");

  if (isLoginPage || isStaticAsset) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/admin")) {
    const token = req.cookies.get("access_token")?.value;

    if (!token) {
      return NextResponse.redirect(new URL("/admin/login.html", req.url));
    }

    try {
      await jwtVerify(token, secret);
      return NextResponse.next();
    } catch {
      return NextResponse.redirect(new URL("/admin/login.html", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
