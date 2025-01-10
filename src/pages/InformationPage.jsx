import React from 'react'
import { ChatBot } from '../components/ChatBot'
import { AIChatBar } from '../components/AIChatBar'
import {CompanyInfo} from '../components/CompanyInfo'

export const InformationPage = () => {
  return (
    <div>
      <CompanyInfo/>
      <AIChatBar/>
    </div>
   
  )
}
