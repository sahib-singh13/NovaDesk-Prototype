import React, { useState } from 'react';
import Data from "../data/companyData.json";
import { PopUpResolution } from './PopUpResolution';

export const CompanyInfo = () => {
  const [selectedIssue, setSelectedIssue] = useState(null);

  const handleButtonClick = (issue) => {
    setSelectedIssue(issue); // Set the selected issue to open the popup
  };

  const closePopup = () => {
    setSelectedIssue(null); // Close the popup by setting the issue to null
  };

  return (
    <div className="h-[30rem] w-full flex items-center space-x-12 justify-center">
      {/* Product Related Issues */}
      <div className="h-[25rem] w-[20rem] border border-sky-300 items-center space-y-6 justify-center">
        <h2 className="text-center mt-4 text-sky-300 font-bold text-xl">Product Related Issues</h2>
        {Data.issues.productRelated.map((issue) => (
          <button
            key={issue.id}
            className="border-sky-300 border-2 rounded-lg p-2 w-[16rem] justify-center ml-7
              hover:bg-sky-400 text-sky-300 font-bold hover:text-white"
            onClick={() => handleButtonClick(issue)} // Trigger the popup
          >
            {issue.subproblem}
          </button>
        ))}
      </div>

      {/* Delivery Related Issues */}
      <div className="h-[25rem] w-[20rem] border border-sky-300 items-center space-y-6 justify-center">
        <h2 className="text-center mt-4 text-sky-300 font-bold text-xl">Delivery Related Issues</h2>
        {Data.issues.deliveryRelated.map((issue) => (
          <button
            key={issue.id}
            className="border-sky-300 border-2 rounded-lg p-2 w-[16rem] justify-center ml-7
              hover:bg-sky-400 text-sky-300 font-bold hover:text-white"
            onClick={() => handleButtonClick(issue)} // Trigger the popup
          >
            {issue.subproblem}
          </button>
        ))}
      </div>

      {/* App Related Issues */}
      <div className="h-[25rem] w-[20rem] border border-sky-300 items-center space-y-6 justify-center">
        <h2 className="text-center mt-4 text-sky-300 font-bold text-xl">App Related Issues</h2>
        {Data.issues.applicationRelated.map((issue) => (
          <button
            key={issue.id}
            className="border-sky-300 border-2 rounded-lg p-2 w-[16rem] justify-center ml-7
              hover:bg-sky-400 text-sky-300 font-bold hover:text-white"
            onClick={() => handleButtonClick(issue)} // Trigger the popup
          >
            {issue.subproblem}
          </button>
        ))}
      </div>

      {/* Display the Popup if an Issue is Selected */}
      {selectedIssue && <PopUpResolution issue={selectedIssue} onClose={closePopup} />}
    </div>
  );
};
