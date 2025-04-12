// File: pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaChalkboardTeacher, FaUpload, FaComments, FaUserFriends, FaStore } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-purple-100 to-indigo-100 min-h-screen py-12 px-6 text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-6">Welcome to SkillBridge</h1>
        <p className="text-lg md:text-xl mb-6 leading-relaxed">
          Bridging generations by preserving and sharing valuable skills and crafts through modern technology. Join a vibrant community of learners, mentors, and makers.
        </p>

        <img
          src="https://tse4.mm.bing.net/th?id=OIP.G6cfUbKe1bk8yHJ9ycQr2gHaEP&pid=Api&P=0&h=180"
          alt="SkillBridge Banner"
          className="w-full h-auto rounded-xl shadow-lg mb-10"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Link to="/learn" className="bg-white hover:shadow-xl p-6 rounded-xl transition shadow-md flex flex-col items-center">
            <FaChalkboardTeacher className="text-4xl text-indigo-600 mb-4" />
            <h2 className="font-semibold text-lg">Interactive Learning</h2>
            <p className="text-sm text-center mt-2">Video, text, and 3D tutorials for every skill level.</p>
          </Link>
          <Link to="/upload" className="bg-white hover:shadow-xl p-6 rounded-xl transition shadow-md flex flex-col items-center">
            <FaUpload className="text-4xl text-indigo-600 mb-4" />
            <h2 className="font-semibold text-lg">Upload Work</h2>
            <p className="text-sm text-center mt-2">Show your progress and get verified by mentors.</p>
          </Link>
          <Link to="/forum" className="bg-white hover:shadow-xl p-6 rounded-xl transition shadow-md flex flex-col items-center">
            <FaComments className="text-4xl text-indigo-600 mb-4" />
            <h2 className="font-semibold text-lg">Ask Questions</h2>
            <p className="text-sm text-center mt-2">Get guidance from experts and fellow learners.</p>
          </Link>
          <Link to="/mentor" className="bg-white hover:shadow-xl p-6 rounded-xl transition shadow-md flex flex-col items-center">
            <FaUserFriends className="text-4xl text-indigo-600 mb-4" />
            <h2 className="font-semibold text-lg">Find Mentors</h2>
            <p className="text-sm text-center mt-2">Schedule remote mentorship sessions easily.</p>
          </Link>
          <Link to="/marketplace" className="bg-white hover:shadow-xl p-6 rounded-xl transition shadow-md flex flex-col items-center">
            <FaStore className="text-4xl text-indigo-600 mb-4" />
            <h2 className="font-semibold text-lg">Marketplace</h2>
            <p className="text-sm text-center mt-2">Sell your creations and support fellow learners.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
