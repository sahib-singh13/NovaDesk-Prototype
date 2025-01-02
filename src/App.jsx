import React from "react";
import { Navbar } from "./components/Navbar";
import {Routes,Route} from "react-router-dom";
import { DashBoard } from "./pages/DashBoard";
import { ChatAnalysis } from "./pages/ChatAnalysis";
import { CallAnalysis } from "./pages/CallAnalysis";
import { InformationPage } from "./pages/InformationPage";
import { Footer } from "./components/Footer";
import { Copyright } from "./components/Copyright";


const App = () => {
  return (
    <div className="h-full overflow-auto">
    <Navbar/>
    <Routes>
      <Route path="/" element={<DashBoard/>}/>
      <Route path="/CallAnalysis"  element={<CallAnalysis/>} />
      <Route path="/ChatAnalysis" element={<ChatAnalysis/>}/>
      <Route path="/Information" element={<InformationPage/>} />
    </Routes>
    <Footer/>
    <Copyright/>
  </div>
  )
}

export default App
