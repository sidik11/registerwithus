// app/lib/db.ts
import mysql, { Pool } from "mysql2/promise";

const isProduction: boolean = process.env.NODE_ENV === "production";

// Use Railway variables in production, local variables in development
const host: string = isProduction ? process.env.MYSQLHOST! : process.env.DB_HOST!;
const user: string = isProduction ? process.env.MYSQLUSER! : process.env.DB_USER!;
const password: string = isProduction ? process.env.MYSQLPASSWORD! : process.env.DB_PASS!;
const database: string = isProduction ? process.env.MYSQLDATABASE! : process.env.DB_NAME!;
const port: number = isProduction ? Number(process.env.MYSQLPORT) : Number(process.env.DB_PORT || 3306);

let pool: Pool | undefined;

export function getPool(): Pool {
  if (!pool) {
    pool = mysql.createPool({
      host,
      user,
      password,
      database,
      port,
      waitForConnections: true,
      connectionLimit: 5,      // keep low for serverless
      queueLimit: 0,
      connectTimeout: 10000,   // 10 seconds
    });
  }
  return pool;
}
