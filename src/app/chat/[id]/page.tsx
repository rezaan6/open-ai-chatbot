import Chat from "@/components/Chat";
import ChatInput from "@/components/ChatInput";

interface ChatPageProps {
  params: { id: string };
}

const ChatPage: React.FC<ChatPageProps> = ({ params: { id } }) => (
  <div className="flex h-screen flex-col overflow-hidden">
    <Chat chatId={id} />

    <ChatInput chatId={id} />
  </div>
);

export default ChatPage;
