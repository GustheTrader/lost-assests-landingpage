export const runtime = "edge";

const CONTACT_EMAIL = "psewal@adauditservintl.com";

function clean(value: unknown, limit: number) {
  return typeof value === "string" ? value.trim().slice(0, limit) : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character] || character);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    if (clean(body.website, 100)) return Response.json({ ok: true, delivery: "filtered" });

    const inquiry = {
      name: clean(body.name, 100),
      email: clean(body.email, 160),
      company: clean(body.company, 140),
      role: clean(body.role, 120),
      phone: clean(body.phone, 40),
      inquiryType: clean(body.inquiryType, 100),
      preferredDate: clean(body.preferredDate, 20),
      preferredTime: clean(body.preferredTime, 20),
      timezone: clean(body.timezone, 80),
      message: clean(body.message, 1800),
      consent: clean(body.consent, 10),
    };

    if (!inquiry.name || !inquiry.company || !inquiry.inquiryType || !inquiry.message || inquiry.consent !== "yes" || !/^\S+@\S+\.\S+$/.test(inquiry.email)) {
      return Response.json({ ok: false, message: "Please complete the required fields with a valid work email." }, { status: 400 });
    }

    const subject = `AASI website inquiry — ${inquiry.inquiryType}`;
    const plainText = [
      `Name: ${inquiry.name}`, `Email: ${inquiry.email}`, `Company: ${inquiry.company}`, `Role: ${inquiry.role || "Not provided"}`,
      `Phone: ${inquiry.phone || "Not provided"}`, `Inquiry: ${inquiry.inquiryType}`,
      `Preferred consultation: ${[inquiry.preferredDate, inquiry.preferredTime, inquiry.timezone].filter(Boolean).join(" · ") || "Not provided"}`,
      "", "Message:", inquiry.message,
    ].join("\n");

    if (!process.env.RESEND_API_KEY) {
      const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(plainText)}`;
      return Response.json({ ok: true, delivery: "client", mailtoUrl });
    }

    const rows = Object.entries({
      Name: inquiry.name, Email: inquiry.email, Company: inquiry.company, Role: inquiry.role || "Not provided", Phone: inquiry.phone || "Not provided",
      Inquiry: inquiry.inquiryType, "Preferred date": inquiry.preferredDate || "Not provided", "Preferred time": inquiry.preferredTime || "Not provided", Timezone: inquiry.timezone || "Not provided",
    }).map(([label, value]) => `<tr><td style="padding:8px 12px;color:#637174">${label}</td><td style="padding:8px 12px;font-weight:600">${escapeHtml(value)}</td></tr>`).join("");

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.AASI_FROM_EMAIL || "AASI Website <onboarding@resend.dev>",
        to: [process.env.AASI_CONTACT_EMAIL || CONTACT_EMAIL],
        reply_to: inquiry.email,
        subject,
        html: `<div style="font-family:Arial,sans-serif;color:#071c24;max-width:680px"><h1 style="font-family:Georgia,serif">New AASI inquiry</h1><table style="border-collapse:collapse;width:100%;background:#f4f2eb">${rows}</table><h2 style="margin-top:28px">Message</h2><p style="line-height:1.7;white-space:pre-wrap">${escapeHtml(inquiry.message)}</p></div>`,
      }),
    });

    if (!resendResponse.ok) return Response.json({ ok: false, message: "Email delivery is temporarily unavailable. Please email the AASI team directly." }, { status: 502 });
    return Response.json({ ok: true, delivery: "email" });
  } catch {
    return Response.json({ ok: false, message: "We could not process this inquiry." }, { status: 400 });
  }
}
