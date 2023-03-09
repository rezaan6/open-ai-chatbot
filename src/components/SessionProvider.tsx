"use client";

import { Session } from "next-auth";
import { SessionProvider as Provider } from "next-auth/react";

interface Props {
  children: React.ReactNode;
  session: Session | null;
}

const SessionProvider = ({ children, session }: Props) => {
  // Wrap the children with the NextAuth session provider
  return <Provider session={session}>{children}</Provider>;
};

export default SessionProvider;
