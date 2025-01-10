import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [showProfilePopup, setShowProfilePopup] = useState(false);

  return (
    <div className="flex flex-row items-center bg-sky-300 h-12 px-4 justify-between relative">
      {/* Logo Section */}
      <NavLink to="/">
        <div className="mr-4">
          <img src="/Logo2.png" alt="NovaDesk" className="w-30 h-12" />
        </div>
      </NavLink>

      {/* Navigation Links */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-1xl mx-2 text-white ${isActive ? "underline" : ""}`
        }
      >
        DashBoard
      </NavLink>

      <NavLink
        to="/CallAnalysis"
        className={({ isActive }) =>
          `text-1xl mx-2 text-white ${isActive ? "underline" : ""}`
        }
      >
        Call-Analysis
      </NavLink>

      <NavLink
        to="/ChatAnalysis"
        className={({ isActive }) =>
          `text-1xl mx-2 text-white ${isActive ? "underline" : ""}`
        }
      >
        Chat-Analysis
      </NavLink>

      <NavLink
        to="/Information"
        className={({ isActive }) =>
          `text-1xl mx-2 text-white ${isActive ? "underline" : ""}`
        }
      >
        Information
      </NavLink>

      {/* User Icon */}
      <div
        className="w-10 h-10 mx-5 cursor-pointer z-10"
        onMouseEnter={() => setShowProfilePopup(true)}
        onMouseLeave={() => setShowProfilePopup(false)}
      >
        <img src="/profile.png" alt="Profile Icon" />
        {/* Profile Popup */}
        {showProfilePopup && (
          <div className="absolute top-14 right-5 bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-60">
            <h3 className="text-lg font-semibold">User Profile</h3>
            <p className="text-sm mt-2">Name:Divyam Talwar</p>
            <p className="text-sm">Email: DivyamTalwar@gmail.com</p>
            <p className="text-sm">Role:Executive</p>
            <button className="border-2 border-sky-300 px-1 py-1 relative mt-2 hover:bg-sky-400">Settings</button>
        
          </div>
        )}
      </div>
    </div>
  );
};
