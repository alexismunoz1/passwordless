import type { NextApiRequest, NextApiResponse } from "next";
import { sendCode } from "lib/controller/auth";
import { headers } from "next.config";

export default async function (req: NextApiRequest, res: NextApiResponse) {
   if (req.method === "POST") {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type");
      res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Access-Control-Expose-Headers", "*");
      res.setHeader("Access-Control-Allow-Credentials", "true");
      res.setHeader("Access-Control-Max-Age", "1728000");
   }

   const result = await sendCode(req.body.email);
   res.send(result);
}
