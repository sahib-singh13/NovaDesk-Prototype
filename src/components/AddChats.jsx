import React, { useState } from "react";
import data from "../data/chatData.json";
import { PopUpChat } from "./PopUpChat";

const AddChats = () => {
  const [selectedChat, setSelectedChat] = useState(null); // State to track the selected chat for the popup

  return (
    <div className="h-[40rem] overflow-y-scroll border border-sky-300 p-4 scrollbar-hide">
      {data.ChatData.map((chat) => (
        <div key={chat.id} className="mb-6 text-sky-400 border-b-2 border-sky-300 ml-4">
          <h3 className="text-lg font-semibold mb-2">Chat #{chat.id}</h3>
          <p className="mb-1">
            <strong>Name:</strong> {chat.userName}
          </p>
          <p className="mb-1">
            <strong>Current Status:</strong> {chat.currentStatus}
          </p>
          <p className="mb-1">
            <strong>Rating Given by User:</strong> {chat.ratingGivenByUser}
          </p>
          <p className="mb-1">
            <strong>AI Analysis:</strong> {chat.AIAnalysis}
          </p>
          <p className="mb-3">
            <strong>Constructive Feedback:</strong> {chat.constructiveFeedback}
          </p>
          <button
            className="mb-6 bg-sky-400 p-2 text-white rounded-lg"
            onClick={() => setSelectedChat(chat)}
          >
            Read Conversation
          </button>
        </div>
      ))}

      {/* Conditionally render PopUpChat */}
      {selectedChat && (
        <PopUpChat chat={selectedChat} onClose={() => setSelectedChat(null)} />
      )}
    </div>
  );
};

export default AddChats;
