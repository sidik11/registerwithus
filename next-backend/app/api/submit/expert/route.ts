import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

// DB connection pool
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "registerwithus",
});

export async function POST(req: Request) {
  try {
    const { user_name, user_phone, user_email } = await req.json();

    // Ensure table exists
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
  } catch (err) {
    console.error("❌ Error saving expert request:", err);
    return NextResponse.json({ success: false, message: "Error saving expert request" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const [rows] = await db.query(`SELECT * FROM expert_requests ORDER BY created_at DESC`);
    return NextResponse.json(rows);
  } catch (err) {
    console.error("❌ Error fetching expert requests:", err);
    return NextResponse.json({ success: false, message: "Error fetching expert requests" }, { status: 500 });
  }
}
