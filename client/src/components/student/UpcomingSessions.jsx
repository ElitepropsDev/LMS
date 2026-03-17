import React from 'react';

const UpcomingSessions = () => {
  const sessions = [
    {
      title: "SAT Math: Algebra Intensive",
      instructor: "Dr. Sarah Johnson",
      date: "Tomorrow, 4:00 PM",
      students: "128 Joined",
      tag: "College Prep",
      img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "WAEC Physics Revision",
      instructor: "Engr. David Okon",
      date: "Friday, 2:00 PM",
      students: "250 Joined",
      tag: "Exam Prep",
      img: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Intro to Python Coding",
      instructor: "Alex Chen",
      date: "Sat, 11:00 AM",
      students: "85 Joined",
      tag: "Future Skills",
      img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    /* 1. Changed pt-0 to pt-20 for mobile space.
      2. Removed all negative margins (-mt-12).
      3. Using bg-white to keep it clean.
    */
    <section className="pt-20 md:pt-24 pb-16 bg-white">
      <div className="max-w-6xl mx-auto px-7">
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-tight">Trending Live Classes</h2>
            <p className="text-gray-500 mt-2 text-sm">Join expert-led sessions in real-time.</p>
          </div>
          <button className="hidden md:block text-blue-600 font-bold hover:underline">
            View all classes →
          </button>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sessions.map((session, index) => (
            <div key={index} className="group rounded-3xl border border-gray-100 bg-white overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-40 md:h-44 overflow-hidden">
                <img src={session.img} alt={session.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                  {session.tag}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-blue-500 text-xs font-semibold mb-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                  LIVE: {session.date}
                </div>
                <h3 className="text-lg font-bold text-gray-800 leading-snug mb-4 group-hover:text-blue-600 transition-colors">
                  {session.title}
                </h3>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] text-gray-400 font-medium">Instructor</span>
                    <span className="text-sm font-semibold text-gray-700">{session.instructor}</span>
                  </div>
                  <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-1 rounded-md font-bold">
                    {session.students}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="md:hidden w-full mt-8 py-4 bg-blue-50 text-blue-600 font-bold rounded-2xl text-sm">
          View all classes
        </button>
      </div>
    </section>
  );
};

export default UpcomingSessions;