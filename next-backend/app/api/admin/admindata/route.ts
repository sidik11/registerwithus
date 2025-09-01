import { NextRequest, NextResponse } from "next/server";
import db from "@/utils/db";
import bcrypt from "bcrypt";

// Ensure admin table exists
async function ensureTable() {
    await db.query(`
        CREATE TABLE IF NOT EXISTS admin (
            id INT AUTO_INCREMENT PRIMARY KEY,
            email VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL,
            status TINYINT DEFAULT 1,
            superadmin TINYINT DEFAULT 0,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `);
}

// GET: Fetch all admins
export async function GET() {
    try {
        await ensureTable();
        const [rows] = await db.query(
            `SELECT id, email, status, superadmin, created_at FROM admin ORDER BY created_at DESC`
        );
        return NextResponse.json(rows);
    } catch (err) {
        return NextResponse.json(
            { success: false, message: "Error fetching admin data" },
            { status: 500 }
        );
    }
}

// POST: Add new admin
export async function POST(req: NextRequest) {
    try {
        const { email, password, superadmin = 0 } = await req.json();
        if (!email || !password)
            return NextResponse.json(
                { success: false, message: "Email and password required" },
                { status: 400 }
            );

        const hashedPassword = await bcrypt.hash(password, 10);
        await ensureTable();
        await db.query(
            `INSERT INTO admin (email, password, status, superadmin) VALUES (?, ?, ?, ?)`,
            [email, hashedPassword, 1, superadmin]
        );

        return NextResponse.json({ success: true, message: "Admin added successfully" });
    } catch (err) {
        return NextResponse.json(
            { success: false, message: "Error adding admin" },
            { status: 500 }
        );
    }
}

// PUT: Update admin email/password
export async function PUT(req: NextRequest) {
    try {
        const { id, email, password } = await req.json();
        if (!id || (!email && !password))
            return NextResponse.json(
                { success: false, message: "Invalid request" },
                { status: 400 }
            );

        const fields: string[] = [];
        const values: any[] = [];

        if (email) {
            fields.push("email = ?");
            values.push(email);
        }
        if (password) {
            const hashed = await bcrypt.hash(password, 10);
            fields.push("password = ?");
            values.push(hashed);
        }

        values.push(id);
        await db.query(`UPDATE admin SET ${fields.join(", ")} WHERE id = ?`, values);

        return NextResponse.json({ success: true, message: "Admin updated successfully" });
    } catch (err) {
        return NextResponse.json(
            { success: false, message: "Error updating admin" },
            { status: 500 }
        );
    }
}

// DELETE: Delete admin
export async function DELETE(req: NextRequest) {
    try {
        const { id } = await req.json();
        if (!id)
            return NextResponse.json(
                { success: false, message: "Admin ID is required" },
                { status: 400 }
            );

        await db.query(`DELETE FROM admin WHERE id = ?`, [id]);
        return NextResponse.json({ success: true, message: "Admin deleted successfully" });
    } catch (err) {
        return NextResponse.json(
            { success: false, message: "Error deleting admin" },
            { status: 500 }
        );
    }
}

// PATCH: Toggle status
export async function PATCH(req: NextRequest) {
    try {
        const { id, status } = await req.json();
        if (!id || typeof status === "undefined")
            return NextResponse.json(
                { success: false, message: "ID and status are required" },
                { status: 400 }
            );

        await db.query(`UPDATE admin SET status = ? WHERE id = ?`, [status, id]);
        return NextResponse.json({ success: true, message: `Admin status updated to ${status}` });
    } catch (err) {
        return NextResponse.json(
            { success: false, message: "Failed to update status" },
            { status: 500 }
        );
    }
}
