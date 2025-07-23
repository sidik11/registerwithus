import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "registerwithus",
});

export async function POST(req: Request) {
  try {
    const { user_name, user_phone, user_email, message } = await req.json();

    await db.query(
      `INSERT INTO users (user_name, user_phone, user_email, message) VALUES (?, ?, ?, ?)`,
      [user_name, user_phone, user_email, message]
    );

    console.log("✅ Data saved to DB");
    return NextResponse.json({ success: true, message: "Data saved ✅" });
  } catch (err) {
    console.error("❌ Error saving data:", err);
    return NextResponse.json({ success: false, message: "Failed to save data" }, { status: 500 });
  }
}
