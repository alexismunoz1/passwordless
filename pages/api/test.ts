import { NextApiRequest, NextApiResponse } from "next";
import { headers } from "next.config";

export default async function (req: NextApiRequest, res: NextApiResponse) {
   await headers();
   res.send({ ok: true });
}
