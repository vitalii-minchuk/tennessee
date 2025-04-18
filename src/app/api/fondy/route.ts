import { NextResponse } from "next/server";

export async function POST() {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "https://tennessee-omega.vercel.app";
    const redirectUrl = new URL(`/thank-you`, baseUrl);

    return NextResponse.redirect(redirectUrl, 303);
  } catch (error) {
    console.error("Error parsing request:", error);
    return NextResponse.json(
      { error: "Unable to process the request." },
      { status: 400 }
    );
  }
}
