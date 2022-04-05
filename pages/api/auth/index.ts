import type { NextApiRequest, NextApiResponse } from "next";
import { sendCode } from "lib/controller/auth";
import { headers } from "next.config";

export default async function (req: NextApiRequest, res: NextApiResponse) {
   const result = await sendCode(req.body.email);
   res.send(result);
}
