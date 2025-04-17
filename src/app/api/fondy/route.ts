import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.formData();

  const orderStatus = body.get("order_status");
  const orderId = body.get("order_id");

  return NextResponse.redirect(
    new URL(`/account?order_id=${orderId}&status=${orderStatus}`, req.url),
    307
  );
}
