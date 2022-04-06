import type { NextApiRequest, NextApiResponse } from "next";
import { sendCode } from "lib/controller/auth";

export default async function (req: NextApiRequest, res: NextApiResponse) {
   const { method } = req;
   const result = await sendCode(req.body.email);

   if (method === "OPTIONS") {
      return res.status(200).send(result);
   }
}
