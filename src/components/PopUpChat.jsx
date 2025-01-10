import React from "react";

export const PopUpChat = ({ chat, onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"
        onClick={onClose} // Close the popup when clicking the overlay
      ></div>

      {/* Popup Content */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded shadow-lg z-20 w-3/4 max-w-lg">
        <h2 className="text-lg font-bold text-sky-400 mb-4">Chat Details</h2>
        <p><strong>Name:</strong> {chat.userName}</p>
        <p><strong>Current Status:</strong> {chat.currentStatus}</p>
        <p><strong>Rating Given by User:</strong> {chat.ratingGivenByUser}</p>
        <p><strong>AI Analysis:</strong> {chat.AIAnalysis}</p>
        <p><strong>Constructive Feedback:</strong> {chat.constructiveFeedback}</p>

        {/* Chat Messages */}
        <h3 className="text-lg font-semibold mt-4">Chat Messages:</h3>
        {chat.chatMessages?.map((message, index) => (
          <div key={index} className="mb-2">
            <p>
              <strong>{message.sender}:</strong> {message.message}
            </p>
            <p className="text-xs text-gray-500">{message.timestamp}</p>
          </div>
        ))}

        {/* Close Button */}
        <button
          onClick={onClose}
          className="mt-4 bg-sky-400 text-white px-4 py-2 rounded hover:bg-sky-500"
        >
          Close
        </button>
      </div>
    </>
  );
};
