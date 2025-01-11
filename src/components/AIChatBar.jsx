import React, { useState } from 'react';
import toast from 'react-hot-toast';

export const AIChatBar = () => {
  const [buttonPressed, setButtonPressed] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [aiResponse, setAiResponse] = useState('');

  const API_KEY = 'AIzaSyBdZLqtBMbt7dFO5hawNU0NAsj2LFkw5Xw'; // Replaced API key
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

  const ButtonFunction = async () => {
    setButtonPressed(true);
    setAiResponse(''); // Clear previous response

    // Add instruction to provide a one-liner assertive solution
    const modifiedUserInput = userInput + "u are trained on e-commerce company's rules and regulation,this is a client's problem tell me one liner specific solution that customer executive will tell to client";

    const requestBody = {
      contents: [
        {
          parts: [{ text: modifiedUserInput }], // Use the modified input here
        },
      ],
    };

    toast
      .promise(
        fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => {
            if (
              data.candidates &&
              data.candidates.length > 0 &&
              data.candidates[0].content &&
              data.candidates[0].content.parts &&
              data.candidates[0].content.parts.length > 0
            ) {
              setAiResponse(data.candidates[0].content.parts[0].text);
            } else {
              throw new Error('Invalid response format');
            }
          }),
        {
          loading: 'AI is processing...',
          success: 'AI answered!',
          error: 'Something went wrong!',
        }
      )
      .finally(() => {
        setButtonPressed(false);
      });
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div className="h-[10rem] flex flex-row items-end">
      {/* Chatbox area */}
      <div className="h-[8rem] w-[90rem] border border-sky-300 align-middle ml-4 mb-4 flex flex-col gap-2">
  <div className="h-1/2 w-full p-2 overflow-y-auto border-sky-300 border-2 text-sky-400">
    {aiResponse}
  </div>
  <textarea
    className="h-1/2 w-full border border-sky-300 p-2 text-sky-400"
    placeholder="Ask AI..."
    value={userInput}
    onChange={handleInputChange}
  ></textarea>
</div>

      {/* Ask AI button */}
      <div className="ml-2 flex items-end justify-end flex-col mb-4 p-1 rounded-lg border-2 border-sky-300">
        <button
          className="w-0 h-0 ml-1 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-l-[30px] border-l-sky-400 justify-end"
          onClick={ButtonFunction}
          disabled={buttonPressed}
        ></button>
      </div>
    </div>
  );
};