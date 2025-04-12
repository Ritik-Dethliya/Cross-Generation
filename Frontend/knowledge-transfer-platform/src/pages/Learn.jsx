// import React from 'react';
// const Learn = () => {
//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Learning Module</h2>
//       <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Video lesson" allowFullScreen className="mb-4"></iframe>
//       <ul className="list-disc list-inside">
//         <li>Step 1: Watch the video</li>
//         <li>Step 2: Practice the technique</li>
//         <li>Step 3: Upload your result</li>
//       </ul>
//     </div>
//   );
// };
// export default Learn;




import React from 'react';
import { useNavigate } from 'react-router-dom';

const Learn = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: 'Skill Categories',
      content: 'Explore diverse topics such as gardening, storytelling, finance, crafts, cooking, and tech guidance shared by experienced individuals.',
      link: '/skillcategories',
    },
    {
      title: 'Video & Written Tutorials',
      content: 'Access curated videos and readable guides from mentors of all ages, preserving valuable knowledge across generations.',
      link: '/tutorials',
    },
    {
      title: 'Interactive Q&A',
      content: 'Engage with mentors through an interactive Q&A section — ask questions and receive personalized answers.',
      link: '/interactive-qa',
    },
    {
      title: 'Top-Rated Lessons',
      content: 'Discover lessons that are rated highly by learners, ensuring the most insightful and valuable content rises to the top.',
      link: '/toplessons',
    },
    {
      title: 'Learn by Contribution',
      content: 'Contribute your own learning summaries or translations to help others, and earn badges for your support.',
      link: '/contribution-learn'
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-8">
        Learn & Grow with Wisdom from All Generations
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        {sections.map((section, idx) => (
          <div
            key={idx}
            onClick={() => section.link && navigate(section.link)}
            className="p-6 bg-white shadow-md rounded-xl border-l-4 border-indigo-500 hover:shadow-lg transition duration-300 cursor-pointer"
          >
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">{section.title}</h2>
            <p className="text-gray-700">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Learn;
