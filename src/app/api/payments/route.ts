import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const params = await req.json();

    const backendUrl = `${process.env.PUBLIC_NEXT_SERVER_BASE_URL}/payments`;

    const result = await fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });

    if (!result.ok) {
      console.error("Backend error", await result.text());
      return NextResponse.json(
        { success: false, error: "Payment failed" },
        { status: result.status }
      );
    }

    const data = await result.json();

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Error parsing request:", error);
    return NextResponse.json(
      { success: false, error: "Unable to process the request." },
      { status: 400 }
    );
  }
}
