import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import db from "@/utils/db"; // make sure this points to your MySQL connection

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("access_token")?.value;
    if (!token) {
      return NextResponse.json({ authenticated: false });
    }

    // Verify JWT token
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);

    // Fetch superadmin from DB using admin id from token
    const [rows] = await db.query(
      "SELECT superadmin FROM admin WHERE id = ?",
      [decoded.id]
    );

    const admin = Array.isArray(rows) && rows.length ? rows[0] : null;

    if (!admin) {
      return NextResponse.json({ authenticated: false });
    }

    return NextResponse.json({
      authenticated: true,
      superadmin: admin.superadmin, // <-- return 0 or 1
      user: decoded
    });
  } catch (err) {
    return NextResponse.json({ authenticated: false });
  }
}
