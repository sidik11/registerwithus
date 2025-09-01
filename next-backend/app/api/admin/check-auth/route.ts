import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("access_token")?.value;
    if (!token) {
      return NextResponse.json({ authenticated: false });
    }

    // Verify JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);

    return NextResponse.json({ authenticated: true, user: decoded });
  } catch (err) {
    return NextResponse.json({ authenticated: false });
  }
}
