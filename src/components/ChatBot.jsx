import React, { useState } from "react";
import "./bounce.css";
import toast from "react-hot-toast";

export const ChatBot = () => {
  const [onButton, setOnButton] = useState(false);
  const [buttonPressed, setButtonPressed] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [aiResponse, setAiResponse] = useState("");

  const API_KEY = 'AIzaSyBdZLqtBMbt7dFO5hawNU0NAsj2LFkw5Xw'; // Replace with your actual API key
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;

  // Function to close the popup
  const closePopup = () => {
    setOnButton(false);
    setUserInput(""); // Clear input when closing
    setAiResponse(""); // Clear response when closing
  };

  // Handle input change
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  // Handle Enter key press
  const handleKeyPress = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      // Trigger the API call only if Enter is pressed without Shift
      event.preventDefault(); // Prevent adding a new line
      ButtonFunction();
    }
  };

  const ButtonFunction = async () => {
    if (!userInput.trim()) {
      toast.error("Please enter a query!");
      return;
    }

    setButtonPressed(true);
    setAiResponse(""); // Clear previous response

    const modifiedUserInput =
      userInput +
      " You are trained on e-commerce company's rules and regulations. This is a client's problem; provide a one-liner specific solution that the customer executive can tell the client.";

    const requestBody = {
      contents: [
        {
          parts: [{ text: modifiedUserInput }],
        },
      ],
    };

    toast
      .promise(
        fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        })
          .then(async (response) => {
            if (!response.ok) {
              const errorData = await response.json();
              console.error("API Error:", errorData);
              throw new Error(
                `Network response was not ok: ${response.status} - ${response.statusText}`
              );
            }
            return response.json();
          })
          .then((data) => {
            console.log("API Response:", data);
            const generatedText =
              data.candidates?.[0]?.content?.parts?.[0]?.text ||
              "No response from AI.";
            setAiResponse(generatedText);
          }),
        {
          loading: "AI is processing...",
          success: "AI answered!",
          error: (err) => `Something went wrong: ${err.message}`,
        }
      )
      .finally(() => {
        setButtonPressed(false);
      });
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
          <div
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded shadow-lg z-20 max-w-lg
            w-[30rem] h-[30rem] flex flex-col"
          >
            <div className="flex flex-row justify-between">
              <h3 className="text-lg font-bold mb-5 text-sky-300">Chatbot</h3>
              <button
                className="mb-9 items-end mr-2 text-sky-400 border-sky-400 p-1 border-2 rounded-full"
                onClick={closePopup}
              >
                X
              </button>
            </div>

            {/* AI Response Area */}
            <div className="h-[10rem] border border-sky-300 p-2 overflow-y-auto mb-4 text-sky-400">
              {aiResponse}
            </div>

            {/* Text Input */}
            <textarea
              className="h-[8rem] border border-sky-300 focus:border-sky-400 p-2 text-sky-400"
              placeholder="Ask Your Query here"
              value={userInput}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress} // Add the onKeyPress event handler
            ></textarea>

            {/* Generate Button */}
            <button
              className="bg-sky-400 text-white w-[10rem] p-2 rounded-lg mt-4 ml-auto mr-auto"
              onClick={ButtonFunction}
              disabled={buttonPressed}
            >
              Generate
            </button>
          </div>
        </div>
      )}
    </div>
  );
};