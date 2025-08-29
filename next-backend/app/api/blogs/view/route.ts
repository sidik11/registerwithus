import { NextRequest, NextResponse } from "next/server";
import db from "@/utils/db"; // centralized DB pool
import path from "path";
import fs from "fs/promises";

const uploadDir = path.join(process.cwd(), "/public/uploads/blogs");

// ✅ Save uploaded image file
async function saveFile(file: File) {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const filename = Date.now() + "_" + file.name;
  const filepath = path.join(uploadDir, filename);

  await fs.mkdir(uploadDir, { recursive: true });
  await fs.writeFile(filepath, buffer);

  return `/uploads/blogs/${filename}`;
}

// ✅ GET blogs (all or single with meta)
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (id) {
      const [blogs]: any = await db.query(
        `SELECT *, DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%s') as created_at 
         FROM blogs WHERE id=?`,
        [id]
      );

      if (!blogs.length) {
        return NextResponse.json({ success: false, message: "Blog not found" });
      }

      const [meta]: any = await db.query(
        `SELECT meta_name, meta_content FROM blog_meta WHERE blog_id=?`,
        [id]
      );

      return NextResponse.json({ success: true, blog: { ...blogs[0], meta } });
    } else {
      const [rows]: any = await db.query(`
        SELECT 
          blogs.id, 
          blogs.title, 
          blogs.image, 
          blogs.category_id, 
          blogs.description AS blogDescription,
          DATE_FORMAT(blogs.created_at, '%Y-%m-%d %H:%i:%s') as created_at,
          blog_categories.name AS category_name
        FROM blogs
        LEFT JOIN blog_categories ON blogs.category_id = blog_categories.id
        ORDER BY blogs.id DESC
      `);

      return NextResponse.json({ success: true, blogs: rows });
    }
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}

// ✅ PUT (Update blog with meta + optional image)
export async function PUT(req: NextRequest) {
  try {
    const data = await req.formData();
    const id = data.get("id") as string;
    const title = data.get("title") as string;
    const slug = data.get("slug") as string;
    const description = data.get("description") as string;
    const category_id = data.get("category_id") as string;
    const date = data.get("date") as string;
    const metaNames = data.getAll("metatag[]");
    const metaContents = data.getAll("metadesc[]");
    const imageFile = data.get("image") as File | null;

    let imagePath = "";
    if (imageFile && imageFile.size > 0) {
      imagePath = await saveFile(imageFile);
    } else {
      const [oldBlog]: any = await db.query("SELECT image FROM blogs WHERE id=?", [id]);
      imagePath = oldBlog[0]?.image || "";
    }

    await db.query(
      "UPDATE blogs SET title=?, slug=?, description=?, category_id=?, date=?, image=? WHERE id=?",
      [title, slug, description, category_id, date, imagePath, id]
    );

    await db.query("DELETE FROM blog_meta WHERE blog_id=?", [id]);

    for (let i = 0; i < metaNames.length; i++) {
      const name = metaNames[i] as string;
      const content = (metaContents[i] as string) || "";
      if (name.trim()) {
        await db.query(
          "INSERT INTO blog_meta (blog_id, meta_name, meta_content) VALUES (?, ?, ?)",
          [id, name, content]
        );
      }
    }

    return NextResponse.json({ success: true, message: "Blog updated successfully" });
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to update blog" },
      { status: 500 }
    );
  }
}

// ✅ DELETE blog (with meta)
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    await db.query("DELETE FROM blog_meta WHERE blog_id=?", [id]);
    await db.query("DELETE FROM blogs WHERE id=?", [id]);

    return NextResponse.json({ success: true, message: "Blog deleted successfully" });
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to delete blog" },
      { status: 500 }
    );
  }
}
