import React from "react";
import ChatForm from "@/app/components/Chat";
import UserCard from "@/app/components/UserCard";

const ChatPage = () => {
  return (
    <div className="flex p-8 flex-row bg-neutral-100 h-full shadow-md">
		<div className="w-1/2">
			<p className="font-bold text-3xl">Chats</p>
			<div className="flex flex-col bg-white w-1/2 h-full overflow-auto">
				<UserCard />
				<UserCard />
				<UserCard />
				<UserCard />
				<UserCard />
				<UserCard />
				<UserCard />
				<UserCard />
				<UserCard />
			</div>
		</div>
		<ChatForm />
    </div>
  );
};

export default ChatPage;
