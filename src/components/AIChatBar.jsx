import React, { useState } from 'react';
import toast from 'react-hot-toast';

export const AIChatBar = () => {
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
    <div className="h-[10rem] flex flex-row items-end">
      {/* Chatbox area */}
      <div className="h-[8rem] w-[90rem] border border-sky-300 align-middle ml-4 mb-4">
        <textarea
          className="h-full w-full border-sky-300 focus:border-sky-300 p-2"
          placeholder="Ask AI..."
        ></textarea>
      </div>

      {/* Ask AI button */}
      <div className="ml-2 flex items-end justify-end flex-col mb-4 p-1 rounded-lg border-2 border-sky-300">
        <button
          className="w-0 h-0 ml-1 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-l-[30px] border-l-sky-400 justify-end"
          onClick={ButtonFunction}
        ></button>
      </div>
    </div>
  );
};
