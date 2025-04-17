import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log(body);
    redirect(`/success?data=${body?.payment_id}`);
    return NextResponse.json({ success: true }, { status: 200 });
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
