import React from 'react';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    /* Changed bg-gray-900 to a clean, light Slate background */
    <footer className="bg-cyan-50 md:px-36 text-left w-full border-t border-slate-200">
      <div className="flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-16">

        {/* Brand Section */}
        <div className="flex flex-col md:items-start items-center w-full max-w-sm">
          {/* Using assets.logo here - make sure it's the version for light backgrounds */}
          <img src={assets.logo} alt="logo" className="w-24" />
          <p className="mt-6 text-center md:text-left text-sm text-slate-500 leading-relaxed">
            Empowering students in every corner of Nigeria with high-quality, offline-first education. Bridging the digital divide one lesson at a time.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col md:items-start items-center w-full">
          <h2 className="font-bold text-slate-800 mb-6 uppercase tracking-wider text-xs">Quick Links</h2>
          <ul className="flex flex-col items-center md:items-start space-y-3 text-sm text-slate-600 font-medium">
            <li><a href="#" className="hover:text-blue-600 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">All Courses</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Scholarships</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col items-center md:items-start w-full">
          <h2 className="font-bold text-slate-800 mb-6 uppercase tracking-wider text-xs">Stay Updated</h2>
          <p className="text-sm text-slate-500 text-center md:text-left mb-4">
            Get the latest exam tips and offline features directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-2 w-full">
            <input 
              className="border border-slate-300 bg-white text-slate-800 placeholder-slate-400 outline-none w-full md:w-64 h-11 rounded-xl px-4 text-sm focus:border-blue-500 transition-all" 
              type="email" 
              placeholder="Your email address" 
            />
            <button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-28 h-11 text-white font-bold rounded-xl shadow-md shadow-blue-100 transition-all active:scale-95">
              Join
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200 py-8">
        <p className="text-center text-xs md:text-sm text-slate-400 font-medium">
          Copyright 2026 © Excel Career Plus. <br className="md:hidden" /> Empowering Rural Nigerian Excellence.
        </p>
      </div>
    </footer>
  );
};

export default Footer;