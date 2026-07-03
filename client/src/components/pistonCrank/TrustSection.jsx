import React from 'react';

export default function TrustSection() {
  const metrics = [
    { title: "3 Weeks Track", desc: "Engineered execution curriculum designed for immediate real-world validation." },
    { title: "Low Footprint", desc: "No expensive equipment, tools, or heavy capital gadgets needed to launch." },
    { title: "Verified Ecosystem", desc: "Direct integration tracks established with local workshop and garage networks." }
  ];

  return (
    <section className="relative bg-slate-950 text-white py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="absolute top-[50%] right-[10%] w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {metrics.map((metric, idx) => (
          <div key={idx} className="space-y-2 border-l-2 border-purple-500/30 pl-4">
            <h3 className="text-xl font-black text-white uppercase tracking-wide">
              {metric.title}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {metric.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}