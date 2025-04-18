import { NextResponse } from "next/server";
import crypto from "node:crypto";

export async function POST(req: Request) {
  try {
    const bodyText = await req.text();
    const params = new URLSearchParams(bodyText);

    const buildSignature = (
      params: URLSearchParams,
      password: string
    ): string => {
      const sortedKeys = Array.from(params.keys())
        .sort()
        .filter(
          (el) =>
            el !== "" &&
            el !== "response_signature_string" &&
            el !== "signature"
        );
      const concatenatedValues = sortedKeys
        .map((key) => params.get(key))
        .join("|");

      // Create the signature string, starting with the password
      const signatureString = `${password}|${concatenatedValues}`;

      // Return the SHA1 hash of the concatenated string
      return crypto.createHash("sha1").update(signatureString).digest("hex");
    };

    const signature = buildSignature(params, "test");

    // const responseSignatureString = params.get("response_signature_string");
    console.log(signature, params);
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
