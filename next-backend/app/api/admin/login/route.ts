import { NextRequest, NextResponse } from "next/server";
import db from "@/utils/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "Email and password required" },
        { status: 400 }
      );
    }

    // 🔍 Fetch admin
    const [rows] = await db.query(
      "SELECT * FROM admin WHERE email = ? AND status = 1",
      [email]
    );

    const admin = (rows as any[])[0];

    if (!admin) {
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      );
    }

    // 🔐 Password check
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      );
    }

    // 🔑 GENERATE TOKENS (THIS WAS MISSING)
    const accessToken = jwt.sign(
      { id: admin.id, email: admin.email },
      process.env.JWT_SECRET!,
      { expiresIn: "15m" }
    );

    const refreshToken = jwt.sign(
      { id: admin.id },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );

    // ✅ Response
    const res = NextResponse.json({
      success: true,
      message: "Login successful",
    });

    // 🍪 Cookies (DEV-SAFE)
    res.cookies.set("access_token", accessToken, {
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      secure: false,
      maxAge: 60 * 15,
    });

    res.cookies.set("refresh_token", refreshToken, {
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      secure: false,
      maxAge: 60 * 60 * 24 * 7,
    });

    return res;
  } catch (err) {
    console.error("LOGIN ERROR:", err);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
