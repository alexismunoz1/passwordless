import { NextApiRequest, NextApiResponse } from "next";

export default async function (req: NextApiRequest, res: NextApiResponse) {
   const { method } = req;

   if (method === "OPTIONS") {
       res.send({ ok: "options" });
   } else if (method === "GET") {
       res.send({ ok: "get" });
   } else if (method === "POST") {
       res.send({ ok: "post" });
   }
   res.send({ ok: "other" });
}
