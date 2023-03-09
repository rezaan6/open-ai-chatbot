"use client";

import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "firebaseStore";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { useEffect, useRef } from "react";
import Message from "./Message";

type Props = {
  chatId: string;
};

const Chat: React.FC<Props> = ({ chatId }) => {
  const { data: session } = useSession();

  const [messages] = useCollection(
    session
      ? // Create a query to get the messages collection, ordering by the `createdAt` field in ascending order
        query(
          collection(db, "user", session.user?.email!, "chats", chatId, "messages"),
          orderBy("createdAt", "asc")
        )
      : null
  );

  // Create a reference to the messages end element using the `useRef` hook
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Use the `useEffect` hook to scroll to the bottom of the messages list when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden">
      {/* Check if the messages collection is empty and render a message and icon if it is */}
      {messages?.empty && (
        <>
          <p className="mt-10 text-center text-white">Type a prompt in below to get started!</p>
          <ArrowDownCircleIcon className="h-10 w-10 mx-auto mt-5 text-white animate-bounce" />
        </>
      )}

      {messages?.docs.map((message) => (
        <Message key={message.id} message={message.data()} />
      ))}

      <div ref={messagesEndRef} />
    </div>
  );
};

export default Chat;
