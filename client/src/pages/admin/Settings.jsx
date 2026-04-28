import React, { useState, useContext } from "react";
import {
  User,
  Lock,
  Camera,
  Save,
  LogOut,
  AlertTriangle,
} from "lucide-react";
import { AppContext } from "../../context/AppContext";
import { toast } from "react-toastify";

const Settings = () => {
  const { navigate, setIsLoggedin, setUser } = useContext(AppContext);

  const handleLogout = () => {
    // 1. Clear Local Storage
    localStorage.removeItem("token");
    
    // 2. Update Global State
    if (setIsLoggedin) setIsLoggedin(false);
    if (setUser) setUser(null);

    // 3. Notify and Redirect
    toast.info("Logged out successfully");
    navigate("/login");
  };

  return (
    <div className="space-y-8 max-w-4xl pb-12">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-extrabold text-blue-600 tracking-tight">
          Admin Settings
        </h1>
        <p className="text-gray-500 text-sm">
          Manage your profile, account security, and portal preferences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column: Profile Picture & Basics */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-white/80 backdrop-blur-md border border-gray-200 p-8 rounded-3xl shadow-xl flex flex-col items-center text-center">
            <div className="relative group cursor-pointer">
              <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white text-4xl font-black shadow-2xl">
                A
              </div>
              <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Camera className="text-white" size={24} />
              </div>
            </div>
            <h2 className="mt-4 text-xl font-bold text-gray-800">Admin Boss</h2>
            <p className="text-gray-500 text-sm">Super Administrator</p>
            <button className="mt-6 w-full py-2 px-4 border border-blue-600 text-blue-600 font-bold rounded-xl hover:bg-blue-600 hover:text-white transition-all text-sm">
              Update Photo
            </button>
          </div>
        </div>

        {/* Right Column: Detailed Settings */}
        <div className="md:col-span-2 space-y-6">
          {/* Profile Form */}
          <div className="bg-white/80 backdrop-blur-md border border-gray-200 p-8 rounded-3xl shadow-xl space-y-6">
            <div className="flex items-center gap-2 text-blue-600 font-bold">
              <User size={20} />
              <h3>Personal Information</h3>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase">
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue="Admin Boss"
                  className="w-full bg-gray-50 border border-gray-200 p-3 rounded-2xl outline-none focus:border-blue-500 transition-all"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase">
                  Email Address
                </label>
                <input
                  type="email"
                  defaultValue="admin@lms-portal.com"
                  className="w-full bg-gray-50 border border-gray-200 p-3 rounded-2xl outline-none focus:border-blue-500 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Security Form */}
          <div className="bg-white/80 backdrop-blur-md border border-gray-200 p-8 rounded-3xl shadow-xl space-y-6">
            <div className="flex items-center gap-2 text-indigo-600 font-bold">
              <Lock size={20} />
              <h3>Security & Password</h3>
            </div>

            <div className="space-y-4">
              <input
                type="password"
                placeholder="Current Password"
                className="w-full bg-gray-50 border border-gray-200 p-3 rounded-2xl outline-none focus:border-blue-500 transition-all"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="password"
                  placeholder="New Password"
                  className="w-full bg-gray-50 border border-gray-200 p-3 rounded-2xl outline-none focus:border-blue-500 transition-all"
                />
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  className="w-full bg-gray-50 border border-gray-200 p-3 rounded-2xl outline-none focus:border-blue-500 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Danger Zone / Logout */}
          <div className="bg-red-50/50 backdrop-blur-md border border-red-100 p-8 rounded-3xl shadow-xl space-y-4">
            <div className="flex items-center gap-2 text-red-600 font-bold">
              <AlertTriangle size={20} />
              <h3>Danger Zone</h3>
            </div>
            <div className="flex items-center justify-between p-4 bg-white/50 rounded-2xl border border-red-100">
              <div>
                <p className="font-bold text-gray-800 text-sm">Logout Session</p>
                <p className="text-xs text-gray-500">Sign out of the admin portal</p>
              </div>
              <button 
                onClick={handleLogout}
                className="flex items-center gap-2 bg-red-500 text-white font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-red-500/20 hover:bg-red-600 hover:scale-[1.02] transition-all"
              >
                <LogOut size={18} /> Logout
              </button>
            </div>
          </div>

          {/* Save Button */}
          <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 rounded-2xl shadow-xl shadow-blue-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all">
            <Save size={20} /> Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;