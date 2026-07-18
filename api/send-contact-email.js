import nodemailer from "nodemailer";

/**
 * Vercel serverless handler for Contact Us form emails.
 * Mirrors the production-proven SMTP settings from send-booking-email.js
 * (do not change booking). Contact-specific payload: name, email, contactPhone, message.
 */
export default async function handler(req, res) {
  const allowedOrigins = [
    "https://www.sundowntours.com",
    "https://sundowntours.com",
    "https://sun-down-tours.vercel.app",
    "http://localhost:4200",
  ];

  const origin = req.headers.origin;
  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  } else {
    // Same-origin browser calls may omit Origin; default to production site.
    res.setHeader("Access-Control-Allow-Origin", "https://www.sundowntours.com");
  }
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const body = req.body || {};
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const contactPhone =
      typeof body.contactPhone === "string" ? body.contactPhone.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!name || !email || !contactPhone || !message) {
      console.error("Contact email validation failed: missing required fields", {
        hasName: Boolean(name),
        hasEmail: Boolean(email),
        hasContactPhone: Boolean(contactPhone),
        hasMessage: Boolean(message),
      });
      return res.status(400).json({
        success: false,
        message: "Missing required fields: name, email, contactPhone, message",
      });
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Contact email misconfigured: EMAIL_USER / EMAIL_PASS not set");
      return res.status(500).json({
        success: false,
        message: "Email service is not configured",
      });
    }

    // Same SMTP settings as the working booking handler (port 587 + STARTTLS).
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const adminEmails = [
      "sundowntoursrilanka@gmail.com",
      "dilanlakshitha194@gmail.com",
      "shanikamadushani468@gmail.com",
    ];

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(contactPhone);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");

    // Must send FROM the authenticated mailbox (same pattern as booking).
    // replyTo lets staff answer the visitor directly.
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: adminEmails,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; color: #333;">
          <h2 style="color: #022d41;">Contact Form Submission</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>WhatsApp or contact number:</strong> ${safePhone}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        </div>
      `,
    });

    await transporter.sendMail({
      from: `"Sundown Tours" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `We received your message, ${name}`,
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; background: #f9f9f9; padding: 20px; color: #333;">
          <h2 style="color: #022d41;">Thank you for contacting us, ${safeName}!</h2>
          <p>We have received your message and will get back to you shortly.</p>
          <p><strong>Your message:</strong></p>
          <p>${safeMessage}</p>
          <p>Best regards,<br/>Sundown Tours Team</p>
        </div>
      `,
    });

    console.log("Contact emails sent successfully", {
      toAdmin: true,
      toCustomer: true,
      // no PII beyond boolean flags
    });

    return res.status(200).json({
      success: true,
      message: "Contact emails sent successfully",
    });
  } catch (error) {
    console.error("Contact email error:", {
      name: error?.name,
      code: error?.code,
      command: error?.command,
      responseCode: error?.responseCode,
      // Do not log credentials, full SMTP response bodies, or message content
    });

    return res.status(500).json({
      success: false,
      message: "Error sending contact email",
    });
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
