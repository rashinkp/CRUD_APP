import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white p-6 shadow-lg">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-blue-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
          <h1 onClick={() => navigate('/')} className=" cursor-pointer text-2xl font-bold tracking-wider">
            Student Management
          </h1>
        </div>
        <div className="hidden sm:block">
          <div className="bg-blue-600 bg-opacity-50 py-2 px-4 rounded-full shadow-inner">
            <span className="font-medium tracking-wide">Campus Dashboard</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
