import { NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  // ── 1. Parse & validate the incoming email ─────────────────────────────────
  let email = "";
  try {
    const body = (await request.json()) as { email?: unknown };
    email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  // ── 2. Save to Google Sheet via SheetDB ────────────────────────────────────
  const sheetDbUrl = process.env.SHEETDB_URL;
  if (!sheetDbUrl) {
    console.error("SHEETDB_URL environment variable is not set.");
    return NextResponse.json(
      { error: "Server configuration error. Please try again later." },
      { status: 500 },
    );
  }

  try {
    const sheetRes = await fetch(sheetDbUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        data: [{ email }],
      }),
    });

    if (!sheetRes.ok) {
      const text = await sheetRes.text();
      console.error("SheetDB error:", sheetRes.status, text);
      return NextResponse.json(
        { error: "Could not save your email. Please try again." },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("SheetDB fetch failed:", err);
    return NextResponse.json(
      { error: "Network error. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, stored: true });
}
