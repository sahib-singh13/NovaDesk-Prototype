import React from 'react';
import "./bounce.css"

export const ChatBot = () => {
  return (
    <div className="w-20 h-20 absolute bottom-3/4 right-16 border-2 border-sky-300 rounded-full p-2 animation-bounce">
      <button>
        <img src="/chatbot-icon.png" alt="Chatbot Icon" />
      </button>
    </div>
  );
};
