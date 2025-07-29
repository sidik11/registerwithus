import { NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";
import mysql from "mysql2/promise";
import formidable from "formidable";
import { Readable } from "stream";

export const config = { api: { bodyParser: false } };

const uploadDir = path.join(process.cwd(), "/public/uploads/blogs");

async function saveFile(file: any) {
  const actualFile = Array.isArray(file) ? file[0] : file;
  if (!actualFile || !actualFile.filepath) throw new Error("❌ File path not found");

  const filename = Date.now() + "_" + actualFile.originalFilename;
  const filepath = path.join(uploadDir, filename);

  await fs.mkdir(uploadDir, { recursive: true });
  await fs.writeFile(filepath, await fs.readFile(actualFile.filepath));

  return filename;
}

function formatDateToYYYYMMDD(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}/${month}/${day}`;
}

export async function POST(req: Request) {
  try {
    console.log("📌 Blog API hit!");

    const data = await req.arrayBuffer();
    const buffer = Buffer.from(data);

    const form = formidable({ multiples: true, keepExtensions: true });

    const [fields, files] = await new Promise<any>((resolve, reject) => {
      form.parse(
        Object.assign(Readable.from(buffer), { headers: Object.fromEntries(req.headers) }) as any,
        (err, fields, files) => {
          if (err) {
            console.error("❌ Formidable parse error:", err);
            reject(err);
          } else {
            resolve([fields, files]);
          }
        }
      );
    });

    console.log("📌 Parsed Fields:", fields);
    console.log("📌 Parsed Files:", files);

    // ✅ Ensure proper types
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
      throw new Error("❌ Missing required blog fields");
    }

    const imageFile = files.image;
    if (!imageFile) {
      return NextResponse.json({ success: false, message: "Image is required" }, { status: 400 });
    }

    const imageFilename = await saveFile(imageFile);
    const imagePath = `/uploads/blogs/${imageFilename}`;

    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "registerwithus",
    });

    console.log("📌 Database connected");

    // ✅ Insert blog record
    console.log("📌 Inserting Blog:", [title, slug, imagePath, formattedDate, description, categoryId, new Date()]);
    const [blogResult]: any = await connection.execute(
      "INSERT INTO blogs (title, slug, image, date, description, category_id, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [title, slug, imagePath, formattedDate, description, categoryId, new Date()]
    );

    console.log("📌 Blog inserted:", blogResult);

    const blogId = blogResult.insertId;

    // ✅ Insert meta tags
    if (Array.isArray(metaNames)) {
      for (let i = 0; i < metaNames.length; i++) {
        const name = metaNames[i];
        const content = metaContents[i] || "";
        if (name.trim()) {
          console.log("📌 Inserting Meta:", [blogId, name, content]);
          await connection.execute(
            "INSERT INTO blog_meta (blog_id, meta_name, meta_content) VALUES (?, ?, ?)",
            [blogId, name, content]
          );
        }
      }
    } else if (typeof metaNames === "string" && metaNames.trim()) {
      console.log("📌 Inserting Single Meta:", [blogId, metaNames, metaContents || ""]);
      await connection.execute(
        "INSERT INTO blog_meta (blog_id, meta_name, meta_content) VALUES (?, ?, ?)",
        [blogId, metaNames, metaContents || ""]
      );
    }

    await connection.end();
    console.log("✅ Blog added successfully");

    return NextResponse.json({ success: true, message: "Blog added successfully." });
  } catch (error) {
    console.error("❌ Blog API Error:", error);
    return NextResponse.json({ success: false, message: "Blog creation failed", error: String(error) }, { status: 500 });
  }
}
