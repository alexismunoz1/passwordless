import { NextApiRequest, NextApiResponse } from "next";

export default async function (req: NextApiRequest, res: NextApiResponse) {
   const { method } = req;

   if (method === "OPTIONS") {
      return res.status(200).send("ok options");
   } else if (method === "GET") {
      return res.status(200).send("ok get");
   } else if (method === "POST") {
      return res.status(200).send("ok post");
   } else {
      return res.status(200).send("ok other");
   }
}
