import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "registerwithus",
});

export async function GET() {
  try {
    const [rows] = await db.query(`SELECT * FROM users ORDER BY created_at DESC`);
    return NextResponse.json(rows);
  } catch (err) {
    console.error("❌ Error fetching data:", err);
    return NextResponse.json({ success: false, message: "Failed to fetch data" }, { status: 500 });
  }
}
