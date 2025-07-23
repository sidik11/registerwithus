import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export async function GET() {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'registerwithus'
    });

    const [rows] = await connection.query('SELECT * FROM users');
    await connection.end();

    return NextResponse.json(rows);
}
