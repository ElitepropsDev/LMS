import React from 'react';

const FeatureHighlights = () => {
  const features = [
    {
      title: "Self-Paced Learning",
      description: "Study anywhere, anytime.",
      icon: "https://cdn-icons-png.flaticon.com/512/3233/3233483.png",
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      title: "Career & Study Guide",
      description: "Get insights and career tips.",
      icon: "https://cdn-icons-png.flaticon.com/512/2641/2641409.png",
      gradient: "from-cyan-500 to-blue-400"
    },
    {
      title: "Easy Learning Modules",
      description: " Designed for easy understanding.",
      icon: "https://cdn-icons-png.flaticon.com/512/3591/3591448.png",
      gradient: "from-indigo-500 to-purple-400"
    },
    {
      title: "Exam Support",
      description: "",
      icon: "https://cdn-icons-png.flaticon.com/512/1995/1995531.png",
      gradient: "from-blue-600 to-indigo-500"
    }
  ];

  return (
    /* Increased -mt-28 for mobile to pull it even higher. md:mt-0 resets it for desktop. */
    <section className="relative -mt-28 md:mt-0 pt-0 pb-0 bg-transparent z-10">
      <div className="max-w-6xl mx-auto px-7">
        
        {/* Tightened gap-3 on mobile to keep cards close together */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative p-5 rounded-3xl bg-white border border-blue-50 shadow-[0_8px_25px_-10px_rgba(0,0,0,0.08)] hover:shadow-blue-100 transition-all duration-300 flex flex-col items-center text-center md:items-start md:text-left overflow-hidden"
            >
              {/* Soft hover glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity`} />

              {/* Icon Container */}
              <div className="relative w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-50 mb-3 group-hover:scale-110 transition-transform">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-tr ${feature.gradient} opacity-10`} />
                <img 
                  src={feature.icon} 
                  alt={feature.title} 
                  className="w-7 h-7 object-contain z-10" 
                />
              </div>

              <h3 className="text-[15px] font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-500 text-[11px] leading-relaxed mt-1">
                {feature.description}
              </p>

              {/* Hover accent line */}
              <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r ${feature.gradient} transition-all duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;