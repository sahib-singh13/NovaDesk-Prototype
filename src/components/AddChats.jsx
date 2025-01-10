import React from 'react';
import data from "../data/chatData.json";

const AddChats = () => {
  return (
    <div className="h-[30rem] overflow-y-scroll border border-sky-300 p-4 scrollbar-hide">
      {data.ChatData.map((chat, index) => (
        <div key={chat.id} className="mb-6 text-sky-400 border-b-2 border-sky-300 ml-4">
          <h3 className="text-lg font-semibold mb-2">Chat #{chat.id}</h3>
          <p className="mb-1"><strong>Name:</strong> {chat.userName}</p>
          <p className="mb-1"><strong>Current Status:</strong> {chat.currentStatus}</p>
          <p className="mb-1"><strong>Rating Given by User:</strong> {chat.ratingGivenByUser}</p>
          <p className="mb-1"><strong>AI Analysis:</strong> {chat.AIAnalysis}</p>
          <p className="mb-3"><strong>Constructive Feedback:</strong> {chat.constructiveFeedback}</p>
        </div>
      ))}
    </div>
  );
};

export default AddChats;
