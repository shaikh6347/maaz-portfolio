import { Resend } from "resend";
import type { Inquiry } from "@/lib/contact";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

/**
 * Send contact inquiry by email using Resend
 */
export async function sendEmailNotification(inquiry: Inquiry) {
  const apiKey = process.env.RESEND_API_KEY;
  const notificationEmail = process.env.CONTACT_NOTIFICATION_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  // Safe environment check.
  // Never prints the actual API key.
  console.log("RESEND ENV CHECK:", {
    hasApiKey: Boolean(apiKey),
    hasNotificationEmail: Boolean(notificationEmail),
    hasFromEmail: Boolean(fromEmail),
  });

  // Check required Resend configuration
  if (!apiKey || !notificationEmail || !fromEmail) {
    console.warn("Resend email notification is not configured.");

    return {
      configured: false,
      ok: false,
    };
  }

  try {
    const resend = new Resend(apiKey);

    const html = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>New Portfolio Inquiry</title>
        </head>

        <body
          style="
            margin: 0;
            padding: 30px;
            background: #f5f5f5;
            font-family: Arial, Helvetica, sans-serif;
            color: #111111;
          "
        >
          <div
            style="
              max-width: 650px;
              margin: 0 auto;
              background: #ffffff;
              border-radius: 16px;
              padding: 30px;
              border: 1px solid #e5e5e5;
            "
          >
            <h2
              style="
                margin: 0 0 24px;
                font-size: 24px;
                color: #111111;
              "
            >
              New Portfolio Inquiry
            </h2>

            <p>
              <strong>Name:</strong>
              ${escapeHtml(inquiry.name)}
            </p>

            <p>
              <strong>Email:</strong>
              ${escapeHtml(inquiry.email)}
            </p>

            <p>
              <strong>Phone:</strong>
              ${escapeHtml(inquiry.phone || "Not provided")}
            </p>

            <p>
              <strong>Inquiry Type:</strong>
              ${escapeHtml(inquiry.inquiryType)}
            </p>

            <p>
              <strong>Subject:</strong>
              ${escapeHtml(inquiry.subject)}
            </p>

            <div style="margin-top: 24px;">
              <strong>Message:</strong>

              <div
                style="
                  margin-top: 10px;
                  padding: 16px;
                  background: #f7f7f7;
                  border-radius: 10px;
                  line-height: 1.7;
                "
              >
                ${escapeHtml(inquiry.message).replaceAll("\n", "<br />")}
              </div>
            </div>

            <div
              style="
                margin-top: 24px;
                padding-top: 16px;
                border-top: 1px solid #eeeeee;
                color: #777777;
                font-size: 13px;
              "
            >
              Received:
              ${new Date().toISOString()}
            </div>
          </div>
        </body>
      </html>
    `;

    const result = await resend.emails.send({
      from: fromEmail,
      to: [notificationEmail],
      replyTo: inquiry.email,
      subject: `New Portfolio Inquiry — ${inquiry.subject}`,
      html,
    });

    // Shows Resend response without exposing API key
    console.log("RESEND RESULT:", result);

    if (result.error) {
      console.error("RESEND EMAIL ERROR:", result.error);

      return {
        configured: true,
        ok: false,
      };
    }

    console.log("Portfolio inquiry email sent successfully.");

    return {
      configured: true,
      ok: true,
    };
  } catch (error) {
    console.error("RESEND EXCEPTION:", error);

    return {
      configured: true,
      ok: false,
    };
  }
}

/**
 * Send contact inquiry to Telegram
 *
 * Telegram is optional.
 */
export async function sendTelegramNotification(inquiry: Inquiry) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  // Telegram is optional
  if (!botToken || !chatId) {
    console.log("Telegram notification is not configured.");

    return {
      configured: false,
      ok: false,
    };
  }

  try {
    const text = [
      "🔔 New Portfolio Inquiry",
      "",
      `Name: ${inquiry.name}`,
      `Email: ${inquiry.email}`,
      `Phone: ${inquiry.phone || "Not provided"}`,
      `Type: ${inquiry.inquiryType}`,
      `Subject: ${inquiry.subject}`,
      "",
      "Message:",
      inquiry.message,
    ].join("\n");

    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text,
        }),
        cache: "no-store",
      },
    );

    const result = await response.json();

    console.log("TELEGRAM RESULT:", result);

    if (!response.ok || !result.ok) {
      console.error("TELEGRAM ERROR:", result);

      return {
        configured: true,
        ok: false,
      };
    }

    console.log(
      "Portfolio inquiry Telegram notification sent successfully.",
    );

    return {
      configured: true,
      ok: true,
    };
  } catch (error) {
    console.error("TELEGRAM EXCEPTION:", error);

    return {
      configured: true,
      ok: false,
    };
  }}