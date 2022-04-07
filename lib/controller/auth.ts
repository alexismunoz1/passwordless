import { Auth } from "lib/auth";
import { User } from "lib/user";
import gen from "random-seed";
import addMinutes from "date-fns/addMinutes";
import { sendEmail } from "lib/sendgrid";

var random = gen.create(process.env.SEED);

export async function findOrCreateAuth(email: string): Promise<Auth> {
   const cleanEmail = email.trim().toLowerCase();
   const auth = await Auth.findByEmail(cleanEmail);

   if (auth) {
      return auth;
   } else {
      const newUser = await User.createNewUser({
         email: cleanEmail,
      });

      const newAuth = await Auth.createNewAuth({
         email: cleanEmail,
         userId: newUser.id,
         code: "",
         expires: new Date(),
      });

      return newAuth;
   }
}

export async function sendCode(email: string) {
   const auth = await findOrCreateAuth(email);

   const code = random.intBetween(10000, 99999);
   auth.data.code = code.toString();

   const now = new Date();
   const expires = addMinutes(now, 5);
   auth.data.expires = expires;

   await auth.push();
   await sendEmail(email, auth.data.code);
   return true;
}
