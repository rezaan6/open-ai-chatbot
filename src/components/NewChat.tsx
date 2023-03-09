"use client";

import { PlusIcon } from "@heroicons/react/24/solid";
import { db } from "firebaseStore";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const NewChat = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const createNewChat = async () => {
    // Make sure the user is logged in
    if (!session || !session.user || !session.user.email) {
      return;
    }

    // Add a new chat document to the user's chats collection
    const doc = await addDoc(
      collection(db, "user", session.user.email, "chats"),
      {
        userId: session.user.email,
        createdAt: serverTimestamp(),
      }
    );

    // Navigate to the chat page
    router.push(`/chat/${doc.id}`);
  };

  return (
    <div onClick={createNewChat} className="border-gray-700 border chatRow">
      <PlusIcon className="h-4 w-4" />
      <p> New Chat</p>
    </div>
  );
};

export default NewChat;
