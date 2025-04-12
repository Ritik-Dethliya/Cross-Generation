import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'; // Can cause issues with Vite
import Login from './pages/Login';
import Learn from './pages/Learn';
import Upload from './pages/Upload';
import Forum from './pages/Forum';
import Mentor from './pages/Mentor';
import Marketplace from './pages/Marketplace';
import Navbar from './pages/Navbar';
import AskAI from './pages/Forum';
import SkillCategories from './pages/SkillCategories.jsx';
import VideoWrittenTutorials from './pages/VideoWrittenTutorials.jsx';
import InteractiveQA from './pages/InteractiveQA.jsx';
import TopRatedLessons from './pages/TopRatedLessons.jsx';
import LearnByContribution from './pages/ByContribution.jsx';
import OrderForm from './pages/OrderForm.jsx';
import OrdersPage from './pages/OrdersPage.jsx';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) setCurrentUser(user);
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login setCurrentUser={setCurrentUser} />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/skillcategories" element={<SkillCategories />} />
            <Route path="/tutorials" element={<VideoWrittenTutorials />} />
            <Route path="/interactive-qa" element={<InteractiveQA />} />
            <Route path="/toplessons" element={<TopRatedLessons />} />
            <Route path="/contribution-learn" element={<LearnByContribution />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/forum" element={<AskAI />} />
            <Route path="/mentor" element={<Mentor />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/order" element={<OrderForm />} />
            <Route path="/orders" element={<OrdersPage />} />
          </Routes>
        </main>

        <footer className="bg-gray-900 text-white text-center p-4">
          &copy; {new Date().getFullYear()} Cross-Generation Knowledge Transfer Platform. All rights reserved.
        </footer>
      </div>
    </Router>
  );
};

export default App;