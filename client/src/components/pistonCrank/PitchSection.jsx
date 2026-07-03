import React from 'react';

export default function PitchSection() {
  const problems = [
    {
      title: "The Wedding Cake Dilemma",
      desc: "Traditional skills learning is broken. You learn how to bake a cake, but cannot proceed because you don't have equipment—and whose wedding cake are you going to use to practice?",
      icon: "🎂"
    },
    {
      title: "Saturated & Blind Markets",
      desc: "Fields like tailoring are completely oversaturated. Other fields like painting lack structure, leaving entry routes and actual career progressions completely invisible.",
      icon: "📉"
    },
    {
      title: "The Roadside Trap",
      desc: "Typical roadside apprenticeships waste valuable years running manual errands for masters without a defined timeline or structured learning outcomes.",
      icon: "🚗"
    }
  ];

  return (
    <section id="problem" className="relative bg-slate-950 text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/5">
      
      {/* BACKGROUND NEON ACCENT */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 space-y-16">
        
        {/* SECTION HEADER */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-purple-400 uppercase bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full">
            The Reality Check
          </span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
            Traditional education and skills learning <br />
            are <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-400">broken & inefficient.</span>
          </h2>
        </div>

        {/* CRISP GRID CARDS - MIRRORING THE FLOATING CARDS IN 1738684206868.JFIF */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((prob, idx) => (
            <div 
              key={idx} 
              className="backdrop-blur-md bg-white/[0.02] border border-white/10 p-6 rounded-2xl flex flex-col justify-between hover:border-purple-500/30 transition-all duration-300 shadow-xl"
            >
              <div className="space-y-4">
                <div className="text-2xl w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                  {prob.icon}
                </div>
                <h3 className="text-lg font-bold text-white tracking-wide uppercase">
                  {prob.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {prob.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* THE CORE SOLUTION PITCH BANNER */}
        <div className="backdrop-blur-lg bg-gradient-to-r from-purple-950/40 to-slate-900/40 border border-purple-500/20 p-8 sm:p-10 rounded-3xl text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
          
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-wide text-white">
              The Excel TechTrade Alternative
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Excel TechTrade has redefined the process. Independently master a <span className="text-purple-300 font-semibold">specialist, low-footprint skill</span> with no expensive tools or gadgets needed and start earning in as little as 3 weeks!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}