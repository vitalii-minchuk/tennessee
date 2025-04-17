import { NextResponse } from "next/server";

export async function POST() {
  try {
    const redirectUrl = new URL(
      `/account`,
      "https://tennessee-omega.vercel.app"
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
