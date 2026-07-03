import React from "react";
import heroImg from "../../assets/hero.png";

export default function HeroSection({ onStudentClick }) {
  return (
    <section className="relative bg-slate-950 text-white pt-28 pb-16 lg:pt-32 lg:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center">
      {/* BACKGROUND RADIANT NEON GLOWS */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen"
        style={{
          backgroundImage: `
            radial-gradient(circle at 10% 20%, rgba(168, 85, 247, 0.4) 0%, transparent 45%),
            radial-gradient(circle at 90% 70%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)
          `,
        }}
      />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
        {/* LEFT COLUMN: MARKETING COPY */}
        <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-[11px] font-medium tracking-wider uppercase text-slate-300">
              Guaranteed Earning Loop
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] lg:leading-[1.05] uppercase bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-slate-400">
            Guaranteed Earning <br />
            In as Little as <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              3 Weeks
            </span>{" "}
            From A <br />
            Specialist Technical Trade.
          </h1>

          <div className="space-y-3 max-w-xl mx-auto lg:mx-0">
            <p className="text-xs sm:text-sm font-bold tracking-widest text-purple-400 uppercase">
              Your educational background doesn’t matter
            </p>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Stop wasting years in rigid classrooms or unstructured loops.
              Master a high-income, low-footprint skill built directly for local
              market demands.
            </p>
          </div>

          {/* PRIMARY HERO BUTTON */}
          <div className="pt-2 w-full flex justify-center lg:justify-start">
            <button
              onClick={onStudentClick}
              className="px-8 py-3.5 max-w-xs w-full sm:w-auto text-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-sm tracking-wide shadow-lg shadow-purple-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all uppercase"
            >
              🚀 Master a TechTrade
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: HIGH-END HUD GRAPHIC WITH RAW HERO IMAGE */}
       
        <div className="lg:col-span-5 flex flex-col items-center space-y-4 w-full">
          <div className="relative w-full aspect-[4/5] sm:max-w-md lg:max-w-none rounded-3xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl p-6 flex flex-col justify-between">
            <img
              src={heroImg}
              alt="Technical Trade Context"
              className="absolute inset-0 w-full h-full object-cover opacity-100 pointer-events-none z-0"
            />
            <div className="absolute inset-0 bg-slate-950/10 pointer-events-none z-0" />

            {/* Visual UI Header */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4 backdrop-blur-sm bg-slate-950/30 p-2 rounded-xl">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="text-[10px] font-mono text-slate-200 ml-2">
                  SYS_DIAG_v4.02
                </span>
              </div>
              <span className="text-[10px] font-mono text-purple-300 bg-purple-500/20 border border-purple-500/30 px-2 py-0.5 rounded">
                ONLINE
              </span>
            </div>

            {/* The Glowing Tech Object Simulation */}
            <div className="relative z-10 my-auto flex flex-col items-center justify-center">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center">
                <div className="absolute inset-0 border-2 border-dashed border-white rounded-full animate-[spin_40s_linear_infinite]" />
                <div className="absolute inset-3 border border-purple-500/50 rounded-full shadow-[0_0_30px_rgba(168,85,247,0.3)] animate-[spin_20s_linear_infinite_reverse]" />
                <div className="absolute inset-8 bg-slate-900/80 border border-white/20 rounded-full backdrop-blur-md flex flex-col items-center justify-center shadow-2xl">
                  <span className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 font-mono tracking-tighter">
                    88%
                  </span>
                  <span className="text-[8px] tracking-widest text-pink-400 font-bold uppercase">
                    Efficiency
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* TEXT MOVED OUTSIDE BELOW THE IMAGE */}
          <div className="w-full sm:max-w-md lg:max-w-none text-center lg:text-left space-y-1 px-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-pink-400">
              Target Framework
            </span>
            <p className="text-xs text-slate-400 leading-normal">
              High-income diagnostic mastery for modern automotive engines,
              vehicle cooling electronics, and smart climate grids.
            </p>
          </div>

          {/* WHITE OUTLINED LEARN MORE BUTTON */}
          <div className="w-full flex justify-center pt-2">
            <a
              href="#problem"
              className="px-8 py-3.5 max-w-xs w-full text-center rounded-xl bg-white/5 border border-white/20 text-white font-bold text-sm tracking-wide hover:bg-white/10 hover:border-white/40 active:scale-[0.98] transition-all uppercase"
            >
              Learn More ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
