import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/app/api/db';

// ✅ Ensure table exists
async function ensureTableExists() {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS blog_categories (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
}

// ✅ GET all categories
export async function GET() {
  try {
    await ensureTableExists();

    const [rows]: any = await db.query('SELECT * FROM blog_categories ORDER BY id DESC');
    return NextResponse.json({ success: true, categories: rows });
  } catch (error) {
    console.error('GET Error:', error);
    return NextResponse.json({ success: false, message: 'Failed to fetch categories' });
  }
}

// ✅ POST: Add new category
export async function POST(req: Request) {
  try {
    const { name } = await req.json();
    if (!name) return NextResponse.json({ success: false, message: 'Name is required' });

    await db.execute('INSERT INTO blog_categories (name) VALUES (?)', [name]);
    return NextResponse.json({ success: true, message: 'Category added successfully' });
  } catch (error) {
    console.error('POST Error:', error);
    return NextResponse.json({ success: false, message: 'Failed to add category' });
  }
}

// ✅ PUT: Update category by ID
export async function PUT(req: Request) {
  try {
    const { id, name } = await req.json();

    if (!id || !name) {
      return NextResponse.json({ success: false, message: 'ID and name are required' });
    }

    await db.execute('UPDATE blog_categories SET name = ? WHERE id = ?', [name, id]);
    return NextResponse.json({ success: true, message: 'Category updated successfully' });
  } catch (error) {
    console.error('PUT Error:', error);
    return NextResponse.json({ success: false, message: 'Failed to update category' });
  }
}

// ✅ DELETE: Remove category by ID
// ✅ DELETE: Remove category and related blogs
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, message: "ID is required" });
    }

    // ✅ Delete blogs' meta first
    await db.execute(
      `DELETE bm FROM blog_meta bm 
       INNER JOIN blogs b ON bm.blog_id = b.id 
       WHERE b.category_id = ?`,
      [id]
    );

    // ✅ Delete blogs related to this category
    await db.execute("DELETE FROM blogs WHERE category_id = ?", [id]);

    // ✅ Delete category itself
    await db.execute("DELETE FROM blog_categories WHERE id = ?", [id]);

    // Reset AUTO_INCREMENT if no categories left
    const [rows]: any = await db.query("SELECT COUNT(*) AS count FROM blog_categories");
    if (rows[0].count === 0) {
      await db.query("ALTER TABLE blog_categories AUTO_INCREMENT = 1");
    }

    return NextResponse.json({ success: true, message: "Category and related blogs deleted successfully" });
  } catch (error) {
    console.error("DELETE Error:", error);
    return NextResponse.json({ success: false, message: "Failed to delete category" });
  }
}
