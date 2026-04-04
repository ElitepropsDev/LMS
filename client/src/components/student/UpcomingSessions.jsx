import React from "react";

const UpcomingSessions = () => {
  const sessions = [
    {
      title: "Calculus for Beginners",
      description: "Easy-to-understand STEM math concepts",
      instructor: "Self-Paced, online",
      date: "Tomorrow, 4:00 PM",
      students: "128 Joined",
      tag: "STEM",
      img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Intro to Python",
      description: "Coding for non-technical learners",
      instructor: "Self-Paced, online",
      date: "Friday, 2:00 PM",
      students: "250 Joined",
      tag: "Digital Skills",
      img: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Learning with AI",
      description: "AI concepts, risks, and practical use",
      instructor: "Self-Paced, online",
      date: "Sat, 11:00 AM",
      students: "85 Joined",
      tag: "Digital Skills",
      img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Digital Marketing Bootcamp",
      description: "Practical skills to earn or create projects",
      instructor: "Self-Paced, online",
      date: "Sat, 11:00 AM",
      students: "85 Joined",
      tag: "Practical Skills",
      img: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Web Design Essentials",
      description: "Build websites from scratch without code",
      instructor: "Self-Paced, online",
      date: "Sat, 11:00 AM",
      students: "85 Joined",
      tag: "Practical Skills",
      img: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <section className="pt-12 md:pt-24 pb-16 bg-cyan-50">
      <div className="max-w-6xl mx-auto px-4 md:px-7">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-8 md:mb-10 text-center md:text-left">
          <div>
            <h2 className="text-xl md:text-3xl font-black text-slate-800 tracking-tight">
              Explore Modules
            </h2>
            <p className="text-gray-500 mt-1 text-xs md:text-sm">
              A glimpse of modules coming soon.
            </p>
            <p className="text-blue-600 font-bold mt-1 text-[10px] md:text-sm uppercase tracking-wider">
              Curriculum by international educators
            </p>
          </div>
          <button className="hidden md:block text-blue-600 font-bold hover:underline">
            Join to Access Course Library →
          </button>
        </div>

        {/* Changed to grid-cols-1 for mobile, md:grid-cols-3 for desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
          {sessions.map((session, index) => (
            <div
              key={index}
              className="group rounded-xl md:rounded-3xl border border-gray-100 bg-white overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-row md:flex-col"
            >
              {/* Image: fixed width on mobile, full width on desktop */}
              <div className="relative w-28 h-28 md:w-full md:h-44 overflow-hidden flex-shrink-0">
                <img
                  src={session.img}
                  alt={session.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full text-[7px] md:text-[10px] font-bold text-blue-600 uppercase">
                  {session.tag}
                </div>
              </div>

              {/* Tighter padding and content layout */}
              <div className="p-3 md:p-6 flex-1 flex flex-col min-w-0">
                <div className="flex items-center gap-1 text-blue-500 text-[8px] md:text-xs font-semibold mb-1">
                  <span className="w-1 h-1 bg-red-500 rounded-full animate-pulse"></span>
                  {session.date}
                </div>

                <h3 className="text-[13px] md:text-lg font-bold text-gray-800 leading-tight mb-1 md:mb-4 group-hover:text-blue-600 line-clamp-1 md:line-clamp-2">
                  {session.title}
                </h3>

                <p className="hidden md:block text-xs font-medium text-gray-500 leading-snug mb-4">
                  {session.description}
                </p>

                <div className="mt-auto pt-2 md:pt-4 border-t border-gray-50 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[7px] md:text-[10px] text-gray-400 font-medium">Mode</span>
                    <span className="text-[9px] md:text-sm font-bold text-gray-700 truncate">
                      {session.instructor}
                    </span>
                  </div>
                  <span className="text-[9px] md:text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded-md font-black">
                    {session.students.split(" ")[0]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="md:hidden block w-full mt-8 py-4 bg-blue-600 text-white font-black rounded-xl text-sm shadow-xl shadow-blue-200">
          Join to Access Course Library
        </button>
      </div>
    </section>
  );
};

export default UpcomingSessions;