import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import userModel, { UserInterface } from "@/lib/db/models/userModel";
import { Session } from "inspector";
import { JWT } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { connectDB } from "@/lib/db/db";

import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "../db/MongoDbClient";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: {
          label: "email",
          type: "text",
          placeholder: "ایمیل خود را وارد کنید",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        await connectDB();

        const findedUser = await userModel
          .findOne({ email: credentials?.email })
          .select("+password");
        if (!findedUser) throw new Error("NATIONALCODE_NOT_FOUND");

        const successCompare = await bcrypt.compare(
          credentials?.password!,
          findedUser.password
        );
        if (!successCompare) throw new Error("CREDENTIALS_MATCH_ERROR");

        return {
          id: findedUser._id,
          name: findedUser.name,
          email: findedUser.email,
          role: findedUser.role,
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    newUser: "/auth/signup",
  },

  adapter: MongoDBAdapter(clientPromise, {
    collections: {
      Accounts: "account",
      Sessions: "session",
      Users: "user",
      VerificationTokens: "token",
    },
  }),
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      if (user) {
        return true;
      } else {
        return false;
      }
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.national_code = user.national_code;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
        session.user.national_code = token.national_code as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
};
