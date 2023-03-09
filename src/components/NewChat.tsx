"use client";

import { PlusIcon } from "@heroicons/react/24/solid";
import { db } from "firebaseStore";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function NewChat() {
  const router = useRouter();
  const { data: session } = useSession();

  const createNewChat = async () => {
  
    const doc = await addDoc(
      collection(db, "user", session?.user?.email!, "chats"),
      {
        userId: session?.user?.email!,
        createdAt: serverTimestamp(),
      }
    );
  
   
    router.push(`/chat/${doc.id}`);
  };

  return (
    <div onClick={createNewChat} className="border-gray-700 border chatRow">
      <PlusIcon className="h-4 w-4" />
      <p> New Chat</p>
    </div>
  );
}
