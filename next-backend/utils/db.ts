import mysql from "mysql2/promise";

if (
  !process.env.MYSQLHOST ||
  !process.env.MYSQLUSER ||
  !process.env.MYSQLPASSWORD ||
  !process.env.MYSQLDATABASE
) {
  throw new Error("Database environment variables are not set properly.");
}

const db = mysql.createPool({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT
    ? parseInt(process.env.MYSQLPORT, 10)
    : 3306, // ✅ convert string to number
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default db;
