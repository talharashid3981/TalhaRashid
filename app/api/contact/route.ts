import { NextResponse } from "next/server";

type ContactPayload = { name?: string; email?: string; phone?: string; message?: string };

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[character] ?? character);
}

function buildEmail({ name, email, phone, message }: { name: string; email: string; phone: string; message: string }) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  return `<!doctype html>
<html lang="en"><body style="margin:0;background:#ececf1;color:#18181b;font-family:Arial,Helvetica,sans-serif;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">A new project conversation has arrived from ${safeName}.</div>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f5f5f7;padding:24px 12px;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;background:#ffffff;border:1px solid #e4e4e7;border-radius:16px;overflow:hidden;box-shadow:0 12px 30px rgba(31,25,52,.08);">
        <tr><td style="height:4px;background:linear-gradient(90deg,#8b5cf6,#c084fc,#8b5cf6);font-size:0;line-height:0;">&nbsp;</td></tr>
        <tr><td style="padding:20px 24px 18px;background:#18181b;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0"><tr>
            <td><div style="color:#c4b5fd;font-size:11px;font-weight:700;letter-spacing:1.6px;text-transform:uppercase;">Talha Rashid <span style="color:#71717a;">/</span> Contact</div></td>
            <td align="right" style="color:#71717a;font-size:10px;letter-spacing:1px;">NEW MESSAGE</td>
          </tr></table>
          <h1 style="margin:16px 0 6px;color:#ffffff;font-size:22px;line-height:1.2;letter-spacing:-.2px;">A new project conversation</h1>
          <p style="margin:0;color:#a1a1aa;font-size:13px;line-height:1.5;">Submitted through your portfolio contact form.</p>
        </td></tr>
        <tr><td style="padding:22px 24px 24px;">
          <div style="margin-bottom:14px;color:#7c3aed;font-size:10px;font-weight:700;letter-spacing:1.3px;text-transform:uppercase;">Message from ${safeName}</div>
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0"><tr>
            <td width="32%" style="padding:12px 10px;border-bottom:1px solid #e7e7eb;vertical-align:top;"><div style="color:#a1a1aa;font-size:10px;text-transform:uppercase;letter-spacing:.7px;">Name</div><div style="margin-top:5px;color:#18181b;font-size:13px;font-weight:700;">${safeName}</div></td>
            <td width="34%" style="padding:12px 10px;border-bottom:1px solid #e7e7eb;vertical-align:top;"><div style="color:#a1a1aa;font-size:10px;text-transform:uppercase;letter-spacing:.7px;">Email</div><div style="margin-top:5px;font-size:12px;word-break:break-word;"><a href="mailto:${safeEmail}" style="color:#6d28d9;text-decoration:none;">${safeEmail}</a></div></td>
            <td width="34%" style="padding:12px 10px;border-bottom:1px solid #e7e7eb;vertical-align:top;"><div style="color:#a1a1aa;font-size:10px;text-transform:uppercase;letter-spacing:.7px;">WhatsApp</div><div style="margin-top:5px;color:#18181b;font-size:13px;font-weight:700;">${safePhone}</div></td>
          </tr></table>
          <div style="margin:22px 0 10px;color:#52525b;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">Their message</div>
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0"><tr><td style="padding:16px 18px;background:#fafafa;border-left:3px solid #8b5cf6;border-radius:4px;color:#3f3f46;font-size:14px;line-height:1.65;">${safeMessage}</td></tr></table>
          <div style="margin-top:22px;"><a href="mailto:${safeEmail}" style="display:inline-block;padding:11px 17px;background:#171717;color:#ffffff;border-radius:8px;text-decoration:none;font-size:13px;font-weight:700;">Reply to ${safeName} &nbsp; →</a></div>
        </td></tr>
        <tr><td style="padding:15px 24px;background:#fafafa;border-top:1px solid #e7e7eb;color:#8a8a94;font-size:11px;line-height:1.6;">Talha Rashid &middot; Software Engineer &amp; Agentic AI Specialist<br /><span style="color:#a1a1aa;">Portfolio contact form notification</span></td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = clean(body.name, 100);
    const email = clean(body.email, 160).toLowerCase();
    const phone = clean(body.phone, 40);
    const message = clean(body.message, 4000);

    if (!name || !email || !phone || !message) return NextResponse.json({ message: "Please complete all contact fields." }, { status: 400 });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });

    const apiKey = process.env.BREVO_API_KEY?.trim();
    const senderEmail = process.env.BREVO_SENDER_EMAIL?.trim();
    const senderName = process.env.BREVO_SENDER_NAME?.trim() || "Portfolio Contact Form";
    if (!apiKey || !senderEmail) {
      console.error("Brevo contact configuration is missing.");
      return NextResponse.json({ message: "Contact service is temporarily unavailable. Please try again later." }, { status: 503 });
    }

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: { accept: "application/json", "api-key": apiKey, "content-type": "application/json" },
      body: JSON.stringify({ sender: { name: senderName, email: senderEmail }, to: [{ email: senderEmail, name: senderName }], replyTo: { email, name }, subject: `New portfolio contact message from ${name}`, htmlContent: buildEmail({ name, email, phone, message }) }),
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("Brevo rejected contact email with status", response.status);
      return NextResponse.json({ message: "Your message could not be sent right now. Please try again." }, { status: 502 });
    }
    return NextResponse.json({ message: "Your message has been sent successfully." });
  } catch (error) {
    console.error("Contact form error", error);
    return NextResponse.json({ message: "Something went wrong. Please try again." }, { status: 500 });
  }
}
