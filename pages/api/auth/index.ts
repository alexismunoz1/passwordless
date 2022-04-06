import type { NextApiRequest, NextApiResponse } from "next";
import { sendCode } from "lib/controller/auth";

export default async function (req: NextApiRequest, res: NextApiResponse) {
   const { method } = req;
   const result = await sendCode(req.body.email);

   if (method === "OPTIONS") {
      return res.send({ ok: "options" });
   }

   // if (method === "POST") {
   //    return res.send({ ok: "post" });
   // }

   if (result) {
      res.send([{ ok: "other" }, { result }]);
   } else {
      res.status(500).send({ ok: "todo salio mal" });
   }
}
