import { NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  let email = "";
  try {
    const body = (await request.json()) as { email?: unknown };
    email = typeof body.email === "string" ? body.email.trim() : "";
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  // ---------------------------------------------------------------------------
  // INTEGRATION PLACEHOLDER
  // No email service is connected yet, so this address is NOT stored anywhere.
  // Connect a provider here (Mailchimp, ConvertKit, Resend Audiences, Brevo,
  // a database, etc.), keep API keys in server-side environment variables, and
  // return an error status if the provider call fails.
  // ---------------------------------------------------------------------------

  return NextResponse.json({ ok: true, stored: false });
}
