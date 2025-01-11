import React, { useRef, useState } from 'react';
import data from '../data/ScheduleData.json';
import "../components/checkbox.css"

export const ScheduledTasks= () => {
  const scrollRef = useRef(null);
  const [checkedItems, setCheckedItems] = useState({}); // Track checked state

  const scrollDown = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        top: 100, // Adjust as needed
        behavior: 'smooth',
      });
    }
  };

  const scrollUp = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        top: -100, // Adjust as needed
        behavior: 'smooth',
      });
    }
  };

  const handleCheckboxChange = (id) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the checkbox state
    }));
  };

  return (
    <div className="flex flex-col">
      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="h-[22rem] mt-2 overflow-y-scroll p-4"
        style={{
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none', // IE and Edge
        }}
      >
        <style>
          {`
            /* Hide scrollbar for WebKit browsers */
            div::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>
        {data.scheduledTasks.map((call, index) => (
          <div
            key={call.id}
            className="mb-4 text-blue-400 flex items-center justify-between"
          >
            <div>
              <strong>{index + 1}.</strong> {/* Display the entry number */}
              <br />
              <strong>Task:</strong> {call.task} <br />
              <strong>Deadline:</strong> {call.deadline} <br />
              
            </div>
            {/* Checkbox */}
            <input
                 type="checkbox"
                className="round-checkbox mr-12 w-6 h-6 "
                checked={checkedItems[call.id] || false}
                onChange={() => handleCheckboxChange(call.id)}
            />

          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex mt-2 justify-center">
        <button
          onClick={scrollUp}
          className="px-4 py-2 text-white rounded w-14 h-12 flex items-center justify-center"
        >
          <img src="/up-icon.png" alt="Scroll Up" />
        </button>
        <button
          onClick={scrollDown}
          className="px-4 py-2 text-white rounded w-14 h-12 flex items-center justify-center ml-2"
        >
          <img src="/down icon.png" alt="Scroll-Down" />
        </button>
      </div>
    </div>
  );
};
