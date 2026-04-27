import React, { useContext, useEffect, useState } from 'react';
import { Trash2, Mail, User, ShieldCheck, Search, Loader2, UserPlus } from 'lucide-react';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const ManageUsers = () => {
  const { backendUrl, token } = useContext(AppContext);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchStudents = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/admin/all-students', {
        headers: { token }
      });
      if (data.success) {
        setStudents(data.students);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const promoteToEducator = async (userId) => {
    if (window.confirm("Are you sure you want to promote this student to an Educator?")) {
      try {
        const { data } = await axios.post(backendUrl + '/api/admin/update-role', 
          { userId, newRole: 'educator' }, 
          { headers: { token } }
        );
        if (data.success) {
          toast.success("User promoted successfully!");
          fetchStudents(); // Refresh the list
        }
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  useEffect(() => {
    if (token) fetchStudents();
  }, [token]);

  // Filter students based on search input
  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    student.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <Loader2 className="animate-spin text-blue-600" size={40} />
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-10">
      {/* Header & Search (Same as before) */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl md:text-3xl font-extrabold text-blue-600 tracking-tight">Manage Students</h1>
          <p className="text-gray-500 text-sm">Total: {students.length} learners</p>
        </div>

        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text"
            placeholder="Search students..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-sm"
          />
        </div>
      </div>

      {/* 📱 MOBILE VIEW: CARD LIST (Hidden on Desktop) */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {filteredStudents.map((student) => (
          <div key={student._id} className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
                {student.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-gray-800 text-lg">{student.name}</p>
                <p className="text-xs text-gray-500">{student.email}</p>
                <p className="text-[10px] text-blue-500 mt-1 font-semibold uppercase">Joined: {new Date(student.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 pt-2 border-t border-gray-50">
              <button 
                onClick={() => promoteToEducator(student._id)}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-indigo-50 text-indigo-600 rounded-xl font-bold text-xs"
              >
                <UserPlus size={16} /> Promote
              </button>
              <a 
                href={`mailto:${student.email}`}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-blue-50 text-blue-600 rounded-xl font-bold text-xs"
              >
                <Mail size={16} /> Email
              </a>
              <button className="p-2.5 bg-red-50 text-red-500 rounded-xl">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 💻 DESKTOP VIEW: TABLE (Hidden on Mobile) */}
      <div className="hidden md:block bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100">
                <th className="p-5 text-xs font-bold text-gray-400 uppercase tracking-widest">Student Info</th>
                <th className="p-5 text-xs font-bold text-gray-400 uppercase tracking-widest">Joined</th>
                <th className="p-5 text-xs font-bold text-gray-400 uppercase tracking-widest text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredStudents.map((student) => (
                <tr key={student._id} className="hover:bg-blue-50/30 transition-colors">
                  <td className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shrink-0">
                        {student.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-gray-800">{student.name}</p>
                        <p className="text-xs text-gray-500">{student.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-5 text-sm text-gray-600">
                    {new Date(student.createdAt).toLocaleDateString()}
                  </td>
                  <td className="p-5">
                    <div className="flex items-center justify-center gap-3">
                      <button onClick={() => promoteToEducator(student._id)} className="p-2 rounded-xl bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all"><UserPlus size={18} /></button>
                      <a href={`mailto:${student.email}`} className="p-2 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-all"><Mail size={18} /></a>
                      <button className="p-2 rounded-xl bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-all"><Trash2 size={18} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredStudents.length === 0 && (
        <div className="p-20 text-center bg-white rounded-3xl border border-dashed border-gray-200 text-gray-400">
          No students found.
        </div>
      )}
    </div>
  );
};

export default ManageUsers;