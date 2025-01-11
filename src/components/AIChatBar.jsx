import React, { useState } from 'react';
import toast from 'react-hot-toast';

export const AIChatBar = () => {
  const [buttonPressed, setButtonPressed] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [aiResponse, setAiResponse] = useState('');

  const API_KEY = 'AIzaSyBdZLqtBMbt7dFO5hawNU0NAsj2LFkw5Xw'; // Replace with your actual API key
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;

  const ButtonFunction = async () => {
    if (!userInput.trim()) {
      toast.error('Please enter a query!');
      return;
    }

    setButtonPressed(true);
    setAiResponse(''); // Clear previous response

    // Add instruction to provide a one-liner assertive solution
    const modifiedUserInput =
      userInput +
      " You are trained on e-commerce company's rules and regulations. This is a client's problem; provide a one-liner specific solution that the customer executive can tell the client.";

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
          .then(async (response) => {
            if (!response.ok) {
              const errorData = await response.json();
              console.error('API Error:', errorData);
              throw new Error(
                `Network response was not ok: ${response.status} - ${response.statusText}`
              );
            }
            return response.json();
          })
          .then((data) => {
            console.log('API Response:', data);
            const generatedText =
              data.candidates?.[0]?.content?.parts?.[0]?.text ||
              'No response from AI.';
            setAiResponse(generatedText);
          }),
        {
          loading: 'AI is processing...',
          success: 'AI answered!',
          error: (err) => `Something went wrong: ${err.message}`,
        }
      )
      .finally(() => {
        setButtonPressed(false);
      });
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  // Handle Enter key press
  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault(); // Prevent adding a new line
      ButtonFunction();
    }
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
          onKeyPress={handleKeyPress} // Add the onKeyPress event handler
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