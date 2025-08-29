import { NextRequest, NextResponse } from "next/server";
import db from "@/utils/db";
import bcrypt from "bcryptjs"; // bcryptjs for Next.js compatibility

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ success: false, message: "Email and password required" }, { status: 400 });
    }

    // Fetch admin by email only
    const [rows] = await db.query("SELECT * FROM admin WHERE email = ? AND status = 1", [email]);
    const admin = (rows as any[])[0];

    if (!admin) {
      return NextResponse.json({ success: false, message: "Invalid credentials or inactive account" }, { status: 401 });
    }

    // Compare entered password with hashed password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return NextResponse.json({ success: false, message: "Invalid credentials or inactive account" }, { status: 401 });
    }

    // Login successful → set cookie
    const res = NextResponse.json({ success: true });
    res.cookies.set("admin_auth", "true", {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
    });

    return res;

  } catch {
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
