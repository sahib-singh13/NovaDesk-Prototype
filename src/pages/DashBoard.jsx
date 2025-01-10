import React, { useState } from 'react';
import { ScheduledCalls } from '../components/ScheduledCalls';
import { ScheduledTasks } from '../components/ScheduledTasks';
import { AIChatBar } from '../components/AIChatBar';
import "../components/checkbox.css"

export const DashBoard = () => {
  const [CurrentButton, SetCurrentButton] = useState('Scheduled Calls');
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  // State for textareas
  const [clientName, setClientName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [problemDescription, setProblemDescription] = useState('');
  const [resolution, setResolution] = useState('');

  const buttonClickHandler = (buttonType) => {
    SetCurrentButton(buttonType);
  };

  const submitHandler = () => {
    setIsButtonClicked(true);

    // Clear textareas
    setClientName('');
    setPhoneNumber('');
    setProblemDescription('');
    setResolution('');

    // Reset button state after a delay
    setTimeout(() => {
      setIsButtonClicked(false);
    }, 2000);
  };

  return (
       <div className="flex flex-col">
       <div className="flex flex-row h-[30rem]">
      {/* First div */}
      <div className="w-1/2 h-full flex flex-col border-b-2 border-sky-300 ">
        <div className="flex flex-row justify-center">
          <button
            onClick={() => buttonClickHandler('Scheduled Calls')}
            className={`mt-3 mr-14 border px-4 py-2 ${
              CurrentButton === 'Scheduled Calls'
                ? 'bg-sky-400 text-white'
                : 'text-sky-300 hover:bg-sky-200 hover:text-white'
            }`}
          >
            Scheduled Calls
          </button>
          <button
            onClick={() => buttonClickHandler('Scheduled Tasks')}
            className={`mt-3 mr-14 border px-4 py-2 ${
              CurrentButton === 'Scheduled Tasks'
                ? 'bg-sky-400 text-white'
                : 'text-sky-300 hover:bg-sky-200 hover:text-white'
            }`}
          >
            Scheduled Tasks
          </button>
        </div>

        {CurrentButton === 'Scheduled Calls' ? (
          <div className="flex flex-col justify-center">
            <ScheduledCalls />
          </div>
        ) : (
          <div>
            <ScheduledTasks />
          </div>
        )}
      </div>

      {/* Second div */}
      <div className="w-1/2 h-full flex flex-col border-l-2 border-sky-300 border-b-2">
        <div className="justify-center align-middle ml-80 relative mt-2 text-2xl underline text-sky-300">
          Data Entry
        </div>
        {/*Now add a div for the data entry only */}
        <div className="mt-2 mr-2 ml-2">
          <div>
            <label className="text-1xl text-sky-400 ">Enter Client's Name:</label>
            <textarea
              id="example-textarea"
              className="w-full border border-sky-300 rounded p-2 h-10 overflow-hidden text-sky-500"
              rows="4"
              placeholder="Name..."
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
            ></textarea>
          </div>

          <div>
            <label className="text-1xl text-sky-400">Enter Registered Phone Number:</label>
            <textarea
              id="example-textarea"
              className="w-full border border-sky-300 rounded p-2 h-10 overflow-hidden text-sky-500"
              rows="4"
              placeholder="Phone number.."
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            ></textarea>
          </div>

          <div>
            <label className="text-1xl text-sky-400">Client's Problem Description:</label>
            <textarea
              id="example-textarea"
              className="w-full border border-sky-300 rounded p-2 h-20 text-sky-500"
              rows="4"
              placeholder="Problem..."
              value={problemDescription}
              onChange={(e) => setProblemDescription(e.target.value)}
            ></textarea>
          </div>

          <div>
            <label className="text-1xl text-sky-400">Resolution given to the problem:</label>
            <textarea
              id="example-textarea"
              className="w-full border border-sky-300 rounded p-2 text-sky-500"
              rows="4"
              placeholder="Resolution..."
              value={resolution}
              onChange={(e) => setResolution(e.target.value)}
            ></textarea>
          </div>

          <div className="align-middle flex flex-row justify-center items-center ">
            <button
              onClick={submitHandler}
              className={`justify-center border border-sky-300 p-1 rounded text-white ${
                isButtonClicked ? 'bg-sky-500' : 'bg-sky-300 hover:bg-sky-500'
              }`}
            >
              {isButtonClicked ? 'Submitted!' : 'Submit'}
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Now here i will add my AI askChatbox design */}
    <AIChatBar/>
    </div>
   
  );
};
