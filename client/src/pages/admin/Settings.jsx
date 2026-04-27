import React, { useState, useContext, useEffect } from "react";
import { User, Lock, Camera, Save, LogOut, AlertTriangle, Loader2 } from "lucide-react";
import { AppContext } from "../../context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";

const Settings = () => {
  const { navigate, setIsLoggedin, setUser, backendUrl, token, userData, loadUserProfileData } = useContext(AppContext);

  // Form States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(false);
  const [loading, setLoading] = useState(false);

  // Initialize data
  useEffect(() => {
    if (userData) {
      setName(userData.name);
      setEmail(userData.email);
    }
  }, [userData]);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('name', name);
      if (image) formData.append('image', image);

      const { data } = await axios.post(backendUrl + '/api/user/update-profile', formData, { headers: { token } });

      if (data.success) {
        toast.success("Profile Updated!");
        await loadUserProfileData(); // Refresh global user state
        setImage(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedin(false);
    setUser(null);
    toast.info("Logged out successfully");
    navigate("/login");
  };

  return (
    <div className="space-y-8 max-w-4xl pb-12">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-extrabold text-blue-600 tracking-tight">Admin Settings</h1>
        <p className="text-gray-500 text-sm">Manage your profile and account security.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column: Profile Picture */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-white border border-gray-200 p-8 rounded-3xl shadow-xl flex flex-col items-center text-center">
            <label htmlFor="image" className="relative group cursor-pointer">
              {image ? (
                <img src={URL.createObjectURL(image)} className="w-32 h-32 rounded-full object-cover shadow-2xl" alt="" />
              ) : userData?.image ? (
                <img src={userData.image} className="w-32 h-32 rounded-full object-cover shadow-2xl" alt="" />
              ) : (
                <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white text-4xl font-black">
                  {userData?.name?.charAt(0) || "A"}
                </div>
              )}
              <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Camera className="text-white" size={24} />
              </div>
              <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden />
            </label>
            <h2 className="mt-4 text-xl font-bold text-gray-800">{userData?.name}</h2>
            <p className="text-gray-500 text-sm capitalize">{userData?.role} Administrator</p>
          </div>
        </div>

        {/* Right Column: Detailed Settings */}
        <form onSubmit={handleUpdateProfile} className="md:col-span-2 space-y-6">
          <div className="bg-white border border-gray-200 p-8 rounded-3xl shadow-xl space-y-6">
            <div className="flex items-center gap-2 text-blue-600 font-bold">
              <User size={20} />
              <h3>Personal Information</h3>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 p-3 rounded-2xl outline-none focus:border-blue-500 transition-all"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase">Email Address (Read-only)</label>
                <input
                  type="email"
                  value={email}
                  readOnly
                  className="w-full bg-gray-100 border border-gray-200 p-3 rounded-2xl outline-none cursor-not-allowed"
                />
              </div>
            </div>
          </div>

          {/* Logout Zone */}
          <div className="bg-red-50/50 border border-red-100 p-6 rounded-3xl space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-gray-800 text-sm">Logout Session</p>
                <p className="text-xs text-gray-500">Exit your current admin session</p>
              </div>
              <button 
                type="button"
                onClick={handleLogout}
                className="flex items-center gap-2 bg-red-500 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-red-600 transition-all text-sm"
              >
                <LogOut size={18} /> Logout
              </button>
            </div>
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 rounded-2xl shadow-xl shadow-blue-500/20 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 transition-all"
          >
            {loading ? <Loader2 className="animate-spin" /> : <Save size={20} />}
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;