import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Users, BookOpen, LayoutDashboard, Database, Menu, X, Settings, Contact2 } from 'lucide-react'; // Added Contact2 icon

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close sidebar when a link is clicked on mobile
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* 📱 MOBILE MENU BUTTON (Only shows on small screens) */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 p-2 bg-slate-900 text-white rounded-lg md:hidden z-40 shadow-lg border border-slate-700"
      >
        <Menu size={24} />
      </button>

      {/* 🌑 OVERLAY (Darkens the background when sidebar is open on mobile) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity"
          onClick={closeSidebar}
        />
      )}

      {/* 🚀 SIDEBAR CONTAINER */}
      <div className={`
        fixed md:static inset-y-0 left-0 z-50
        w-64 min-h-screen bg-slate-900 text-white flex flex-col border-r border-slate-700
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0
      `}>
        
        {/* Header Section */}
        <div className="p-6 text-2xl font-bold border-b border-slate-800 text-blue-400 flex items-center justify-between">
          <span>LMS Admin</span>
          {/* Close button for mobile */}
          <button onClick={closeSidebar} className="md:hidden text-slate-400 hover:text-white">
            <X size={24} />
          </button>
        </div>
        
        {/* Navigation Links */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <NavLink 
            to="/admin" 
            end
            onClick={closeSidebar}
            className={({ isActive }) => `flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${isActive ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' : 'hover:bg-slate-800 text-slate-400'}`}
          >
            <LayoutDashboard size={20} /> Dashboard
          </NavLink>

          <NavLink 
            to="/admin/users" 
            onClick={closeSidebar}
            className={({ isActive }) => `flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${isActive ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' : 'hover:bg-slate-800 text-slate-400'}`}
          >
            <Users size={20} /> Manage Students
          </NavLink>

          {/* --- NEW: Student Profiles Link --- */}
          <NavLink 
            to="/admin/student-profiles" 
            onClick={closeSidebar}
            className={({ isActive }) => `flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${isActive ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' : 'hover:bg-slate-800 text-slate-400'}`}
          >
            <Contact2 size={20} /> Student Profiles
          </NavLink>

          <NavLink 
            to="/admin/courses" 
            onClick={closeSidebar}
            className={({ isActive }) => `flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${isActive ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' : 'hover:bg-slate-800 text-slate-400'}`}
          >
            <BookOpen size={20} /> Course Manager
          </NavLink>

          <NavLink 
            to="/admin/exams" 
            onClick={closeSidebar}
            className={({ isActive }) => `flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${isActive ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' : 'hover:bg-slate-800 text-slate-400'}`}
          >
            <Database size={20} /> Question Bank
          </NavLink>

          <NavLink 
            to="/admin/settings" 
            onClick={closeSidebar}
            className={({ isActive }) => `flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${isActive ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' : 'hover:bg-slate-800 text-slate-400'}`}
          >
            <Settings size={20} /> Settings
          </NavLink>
        </nav>

        {/* Footer info */}
        <div className="p-4 border-t border-slate-800 text-[10px] uppercase tracking-widest text-slate-500 font-bold">
          Logged in as SuperAdmin
        </div>
      </div>
    </>
  );
};

export default Sidebar;