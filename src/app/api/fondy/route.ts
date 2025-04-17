import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log("Received a POST request:", req.url);

  try {
    const data = await req.json();
    console.log("Parsed data:", data);

    const orderId = data.order_id;
    const status = data.order_status;

    const redirectUrl = new URL(
      `/account?order_id=${orderId}&status=${status}`,
      req.url
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
