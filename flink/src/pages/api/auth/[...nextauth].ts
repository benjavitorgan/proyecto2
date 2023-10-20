import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { UserType } from ".prisma/client";
import { GetServerSidePropsContext } from "next";
import {
  getServerSession,
  NextAuthOptions,
  DefaultSession, User,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "~/server/db";
import bcrypt from "bcrypt";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { name, email, password, method, role, dni, phoneNumber, sickness, bloodType, age} = credentials as {
          name: string;
          email: string;
          password: string;
          method: string;
          role: UserType;
          dni: string;
          phoneNumber: string;
          sickness: string;
          bloodType: string;
          age: string;
        }

        console.log(credentials);

        const existingUser = await prisma.user.findUnique({
          where: {
            email
          }, 
          
        }); 

        if (method === "signUp") {
          if (existingUser) {
            throw new Error('Este email ya esta registrado');
          }

          const salt = await bcrypt.genSalt();
          const hashedPassword = await bcrypt.hash(password, salt);

          
           const newUser = await prisma.user.create({
             data: {
              name,
              email,
              password: hashedPassword,
              dni,
              phoneNumber,
              role,
              sickness,
              bloodType,
              age
             },
           });
          console.log("ACA" + newUser);

          return newUser;
        }

        if (!existingUser) {
          throw new Error('Este email no esta registrado');
        }

        const { password: hashedPassword } = existingUser as {
          password: string;
        }

        const validatedPassword = await bcrypt.compare(password, hashedPassword);

        if (!validatedPassword) {
          throw new Error('Contraseña Incorrecta');
        }
        return existingUser;

      }
    })
  ],
  pages: {
    signIn: "/auth",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.JWT_SECRET,
  callbacks: {
    session: ({ session, token }) => {
      if (session.user && token.sub) {
        session.user.id = token.sub;
      }
      console.log("SESSION");
      return session;
    },
  },
};

export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};

export default NextAuth(authOptions);