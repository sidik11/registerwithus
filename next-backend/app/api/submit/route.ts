import { NextResponse } from "next/server";
import db from "@/utils/db";

export async function GET() {
  try {
    // ✅ Fetch all users (contact forms)
    const [rows] = await db.query(`SELECT * FROM users ORDER BY created_at DESC`);
    return NextResponse.json(rows);
  } catch (err) {
    console.error("❌ Error fetching data:", err);
    return NextResponse.json(
      { success: false, message: "Failed to fetch data" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { user_name, user_phone, user_email, message, form_type } = body;

    // ✅ Required fields check
    if (!user_name || !user_phone || !user_email || !form_type) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // ✅ Regex validation
    const nameRegex = /^[A-Za-z\s]+$/;       // alphabets + whitespace only
    const phoneRegex = /^[0-9+]{1,13}$/;     // only digits and +, max 13 chars

    if (!nameRegex.test(user_name)) {
      return NextResponse.json(
        { success: false, message: "Invalid name: only alphabets and spaces allowed" },
        { status: 400 }
      );
    }

    if (!phoneRegex.test(user_phone)) {
      return NextResponse.json(
        { success: false, message: "Invalid phone: only digits and + allowed (max 13 chars)" },
        { status: 400 }
      );
    }

    if (form_type === "expert") {
      // ✅ Ensure expert_requests table exists
      await db.query(`
        CREATE TABLE IF NOT EXISTS expert_requests (
          id INT AUTO_INCREMENT PRIMARY KEY,
          user_name VARCHAR(255) NOT NULL,
          user_phone VARCHAR(20) NOT NULL,
          user_email VARCHAR(255) NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);

      await db.query(
        `INSERT INTO expert_requests (user_name, user_phone, user_email) VALUES (?, ?, ?)`,
        [user_name, user_phone, user_email]
      );

      return NextResponse.json({ success: true, message: "Expert request saved ✅" });
    } else {
      // ✅ Default: general contact forms
      if (!message) {
        return NextResponse.json(
          { success: false, message: "Message is required for contact forms" },
          { status: 400 }
        );
      }

      await db.query(
        `INSERT INTO users (user_name, user_phone, user_email, message, form_type) VALUES (?, ?, ?, ?, ?)`,
        [user_name, user_phone, user_email, message, form_type]
      );

      return NextResponse.json({ success: true, message: "Data saved ✅" });
    }
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Failed to save data", error: String(err) },
      { status: 500 }
    );
  }
}
