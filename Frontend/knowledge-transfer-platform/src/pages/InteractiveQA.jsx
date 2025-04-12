import React from 'react';
import { useNavigate } from 'react-router-dom';


const InteractiveQA = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        ← Back
      </button>
      <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
        Interactive Q&A
      </h1>
      <p className="text-gray-700 text-lg mb-6 text-center">
        Ask your questions and receive personalized answers from experienced mentors. Engage in meaningful discussions to clarify doubts, share insights, and connect with a learning community.
      </p>
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
        <h2 className="text-xl font-semibold text-indigo-600 mb-4">Coming Soon!</h2>
        <p className="text-gray-600">
          We're building a platform where you can ask questions, upvote answers, and interact directly with mentors. Stay tuned!
        </p>
      </div>
    </div>
  );
};

export default InteractiveQA;
