import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ currentUser, setCurrentUser }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
    setMenuOpen(false);
    navigate('/');
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-700 to-purple-700 p-4 flex flex-wrap items-center justify-between text-white shadow-lg">
      <div className="text-2xl font-bold">
        <Link to="/">SkillBridge</Link>
      </div>
      <div className="flex gap-4 items-center">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/learn" className="hover:underline">Learn</Link>
        <Link to="/upload" className="hover:underline">Upload</Link>
        <Link to="/forum" className="hover:underline">Forum</Link>
        <Link to="/mentor" className="hover:underline">Mentor</Link>
        <Link to="/marketplace" className="hover:underline">Marketplace</Link>
        {currentUser ? (
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="font-semibold border px-3 py-1 rounded hover:bg-indigo-600"
            >
              {currentUser.name}
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-2 bg-white text-black shadow-lg rounded border py-2 w-48">
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Logout
                </button>
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Sign in as different user
                </Link>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" className="bg-white text-indigo-700 px-4 py-1 rounded hover:bg-gray-100">
            Login / Signup
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;