// db.ts
import mysql from 'mysql2/promise';

export const db = mysql.createPool({
  host: 'localhost',
  user: 'u728233529_rwe',
  password: 'e~T=TG2B', // ya jo XAMPP credentials hain
  database: 'u728233529_rwe', // apna DB naam daal
});
