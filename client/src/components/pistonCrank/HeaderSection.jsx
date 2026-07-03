import React from 'react';
import logo2 from '../../assets/logo2.png'; // ◄── Imported from your src/assets folder

export default function HeaderSection() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl">
      <div className="backdrop-blur-md bg-slate-900/40 border border-white/10 rounded-full px-6 py-3 flex items-center justify-between shadow-xl shadow-purple-950/20">
        
        {/* LOGO IMAGE */}
        <div className="flex items-center gap-2">
          <img 
            src={logo2} 
            alt="Excel XP Logo" 
            className="h-8 w-auto object-contain" 
          />
        </div>

        {/* COMPACT NAV OVERLAY */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-300 tracking-wide">
          <a href="#about" className="hover:text-white transition-colors">About TechTrade</a>
          <a href="#problem" className="hover:text-white transition-colors">The Problem</a>
          <a href="#form" className="hover:text-white transition-colors">Available Trades</a>
        </nav>

        {/* CTA IN HEADER */}
        <div>
          <a 
            href="#form" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-xs px-4 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
          >
            Get Started
          </a>
        </div>

      </div>
    </header>
  );
}