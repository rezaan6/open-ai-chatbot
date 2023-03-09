import { useEffect, useState } from "react";
import Link from "next/link";
import { useCollection } from "react-firebase-hooks/firestore";
import toast from "react-hot-toast";
import { useRouter,usePathname } from "next/navigation";
import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline";
import { deleteDoc, doc, collection } from "firebase/firestore";
import { db } from "firebaseStore";
import { useSession } from "next-auth/react";

interface Props {
  id: string;
}

const ChatRow: React.FC<Props> = ({ id }) => {
  const { data: session } = useSession();
  const [active, setActive] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  // Get messages collection for the given chat
  const [messages, messagesLoading, messagesError] = useCollection(
    collection(db, "user", session?.user?.email!, "chats", id, "messages")
  );

  useEffect(() => {
    // Set active state based on whether this chat is currently selected in the UI

    if (!pathname) return;
    setActive(pathname.includes(id));
  }, [id, pathname]);

  // Delete chat from the database
  const removeChat = async () => {
    try {
      await deleteDoc(doc(db, "user", session?.user?.email!, "chats", id));
      router.replace("/");
      // Show success notification to the user
      toast.success("Chat deleted successfully.");
    } catch (error) {
      // Show error notification to the user
      toast.error("Failed to delete chat.");
      console.error(error);
    }
  };

  return (
    <Link href={`chat/${id}`} className={`chatRow justify-center ${active && "bg-gray-700/50"}`}>
      <ChatBubbleLeftIcon className="h-5 w-5" />
      {/* Display last message in the chat, or "New Chat" if there are no messages */}
      <p className="flex-1 hidden md:inline-flex truncate">
        {messagesError
          ? "Error loading messages"
          : messagesLoading
          ? "Loading messages..."
          : messages?.docs.length
          ? messages?.docs[messages?.docs.length - 1]?.data().text
          : "New Chat"}
      </p>
      {/* Delete button */}
      <TrashIcon onClick={removeChat} className="h-5 w-5 text-gray-700 hover:text-red-700" />
    </Link>
  );
};

export default ChatRow;
