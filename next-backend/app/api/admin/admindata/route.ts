import { NextRequest, NextResponse } from "next/server";
import mysql from "mysql2/promise";

// ✅ DB connection pool
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "registerwithus",
});

// ✅ GET: Fetch all admin records
export async function GET() {
  try {
    await db.query(`
     CREATE TABLE IF NOT EXISTS admin (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  status TINYINT DEFAULT 1, -- ✅ Add this
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

// ✅ POST: Add new admin with status 1 by default
export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ success: false, message: "Email and password required" }, { status: 400 });
    }

    await db.query(
      `INSERT INTO admin (email, password, status) VALUES (?, ?, ?)`,
      [email, password, 1]
    );

    return NextResponse.json({ success: true, message: "Admin added successfully" });
  } catch (err) {
    console.error("❌ Error adding admin:", err);
    return NextResponse.json({ success: false, message: "Error adding admin" }, { status: 500 });
  }
}

// ✅ PUT: Update admin email or password
export async function PUT(req: NextRequest) {
  try {
    const { id, email, password } = await req.json();

    if (!id || (!email && !password)) {
      return NextResponse.json({ success: false, message: "Invalid request" }, { status: 400 });
    }

    const fields = [];
    const values = [];

    if (email) {
      fields.push("email = ?");
      values.push(email);
    }
    if (password) {
      fields.push("password = ?");
      values.push(password);
    }

    values.push(id);

    await db.query(`UPDATE admin SET ${fields.join(", ")} WHERE id = ?`, values);

    return NextResponse.json({ success: true, message: "Admin updated successfully" });
  } catch (err) {
    console.error("❌ Error updating admin:", err);
    return NextResponse.json({ success: false, message: "Error updating admin" }, { status: 500 });
  }
}

// ✅ DELETE: Delete admin by ID
export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ success: false, message: "Admin ID is required" }, { status: 400 });
    }

    await db.query(`DELETE FROM admin WHERE id = ?`, [id]);

    return NextResponse.json({ success: true, message: "Admin deleted successfully" });
  } catch (err) {
    console.error("❌ Error deleting admin:", err);
    return NextResponse.json({ success: false, message: "Error deleting admin" }, { status: 500 });
  }
}

// ✅ PATCH: Toggle admin status (activate/deactivate)
// ✅ PATCH: Update admin status (active/inactive)
export async function PATCH(req: NextRequest) {
  try {
    const { id, status } = await req.json(); // ✅ Make sure req.json() is awaited

    if (!id || typeof status === 'undefined') {
      return NextResponse.json(
        { success: false, message: "ID and status are required" },
        { status: 400 }
      );
    }

    const [result] = await db.query(
      `UPDATE admin SET status = ? WHERE id = ?`,
      [status, id]
    );

    return NextResponse.json({
      success: true,
      message: `Admin status updated to ${status}`,
    });
  } catch (err) {
    console.error("❌ Error updating admin status:", err);
    return NextResponse.json(
      { success: false, message: "Failed to update status" },
      { status: 500 }
    );
  }
}
