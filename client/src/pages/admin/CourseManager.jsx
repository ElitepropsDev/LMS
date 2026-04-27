import React, { useContext, useEffect, useState } from 'react';
import { BookOpen, CheckCircle, XCircle, Eye, Trash2, Search, Loader2, User } from 'lucide-react';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const CourseManager = () => {
  const { backendUrl, token, currency } = useContext(AppContext);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchCourses = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/admin/all-courses', {
        headers: { token }
      });
      if (data.success) {
        setCourses(data.courses);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const removeCourse = async (courseId) => {
    if (window.confirm("Are you sure? This will permanently delete this course from the platform.")) {
      try {
        const { data } = await axios.post(backendUrl + '/api/admin/delete-course', 
          { courseId }, 
          { headers: { token } }
        );
        if (data.success) {
          toast.success("Course deleted successfully");
          fetchCourses();
        }
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  useEffect(() => {
    if (token) fetchCourses();
  }, [token]);

  const filteredCourses = courses.filter(course => 
    course.courseTitle.toLowerCase().includes(searchTerm.toLowerCase()) || 
    course.educator?.name.toLowerCase().includes(searchTerm.toLowerCase())
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
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl md:text-3xl font-extrabold text-blue-600 tracking-tight">Course Manager</h1>
          <p className="text-gray-500 text-sm">Managing {courses.length} courses across the platform.</p>
        </div>

        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text"
            placeholder="Search courses or tutors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-sm"
          />
        </div>
      </div>

      {/* 📱 MOBILE VIEW: CARDS */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {filteredCourses.map((course) => (
          <div key={course._id} className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex gap-3">
                <img 
                  src={course.courseThumbnail} 
                  alt="" 
                  className="w-14 h-14 rounded-xl object-cover bg-gray-100"
                />
                <div>
                  <p className="font-bold text-gray-800 leading-tight">{course.courseTitle}</p>
                  <p className="text-xs text-blue-600 font-semibold mt-1">
                    {currency}{course.coursePrice.toLocaleString()}
                  </p>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-lg text-[10px] font-bold uppercase ${course.isPublished ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'}`}>
                {course.isPublished ? 'Live' : 'Draft'}
              </span>
            </div>

            <div className="flex items-center gap-2 text-gray-500 text-xs">
              <User size={14} />
              <span>Tutor: <span className="font-medium text-gray-700">{course.educator?.name || 'Unknown'}</span></span>
            </div>
            
            <div className="flex gap-2 pt-2 border-t border-gray-50">
              <button className="flex-1 flex items-center justify-center gap-2 py-2 bg-blue-50 text-blue-600 rounded-xl font-bold text-xs">
                <Eye size={16} /> View
              </button>
              <button 
                onClick={() => removeCourse(course._id)}
                className="p-2 bg-red-50 text-red-500 rounded-xl"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 💻 DESKTOP VIEW: TABLE */}
      <div className="hidden md:block bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100">
                <th className="p-5 text-xs font-bold text-gray-400 uppercase tracking-widest">Course Detail</th>
                <th className="p-5 text-xs font-bold text-gray-400 uppercase tracking-widest">Educator</th>
                <th className="p-5 text-xs font-bold text-gray-400 uppercase tracking-widest">Price</th>
                <th className="p-5 text-xs font-bold text-gray-400 uppercase tracking-widest text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredCourses.map((course) => (
                <tr key={course._id} className="hover:bg-indigo-50/30 transition-colors group">
                  <td className="p-5">
                    <div className="flex items-center gap-3">
                      <img src={course.courseThumbnail} className="w-12 h-12 rounded-lg object-cover bg-gray-100" />
                      <div>
                        <p className="font-bold text-gray-800">{course.courseTitle}</p>
                        <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded uppercase">
                          {course.isPublished ? 'Published' : 'Pending'}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="p-5 text-sm font-medium text-gray-700">
                    {course.educator?.name}
                    <p className="text-[10px] text-gray-400">{course.educator?.email}</p>
                  </td>
                  <td className="p-5 text-sm font-bold text-blue-600">
                    {currency}{course.coursePrice.toLocaleString()}
                  </td>
                  <td className="p-5">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 rounded-xl bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white transition-all">
                        <Eye size={18} />
                      </button>
                      <button 
                        onClick={() => removeCourse(course._id)}
                        className="p-2 rounded-xl bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-all"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredCourses.length === 0 && (
        <div className="p-20 text-center bg-white rounded-3xl border border-dashed border-gray-200 text-gray-400">
          No courses found.
        </div>
      )}
    </div>
  );
};

export default CourseManager;