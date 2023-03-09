import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import { adminDB } from "firebaseStoreAdmin";
import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";
import { db } from "firebaseStore";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    // ...add more providers here
  ],

  adapter: FirestoreAdapter({
    firestore: adminDB,
  }),

};

export default NextAuth(authOptions);
