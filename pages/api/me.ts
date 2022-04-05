import type { NextApiRequest, NextApiResponse } from "next";
import { authMiddleware } from "lib/middlewares";
import { User } from "lib/user";
import { headers } from "next.config";

async function handler(req: NextApiRequest, res: NextApiResponse, token) {
   await headers();
   const user = new User(token.userId);
   await user.pull();
   res.send(user.data);
}

export default authMiddleware(handler);
