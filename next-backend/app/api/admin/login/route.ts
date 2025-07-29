import { NextRequest, NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export async function POST(req: NextRequest) {
    const { email, password } = await req.json();

    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'registerwithus'
    });

    const [rows] = await connection.query(
        'SELECT * FROM admin WHERE email = ? AND password = ?',
        [email, password]
    );

    await connection.end();

    if ((rows as any[]).length > 0) {
        const res = NextResponse.json({ success: true });
        res.cookies.set('admin_auth', 'true', {
            httpOnly: true,
            path: '/',
            maxAge: 60 * 60 * 24,
        });
        return res;
    } else {
        return NextResponse.json({ success: false, message: 'Invalid credentials' });
    }
}
