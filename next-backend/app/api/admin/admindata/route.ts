import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

// DB connection pool
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "registerwithus",
});

// 👉 Only GET method to fetch admin table data
export async function GET() {
  try {
    // Optional: Auto-create admin table if not exists
    await db.query(`
      CREATE TABLE IF NOT EXISTS admin (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    const [rows] = await db.query(`SELECT * FROM admin ORDER BY created_at DESC`);
    return NextResponse.json(rows);
  } catch (err) {
    console.error("❌ Error fetching admin data:", err);
    return NextResponse.json({ success: false, message: "Error fetching admin data" }, { status: 500 });
  }
}
