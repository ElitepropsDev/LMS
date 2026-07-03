import React from 'react';

export default function CurriculumSection() {
  const tracks = [
    {
      title: "Automotive Service & Maintenance",
      badge: "Core Track",
      features: ["Diagnostic Scan Tablets", "Engine mechanical overhauls", "Routine fluid & system servicing"]
    },
    {
      title: "Automotive AC Service & Maintenance",
      badge: "Specialist",
      features: ["Refrigerant recharge loops", "Compressor fault detection", "Climate electrical circuits"]
    },
    {
      title: "Residential AC Service & Maintenance",
      badge: "High Demand",
      features: ["Split unit installations", "Industrial fault isolation", "Domestic gas management"]
    }
  ];

  return (
    <section className="relative bg-slate-950 text-white py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      
      {/* FORCE-INJECTED RADIAL BACKGROUND GRADIENT FOR THE GLOW EFFECT */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen"
        style={{
          backgroundImage: `
            radial-gradient(circle at 85% 30%, rgba(236, 72, 153, 0.25) 0%, transparent 50%),
            radial-gradient(circle at 15% 70%, rgba(147, 51, 234, 0.2) 0%, transparent 45%)
          `
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10 space-y-12">
        
        <div className="text-center space-y-3">
          <span className="text-xs font-bold tracking-widest text-pink-400 uppercase bg-pink-500/10 border border-pink-500/20 px-3 py-1 rounded-full">
            Available Programs
          </span>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
            Specialized Technical Trades
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Select a streamlined, modern pathway designed to bypass traditional roadside loops and get you earning rapidly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tracks.map((track, idx) => (
            <div 
              key={idx} 
              className="backdrop-blur-md bg-slate-900/40 border border-white/10 p-6 rounded-2xl flex flex-col justify-between hover:border-pink-500/30 transition-all duration-300 shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-pink-400 bg-pink-500/10 px-2 py-0.5 rounded border border-pink-500/20">
                    {track.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold uppercase tracking-wide text-white leading-tight">
                  {track.title}
                </h3>
                <ul className="space-y-2 pt-2">
                  {track.features.map((feat, fIdx) => (
                    <li key={fIdx} className="text-xs text-slate-400 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-pink-400" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}