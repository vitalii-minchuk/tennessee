import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();
    const botToken = process.env.TG_BOT_TOKEN;
    const chatId = process.env.TG_CHAT_ID;
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const body = {
      chat_id: chatId,
      text,
      parse_mode: "Markdown",
    };

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid request",
        error: (error as Error).message,
      },
      { status: 400 }
    );
  }
}
