// import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-sm p-8 mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to{" "}
          <span className="text-blue-600">Student Management System</span>
        </h1>
        <p className="text-lg text-gray-600 mb-6 max-w-3xl">
          Streamline your educational administrative tasks with our
          comprehensive platform designed for teachers, administrators, and
          students.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
            Get Started
          </button>
          <button className="bg-white hover:bg-gray-50 text-blue-600 border border-blue-200 px-6 py-3 rounded-lg font-medium transition-colors duration-200">
            Learn More
          </button>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div onClick={() => navigate('/students')} className="bg-white cursor-pointer p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
          <div className="text-blue-500 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
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
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            View Students
          </h2>
          <p className="text-gray-600">
            Easily monitor student and view their details
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
          <div className="text-indigo-500 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Grade Management
          </h2>
          <p className="text-gray-600">
            Record, calculate, and manage student grades with our intuitive
            interface.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
          <div className="text-blue-500 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Schedule Planning
          </h2>
          <p className="text-gray-600">
            Create and share class schedules and important academic events.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-600 text-white rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Trusted by Educators Worldwide
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-4xl font-bold mb-2">5000+</p>
            <p className="text-blue-100">Students</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">150+</p>
            <p className="text-blue-100">Schools</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">98%</p>
            <p className="text-blue-100">Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
