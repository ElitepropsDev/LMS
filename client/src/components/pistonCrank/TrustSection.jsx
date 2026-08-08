import React from 'react';

export default function TrustSection() {
  const steps = [
    {
      step: "Step 1",
      title: "Online Foundational Modules",
      desc: "Complete short structured online modules to cover basic foundational knowledge.",
      points: [
        "Self-paced core theoretical learning",
        "Essential safety & tool operational basics",
        "Clear, direct learning objectives"
      ]
    },
    {
      step: "Step 2",
      title: "Hands-On Workshop Practice",
      desc: "Complete structured training in a real workshop facility under supervision.",
      points: [
        "Real-world diagnostic & repair equipment",
        "Direct guidance from experienced technicians",
        "Supervised practical tasks & placement"
      ]
    }
  ];

  return (
    <section section id="trust" className="relative bg-slate-950 text-white py-10 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="absolute top-[50%] right-[10%] w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold tracking-widest text-purple-400 uppercase bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full">
            How It Works
          </span>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
            Your Path To Skill Mastery
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {steps.map((item, idx) => (
            <div key={idx} className="space-y-4 border-l-2 border-purple-500/30 pl-6 bg-white/5 p-6 rounded-r-2xl border-y border-r border-white/5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-pink-400">
                  {item.step}
                </span>
                <h3 className="text-xl font-black text-white uppercase tracking-wide mt-1">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {item.desc}
              </p>
              <ul className="space-y-2 pt-2 border-t border-white/10">
                {item.points.map((pt, pIdx) => (
                  <li key={pIdx} className="text-xs text-slate-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}