import { NextApiRequest, NextApiResponse } from "next";

export default async function (req: NextApiRequest, res: NextApiResponse) {
   const { method } = req;

   if (method === "OPTIONS") {
      return res.send({ ok: "options" });
   } else if (method === "GET") {
      return res.send({ ok: "get" });
   } else if (method === "POST") {
      return res.send({ ok: "post" });
   }
   return res.send({ ok: "other" });
}
