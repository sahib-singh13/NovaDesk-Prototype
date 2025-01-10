import React from 'react';

export const PopUpResolution = ({ issue, onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"
        onClick={onClose} // Close the popup when clicking the overlay
      ></div>

      {/* Popup Content */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded shadow-lg z-20 w-3/4 max-w-lg gap-2
      flex flex-col">
        <h2 className="text-lg font-bold text-sky-400 mb-4">Problem Resolution</h2>
        <p className="text-sky-400 "><strong>Issue:</strong> {issue.subproblem}</p>
        <p className="text-sky-400"><strong>Resolution:</strong> {issue.resolution}</p>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="mt-4 bg-sky-400 text-white px-4 py-2 rounded hover:bg-sky-500 w-[10rem]"
        >
          Close
        </button>
      </div>
    </>
  );
};
