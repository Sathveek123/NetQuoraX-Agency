import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, projectType, budget, message } = body;

    // Server-side validation
    if (!name || name.trim().length < 2) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Valid email is required." }, { status: 400 });
    }
    if (!message || message.trim().length < 10) {
      return NextResponse.json({ error: "Message must be at least 10 characters." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured.");
      return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
    }

    const projectLabel: Record<string, string> = {
      website: "Website",
      app: "Web App / SaaS",
      automation: "AI Automation",
      trading: "Trading System",
      marketing: "Marketing / Ads",
      other: "Not Sure Yet",
    };

    const budgetLabel: Record<string, string> = {
      "under-50k": "Under ₹50,000",
      "50k-100k": "₹50,000 – ₹1,00,000",
      "100k-250k": "₹1,00,000 – ₹2,50,000",
      "250k-500k": "₹2,50,000 – ₹5,00,000",
      "500k+": "₹5,00,000+",
    };

    const htmlBody = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <style>
          body { font-family: 'Segoe UI', sans-serif; background: #F8FAFC; margin: 0; padding: 32px 0; }
          .card { background: #fff; max-width: 560px; margin: 0 auto; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(11,16,32,0.08); border: 1px solid #E2E8F0; }
          .header { background: linear-gradient(135deg, #0B1020 0%, #1E3A8A 100%); padding: 32px; }
          .logo { color: #fff; font-size: 22px; font-weight: 900; letter-spacing: -0.5px; }
          .logo span { color: #60A5FA; }
          .badge { margin-top: 12px; display: inline-block; background: rgba(96,165,250,0.15); color: #93C5FD; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; padding: 4px 12px; border-radius: 100px; }
          .body { padding: 32px; }
          .label { font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #94A3B8; margin-bottom: 4px; }
          .value { font-size: 15px; color: #0F172A; font-weight: 500; margin-bottom: 20px; }
          .message-box { background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 16px; font-size: 14px; color: #334155; line-height: 1.6; white-space: pre-wrap; }
          .divider { border: none; border-top: 1px solid #E2E8F0; margin: 24px 0; }
          .footer { padding: 20px 32px; background: #F8FAFC; border-top: 1px solid #E2E8F0; font-size: 12px; color: #94A3B8; text-align: center; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="header">
            <div class="logo">Netquora<span>X</span></div>
            <div class="badge">🔔 New Lead Inquiry</div>
          </div>
          <div class="body">
            <div class="label">Name</div>
            <div class="value">${name}</div>

            <div class="label">Email</div>
            <div class="value"><a href="mailto:${email}" style="color:#2563EB;text-decoration:none;">${email}</a></div>

            ${company ? `<div class="label">Company</div><div class="value">${company}</div>` : ""}

            <div class="label">Project Type</div>
            <div class="value">${projectLabel[projectType] || "Not specified"}</div>

            <div class="label">Budget Range</div>
            <div class="value">${budgetLabel[budget] || "Not specified"}</div>

            <hr class="divider" />

            <div class="label">Message</div>
            <div class="message-box">${message}</div>
          </div>
          <div class="footer">
            Received via netquorax.com contact form &mdash; reply directly to ${email}
          </div>
        </div>
      </body>
      </html>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "NetquoraX Leads <onboarding@resend.dev>",
        to: ["netquorax@gmail.com"],
        reply_to: email,
        subject: `🔔 New Lead: ${name}${company ? ` — ${company}` : ""} (${projectLabel[projectType] || "General Inquiry"})`,
        html: htmlBody,
      }),
    });

    if (!res.ok) {
      const errBody = await res.text();
      console.error("Resend API error:", errBody);
      return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 502 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
