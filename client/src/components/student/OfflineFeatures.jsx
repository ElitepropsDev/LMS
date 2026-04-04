import React from 'react';

const OfflineFeatures = () => {
  const points = [
    {
      title: "Responsive Platform ",
      desc: "Lessons designed to work perfectly on phones, tablets, and laptops. ",
      icon: "https://cdn-icons-png.flaticon.com/512/3437/3437364.png"
    },
    {
      title: "Data Friendly",
      desc: "Our platform’s technology compresses videos to reduce data usage, so you can stream more lessons while spending less.",
      icon: "https://cdn-icons-png.flaticon.com/512/2040/2040504.png"
    },
    {
      title: "Concept-Focused Learning ",
      desc: " Clear, easy-to-follow lessons that emphasize understanding over memorization, helping you master key concepts faster.",
      icon: "https://cdn-icons-png.flaticon.com/512/1792/1792155.png"
    }
  ];

  return (
    /* Removed rounded-[3rem], mx-4, md:mx-10, and my-10 for sharp edges */
    <section className="pt-20 pb-20 bg-blue-600 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-7 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side: Illustration/Text */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <span className="bg-blue-400/30 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
            Mobile-First Learning
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-6 leading-tight">
            Learn anywhere,  <br /> <span className="text-blue-200">Anytime.</span>
          </h2>
          <p className="text-blue-100 mt-4 text-lg leading-relaxed">
            Access lessons on your phone or tablet — no heavy setup needed. Designed to run smoothly even on slower networks, so you can focus on learning.
          </p>
          
          <div className="mt-10 space-y-8">
            {points.map((item, index) => (
              <div key={index} className="flex gap-5 items-start text-left">
                <div className="w-12 h-12 flex-shrink-0 bg-white/10 rounded-2xl flex items-center justify-center">
                  <img src={item.icon} alt="icon" className="w-6 h-6 invert" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">{item.title}</h4>
                  <p className="text-blue-100 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Visual Element */}
        <div className="lg:w-1/2 relative">
          <div className="absolute inset-0 bg-blue-400 blur-[100px] opacity-20"></div>
          {/* Kept the inner card rounded as it's a UI element, but the section itself is now sharp */}
          <div className="relative bg-white/10 border border-white/20 p-8 rounded-[2.5rem] backdrop-blur-sm">
             <div className="bg-white rounded-2xl p-4 shadow-2xl">
                <div className="flex items-center justify-between mb-4 border-b pb-2">
                    <span className="font-bold text-gray-800">My Downloads</span>
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">Offline Ready</span>
                </div>
                <div className="space-y-3">
                    <div className="h-12 bg-gray-50 rounded-xl flex items-center px-3 gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg"></div>
                        <div className="w-24 h-2 bg-gray-200 rounded"></div>
                    </div>
                    <div className="h-12 bg-gray-50 rounded-xl flex items-center px-3 gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg"></div>
                        <div className="w-32 h-2 bg-gray-200 rounded"></div>
                    </div>
                    <div className="h-12 bg-gray-50 rounded-xl flex items-center px-3 gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg"></div>
                        <div className="w-20 h-2 bg-gray-200 rounded"></div>
                    </div>
                </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OfflineFeatures;