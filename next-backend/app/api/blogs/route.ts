import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";
import formidable from "formidable";
import { Readable } from "stream";
import db from "@/utils/db";

export const config = { api: { bodyParser: false } };

const uploadDir = path.join(process.cwd(), "/public/uploads/blogs");

// ✅ Save uploaded image file
async function saveFile(file: any) {
  const actualFile = Array.isArray(file) ? file[0] : file;

  if (!actualFile) throw new Error("File not found");
  
  // For formidable file upload
  if (actualFile.filepath) {
    const filename = Date.now() + "_" + actualFile.originalFilename;
    const filepath = path.join(uploadDir, filename);
    await fs.mkdir(uploadDir, { recursive: true });
    await fs.writeFile(filepath, await fs.readFile(actualFile.filepath));
    return `/uploads/blogs/${filename}`;
  }

  // For PUT / formData file upload (File object)
  if (actualFile instanceof File) {
    const arrayBuffer = await actualFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const filename = Date.now() + "_" + actualFile.name;
    const filepath = path.join(uploadDir, filename);
    await fs.mkdir(uploadDir, { recursive: true });
    await fs.writeFile(filepath, buffer);
    return `/uploads/blogs/${filename}`;
  }

  throw new Error("Invalid file object");
}

// ✅ Format date to YYYY/MM/DD
function formatDateToYYYYMMDD(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}/${month}/${day}`;
}

// ✅ GET blogs (single or all)
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (id) {
      const [blogs]: any = await db.query(
        `SELECT *, DATE_FORMAT(created_at, '%Y-%m-%d %H:%i:%s') as created_at FROM blogs WHERE id=?`,
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
    return NextResponse.json({ success: false, message: "Failed to fetch blogs" }, { status: 500 });
  }
}

// ✅ POST: Add new blog (with meta + image)
export async function POST(req: Request) {
  try {
    const data = await req.arrayBuffer();
    const buffer = Buffer.from(data);

    const form = formidable({ multiples: true, keepExtensions: true });

    const [fields, files] = await new Promise<any>((resolve, reject) => {
      form.parse(
        Object.assign(Readable.from(buffer), { headers: Object.fromEntries(req.headers) }) as any,
        (err, fields, files) => {
          if (err) reject(err);
          else resolve([fields, files]);
        }
      );
    });

    const title = Array.isArray(fields.title) ? fields.title[0] : fields.title;
    const slug = Array.isArray(fields.slug) ? fields.slug[0] : fields.slug;
    const description = Array.isArray(fields.description) ? fields.description[0] : fields.description;
    const categoryId = Number(Array.isArray(fields.category_id) ? fields.category_id[0] : fields.category_id);
    const dateValue = Array.isArray(fields.date) ? fields.date[0] : fields.date;

    const metaNames = fields["metatag[]"] || [];
    const metaContents = fields["metadesc[]"] || [];

    const formattedDate = dateValue
      ? formatDateToYYYYMMDD(new Date(dateValue))
      : formatDateToYYYYMMDD(new Date());

    if (!title || !slug || !description || !categoryId || isNaN(categoryId)) {
      return NextResponse.json({ success: false, message: "Missing required blog fields" }, { status: 400 });
    }

    const imageFile = files.image;
    if (!imageFile) {
      return NextResponse.json({ success: false, message: "Image is required" }, { status: 400 });
    }

    const imagePath = await saveFile(imageFile);

    const [blogResult]: any = await db.execute(
      "INSERT INTO blogs (title, slug, image, date, description, category_id, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [title, slug, imagePath, formattedDate, description, categoryId, new Date()]
    );

    const blogId = blogResult.insertId;

    // Insert multiple meta tags
    if (Array.isArray(metaNames)) {
      for (let i = 0; i < metaNames.length; i++) {
        const name = metaNames[i];
        const content = metaContents[i] || "";
        if (name.trim()) {
          await db.execute(
            "INSERT INTO blog_meta (blog_id, meta_name, meta_content) VALUES (?, ?, ?)",
            [blogId, name, content]
          );
        }
      }
    } else if (typeof metaNames === "string" && metaNames.trim()) {
      await db.execute(
        "INSERT INTO blog_meta (blog_id, meta_name, meta_content) VALUES (?, ?, ?)",
        [blogId, metaNames, metaContents || ""]
      );
    }

    return NextResponse.json({ success: true, message: "Blog added successfully." });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Blog creation failed", error: String(error) }, { status: 500 });
  }
}

// ✅ PUT: Update blog (with meta + optional image)
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
    return NextResponse.json({ success: false, message: "Failed to update blog" }, { status: 500 });
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
    return NextResponse.json({ success: false, message: "Failed to delete blog" }, { status: 500 });
  }
}
