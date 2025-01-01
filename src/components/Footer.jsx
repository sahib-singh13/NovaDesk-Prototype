import React from "react";

export const Footer = () => {
  return (
    <div className="flex flex-row bg-sky-300 h-[15rem]">
      <div className="flex flex-col">
        <div className="text-white text-1xl mt-2 ml-6 underline">Submit Your Query:</div>
        <div>
          <input
            type="email"
            id="mail"
            placeholder="Mail ID"
            className="border-2 border-gray-300 p-1 w-full mt-3 ml-3 bg-white text-black rounded shadow-md"
          />
        </div>
        <div>
          <textarea
            id="response"
            placeholder="Response..."
            className="border-2 border-gray-300 p-2 h-[6rem] ml-3 mt-1 w-full bg-white text-black rounded shadow-md resize-none"
          />
        </div>
        <div>
          <button className="mt-2 ml-36 bg-white text-sky-500 px-4 py-2 rounded shadow-md hover:bg-sky-200">
            Submit
          </button>
        </div>
      </div>

      <div className="flex flex-col text-white items-center justify-center w-full space-y-2">
        <div className="underline text-1xl mb-2 text-center">Site Maps</div>
        <div className="text-center hover:underline cursor-pointer">DashBoard</div>
        <div className="text-center hover:underline cursor-pointer">Call-Analysis</div>
        <div className="text-center hover:underline cursor-pointer">Chat-Analysis</div>
        <div className="text-center hover:underline cursor-pointer">Information-Page</div>
        <div className="text-center hover:underline cursor-pointer">Help</div>
      </div>

      <div className="flex flex-col text-white justify-start items-center mr-24 space-y-2 w-[12rem] mt-6">
        <div className="underline text-1xl  text-center mb-4">Connect With us</div>
        <div>
          <img
            src="/facebook.png"
            alt="Facebook"
            className="w-6 h-6 hover:w-8 hover:h-8 transition-all duration-200 cursor pointer"
          />
        </div>
        <div>
          <img
            src="/X.png"
            alt="X"
            className="w-6 h-6 hover:w-8 hover:h-8 transition-all duration-200 cursor pointer"
          />
        </div>
        <div>
          <img
            src="/instagram.png"
            alt="Instagram"
            className="w-6 h-6 hover:w-8 hover:h-8 transition-all duration-200 cursor pointer"
          />
        </div>

        <div>
          <img
            src="/reddit.png"
            alt="reddit"
            className="w-6 h-6 hover:w-8 hover:h-8 transition-all duration-200 cursor pointer"
          />
        </div>
      </div>
    </div>
  );
};
