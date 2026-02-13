import mysql from "mysql2/promise";

export async function GET() {
  try {
    const conn = await mysql.createConnection({
      host: process.env.MYSQLHOST,
      user: process.env.MYSQLUSER,
      password: process.env.MYSQLPASSWORD,
      database: process.env.MYSQLDATABASE,
      port: Number(process.env.MYSQLPORT),
    });

    const [rows] = await conn.query("SELECT 1 AS ok");
    await conn.end();

    return Response.json({ database: "connected", result: rows });
  } catch (err) {
    return Response.json(
      { database: "failed", error: err.message },
      { status: 500 }
    );
  }
}
