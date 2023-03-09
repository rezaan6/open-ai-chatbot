"use client";

import { useState, FormEvent } from "react";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import toast from "react-hot-toast";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "firebaseStore";
import ModelSelection from "./ModelSelection";
import { Messages } from "typings";

interface Props {
  chatId: string;
}

const ChatInput: React.FC<Props> = ({ chatId }) => {
  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();
  const { data: model } = useSWR<string>("model", {
    fallbackData: "text-davinci-003",
  });

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!prompt || !session) {
      return;
    }

    const input = prompt.trim();
    setPrompt("");

    const messages: Messages = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session.user?.email!,
        name: session.user?.name!,
        avatar:
          session.user?.image ??
          `https://ui-avatars.com/api/?name=${session.user?.name}`,
      },
    };

    try {
      await addDoc(
        collection(
          db,
          "user",
          session.user?.email!,
          "chats",
          chatId,
          "messages"
        ),
        messages
      );

      const notification = toast.loading("OpenAI is thinking...");

      const response = await fetch(`${window.location.origin}/api/askQuestion`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input, chatId, model, session }),
      });

      if (response.ok) {
        toast.success("OpenAI has responded!", { id: notification });
      } else {
        toast.error("Failed to get a response from OpenAI.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      toast.error("An error occurred while sending the message.");
    }
  };

  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm">
      <form onSubmit={sendMessage} className="p-5 space-x-5 flex">
        <input
          className="bg-transparent flex-1 focus:outline-none disabled:cursor-not-allowed disabled:tex-gray-300"
          disabled={!session}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          type="text"
          placeholder="Type your message here..."
        />
        <button
          disabled={!prompt || !session}
          type="submit"
          className="bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          <PaperAirplaneIcon className="w-4 h-4 -rotate-45 " />
        </button>
      </form>

      <div className="md:hidden ">
        {/* ModelSelection */}
        <ModelSelection />
      </div>
    </div>
  );
};

export default ChatInput;