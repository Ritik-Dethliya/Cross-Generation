import React from "react";
import { useNavigate } from "react-router-dom";

const LearnByContribution = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
        Learn by Contribution
      </h1>
      <p className="text-gray-700 mb-6 text-lg">
        Your contributions can help preserve and spread knowledge across generations.
        Share what you’ve learned, write summaries of mentor sessions, translate content, or
        help others understand traditional and modern skills.
      </p>
      <ul className="list-disc list-inside space-y-3">
        <li>
          ✍️ <strong>Write Summaries:</strong> Help others by writing clear, concise summaries of sessions.
        </li>
        <li>
          🌐 <strong>Translate Knowledge:</strong> Make content accessible in regional languages.
        </li>
        <li>
          🏅 <strong>Earn Badges:</strong> Get recognized for meaningful contributions.
        </li>
        <li>
          📚 <strong>Build Community:</strong> Help foster a strong, collaborative learning environment.
        </li>
      </ul>

      <div className="mt-8 text-center">
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded shadow"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default LearnByContribution;
