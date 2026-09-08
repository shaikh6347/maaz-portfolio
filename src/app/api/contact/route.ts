import { NextResponse } from "next/server";
import { inquirySchema } from "@/lib/contact";
import { sendEmailNotification, sendTelegramNotification } from "@/lib/notifications";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const raw = await request.json();
    const parsed = inquirySchema.safeParse(raw);

    if (!parsed.success) {
      return NextResponse.json({ error: "Please check the form fields and try again." }, { status: 400 });
    }

    if (parsed.data.website) {
      return NextResponse.json({ success: true });
    }

    const [email, telegram] = await Promise.allSettled([
      sendEmailNotification(parsed.data),
      sendTelegramNotification(parsed.data),
    ]);

    const emailOk = email.status === "fulfilled" && email.value.ok;
    const telegramOk = telegram.status === "fulfilled" && telegram.value.ok;
    const anyConfigured =
      (email.status === "fulfilled" && email.value.configured) ||
      (telegram.status === "fulfilled" && telegram.value.configured);

    if (anyConfigured && !emailOk && !telegramOk) {
      return NextResponse.json(
        { error: "The inquiry was received, but the notification services failed. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({
      success: true,
      notifications: { email: emailOk, telegram: telegramOk },
    });
  } catch {
    return NextResponse.json({ error: "Unable to submit the inquiry right now." }, { status: 500 });
  }
}
