import { NextResponse, NextRequest } from "next/server";
import db from "../../../utils/db";

/**
 * Utility: normalize page name
 */
const normalizePageName = (page_name: string): string =>
  page_name.trim().toLowerCase();

/**
 * Utility: validate URL
 */
const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

async function ensureCanonicalsTable() {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS canonicals (
      id INT AUTO_INCREMENT PRIMARY KEY,
      page_name VARCHAR(255) NOT NULL UNIQUE,
      canonical_url TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP
    )
  `);
}


/**
 * CREATE canonical URL
 */
export async function POST(req: NextRequest) {
  try {
    await ensureCanonicalsTable();
    const body: {
      page_name?: string;
      canonical_url?: string;
    } = await req.json();

    const { page_name, canonical_url } = body;

    if (!page_name || !canonical_url) {
      return NextResponse.json(
        { success: false, message: "Page name & canonical URL required" },
        { status: 400 }
      );
    }

    if (!isValidUrl(canonical_url)) {
      return NextResponse.json(
        { success: false, message: "Invalid canonical URL" },
        { status: 400 }
      );
    }

    const normalizedPageName = normalizePageName(page_name);

    await db.execute(
      "INSERT INTO canonicals (page_name, canonical_url) VALUES (?, ?)",
      [normalizedPageName, canonical_url]
    );

    return NextResponse.json({
      success: true,
      message: "Canonical URL saved successfully",
    });
  } catch (error: any) {
    if (error.code === "ER_DUP_ENTRY") {
      return NextResponse.json(
        { success: false, message: "Canonical already exists for this page" },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

/**
 * GET canonical URLs
 */
export async function GET(req: NextRequest) {
  try {
    await ensureCanonicalsTable();
    const { searchParams } = new URL(req.url);
    const page_name = searchParams.get("page_name");

    // 🔹 Get canonical by page name
    if (page_name) {
      const normalizedPageName = normalizePageName(page_name);

      const [rows]: any = await db.execute(
        "SELECT canonical_url FROM canonicals WHERE page_name = ?",
        [normalizedPageName]
      );

      if (rows.length === 0) {
        return NextResponse.json(
          { success: false, message: "Canonical not found" },
          { status: 404 }
        );
      }

      return NextResponse.json({
        success: true,
        canonical_url: rows[0].canonical_url,
      });
    }

    // 🔹 Get all canonicals (admin)
    const [rows]: any = await db.execute(
      "SELECT page_name, canonical_url FROM canonicals"
    );

    return NextResponse.json({
      success: true,
      data: rows,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

/**
 * UPDATE canonical URL
 */
export async function PUT(req: NextRequest) {
  try {
    await ensureCanonicalsTable();
    const body: {
      page_name?: string;
      canonical_url?: string;
    } = await req.json();

    const { page_name, canonical_url } = body;

    if (!page_name || !canonical_url) {
      return NextResponse.json(
        { success: false, message: "Page name & canonical URL required" },
        { status: 400 }
      );
    }

    if (!isValidUrl(canonical_url)) {
      return NextResponse.json(
        { success: false, message: "Invalid canonical URL" },
        { status: 400 }
      );
    }

    const normalizedPageName = normalizePageName(page_name);

    const [result]: any = await db.execute(
      "UPDATE canonicals SET canonical_url = ? WHERE page_name = ?",
      [canonical_url, normalizedPageName]
    );

    if (result.affectedRows === 0) {
      return NextResponse.json(
        { success: false, message: "Page not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Canonical URL updated successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

/**
 * DELETE canonical URL
 */
export async function DELETE(req: NextRequest) {
  try {
    const body: { page_name?: string } = await req.json();
    const { page_name } = body;

    if (!page_name) {
      return NextResponse.json(
        { success: false, message: "Page name required" },
        { status: 400 }
      );
    }

    const normalizedPageName = normalizePageName(page_name);

    const [result]: any = await db.execute(
      "DELETE FROM canonicals WHERE page_name = ?",
      [normalizedPageName]
    );

    if (result.affectedRows === 0) {
      return NextResponse.json(
        { success: false, message: "Page not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Canonical URL deleted successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}