import React from 'react';

export const DashBoard = () => {
  return (
    <div className="flex flex-row h-[30rem]">
      {/* First div */}
      <div className="w-1/2 h-full flex"></div>

      {/* Second div */}
      <div className="w-1/2 h-full flex flex-col border border-sky-300"></div>
    </div>
  );
};
