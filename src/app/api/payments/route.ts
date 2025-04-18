import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const params = await req.json();

    const result = await fetch(
      `${process.env.PUBLIC_NEXT_SERVER_BASE_URL}/payments`,
      { method: "POST", body: JSON.stringify(params) }
    );

    const data = await result.json();
    return NextResponse.json(
      {
        success: true,
        data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error parsing request:", error);
    return NextResponse.json(
      { error: "Unable to process the request." },
      { status: 400 }
    );
  }
}
