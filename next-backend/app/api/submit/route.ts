import { NextResponse } from "next/server";
import db from "@/utils/db";   // ✅ Centralized DB import

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

    return NextResponse.json({ success: true, message: "Data saved ✅" });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Failed to save data" },
      { status: 500 }
    );
  }
}
