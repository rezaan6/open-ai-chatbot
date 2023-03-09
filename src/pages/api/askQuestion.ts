// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";
import admin from "firebase-admin";
import { Messages } from "typings";
import { adminDB } from "firebaseStoreAdmin";
import query from "@/lib/queryApi";
// import { collection } from "@firebase/firestore";
// import { addDoc } from "firebase/firestore";

type Data = {
  answer: string;
  mistake?: any;
  adminFirebaseResponse?: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { prompt, chatId, model, session } = req.body;

  if (!prompt) return res.status(400).json({ answer: "Please provide a prompt!" });
  if (!chatId) return res.status(400).json({ answer: "Please provide a valid chat Id!" });

  try {
    const response = await query(prompt, chatId, model);

    const message: Messages = {
      text: response || "OpenAI was unable to find an answer for that!",
      createdAt: admin.firestore.Timestamp.now(),
      user: {
        _id: "OpenAI",
        name: "OpenAI",
        avatar: "/openAI.png",
      },
    };

    await adminDB
      .collection("user")
      .doc(session?.user?.email!)
      .collection("chats")
      .doc(chatId)
      .collection("messages")
      .add(message);

    res.status(200).json({ answer: message.text });
  } catch (error: any) {
    res.status(500).json({ answer: "An error occured", mistake: error.message });
  }
}
