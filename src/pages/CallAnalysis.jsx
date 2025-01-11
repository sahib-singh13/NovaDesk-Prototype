import React from 'react'
import AddCalls from '../components/AddCalls'
import { ChatBot } from '../components/ChatBot'

export const CallAnalysis = () => {
  return (
    <div>
      <div className="h-[40rem] w-full flex flex-col">
       <AddCalls/>
      </div>
      <ChatBot/>
      </div>
   
  )
}
