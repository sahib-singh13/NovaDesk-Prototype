import React from 'react';
import data from "../data/callData.json";

const AddCalls = () => {
  return (
    <div className="h-[40rem] overflow-y-scroll border border-sky-300 p-4 scrollbar-hide">
      {data.CallData.map((call, index) => (
        <div key={call.id} className="mb-6 text-sky-400 border-b-2 border-sky-300 ml-4">
          <h3 className="text-lg font-semibold mb-2">Call #{call.id}</h3>
          <p className="mb-1"><strong>Name:</strong> {call.name}</p>
          <p className="mb-1"><strong>Problem:</strong> {call.problem}</p>
          <p className="mb-1"><strong>Current Status:</strong> {call["Current Status"]}</p>
          <p className="mb-1"><strong>Rating Given by User:</strong> {call["Rating given by user"]}</p>
          <p className="mb-1"><strong>AI Analysis:</strong> {call["AI analysis"]}</p>
          <p className="mb-3"><strong>Constructive Feedback:</strong> {call["Constructive Feedback"]}</p>

          <audio controls className="mb-4">
            <source src={call.Audio} type="audio/mp3" />
          </audio>
        </div>
      ))}
    </div>
  );
};

export default AddCalls;
