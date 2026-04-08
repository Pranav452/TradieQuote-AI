import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  notes?: string;
  /** Bot-trap field (should be empty). */
  company?: string;
};

export async function POST(req: NextRequest) {
  let body: ContactPayload;
  try {
    body = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload" }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const notes = (body.notes ?? "").trim();

  if (body.company) {
    return NextResponse.json({ success: true });
  }

  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required." },
      { status: 400 },
    );
  }

  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    return NextResponse.json(
      { error: "Email is not configured (missing RESEND_API_KEY)." },
      { status: 500 },
    );
  }

  const resend = new Resend(resendKey);
  const from = process.env.RESEND_FROM ?? "TradieQuote AI <onboarding@resend.dev>";
  const to = ["tradiesquoteai@gmail.com"];

  const subject = `Hero contact form: ${name}`;
  const html = `
    <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; padding: 16px; line-height: 1.5;">
      <h2 style="margin: 0 0 12px;">New contact request</h2>
      <p style="margin: 0 0 8px;"><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p style="margin: 0 0 8px;"><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p style="margin: 0 0 8px;"><strong>Phone:</strong> ${escapeHtml(phone || "-")}</p>
      <p style="margin: 0;"><strong>Job volume &amp; services:</strong></p>
      <pre style="margin: 8px 0 0; padding: 12px; background: #f4f4f5; border-radius: 12px; white-space: pre-wrap;">${escapeHtml(
        notes || "-",
      )}</pre>
    </div>
  `;

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject,
    html,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

