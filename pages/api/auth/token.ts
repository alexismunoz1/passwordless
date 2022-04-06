import type { NextApiRequest, NextApiResponse } from "next";
import { generate } from "lib/jwt";
import { Auth } from "lib/auth";

export default async function (req: NextApiRequest, res: NextApiResponse) {
   const { method } = req;

   if (method === "OPTIONS") {
      return res.status(200).send("ok");
   }

   const auth = await Auth.findByEmailAndCode(req.body.email, req.body.code);
   if (!auth) {
      res.status(401).send({
         message: "email y code incorrectos",
      });
   }

   const expires = auth.isCodeExpired();
   if (expires) {
      res.status(401).send({
         message: "code expired",
      });
   }
   const token = generate({ userId: auth.data.userId });
   if (token) {
      res.status(200).send({ message: "hay token" });
   } else {
      res.status(401).send({
         message: "no hay token",
      });
   }
}
