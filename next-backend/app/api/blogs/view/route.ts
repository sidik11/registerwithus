import { NextResponse } from "next/server";
import mysql from "mysql2/promise";
import { NextRequest } from "next/server";
import path from "path";
import fs from "fs/promises";

const uploadDir = path.join(process.cwd(), "/public/uploads/blogs");

async function saveFile(file: File) {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const filename = Date.now() + "_" + file.name;
  const filepath = path.join(uploadDir, filename);

  await fs.mkdir(uploadDir, { recursive: true });
  await fs.writeFile(filepath, buffer);

  return `/uploads/blogs/${filename}`;
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "registerwithus",
    });

    if (id) {
      const [blogs]: any = await connection.execute(
        `SELECT * FROM blogs WHERE id=?`, [id]
      );

      if (!blogs.length) {
        await connection.end();
        return NextResponse.json({ success: false, message: "Blog not found" });
      }

      const [meta]: any = await connection.execute(
        `SELECT meta_name, meta_content FROM blog_meta WHERE blog_id=?`, [id]
      );

      await connection.end();
      return NextResponse.json({ success: true, blog: { ...blogs[0], meta } });
    } else {
      const [rows]: any = await connection.execute(`
        SELECT blogs.id, blogs.title, blogs.image, blogs.category_id, blog_categories.name AS category_name
        FROM blogs
        LEFT JOIN blog_categories ON blogs.category_id = blog_categories.id
        ORDER BY blogs.id DESC
      `);

      await connection.end();
      return NextResponse.json({ success: true, blogs: rows });
    }
  } catch (error) {
    console.error("❌ Fetch blogs error:", error);
    return NextResponse.json({ success: false, message: "Failed to fetch blogs" }, { status: 500 });
  }
}

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

    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "registerwithus",
    });

    // Get old image if no new image uploaded
    let imagePath = "";
    if (imageFile && imageFile.size > 0) {
      imagePath = await saveFile(imageFile);
    } else {
      const [oldBlog]: any = await connection.execute(
        "SELECT image FROM blogs WHERE id=?",
        [id]
      );
      imagePath = oldBlog[0]?.image || "";
    }

    // ✅ Update blog
    await connection.execute(
      "UPDATE blogs SET title=?, slug=?, description=?, category_id=?, date=?, image=? WHERE id=?",
      [title, slug, description, category_id, date, imagePath, id]
    );

    // ✅ Update meta tags
    await connection.execute("DELETE FROM blog_meta WHERE blog_id=?", [id]);

    for (let i = 0; i < metaNames.length; i++) {
      const name = metaNames[i] as string;
      const content = (metaContents[i] as string) || "";
      if (name.trim()) {
        await connection.execute(
          "INSERT INTO blog_meta (blog_id, meta_name, meta_content) VALUES (?, ?, ?)",
          [id, name, content]
        );
      }
    }

    await connection.end();
    return NextResponse.json({ success: true, message: "Blog updated successfully" });
  } catch (error) {
    console.error("❌ Blog update error:", error);
    return NextResponse.json({ success: false, message: "Failed to update blog" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "registerwithus",
    });

    await connection.execute("DELETE FROM blog_meta WHERE blog_id=?", [id]);
    await connection.execute("DELETE FROM blogs WHERE id=?", [id]);

    await connection.end();
    return NextResponse.json({ success: true, message: "Blog deleted successfully" });
  } catch (error) {
    console.error("❌ Blog delete error:", error);
    return NextResponse.json({ success: false, message: "Failed to delete blog" }, { status: 500 });
  }
}
