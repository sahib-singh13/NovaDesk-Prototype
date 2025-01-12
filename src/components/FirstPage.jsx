import React from 'react';
import './bounce.css';

export const FirstPage = () => {
  return (
    <div className="w-screen h-screen bg-sky-300">
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Playwrite+AU+SA:wght@100..400&display=swap');`}
      </style>
      <div className="flex flex-col justify-center items-center w-screen h-screen mb-24">
        <div className="mb-10 animation-bounce">
          <img src="/Logo2.png" alt="Logo" />
        </div>

        <div
          className="text-white font-bold text-5xl mb-12 animation-slide-in-left"
          style={{
            fontFamily: "'Playwrite AU SA', serif",
            fontWeight: 400,
          }}
        >
          Transforming BPO's with AI-driven excellence
        </div>

        <div class="lds-default mb-8"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div>
        </div><div></div><div></div><div></div><div></div></div>
      </div>
    </div>
  );
};
