import React from 'react';

const OfflineFeatures = () => {
  const points = [
    {
      title: "Download Once, Watch Anywhere",
      desc: "Save full video lessons to your device when you have a connection, and watch them later without using any data.",
      icon: "https://cdn-icons-png.flaticon.com/512/2989/2989976.png"
    },
    {
      title: "Data-Saving Mode",
      desc: "Our platform automatically compresses videos so you can learn more while spending less on data bundles.",
      icon: "https://cdn-icons-png.flaticon.com/512/3159/3159066.png"
    },
    {
      title: "Lightweight Mobile App",
      desc: "Designed to run smoothly even on older Android phones and in areas with weak 3G signals.",
      icon: "https://cdn-icons-png.flaticon.com/512/2586/2586488.png"
    }
  ];

  return (
    /* Removed rounded-[3rem], mx-4, md:mx-10, and my-10 for sharp edges */
    <section className="pt-20 pb-20 bg-blue-600 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-7 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side: Illustration/Text */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <span className="bg-blue-400/30 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
            Offline Learning
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-6 leading-tight">
            No Internet? <br /> <span className="text-blue-200">No Problem.</span>
          </h2>
          <p className="text-blue-100 mt-4 text-lg leading-relaxed">
            We built this for the rural student. Study your lessons under a tree, in the village, or during a power outage.
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