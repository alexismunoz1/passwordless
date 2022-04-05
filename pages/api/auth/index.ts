import type { NextApiRequest, NextApiResponse } from "next";
import { sendCode } from "lib/controller/auth";
import { headers } from "next.config";

export default async function (req: NextApiRequest, res: NextApiResponse) {
   const { email } = req.body;
   const code = await sendCode(email);
   res.setHeader("Content-Type", "application/json");
   res.setHeader("Access-Control-Allow-Origin", "*");
   res.setHeader("Access-Control-Allow-Headers", headers["Access-Control-Allow-Headers"]);
   res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
   res.setHeader("Access-Control-Max-Age", "3600");
   res.send({ code });
}
