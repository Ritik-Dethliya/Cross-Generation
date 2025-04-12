import React from 'react';
import { useNavigate } from 'react-router-dom';

const SkillCategories = () => {
  const navigate = useNavigate();

  const categories = [
    {
      name: 'Gardening',
      description: 'Learn to grow vegetables, flowers, and medicinal plants naturally.',
    },
    {
      name: 'Storytelling',
      description: 'Master the art of narrating traditional folktales and moral stories.',
    },
    {
      name: 'Finance',
      description: 'Understand savings, budgeting, and local business skills from experienced mentors.',
    },
    {
      name: 'Crafts',
      description: 'Create handmade goods such as pottery, weaving, and embroidery.',
    },
    {
      name: 'Cooking',
      description: 'Discover recipes and techniques from various cultures and regions.',
    },
    {
      name: 'Tech Guidance',
      description: 'Learn how to use digital tools and devices from tech-savvy mentors.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        ← Back
      </button>
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-8">Skill Categories</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="p-6 bg-white shadow-md rounded-xl border-l-4 border-indigo-500 hover:shadow-lg transition duration-300"
          >
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">{cat.name}</h2>
            <p className="text-gray-700">{cat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCategories;
