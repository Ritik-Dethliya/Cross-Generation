import React from "react";
import { useNavigate } from "react-router-dom";

const TopRatedLessons = () => {
  const navigate = useNavigate();

  const lessons = [
    {
      title: "Traditional Pottery Techniques",
      rating: 4.9,
      description: "Step-by-step guide to creating traditional clay pots using ancestral methods.",
    },
    {
      title: "Organic Terrace Gardening",
      rating: 4.8,
      description: "Learn how to grow your own herbs and vegetables in small urban spaces.",
    },
    {
      title: "Folk Storytelling Workshop",
      rating: 4.7,
      description: "Preserve oral traditions by mastering storytelling styles from local cultures.",
    },
    {
      title: "Smart Budgeting Techniques",
      rating: 4.9,
      description: "Practical finance lessons shared by experienced community elders.",
    },
    {
      title: "Eco-Friendly Handicrafts",
      rating: 4.8,
      description: "Craft beautiful items using recyclable materials and eco-conscious practices.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-10">
        Top-Rated Lessons
      </h1>
      <div className="grid gap-6 md:grid-cols-2">
        {lessons.map((lesson, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-md rounded-xl border-l-4 border-yellow-500 hover:shadow-lg transition duration-300"
          >
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">
              {lesson.title}
            </h2>
            <p className="text-gray-700 mb-2">{lesson.description}</p>
            <p className="text-yellow-600 font-medium">Rating: {lesson.rating} ⭐</p>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <button
          onClick={() => navigate(-1)}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default TopRatedLessons;
