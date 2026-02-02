import { NextResponse } from "next/server";
import db from "../../../utils/db";

const ALLOWED_META_NAMES = ["title", "description", "keywords", "author", "robots"];
const ROBOTS_OPTIONS = ["index, follow", "noindex, follow", "noindex, nofollow"];

const normalize = (v) => v.trim().toLowerCase();

/* ---------------- POST (CREATE MULTIPLE META TAGS) ---------------- */


async function ensureMetaTagsTable() {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS meta_tags (
      id INT AUTO_INCREMENT PRIMARY KEY,
      page_name VARCHAR(255) NOT NULL,
      meta_name ENUM('title','description','keywords','author','robots') NOT NULL,
      meta_content TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
        ON UPDATE CURRENT_TIMESTAMP,
      UNIQUE KEY unique_page_meta (page_name, meta_name)
    )
  `);
}

export async function POST(req) {
  const connection = await db.getConnection();
  try {
      await ensureMetaTagsTable();
    const { page_name, meta_tags } = await req.json();

    if (!page_name || !Array.isArray(meta_tags) || meta_tags.length === 0) {
      return NextResponse.json(
        { success: false, message: "Page name and meta tags required" },
        { status: 400 }
      );
    }

    await connection.beginTransaction();

    for (const meta of meta_tags) {
      const { meta_name, meta_content } = meta;

      if (!ALLOWED_META_NAMES.includes(meta_name)) {
        throw new Error(`Invalid meta name: ${meta_name}`);
      }

      if (meta_name === "keywords" && !Array.isArray(meta_content)) {
        throw new Error("Keywords must be an array");
      }

      if (meta_name === "robots" && !ROBOTS_OPTIONS.includes(meta_content)) {
        throw new Error("Invalid robots value");
      }

      await connection.execute(
        `INSERT INTO meta_tags (page_name, meta_name, meta_content)
         VALUES (?, ?, ?)`,
        [normalize(page_name), meta_name, JSON.stringify(meta_content)]
      );
    }

    await connection.commit();

    return NextResponse.json({
      success: true,
      message: "Meta tags created successfully",
    });
  } catch (err) {
    await connection.rollback();
    if (err.code === "ER_DUP_ENTRY") {
      return NextResponse.json(
        { success: false, message: "Duplicate meta for this page" },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 400 }
    );
  } finally {
    connection.release();
  }
}

/* ---------------- GET (LIST META TAGS BY PAGE) ---------------- */
export async function GET(req) {
  try {
      await ensureMetaTagsTable();
    const { searchParams } = new URL(req.url);
    const page_name = searchParams.get("page_name");

    let rows;
    if (page_name) {
      [rows] = await db.execute(
        "SELECT meta_name, meta_content FROM meta_tags WHERE page_name = ?",
        [normalize(page_name)]
      );
    } else {
      [rows] = await db.execute("SELECT page_name, meta_name, meta_content FROM meta_tags");
    }

    if (!rows || rows.length === 0) {
      return NextResponse.json(
        { success: false, message: "No meta tags found" },
        { status: 404 }
      );
    }

    // Parse JSON stored content
    rows = rows.map((r) => ({
      ...r,
      meta_content: JSON.parse(r.meta_content)
    }));

    return NextResponse.json({ success: true, data: rows });
  } catch (err) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}


/* ---------------- PUT (UPDATE MULTIPLE META TAGS) ---------------- */
export async function PUT(req) {
  const connection = await db.getConnection();
  try {
      await ensureMetaTagsTable();
    const { page_name, meta_tags } = await req.json();

    if (!page_name || !Array.isArray(meta_tags)) {
      return NextResponse.json(
        { success: false, message: "Invalid payload" },
        { status: 400 }
      );
    }

    await connection.beginTransaction();

    // 🔥 STEP 1: DELETE ALL OLD META TAGS
    await connection.execute(
      `DELETE FROM meta_tags WHERE page_name = ?`,
      [page_name]
    );

    // 🔥 STEP 2: INSERT CURRENT META TAGS FROM FRONTEND
    for (const meta of meta_tags) {
      const { meta_name, meta_content } = meta;

      await connection.execute(
        `INSERT INTO meta_tags (page_name, meta_name, meta_content)
         VALUES (?, ?, ?)`,
        [page_name, meta_name, JSON.stringify(meta_content)]
      );
    }

    await connection.commit();

    return NextResponse.json({
      success: true,
      message: "Meta tags updated successfully",
    });
  } catch (err) {
    await connection.rollback();
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  } finally {
    connection.release();
  }
}


/* ---------------- DELETE (DELETE META TAG BY PAGE AND NAME) ---------------- */
export async function DELETE(req) {
  try {
      await ensureMetaTagsTable();
    const { page_name } = await req.json();

    if (!page_name) {
      return NextResponse.json(
        { success: false, message: "Page name required" },
        { status: 400 }
      );
    }

    // Delete all meta tags for the given page_name
    const [result] = await db.execute(
      "DELETE FROM meta_tags WHERE page_name = ?",
      [normalize(page_name)]
    );

    if (result.affectedRows === 0) {
      return NextResponse.json(
        { success: false, message: "No meta tags found for this page" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, message: "All meta tags deleted successfully" });
  } catch (err) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}