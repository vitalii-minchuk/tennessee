import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const bodyText = await req.text();
    const params = new URLSearchParams(bodyText);

    const orderId = params.get("order_id");
    const status = params.get("order_status");

    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "https://tennessee-omega.vercel.app";
    const redirectUrl = new URL(
      `/account?order_id=${orderId}&status=${status}`,
      baseUrl
    );

    return NextResponse.redirect(redirectUrl, 303);
  } catch (error) {
    console.error("Error parsing request:", error);
    return NextResponse.json(
      { error: "Unable to process the request." },
      { status: 400 }
    );
  }
}
