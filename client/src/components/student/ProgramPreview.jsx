import React from 'react';

const ProgramPreview = () => {
  const pathways = [
    {
      title: "Intro to Advanced Math Concepts for STEM",
      description: "Master key math ideas in a clear, concept-first way, building reasoning skills and confidence for university STEM.",
      icon: "https://cdn-icons-png.flaticon.com/512/3074/3074058.png",
      color: "border-blue-400",
      bg: "bg-blue-50"
    },
    {
      title: "Digital Tools & Practical Skills",
      description: "Exposure to coding, AI, and other digital tools to enhance your learning. Also gain sellable practical skills like web development, graphic design, and digital marketing.",
      icon: "https://cdn-icons-png.flaticon.com/512/2232/2232688.png",
      color: "border-cyan-400",
      bg: "bg-cyan-50"
    },
    {
      title: "Study Smarter & Succeed",
      description: "Learn effective study strategies, research skills, exam techniques, and problem-solving approaches to confidently tackle challenging topics and excel in any subject",
      icon: "https://cdn-icons-png.flaticon.com/512/1085/1085465.png",
      color: "border-indigo-400",
      bg: "bg-indigo-50"
    }
  ];

  return (
    /* Changed py-24 to pt-12 pb-24 to move it closer to the section above */
    <section className="pt-12 pb-2 bg-white">
      <div className="max-w-6xl mx-auto px-7">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 tracking-tight">
            Welcome to our STEM Accelerator Program (SAP)
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-base leading-relaxed">
            Equipping STEM and general students with skills they need beyond the classroom.
          </p>
        </div>

        {/* The 3 Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pathways.map((path, index) => (
            <div 
              key={index} 
              /* Added flex flex-col items-center md:items-start and text-center md:text-left */
              className={`relative p-10 rounded-3xl border-2 ${path.color} ${path.bg} flex flex-col items-center text-center md:items-start md:text-left hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group overflow-hidden`}
            >
              {/* Decorative Circle */}
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-white/50 rounded-full group-hover:scale-150 transition-transform duration-500"></div>

              {/* Icon Container - Now centered on mobile */}
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <img src={path.icon} alt={path.title} className="w-12 h-12 object-contain" />
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">{path.title}</h3>
              <p className="text-gray-600 leading-relaxed text-md mb-8">
                {path.description}
              </p>
              
              <div className="flex items-center text-blue-700 font-bold cursor-pointer group-hover:underline">
                Explore More <span className="ml-2">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramPreview;