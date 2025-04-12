import React from 'react';
import { useNavigate } from 'react-router-dom';

const VideoWrittenTutorials = () => {
  const navigate = useNavigate();

  const tutorials = [
    {
      title: 'Basics of Organic Gardening',
      type: 'Video',
      description: 'Learn how to start an organic garden at home with simple tools and techniques.',
      url: 'https://youtu.be/GwCojS5gv70?si=YOtCX2TV6-YV38uY',
    },
    {
      title: 'Weaving Patterns Tutorial',
      type: 'Written',
      description: 'Step-by-step written guide on traditional weaving patterns for beginners.',
      url: 'https://fibersanddesign.com/weavingpatterntutorial/',
    },
    {
      title: 'How to Budget Your Monthly Expenses',
      type: 'Video',
      description: 'A short video explaining smart budgeting tips from experienced elders.',
      url: 'https://youtu.be/bK1N2jlG1Sc?si=DW0SgfWcRCf6vhDO',
    },
    {
      title: 'Storytelling Traditions Across India',
      type: 'Written',
      description: 'An insightful written article exploring storytelling formats and their cultural significance.',
      url: 'https://www.iipseries.org/assets/docupload/rsl202403E7BCF3707C447.pdf#:~:text=This%20paper%20focused%20on%20the%20growth%20and%20evolutions,aspect%20of%20storytelling%20from%20one%20generation%20to%20another.',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        ← Back
      </button>
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-8">
        Video & Written Tutorials
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        {tutorials.map((item, idx) => (
          <div
            key={idx}
            className="p-6 bg-white shadow-md rounded-xl border-l-4 border-indigo-500 hover:shadow-lg transition duration-300"
          >
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">{item.title}</h2>
            <p className="text-sm mb-2 text-gray-600">Type: {item.type}</p>
            <p className="text-gray-700 mb-3">{item.description}</p>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              View {item.type}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoWrittenTutorials;
