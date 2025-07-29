import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

// ✅ MySQL pool config
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "registerwithus",
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { user_name, user_phone, user_email, message, form_type } = body;

    // ✅ Validate required fields
    if (!user_name || !user_phone || !user_email || !message || !form_type) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // ✅ Insert into DB
    await db.query(
      `INSERT INTO users (user_name, user_phone, user_email, message, form_type) VALUES (?, ?, ?, ?, ?)`,
      [user_name, user_phone, user_email, message, form_type]
    );

    console.log("✅ Data saved with form_type:", form_type);
    return NextResponse.json({ success: true, message: "Data saved ✅" });
  } catch (err) {
    console.error("❌ Error saving data:", err);
    return NextResponse.json(
      { success: false, message: "Failed to save data" },
      { status: 500 }
    );
  }
}
