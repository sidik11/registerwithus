import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

// XAMPP MySQL details
const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
});

export async function GET() {
  try {
    // Create Database
    await connection.query(`CREATE DATABASE IF NOT EXISTS registerwithus`);
    console.log("✅ Database created or already exists");

    // Use Database
    await connection.query(`USE registerwithus`);

    // Create Table (without form_type initially)
    await connection.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_name VARCHAR(255) NOT NULL,
        user_phone VARCHAR(20) NOT NULL,
        user_email VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log("✅ Table created or already exists");

    // Check if 'form_type' column exists
    const [columns] = await connection.query(`SHOW COLUMNS FROM users LIKE 'form_type'`);
    if ((columns as any[]).length === 0) {
      await connection.query(`ALTER TABLE users ADD COLUMN form_type VARCHAR(50) DEFAULT 'Quick Contact' AFTER message`);
      console.log("✅ 'form_type' column added");
    } else {
      console.log("ℹ️ 'form_type' column already exists");
    }

    return NextResponse.json({ success: true, message: "DB & Table setup complete ✅" });
  } catch (err) {
    console.error("❌ Error in DB setup:", err);
    return NextResponse.json({ success: false, message: "DB setup failed" }, { status: 500 });
  }
}
