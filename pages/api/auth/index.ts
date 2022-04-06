import type { NextApiRequest, NextApiResponse } from "next";
import { sendCode } from "lib/controller/auth";

export default async function (req: NextApiRequest, res: NextApiResponse) {
   const { method } = req;

   if (method === "OPTIONS") {
      return res.status(200).send("ok");
   }

   await sendCode(req.body.email);
   res.status(200).send({ message: "se envio el mail" });
}
