import { DocumentData } from "firebase/firestore";
import Image from "next/image";
import React from "react";

type Prop = {
  message: DocumentData;
};

const Message: React.FC<Prop> = ({ message }) => {
  // Check if the message is sent by OpenAI
  const isOpenAI = message.user.name === "OpenAI";

  return (
    <div className={`py-5 text-white ${isOpenAI && "bg-[#434654]"}`}>
      <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
        {/* User avatar */}
        <Image
          src={message.user.avatar}
          alt="avatar"
          width={32}
          height={32}
          style={{ objectFit: "contain" }}
        />
        {/* Message text */}
        <p className="pt-1 text-sm">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
