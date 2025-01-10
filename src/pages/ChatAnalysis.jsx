import React from 'react';
import AddChats from '../components/AddChats';
import { ChatBot } from '../components/ChatBot';

export const ChatAnalysis = () => {
  return (
    <div>
       <div className="h-[30rem] w-full">
      <AddChats />
    </div>
    <div>
      <ChatBot/>
    </div>
    </div>
   
  );
}
