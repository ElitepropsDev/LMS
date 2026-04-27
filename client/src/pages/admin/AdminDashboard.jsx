import React, { useContext, useEffect, useState } from 'react';
import { Users, BookOpen, Database, TrendingUp, Loader2 } from 'lucide-react';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const AdminDashboard = () => {
  const { backendUrl, token } = useContext(AppContext);
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchDashboardData = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/admin/dashboard-data', {
        headers: { token }
      });
      if (data.success) {
        setDashboardData(data.stats);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) fetchDashboardData();
  }, [token]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <Loader2 className="animate-spin text-blue-600" size={40} />
      </div>
    );
  }

  return (
    // Added pt-16 on mobile to avoid the floating hamburger button
    <div className="space-y-6 pt-16 md:pt-0 pb-10 px-4 sm:px-6 md:px-0">
      
      {/* Header Section */}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl md:text-3xl font-extrabold text-blue-600 tracking-tight">
          Admin Control Center
        </h1>
        <p className="text-gray-500 text-sm">Overview of your platform's health.</p>
      </div>

      {/* Stats Grid - 1 col on mobile, 2 on tablet, 3 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        
        {/* Total Students Card */}
        <div className="bg-white border border-gray-100 p-5 rounded-2xl shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
            <Users size={24} />
          </div>
          <div>
            <h2 className="text-gray-400 font-bold text-xs uppercase tracking-wider">Students</h2>
            <p className="text-2xl font-black text-gray-800">{dashboardData?.totalStudents || 0}</p>
          </div>
        </div>

        {/* Courses Card */}
        <div className="bg-white border border-gray-100 p-5 rounded-2xl shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
            <BookOpen size={24} />
          </div>
          <div>
            <h2 className="text-gray-400 font-bold text-xs uppercase tracking-wider">Courses</h2>
            <p className="text-2xl font-black text-gray-800">{dashboardData?.totalCourses || 0}</p>
          </div>
        </div>

        {/* Educators Card */}
        <div className="bg-white border border-gray-100 p-5 rounded-2xl shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-600 shrink-0">
            <Database size={24} />
          </div>
          <div>
            <h2 className="text-gray-400 font-bold text-xs uppercase tracking-wider">Educators</h2>
            <p className="text-2xl font-black text-gray-800">{dashboardData?.totalEducators || 0}</p>
          </div>
        </div>
      </div>

      {/* Activity Banner */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-2xl shadow-lg text-white">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-3">
            <TrendingUp className="text-blue-200" />
            <div>
              <p className="font-bold">Recent Activity</p>
              <p className="text-sm text-blue-100">{dashboardData?.recentUsers?.length || 0} new signups recently.</p>
            </div>
          </div>
          <button 
            onClick={fetchDashboardData}
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-2 rounded-xl font-semibold text-sm transition-all"
          >
            Refresh
          </button>
        </div>
      </div>

      {/* Recent Users Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-5 border-b border-gray-100">
          <h2 className="font-bold text-gray-800 text-lg">New Members</h2>
        </div>
        
        {/* Table Wrapper for Horizontal Scroll */}
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead className="bg-gray-50/50 text-gray-400 text-[10px] uppercase font-bold tracking-widest">
              <tr>
                <th className="px-6 py-4">Full Name</th>
                <th className="px-6 py-4">Email Address</th>
                <th className="px-6 py-4 text-center">Account Role</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {dashboardData?.recentUsers?.map((user, index) => (
                <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-700">{user.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{user.email}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-tight uppercase ${
                      user.role === 'admin' ? 'bg-red-50 text-red-600' : 
                      user.role === 'educator' ? 'bg-blue-50 text-blue-600' : 
                      'bg-emerald-50 text-emerald-600'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;