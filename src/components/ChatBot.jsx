import React, { useState } from "react";
import "./bounce.css";
import toast from "react-hot-toast";

export const ChatBot = () => {
  const [onButton, setOnButton] = useState(false);

  // Function to close the popup
  const closePopup = () => {
    setOnButton(false);
  };

  const [buttonPressed, setButtonPressed] = useState(false);

  const ButtonFunction = () => {
    setButtonPressed(true);
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 2000)), // Simulate processing
      {
        loading: 'AI is processing...',
        success: 'AI answered!',
        error: 'Something went wrong!',
      }
    );

    // Reset button state after 2 seconds
    setTimeout(() => {
      setButtonPressed(false);
    }, 2000);
  };

  return (
    <div>
      {/* Chatbot Button */}
      <div className="w-20 h-20 absolute bottom-3/4 right-16 border-2 border-sky-300 rounded-full p-2 animation-bounce">
        <button
          onClick={() => {
            setOnButton(true); 
          }}
        >
          <img src="/chatbot-icon.png" alt="Chatbot Icon" />
        </button>
      </div>

      {/* Popup Chat Window */}
      {onButton && (
        <div>
          {/* Overlay */}
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"
            onClick={closePopup} 
          ></div>

          {/* Popup Content */}
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded shadow-lg z-20  max-w-lg
          w-[30rem] h-[30rem] flex flex-col">
            <div className="flex flex-row justify-between">
            <h3 className="text-lg font-bold mb-5 text-sky-300">Chatbot</h3>
            <button className="mb-9 items-end mr-2 text-sky-400 border-sky-400 p-1
            border-2 rounded-full"
            onClick={closePopup}>X</button>
            </div>
           
            <textarea
            className="h-[20rem] border border-sky-300 focus:border-sky-400 p-2"
            placeholder="Ask Your Query here"
            >

            </textarea>

            <button className="bg-sky-400 text-white w-[10rem] p-2 rounded-lg
            mt-4 ml-[8rem]"
            onClick={ButtonFunction}>Generate</button>
            

            {/* Close Button */}

          
          
          </div>
        </div>
      )}
    </div>
  );
};
