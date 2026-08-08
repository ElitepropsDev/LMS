import React from 'react';

export default function Footer() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-white/10 py-5 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* BRAND & TAGLINE */}
        <div className="text-center md:text-left space-y-1">
          <span className="text-lg font-black tracking-wider uppercase bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
            PistonCrank
          </span>
          <p className="text-xs text-slate-400">
            Empowering hands-on technical trades & practical skill mastery.
          </p>
        </div>

        {/* QUICK NAVIGATION LINKS */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-400">
          <a 
            href="#curriculum" 
            onClick={(e) => scrollToSection(e, 'curriculum')}
            className="hover:text-pink-400 transition-colors uppercase tracking-wider"
          >
            Courses
          </a>
          <a 
            href="#trust" 
            onClick={(e) => scrollToSection(e, 'trust')}
            className="hover:text-pink-400 transition-colors uppercase tracking-wider"
          >
            How It Works
          </a>
          <a 
            href="#faq" 
            onClick={(e) => scrollToSection(e, 'faq')}
            className="hover:text-pink-400 transition-colors uppercase tracking-wider"
          >
            FAQ
          </a>
          <a 
            href="#form" 
            onClick={(e) => scrollToSection(e, 'form')}
            className="hover:text-pink-400 transition-colors uppercase tracking-wider"
          >
            Apply Now
          </a>
        </div>

        {/* COPYRIGHT */}
        <div className="text-center md:text-right text-xs text-slate-500">
          © {new Date().getFullYear()} PistonCrank. All rights reserved.
        </div>

      </div>
    </footer>
  );
}