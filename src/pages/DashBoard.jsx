import React, { useState } from 'react';
import { ScheduledCalls } from '../components/ScheduledCalls';
import { ScheduledTasks } from '../components/ScheduledTasks';

export const DashBoard = () => {
  const [CurrentButton, SetCurrentButton] = useState('Scheduled Calls');

  const buttonClickHandler = (buttonType) => {
    SetCurrentButton(buttonType);
  };

  return (
    <div className="flex flex-row h-[30rem]">
      {/* First div */}
      <div className="w-1/2 h-full flex flex-col ">
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
      <div className="w-1/2 h-full flex flex-col border border-sky-300">
        <div className="justify-center align-middle ml-80 relative mt-4 text-2xl underline text-sky-300">Data Entry</div>
        {/*Now add a div for the data entry only */}
        <div className="mt-6">
          <div>
            <label className="text-1xl text-sky-400">Enter Client's Name:</label>
            <textarea
             id="example-textarea"
             className="w-full border border-sky-300 rounded p-2 h-10"
             rows="4"
             placeholder="Name..."
            ></textarea>
          </div>
        
          <div>
          <label>Enter Registered Phone Number:</label>
            <textarea
             id="example-textarea"
             className="w-full border border-gray-300 rounded p-2"
             rows="4"
             placeholder="Type something here..."
            ></textarea>
          </div>

          <div>
          <label>Client's Problem Description:</label>
            <textarea
             id="example-textarea"
             className="w-full border border-gray-300 rounded p-2"
             rows="4"
             placeholder="Type something here..."
            ></textarea>
          </div>

          <div>
          <label>Resolution given to the problem:</label>
            <textarea
             id="example-textarea"
             className="w-full border border-gray-300 rounded p-2"
             rows="4"
             placeholder="Type something here..."
            ></textarea>
          </div>

          <div>
            <button>Sumit</button>
          </div>


        </div>
      </div>
    </div>
  );
};
