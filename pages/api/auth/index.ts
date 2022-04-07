import type { NextApiRequest, NextApiResponse } from "next";
import { sendCode } from "lib/controller/auth";

export default async function (req: NextApiRequest, res: NextApiResponse) {
   await sendCode(req.body.email);
   res.status(200).send({ message: "Codigo enviado" });
}
