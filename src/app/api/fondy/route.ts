import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { order_status, order_id } = req.body;

    return res.redirect(
      307,
      `/account?order_id=${order_id}&status=${order_status}`
    );
  }

  res.status(405).end();
}
