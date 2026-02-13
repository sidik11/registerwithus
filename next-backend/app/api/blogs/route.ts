// app/api/blogs/route.ts
import { NextRequest, NextResponse } from "next/server";
export const dynamic = "force-dynamic";

import path from "path";
import fs from "fs/promises";
import formidable from "formidable";
import { Readable } from "stream";
import { getPool } from "../lib/db"; // ✅ fixed relative path

export const config = { api: { bodyParser: false } };

const uploadDir = path.join(process.cwd(), "/public/uploads/blogs");

const nameRegex = /^[A-Za-z\s]+$/;
const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

// ✅ Save uploaded image
async function saveFile(file: any): Promise<string> {
  const actualFile = Array.isArray(file) ? file[0] : file;
  if (!actualFile) throw new Error("File not found");

  if (actualFile.filepath) {
    const filename = Date.now() + "_" + actualFile.originalFilename;
    const filepath = path.join(uploadDir, filename);
    await fs.mkdir(uploadDir, { recursive: true });
    await fs.writeFile(filepath, await fs.readFile(actualFile.filepath));
    return `/uploads/blogs/${filename}`;
  }

  if (actualFile instanceof File) {
    const buffer = Buffer.from(await actualFile.arrayBuffer());
    const filename = Date.now() + "_" + actualFile.name;
    const filepath = path.join(uploadDir, filename);
    await fs.mkdir(uploadDir, { recursive: true });
    await fs.writeFile(filepath, buffer);
    return `/uploads/blogs/${filename}`;
  }

  throw new Error("Invalid file object");
}

// ✅ Format date
function formatDateToYYYYMMDD(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}/${m}/${d}`;
}

// ✅ GET Blogs OR Categories
export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(req.url);
    const type = searchParams.get("type");
    const id = searchParams.get("id");
    const slug = searchParams.get("slug");

    const pool = await getPool(); // ✅ pooled connection

    if (type === "category") {
      const [rows] = await pool.query("SELECT * FROM blog_categories ORDER BY id DESC");
      return NextResponse.json({ success: true, categories: rows });
    }

    if (id) {
      const [blogs]: any = await pool.query(
        `SELECT *, DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%s') as created_at 
         FROM blogs WHERE id=?`,
        [id]
      );
      if (!blogs.length) return NextResponse.json({ success: false, message: "Blog not found" });

      const [meta]: any = await pool.query(
        `SELECT meta_name, meta_content FROM blog_meta WHERE blog_id=?`,
        [id]
      );

      return NextResponse.json({ success: true, blog: { ...blogs[0], meta } });
    }

    if (slug) {
      const [blogs]: any = await pool.query(
        `SELECT blogs.id, blogs.title, blogs.image, blogs.category_id, blogs.description AS blogDescription,
         DATE_FORMAT(blogs.created_at, '%Y-%m-%d %H:%i:%s') as created_at,
         blog_categories.name AS category_name
         FROM blogs
         LEFT JOIN blog_categories ON blogs.category_id = blog_categories.id
         WHERE blogs.slug=?`,
        [slug]
      );

      if (!blogs.length) return NextResponse.json({ success: false, message: "Blog not found" });

      const [meta]: any = await pool.query(
        `SELECT meta_name, meta_content FROM blog_meta WHERE blog_id=?`,
        [blogs[0].id]
      );

      return NextResponse.json({ success: true, blog: { ...blogs[0], meta } });
    }

    const [rows]: any = await pool.query(`
      SELECT 
        blogs.id, blogs.title, blogs.image, blogs.category_id, 
        blogs.description AS blogDescription,
        DATE_FORMAT(blogs.created_at, '%Y-%m-%d %H:%i:%s') as created_at,
        blog_categories.name AS category_name,
        blogs.slug
      FROM blogs
      LEFT JOIN blog_categories ON blogs.category_id = blog_categories.id
      ORDER BY blogs.id DESC
    `);

    return NextResponse.json({ success: true, blogs: rows });
  } catch (e: any) {
    return NextResponse.json({ success: false, message: e.message }, { status: 500 });
  }
}

// ✅ POST: Add Blog OR Category
export async function POST(req: Request): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(req.url);
    const type = searchParams.get("type");

    const pool = await getPool(); // ✅ pooled connection

    if (type === "category") {
      const { name } = await req.json();
      if (!name || !nameRegex.test(name)) {
        return NextResponse.json({ success: false, message: "Category name must contain only letters and spaces" }, { status: 400 });
      }
      await pool.execute("INSERT INTO blog_categories (name) VALUES (?)", [name.trim()]);
      return NextResponse.json({ success: true, message: "Category added successfully" });
    }

    const data = await req.arrayBuffer();
    const buffer = Buffer.from(data);
    const form = formidable({ multiples: true, keepExtensions: true });

    const [fields, files] = await new Promise<any>((resolve, reject) => {
      form.parse(
        Object.assign(Readable.from(buffer), { headers: Object.fromEntries(req.headers) }) as any,
        (err, f, fl) => (err ? reject(err) : resolve([f, fl]))
      );
    });

    const title = fields.title?.[0] || fields.title;
    const slug = fields.slug?.[0] || fields.slug;
    const description = fields.description?.[0] || fields.description;
    const categoryId = Number(fields.category_id?.[0] || fields.category_id);
    const dateValue = fields.date?.[0] || fields.date;

    if (!title || title.length < 3) return NextResponse.json({ success: false, message: "Title must be at least 3 characters" }, { status: 400 });
    if (!slug || !slugRegex.test(slug)) return NextResponse.json({ success: false, message: "Slug must be lowercase letters, numbers and hyphens" }, { status: 400 });
    if (!description || description.length < 10) return NextResponse.json({ success: false, message: "Description must be at least 10 characters" }, { status: 400 });
    if (!categoryId || isNaN(categoryId)) return NextResponse.json({ success: false, message: "Valid category ID is required" }, { status: 400 });

    const formattedDate = dateValue ? formatDateToYYYYMMDD(new Date(dateValue)) : formatDateToYYYYMMDD(new Date());
    const imageFile = files.image;
    if (!imageFile) return NextResponse.json({ success: false, message: "Image is required" }, { status: 400 });
    const imagePath = await saveFile(imageFile);

    const [blogResult] = await pool.execute(
      "INSERT INTO blogs (title, slug, image, date, description, category_id, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [title.trim(), slug.trim(), imagePath, formattedDate, description.trim(), categoryId, new Date()]
    );

    const blogId = blogResult.insertId;
    const metaNames = fields["metatag[]"] || [];
    const metaContents = fields["metadesc[]"] || [];
    if (Array.isArray(metaNames)) {
      for (let i = 0; i < metaNames.length; i++) {
        const name = metaNames[i];
        const content = metaContents[i] || "";
        if (name && name.trim()) {
          await pool.execute("INSERT INTO blog_meta (blog_id, meta_name, meta_content) VALUES (?, ?, ?)", [
            blogId,
            name.trim(),
            content.trim(),
          ]);
        }
      }
    }

    return NextResponse.json({ success: true, message: "Blog added successfully." });
  } catch (e: any) {
    return NextResponse.json({ success: false, message: e.message }, { status: 500 });
  }
}
