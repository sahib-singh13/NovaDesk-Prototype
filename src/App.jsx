import React from "react";
import { Navbar } from "./components/Navbar";
import {Routes,Route} from "react-router-dom";
import { DashBoard } from "./pages/DashBoard";
import { ChatAnalysis } from "./pages/ChatAnalysis";
import { CallAnalysis } from "./pages/CallAnalysis";
import { InformationPage } from "./pages/InformationPage";
import { Footer } from "./components/Footer";
import { Copyright } from "./components/Copyright";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { FirstPage } from "./components/FirstPage";

const App = () => {

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3500); 
    return () => clearTimeout(timer); 
  }, []);

  if (showSplash) {
    return (
       <FirstPage/>
    );
  }

  return (
    <div className="h-full overflow-auto bg-slate-50">
    <Navbar/>
    <Routes>
    <Route path="/" element={<novadesk-prototype/>}/>
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
