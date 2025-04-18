import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const params = Object.fromEntries(url.searchParams.entries());

    const search = params?.search;

    const result = await fetch(
      `${process.env.PUBLIC_NEXT_SERVER_BASE_URL}/nova-post/settlements?search=${search}`
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
    console.log(error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
