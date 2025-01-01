import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex flex-row items-center bg-sky-300 h-12 px-4">
      {/* Logo Section */}
      <NavLink to="/">
        <div className="w-10 h-8 mr-4">
          <img src="/NovaDesk.png" alt="NovaDesk" />
        </div>
      </NavLink>

      {/* Navigation Links */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-1xl mx-2 ${isActive ? "underline" : ""}`
        }
      >
        DashBoard
      </NavLink>

      <NavLink
        to="/CallAnalysis"
        className={({ isActive }) =>
          `text-1xl mx-2 ${isActive ? "underline" : ""}`
        }
      >
        CallAnalysis
      </NavLink>

      <NavLink
        to="/ChatAnalysis"
        className={({ isActive }) =>
          `text-1xl mx-2 ${isActive ? "underline" : ""}`
        }
      >
        ChatAnalysis
      </NavLink>

      <NavLink
        to="/InformationPage"
        className={({ isActive }) =>
          `text-1xl mx-2 ${isActive ? "underline" : ""}`
        }
      >
        Information
      </NavLink>

      {/* User Icon */}
      <div className="w-5 h-5 mt-4 mx-5">
        <img src="/user.png" alt="Logo" />
      </div>
    </div>
  );
};
