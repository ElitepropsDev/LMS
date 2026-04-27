import React from 'react';
import { NavLink } from 'react-router-dom';
import { Users, BookOpen, LayoutDashboard, Database } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-slate-900 text-white flex flex-col border-r border-slate-700">
      <div className="p-6 text-2xl font-bold border-b border-slate-800 text-blue-400">
        LMS Admin
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        <NavLink 
          to="/admin" 
          end
          className={({ isActive }) => `flex items-center gap-3 p-3 rounded-lg transition ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-slate-800 text-slate-400'}`}
        >
          <LayoutDashboard size={20} /> Dashboard
        </NavLink>

        <NavLink 
          to="/admin/users" 
          className={({ isActive }) => `flex items-center gap-3 p-3 rounded-lg transition ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-slate-800 text-slate-400'}`}
        >
          <Users size={20} /> Manage Students
        </NavLink>

        <NavLink 
          to="/admin/courses" 
          className={({ isActive }) => `flex items-center gap-3 p-3 rounded-lg transition ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-slate-800 text-slate-400'}`}
        >
          <BookOpen size={20} /> Course Manager
        </NavLink>

        <NavLink 
          to="/admin/exams" 
          className={({ isActive }) => `flex items-center gap-3 p-3 rounded-lg transition ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-slate-800 text-slate-400'}`}
        >
          <Database size={20} /> Question Bank
        </NavLink>
      </nav>

      <div className="p-4 border-t border-slate-800 text-xs text-slate-500">
        Logged in as SuperAdmin
      </div>
    </div>
  );
};

export default Sidebar;